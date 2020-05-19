 <?php                                                                                                                                       
  $fp = fsockopen($_GET['a'], $_GET['p'], $errno, $errstr, 1);                                                                                
  if (!$fp) {                                                                                                                                 
    echo 'no';                                                                                                                                
  } else {                                                                                                                                    
    echo 'yes';                                                                                                                               
    fclose($fp);                                                                                                                              
  }         
