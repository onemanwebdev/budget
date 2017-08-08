<?php
    /* Version v1.0 of BudgetAPI */

    // Fixing origin name
    if ( !array_key_exists( 'HTTP_ORIGIN', $_SERVER )) {
        $_SERVER['HTTP_ORIGIN'] = $_SERVER['SERVER_NAME'];
    }

    // Run API
    require_once ( 'api.class.php' );
    $api = new API( $_REQUEST['request'], $_SERVER['HTTP_ORIGIN'] );
    echo $api->processAPI();
?>
