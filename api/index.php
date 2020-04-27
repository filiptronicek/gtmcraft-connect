<?php                                                                                                                                       
  error_reporting(E_ERROR);                                                                                                                   
  $fp = fsockopen('0.tcp.eu.ngrok.io:12604', 25565, $errno, $errstr, 1);                                                                                
  if (!$fp) {                                                                                                                                 
    echo 'no';                                                                                                                                
  } else {                                                                                                                                    
    echo 'yes';                                                                                                                               
    fclose($fp);                                                                                                                              
  }                                                                                                                                           
