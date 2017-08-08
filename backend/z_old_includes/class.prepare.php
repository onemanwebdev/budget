<?php
    final class JSON_Prepare {
        public static function getJSON( $datarow ) {
            $array = array(
                "oco_id" => "coopID",
                "oco_name" => "name",
                "oco_shortname" => "shortName",
                "oco_zip" => "zip",
                "oco_city" => "city",
                "oco_address" => "address"
            );
            $json_elem = [];
            $json = [];
            foreach( $datarow as $data ) {
                foreach( $data as $key=>$value ) {
                    $json_elem[ $array[ $key ]] = $value;
                }
                array_push( $json, $json_elem );
            }
            return $json;
        }

    }
?>
