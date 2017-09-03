<?php
    /* Version v1.0 of BudgetAPI */
    header( 'Access-Control-Allow-Origin: *' );
    header( 'Access-Control-Allow-Headers: access-control-allow-origin, content-type' );
    //header( 'Access-Control-Allow-Methods: GET' );
    //header( 'Content-Type: application/json' );
    //header( 'Origin: http://localhost:8080' );

    /*
    // Fixing origin name
    if ( !array_key_exists( 'HTTP_ORIGIN', $_SERVER )) {
        $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
    }

    // Run API
    require_once ( 'api.class.php' );
    $api = new API( $_REQUEST['request'], $_SERVER['HTTP_ORIGIN'] );
    echo $api->processAPI();
    */

    if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
        echo json_encode( array( $_POST, $_GET ));
        echo file_get_contents( 'php://input' );
    } else {
        $get = array(
            array(
                "coopID" => 1,
                "name" => "Wspólnota Turkusowa 1",
                "shortName" => "Turkusowa",
                "zip" => "81-586",
                "city" => "Gdynia",
                "address" => "ul. Turkusowa 1"
            )
        );
        echo json_encode( $get );
    }
?>
