<?php
    header('Access-Control-Allow-Origin: http://localhost:8080');
    header('Access-Control-Allow-Headers: access-control-allow-origin, content-type');
    header('Access-Control-Allow-Methods: GET, OPTIONS, POST');
    header('Content-Type: application/json, text/html, text/plain, */*');
?>
<?php
    //*** RECIVE REQUEST ***//
    switch ( $_SERVER['REQUEST_METHOD'] ) {
        case 'GET': $request = $_GET; break;
        case 'POST': $request = $_POST; break;
        case 'POST': $request = $_POST; break;
        case 'POST': $request = $_POST; break;
        default: $request = null;
    }
    $type = gettype( $request );
    if( $type === "array") { $data = json_decode(file_get_contents('php://input'), true); print_r( $data ); }
    if( $type === "string") { echo $request; }
    if( $type === "null") { echo "NULL"; }
    exit();

    //*** ROUTING REQUEST ***//
    if ( $request ) {
        include( './includes/class.response.php' );
        $response = new Response();
        switch( $_REQUEST['type'] ) {
            case 'setCoop':       $response->post( 'coop', $request ); break; //OK
            case 'editCoop':      $response->edit( 'coop', $request ); break; //OK
            case 'setBase':       $response->post( 'base', $request ); break;
            case 'editTemplate':  $response->edit( 'template', $request ); break;
            case 'setPayment':    $response->post( 'payment', $request ); break;
            case 'editPayment':   $response->edit( 'payment', $request ); break;
            case 'deletePayment': $response->delete( 'payment', $request ); break;
            case 'getCoop':       $response->get( 'coop', $request ); break; //OK
            case 'getBase':       $response->get( 'base', $request ); break;
            case 'getMainTable':  $response->get( 'main', $request ); break;
        }
    }

    //*** PREPARE JASON ***//
    echo json_encode( $response->data( 'get' ), JSON_NUMERIC_CHECK | JSON_PRESERVE_ZERO_FRACTION );
















    /*
    //*** PARSE REQUEST ***/ /*
        //getting vars
    $month = $_GET['m'];
    $year = $_GET['y'];
    $day = $_GET['d'] || '01';

        //creating first and last day on selected period
    $d1 = $year . $month . $day; //wybrany dzień okresu lub pierwszy dzień miesiąca
    if ( $day === '01' ) {
        $d2 = intval( $d1 ) + date( 't' , intval( $d1 ) ) - 1; //ostatni dzień miesiąca
    } elseif ( $month === '12' ) {
        $d2 = intval( $d1 ) + 8899; //1.year: +10.000, 11.months - 1.100, 1.day -1
    } else {
        $d2 = intval( $d1 ) + 99; //1.month +100, 1.day -1
    }












    /** FUNKCJE **/
    function filter_out_id( $elem ) {
        if( preg_match( '/_id$/', $elem) === 0 ) {
            return $elem;
        }
    };

    /** PRZETWARZANIE DANYCH **/ /*
    $rows = $result->fetch_assoc();
    $row_keys = array_keys( $rows );
    $row_filtered_keys = array_filter( $row_keys, 'filter_out_id' );
    $keys_array = array_values ( $row_filtered_keys );
    $keys_quant = count( $keys_array );
    $keys = [];
    for( $h = 0; $h < $keys_quant ; $h++ ) {
        array_push( $keys, $replace_array[ $keys_array[ $h ] ] );
    }
    $api_send = [];
    for( $i = 0; $i < count( $result_quant ); $i++ ) {
        $json_array = [];
        for( $j = 0; $j < $keys_quant; $j++ ) {
            array_push( $json_array, $rows[ $keys_array[ $j ] ] );
        }
        $ready_array = array_combine( $keys, $json_array );
        array_push( $api_send, $ready_array );
    }
    echo json_encode( $api_send );*/
?>
