<?php
    abstract class API {
        /* HTTP method: GET, POST, PUT, DELETE */
        protected $method = '';
        /* Requested model in the URI */
        protected $endpoint = "";
        /* Some additional descriptor */
        protected $verb = "";
        /* Arguments */
        protected $args = Array();
        /* Store for INPUT */
        protected $file = null;

        /* Constructor */
        public function __construct( $request ) {
            header( "Access-Control-Allow-Origin: *" );
            header( "Access-Control-Allow-Methods: *" );
            header( "Content-Type: application/json" );

            $this->args = explode( '/', rtrim( $request, '/' ));
            $this->endpoint = array_shift( $this->args );
            if ( array_key_exists( 0, $this->args ) && !is_numeric( $this->args[0] )) {
                $this->verb = array_shift( $this->args );
            }

            $this->method = $_SERVER['REQUEST_METHOD'];
            if ( $this->method == 'POST' && array_key_exists( 'HTTP_X_HTTP_METHOD', $_SERVER )) {
                switch ( $_SERVER['HTTP_X_HTTP_METHOD'] ) {
                    case 'DELETE': $this->method = 'DELETE'; break;
                    case 'PUT': $this->method = 'PUT'; break;
                    default: throw new Exception("Unexpected Header");
                }
            }

            switch ( $this->method ) {
                case 'DELETE':
                case 'POST':
                    $this->request = $this->_cleanInputs( $_POST ); break;
                case 'GET':
                    $this->request = $this->_cleanInputs( $_GET ); break;
                case 'PUT':
                    $this->request = $this->_cleanInputs( $_GET );
                    $this->file = file_get_contents( 'php://input' ); break;
                default:
                    $this->_response('Invalid Method', 405); break;
            }
        }

        public function processAPI() {
            if ( method_exists( $this, $this->endpoint )) {
                return $this->_response( $this->{$this->endpoint}( $this->args ));
            }
            return $this->_response( "No endpoint: $this->endpoint", 404 );
        }

        private function _response( $data, $status = 200 ) {
            header( "HTTP/1.1 " . $status . " " .$this->_requestStatus( $status ));
            return json_encode( $data );
        }

        private function _cleanInputs( $data ) {
            $clean_input = Array();
            if ( is_array( $data )) {
                foreach ( $data as $key => $value ) {
                    $clean_input[$key] = $this->_cleanInputs( $value );
                }
            } else {
                $clean_input = trim( strip_tags( $data ));
            }
            return $clean_input;
        }

        private function _requestStatus( $code ) {
            $status = array(
                200 => 'OK',
                404 => 'Not found',
                405 => 'Method Not Allowed',
                500 => 'Internal Server Error'
            )
            return $status[$code] ? $status[$code] : $status[500];
        }
    } //end of class
?>
