<?php
    final class Response {
        private $connect;
        private $result;
        private $result_quant = 0;

        public $test;

        public function __construct() {
            include_once('class.queries.php'); //include queries {class}
            include_once('class.prepare.php'); //include static function {class}
        }

        private function connect() {
            include_once('dbconfig.php'); //include database
            $this->connect = new mysqli( $db_serwer, $db_user, $db_pass, $db_name ); //connect
            $this->connect->query( "SET CHARSET " . $db_charset ); //setcharset
        }

        private function close() {
            $this->connect->close();
        }

        public function get( $type, $request ) {
            switch( $type ) {
                case 'coop':
                    $query = Queries::get_all_coop_query();
                    $this->connect();
                    $this->result = $this->connect->query( $query );
                    $this->close();
                    break;
            }
            $this->result_quant = $this->result->num_rows;
        }

        public function set( $type, $request ) {
            parse_str( $request, $data );
            switch( $type ) {
                case 'coop':
                    $values = $data['name'] .",". $date['shortName'] .",". $date['zip'] .",". $date['city'] .",". $date['address'];
                    $query = $this->queryString( 'post_new_coop_query' );
                    $this->connect();
                    $this->result = $this->connect->query( $query );
                    $this->close();
                    break;
            }
        }

        public function edit( $type, $request ) {
            parse_str( $request, $data );
            switch( $type ) {
                case 'coop':
                    include('./dbcolumns.php');
                    function merge( $array_value ) {
                        global $data, $columns, $type;
                        //static $values;
                        if( empty( $values ) ) {
                            $values = $columns[$type][$array_value] . "=" . $data[$array_value];
                        } else {
                            $values .= "," . $columns[$type][$array_value] . "=" . $data[$array_value];
                        }
                        return $values;
                    }
                    $keys = array_keys( $data ); //tablica z kluczami
                    $values = array_reduce( $keys, 'merge' ); //tablica z porównaniem SET
                    $compare = $data['id']; //klucz do wyboru rzędu
                    $query = $this->queryString( 'update_coop_query' );
                    $this->connect();
                    $this->result = $this->connect->query( $query );
                    $this->close();
                    break;
            }
        }

        public function delete( $type, $request ) {

        }

        /*
         * For 'GET' query, parse respond creating array instead of returned rows
         */
        private function parseGet() {
            $array = array();
            for( $i = 0; $i < $this->result_quant; $i++ ) {
                array_push( $array, $this->result->fetch_assoc() );
            }
            return $array;
        }

        /*
         * Depends on type of query prepare data for prase to JSON
         */
        public function data( $request_type ) {
            switch( $request_type ) {
                case 'get':
                    gettype( $this->result ) === "object" ? $data = $this->parseGet() : false;
                    $data = JSON_Prepare::getJSON( $data );
                    break;
            }
            return $data;
        }
    }

?>
