<?php
    
    function NoScript_Alert(){
        echo "  
            <noscript class = 'NoScript'>
                <center>
                    <p id = 'Alert'>JAVASCRIPT IS NOT ENABLED ON YOUR BROWSER</p>
                    <p>Due to this some Functions may be Unavaiable</p>
                </center>
            </noscript>";
    }

    function NoScript_Navbar(){
        echo "
            <noscript>
                <div class = 'Link'>
                    <a href= 'Username.php'>Username</a>
                    <a href = 'Websites.php'>Websites</a>
                    <a href = 'Phone.php'>Phone</a>
                    <a href = 'Ports.php'>Ports</a>
                    <a href= 'Email.php'>Email</a>
                    <a href= 'New_User.php'>Create User</a>
                </div>
            </noscript>";
    }
?>
