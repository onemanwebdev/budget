<?php
    /***
        Version of API: v1.0
    ***/

    require_once ( 'core.class.php' );
    class API extends Core {
        private $origin = 'http://localhost:8080';
        private $data = null;

        /* Constructor */
        public function __construct( $request, $origin ) {
            parent::__construct( $request );

            if ( !$this->controlOrigin( $origin ) ) {
                throw new Exception ( 'Invalid Origin' );
            } else {
                require_once ( '../../modules/sqldata.class.php');
                $this->data = new DataSQL();
            }
        }

        /* Compare proviaded and allowed origin */
        private function controlOrigin( $origin ) {
            if ( $origin == $this->origin ) { return true; }
            return false;
        }

        /* Check if requested method is allowed for this endpoint */
        protected function allowedMethod( $endpoint, $method ) {
            switch ( $endpoint ) {
                case 'base':        return in_array( $method, ['GET', 'POST'] );                   break;
                case 'cooperators': return in_array( $method, ['GET', 'POST', 'PUT'] );            break;
                case 'maintable':   return in_array( $method, ['GET', 'POST', 'PUT', 'DELETE'] );  break;
                case 'payment':     return in_array( $method, ['POST', 'PUT', 'DELETE'] );         break;
                case 'paytype':     return in_array( $method, ['GET', 'POST', 'PUT'] );            break;
                case 'template':    return in_array( $method, ['GET', 'POST', 'PUT'] );            break;
                default:            return false;
            }
        }

        /* ENDPOINTS */
        protected function cooperators() {
            switch( $this->method ) {
                case 'GET': return $this->data->getData( 'getCooperators', $this->request ); break;
                case 'POST': 
            }
        }
    }
?>
