<?php
class Queries {
        /* CHECK IF COOPERATOR EXIST */
        public static function check_exist_coop_query( $compares ) {
            $query = "SELECT * FROM obj_coop WHERE $compares";
            echo($query.'<br>');
            return $query;
        }

        /* NEW COOPERATOR */
        public static function post_new_coop_query( $keys, $values ) {
            $query = "INSERT INTO obj_coop ($keys)
                      VALUES ($values)";
            return $query;
        }

        /* GET ALL COOPERATORS */
        public static function get_all_coop_query() {
            $query = "SELECT * FROM obj_coop ORDER BY oco_id";
            return $query;
        }

        /* UPDATE COOPERATOR */
        public static function update_coop_query( $values, $id ) {
            $query = "UPDATE obj_coop SET $values WHERE oco_id = $id";
            return $query;
        }

        /* NEW PAYMANT TYPE */
        public static function post_new_payment_type_query( $value ) {
            $query = "INSERT INTO const_payment_type (cpt_name) VALUES ($value)";
            return $query;
        }

        /* NEW BASE & FIRST RELEASE @those two have to be set together */
            //insert new name
        public static function post_new_base_query( $value ) {
            $query = "INSERT INTO main_base (mba_name) VALUES ($value)";
            return $query;
        }
            //get base id
        public static function get_base_id_query( $compare) {
            $query = "SELECT mba_id FROM main_base WHERE mba_name = $compare";
            return $query;
        }
            //set first template for new base name
        public static function post_new_template_query( $values ) {
            $query = "INSERT INTO main_template (mte_mba_id, mte_coop_id, mte_amount, mte_refdate, mte_datefrom, mte_dateto, mte_account, mte_cpt_id, mte_notice)
                      VALUES ($values)";
            return $query;
        }
            //get new template id
        public static function get_new_template_id_query( $compare ) {
            $query = "SELECT mte_id FROM main_template WHERE mte_mba_id = $compare";
            return $query;
        }
            //finally set to base current id of new template
        public static function update_base_with_current_temp_id_query( $value, $compare ) {
            $query = "UPDATE main_base SET mba_cur_temp_id = $value WHERE mba_id = $compare";
            return $query;
        }

        /* CREATE NEW INSTANCE OF TEMPLATE */
            //get current temp. id from base
        public static function get_current_template_id_query( $compare ) {
            $query = "SELECT mba_cur_temp_id FROM main_base WHERE mba_id = $compare";
            return $query;
        }
            //copy current template
        public static function get_current_template_data_query( $compare ) {
            $query = "SELECT * FROM main_template WHERE mte_id = $compare";
            return $query;
        }
            //insert copied date with changed values
        public static function post_copied_template_query( $values ) {
            $query = "INSERT INTO main_template (mte_mba_id, mte_prev_temp_id, mte_coop_id, mte_amount, mte_refdate, mte_datefrom, mte_dateto, mte_account, mte_cpt_id, mte_notice)
                      VALUES ($values)";
            return $query;
        }
            //@if mte_datefrom has changed previous template should also be updated
        public static function update_previous_template_dateto_query( $value, $compare ) {
            $query = "UPDATE main_template SET mte_dateto = $value WHERE mte_id = $value";
            return $query;
        }
            //get the id of fresh template
        public static function get_fresh_template_id_query( $from, $to ) {
            $query = "SELECT mte_id FROM main_template WHERE mte_datefrom = $from AND mte_dateto = $to";
            return $query;
        }
            //set to base current id of template
        public static function update_base_with_fresh_temp_id_query( $value, $compare ) {
            $query = "UPDATE main_base SET mba_cur_temp_id = $value WHERE mba_id = $compare";
            return $query;
        }

        /* INSERT PAYMENT (HISTORY) DATA */
        public static function post_payment_query( $values ) {
            $query = "INSERT INTO main_payment(mpa_mte_id, mpa_date, mpa_amount, mpa_notice)
                      VALUES ($values)";
            return $query;
        }

        /* GET PAYMENT (HISTORY) DATA */
        //together with template (release table)
        public static function get_payment_query( $from, $to ) {
            $query = "SELECT * FROM main_payment WHERE mpa_date BETWEEN $from AND $to";
            return $query;
        }

        public static function get_template_query( $from, $to ) {
            $query = "SELECT *
                      FROM main_template AS mte, main_base AS mba, const_payment_type AS cpt, obj_coop AS oco
                      WHERE mte.mte_mba_id = mba.mba_id AND mte.mte_cpt_id = cpt.cpt_id AND mte.mte_oco_id = oco.oco_id AND mte.mte_datefrom <= $to AND mte.mte_dateto >= $form
                      ORDER BY mte.mte_refdate";
            return $query;
        }

        /* UPDATE TEMPLATE @watch out when change date - all payment should be on template after change */
            //get dates from payment on updated template
        public static function get_template_id_from_payment_query( $compare ) {
            $query = "SELECT mpa_date FROM main_payment WHERE mpa_mte_id = $compare";
            return $query;
        }
            //update release @if datefrom was upadate, the dateto in previous temp. should be updated
        public static function update_template_query( $values, $compare ) {
            $query = "UPDATE main_template SET $values WHERE mte_id = $compare";
            return $query;
        }
            //get previuos template id
        public static function get_previous_template_id( $compare ) {
            $query = "SELECT mte_prev_temp_id FROM main_template WHERE mte_id = $compare";
            return $query;
        }
            //update previous template
        public static function update_previous_template_query( $from, $comapre) {
            $query = "UPDATE main_template SET mte_dateto = $from WHERE mte_id = $comapre";
            return $query;
        }

        /* UPDATE PAYMENT */
        public static function update_payment_query( $values, $compare ){
            $query = "UPDATE main_payment SET $values WHERE mpa_id = $compare";
            return $query;
        }

        /* DELETE PAYMENT */
        public static function delete_payment_query( $compare ) {
            $query = "DELETE FROM main_payment WHERE mpa_id = $compare";
            return $query;
        }
    }
?>
