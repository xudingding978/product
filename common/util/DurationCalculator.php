<?php

class DurationCalculator {
    const MONTHLY='monthly';
    const DAILY='daily';
    const YEARLY='yearly';
    const WEEKLY='weekly';
    function calculateNumberOfPeriodTypes($end_date,$periodtype) {
        $returnvall=0;
        $periodtype=strtolower($periodtype);
        if(self::MONTHLY==$periodtype){
           $returnvall=$this->monthDifference($end_date);  
        }
        if(self::DAILY==$periodtype){
           $returnvall=$this->dayDifference($end_date);  
        }
        if(self::YEARLY==$periodtype){
           $returnvall=$this->yearDifference($end_date);  
        }
        if(self::WEEKLY==$periodtype){
           $returnvall=$this->weekDifference($end_date);  
        }
          
        return $returnvall;
    }
    function nextDueDate($start_date,$periodtype,$numberofperiods) {
        $returnvall= new DateTime("now");
        $periodtype=strtolower($periodtype);
        if(self::MONTHLY==$periodtype){
           $returnvall=$this->addMonth($start_date,$numberofperiods);  
        }
        if(self::DAILY==$periodtype){
           $returnvall=$this->addDay($$start_date,$numberofperiods);
        }
        if(self::YEARLY==$periodtype){
           $returnvall=$this->addYear($start_date,$numberofperiods);
        }
        if(self::WEEKLY==$periodtype){
           $returnvall=$this->addWeek($start_date,$numberofperiods); 
        }
        return $returnvall;
    }
    private function addMonth($start_date,$numberofperiods) {
        $nextdate=date("Y-m-d",  strtotime($start_date."+".$numberofperiods." month"));   
        return $nextdate;
    }
    private function addDay($start_date,$numberofperiods) {
        $nextdate=date("Y-m-d",  strtotime($start_date."+".$numberofperiods." day"));   
        return $nextdate;
    }
    private function addYear($start_date,$numberofperiods) {
        $nextdate=date("Y-m-d",  strtotime($start_date."+".$numberofperiods." Year"));   
        return $nextdate;
    }
    private function addWeek($start_date,$numberofperiods) {
        $nextdate=date("Y-m-d",  strtotime($start_date."+".$numberofperiods." week"));   
        return $nextdate;
    }
    
    function monthDifference($end_date) {
        $date1 = new DateTime($end_date);
        $date2 = new DateTime("now");
        $interval = $date1->diff($date2);
        $years = $interval->format('%y');
        $months = $interval->format('%m');   
        return ($years*12)+$months;
    }

//    function monthDifference($end_date) {
//        // 31556926 seconds in year  
//        $years = floor(($end_date - $start_date) / 31556926);
//        // takes remaning seconds to find months  2629743.83 seconds each month  
//        $months = floor((($end_date - $start_date) % 31556926) / 2629743.83);
//
//        if ($years > 0) {
//            if ($years > 1) {
//                $year_s = 's';
//            } // adds "s" if more than one year  
//            $years_display = $years . ' year' . $year_s;
//        }
//        if ($months > 0) {
//            if ($months > 1) {
//                $month_s = 's';
//            } // adds "s" if more than one month  
//            $months_display = $months . ' month' . $month_s;
//        }
//
//        return trim($years_display . ' ' . $months_display);
//    }

    function yearDifference($end_date) {
        $date1 = new DateTime($end_date);
        $date2 = new DateTime("now");
        $interval = $date1->diff($date2);
        $years = $interval->format('%y'); 
        return $years;
    }

    function dayDifference($end_date) {
        $date1 = new DateTime($end_date);
        $date2 = new DateTime("now");
        $interval = $date1->diff($date2);
        $days = $interval->format('%d');
        return $days;
    }

    function weekDifference($end_date) {
        $date1 = new DateTime($end_date);
        $date2 = new DateTime("now");
        $interval = $date1->diff($date2);
        $days = $interval->format('%d');
        return floor($days/7);
    }

}

?>
