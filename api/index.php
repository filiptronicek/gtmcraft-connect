 <?php                                                                                                                                       
  $fp = fsockopen($_GET['a'], 25565, $errno, $errstr, 1);                                                                                
  if (!$fp) {                                                                                                                                 
    echo 'no';                                                                                                                                
  } else {                                                                                                                                    
    echo 'yes';                                                                                                                               
    fclose($fp);                                                                                                                              
  }         
