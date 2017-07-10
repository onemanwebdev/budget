<?php
    //$get_request; //complete request form user
    // AND mdo.mdo_docdate >= $d1 AND mdo.mdo_docdate <= $d2
    /* Params to GET from API
    $year           //year from date of invoce select           - format YYYY or string 'ALL'
    $month          //month from date of create date            - format MM or string 'ALL'
    $isPaid         //bool if invoice is payd                   - [string 'true' or string 'false']
    $type           //info if invoice is income or expanse      - [string 'income' or string 'expense']
    $contributor    //contributor name                          - [format 'string_name']
    $document_nr    //document number                           - [format 'string_number']
    */
 ?>
<?php
    /** RECIVE REQUEST **/
    switch ( $_SERVER['REQUEST_METHOD'] ) {
        case 'GET': $request = $_GET; break;
        case 'POST': $request = $_POST; break;
        default: $request = null;
    }

    /** PARSE REQUEST **/
    //compiliing date
    $month = $_GET['m'];
    $year = $_GET['y'];
    $d1 = $year . $month . '01';
    $d2 = intval( $d1 ) - 1 + date( 't' , intval( $d1 ) );

    /** QUERIES **/
    //main table
    $query = "
        SELECT *
        FROM main_doc AS mdo, obj_coop AS oco, const_vat_percent AS cvp, const_payment_type AS cpt, const_pos_type AS cps, const_doc_form AS cdf
        WHERE mdo.mdo_coop_id = oco.oco_id AND mdo.mdo_vat_percent_id = cvp.cvp_id AND mdo.mdo_pos_type_id = cps.cps_id AND mdo.mdo_payment_type_id = cpt.cpt_id AND mdo.mdo_doc_form_id = cdf.cdf_id AND mdo.mdo_docdate >= $d1 AND mdo.mdo_docdate <= $d2
        ORDER BY mdo.mdo_docdate
    ";

    /** CONFIG DO BAZY DANYCH **/
    $db_serwer = "localhost"; //adres serwera
    $db_user = "root"; //nazwa użytkownikA
    $db_pass = ""; //hasło
    $db_name = "invoice_api"; //nazwa bazy danych
    $db_charset = 'utf8';

    /** POŁĄCZENIE **/
    $db_conn = new mysqli( $db_serwer, $db_user, $db_pass, $db_name );

    /** SET CHARSET **/
    $db_conn->query( "SET CHARSET" . $db_charset );

    /** POBRANIE DANYCH **/
    if($request !== null) {
        $result = $db_conn->query( $query );
        $result_quant = $result->num_rows;
        $db_conn->close();
    }

    /** FUNKCJE **/
    function filter_out_id( $elem ) {
        if( preg_match( '/_id$/', $elem) === 0 ) {
            return $elem;
        }
    }

    /** ZWRACANE WARTOŚCI **/
    $replace_array = array(
        "mdo_docdate" => "documentDate",
        "mdo_docnr" => "documentNr",
        "mdo_duedate" => "dueDate",
        "mdo_paymentdate" => "paymentDate",
        "mdo_item" => "item",
        "mdo_net" => "ammountNet",
        "mdo_vat" => "ammountVat",
        "mdo_gross" => "ammountGross",
        "oco_name" => "cooperatorName",
        "oco_shortname" => "cooperatorShortName",
        "oco_nip" => "cooperatorNIP",
        "oco_address" => "cooperatorAddress",
        "oco_vatpay" => "isVatPayer",
        "cvp_percent" => "vatPercent",
        "cpt_paytype" => "payType",
        "cps_type" => "type",
        "cdf_form" => "documentForm"
    );

    /** PRZETWARZANIE DANYCH **/
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
    echo json_encode( $api_send );
?>
