var nav_menu_status=false;
function expand_nav_menu(){
    if(!nav_menu_status){
        document.getElementById('expanded-portrait-nav-menu').style.display='flex';
        nav_menu_status=true;
    }
    else{
        document.getElementById('expanded-portrait-nav-menu').style.display='none';
        nav_menu_status=false;
    }
}