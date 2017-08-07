<?php
    /***
        Version of CORE: v1.0
        Current version of API v1.0
    ***/

    abstract class Core {
        /* HTTP methods: GET, POST, PUT, DELETE */
        protected $method = "";
        /* Endpoint */
        protected $endpoint = "";
        /* Additional arguments */
        protected $args = [];
        /* Complete parsed request */
        protected $request = [];
        /* Parsed data from POST */
        protected $input = null;

        /* Constructor */
        protected function __construct( $request ) {
            // Headers
            header( "Access-Control-Allow-Origin: *" );
            header( "Access-Control-Allow-Methods: *" );
            header( "Content-Type: application/json" );

            // Set endpoint & args
            $this->args = explode( '/', rtrim( $request ));
            $this->endpoint = array_shift( $this->args );

            // Get method from request
            $this->method = $_SERVER['REQUEST_METHOD'];
            if ( $this->method == 'POST' && array_key_exists( 'HTTP_X_HTTP_METHOD', $_SERVER )) {
                switch ( $_SERVER['HTTP_X_HTTP_METHOD'] ) {
                    case 'DELETE': $this->method = 'DELETE'; break;
                    case 'PUT': $this->method = 'PUT'; break;
                    default: throw new Exception( "Unexpected Header" );
                }
            }

            // Getting sanitazed request from tags & create array from methods
            switch ( $this->method ) {
                case 'DELETE':
                case 'POST':
                case 'PUT':
                    $this->request = $this->cleanInput( $_POST ); break;
                    $this->input = file_get_contents( 'php://input' ); break;
                case 'GET':
                    $this->request = $this->cleanInput( $_GET ); break;
                default:
                    $this->response('Invalid Method', 405); break;
            }

            print_r ($this->request);
        }



        /* Main open method returning response*/
        public function processAPI() {
            // Check if given endpoint exist
            if ( !method_exists( $this, $this->endpoint )) {
                return $this->response( "No endpoint: $this->endpoint", 404 );
            }
            // Check if method is allowed for endpoint
            if ( !$this->allowedMethod( $this->endpoint, $this->method )) {
                return $this->response( "Method $this->method is not allowed for $this->endpoint endpoint", 405 );
            }
            return $this->response( $this->{$this->endpoint}() ); //return response method after calling endpoint method
        }

        /* Response - return header & json */
        private function response( $data, $code = 200 ) {
            header( "HTTP/1.1 $code " . $this->requestStatus( $code ));
            return json_encode( $data, JSON_NUMERIC_CHECK | JSON_PRESERVE_ZERO_FRACTION );
        }

        /* Sanitize params */
        private function cleanInput( $data ) {
            $clean_input = Array();
            if ( is_array( $data )) {
                foreach ( $data as $key => $value ) {
                    $clean_input[$key] = $this->cleanInput( $value );
                }
            } else {
                $clean_input = trim( strip_tags( $data ));
            }
            return $clean_input;
        }

        /* Retrun request status coresponding to given code */
        private function requestStatus( $code ) {
            $status = array(
                200 => 'OK',
                404 => 'Not found',
                405 => 'Method Not Allowed',
                500 => 'Internal Server Error'
            );
            return $status[$code] ? $status[$code] : $status[500];
        }
    }//end of class
?>
