<?php
    class PageRedirect {
        function PageRedirect($id, $lesson, $class){
            $lessons = array(
                'wi'=> [1,2,3,4,5],
                'ai' => [1,2,3,4,6,7,8,9,10],
                'tida' => [1,2,3,4,5,6,8,9,11],
            ); 
            $units = array(
                'wi'=>['1tp','2tp'],
                'ai'=>['3td','3tf','3tp','4tf','4tp'],
                'tida'=>['3tf','3tp','4tf','4tp'],
            ); 
            $out = "?svc=courses";

            if(array_key_exists($id, $lessons)){
                $out .= "&id=$id";
            } else {
                return "Invalid Id";
            }
            
            if (isset($lesson) && array_key_exists($id, $lessons) && in_array($lesson, $lessons[$id])) {
                $out .= "&lesson=$lesson";
            } else {
                return "Invalid lesson"; 
            }
    
            if (isset($class) && array_key_exists($id, $units) && in_array($class, $units[$id])) {
                $out .= "&class=$class";
            } else {
                return "Invalid class"; 
            }
            header("Location: https://edu.gplweb.pl" . $out);
            return $out;
        }
    }
?>
