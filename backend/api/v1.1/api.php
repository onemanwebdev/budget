<?php
    /* Version v1.1 of BudgetAPI */
    //header( 'Access-Control-Allow-Origin: *' );
    //header( 'Access-Control-Allow-Headers: access-control-allow-origin, content-type' );
    //header( 'Access-Control-Allow-Methods: GET' );
    //header( 'Content-Type: application/json' );
    //header( 'Origin: http://localhost:8080' );

    /* Fixing origin name
    if ( !array_key_exists( 'HTTP_ORIGIN', $_SERVER )) {
        $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
    }
    */

    // Run API
    require_once ( 'api.class.php' );
    $api = new API( $_REQUEST['request'], $_SERVER['HTTP_ORIGIN'] );
    echo $api->runAPI();
    */
?>
