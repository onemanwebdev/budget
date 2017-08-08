<?php
    class DataSQL {
        /* Placeholder for connect object */
        private $connect = "";
        /* Placeholder fot result of query */
        private $result = "";
        /* Nr of returned row */
        private $rows_num = "";

        /* Constructor */
        public function __construct() {
            require_once ( 'queries.class.php' );
        }

        /* Establish connection & set charset to db */
        private function connect() {
            require_once ( 'dbconfig.php' );
            $this->connect = new mysqli( $db_serwer, $db_user, $db_pass, $db_name );
            $this->connect->query( "SET CHARSET " . $db_charset );
        }

        /* Function create data as array to pass as JSON */
        private function createJSON() {
            require_once ( 'sqlTableRowsArray.php' );
            $rawdata = [];
            for ( $i = 0; $i < $this->rows_num; $i++ ) {
                array_push( $rawdata, $this->result->fetch_assoc());
            }
            $json_elem = [];
            $json = [];
            foreach( $rawdata as $data ) {
                foreach( $data as $key=>$value ) {
                    $json_elem[ $sqlTRarray[ $key ]] = $value;
                }
                array_push( $json, $json_elem );
            }
            return $json;
        }

        /* Process 'GET' query */
        public function getData( $task, $params ) {
            $this->connect();
            switch ( $task ) {
                case 'getCooperators':
                    $this->result = $this->connect->query( Queries::get_all_coop_query( $params ));
                    $this->rows_num = $this->result->num_rows;
                    break;
            }
            $this->connect->close();
            return $this->createJSON();
        }
    }
?>
