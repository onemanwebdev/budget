<?php
    class DataSQL {
        /* Placeholder for connect object */
        private $connect = "";
        /* Placeholder fot result of query */
        private $result = "";
        /* Nr of returned row */
        private $rows_num = "";
        /* Actions */
        private $actions = [];

        /* Constructor */
        public function __construct() {
            require_once ( 'queries.class.php' );
            require_once ( 'actionTypes.php' );
            $this->actions = $action;
        }

        /* Establish connection & set charset to db */
        private function connect() {
            require_once ( 'dbconfig.php' );
            $this->connect = new mysqli( $db_serwer, $db_user, $db_pass, $db_name );
            $this->connect->query( "SET CHARSET " . $db_charset );
        }

        /* Function that converts assoc array of input to string (for query) */
        private function convertInput( $input, $array ) {
            require ( 'sqlTableRowsArray.php' );
            foreach ( $input as $k => $v ) {
                $k = ${$array}[$k];
                isset( $string ) ? $string .= " OR $k = '$v'" : $string = "$k = '$v'";
            }
            return $string;
        }

        /* Function that convert accoc array of input to string with only KEYS */
        private function convertInputToKeys( $input, $array ) {
            require ( 'sqlTableRowsArray.php' );
            foreach ( $input as $k => $v ) {
                $k = ${$array}[$k];
                isset( $string ) ? $string .= ", $k" : $string = "$k";
            }
            return $string;
        }

        /* Function that convert accoc array of input to string with only VALUES */
        private function convertInputToValues( $input, $array ) {
            require ( 'sqlTableRowsArray.php' );
            foreach ( $input as $k => $v ) {
                isset( $string ) ? $string .= ", '$v'" : $string = "'$v'";
            }
            return $string;
        }

        /* Check if data is in table */
        private function checkQuery( $query ) {
            if ( $query->num_rows !== 0 ) return true;
            return false;
        }

        /* Function create data as array to pass as JSON */
        private function createJSON() {
            require ( 'sqlTableRowsArray.php' );
            $rawData = [];
            $json_elem = [];
            $json = [];
            for ( $i = 0; $i < $this->rows_num; $i++ ) {
                array_push( $rawData, $this->result->fetch_assoc());
            }
            foreach ( $rawData as $data ) {
                foreach ( $data as $key => $value ) {
                    $json_elem[ $SQLTabRowsArray[ $key ]] = $value;
                }
                array_push( $json, $json_elem );
            }
            return $json;
        }

        /* Process 'GET' query */
        public function getData( $action ) {
            $this->connect();
            switch ( $action ) {
                case 'getCooperators':
                    $this->result = $this->connect->query( Queries::get_all_coop_query() );
                    $this->rows_num = $this->result->num_rows;
                    break;
            }
            $this->connect->close();
            return $this->createJSON();
        }

        /* Process 'POST' query */
        public function postData( $action, $args ) {
            $this->connect();
            switch ( $action ) {
                case 'postCooperators':
                    $compares = $this->convertInput( $args, $this->actions[$action]['sqlName'] );
                    $check = $this->checkQuery( $this->connect->query( Queries::check_exist_coop_query( $compares ) ) );
                    if ( !$check ) {
                        $keys = $this->convertInputToKeys( $args, $this->actions[$action]['sqlName'] );
                        $values = $this->convertInputToValues( $args, $this->actions[$action]['sqlName'] );
                        $this->result = $this->connect->query( Queries::post_new_coop_query( $keys, $values ) ) ? $response = 1: $respons = 0;
                    }
            }
            $this->connect->close();
            return $response;
        }
    }
?>
