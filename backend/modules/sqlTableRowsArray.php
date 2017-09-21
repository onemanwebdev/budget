<?php
    $sqlPaymentTypeArray = array(
        "payTypeID" => "cpt_id",
        "payTypeName" => "cpt_name"
    );

    $sqlBaseArray = array(
        "baseID" => "mba_id",
        "baseName" => "mba_name",
        "currentTempID" => "mba_cur_temp_id"
    );

    $sqlPaymentsArray = array(
        "paymentID" => "mpa_id",
        "templateID" => "mpa_mte_id",
        "paymentDate" => "mpa_date",
        "paymentAmount" => "mpa_amount",
        "paymentNotice" => "mpa_notice"
    );

    $sqlTemplatesArray = array(
        "templateID" => "mte_id",
        "baseID" => "mte_mba_id",
        "prevTemplateID" => "mte_prev_temp_id",
        "coopID" => "mte_coop_id",
        "referenceAmount" => "mte_amount",
        "referenceDate" => "mte_refdate",
        "dateFrom" => "mte_datefrom",
        "dateTo" => "mte_dateto",
        "accountNr" => "mte_account",
        "payTypeID" => "mte_cpt_id",
        "templateNotice" => "mte_notice"
    );

    $sqlCooperatorsArray = array(
        "coopID" => "oco_id",
        "coopName" => "oco_name",
        "coopShortName" => "oco_shortname",
        "coopZIP" => "oco_zip",
        "coopCity" => "oco_city",
        "coopAddress" => "oco_address"
    );

    /* Revesed array {key => value} -> {value => key} */
    $SQLTabRowsArray = array_merge(
        array_flip( $sqlPaymentTypeArray ),
        array_flip( $sqlBaseArray ),
        array_flip( $sqlPaymentsArray ),
        array_flip( $sqlTemplatesArray ),
        array_flip( $sqlCooperatorsArray )
    );
?>
