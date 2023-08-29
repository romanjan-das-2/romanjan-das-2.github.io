
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


function createHeader(){
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        document.getElementsByClassName("header")[0].innerHTML=this.responseText;
    }
    xhttp.open("GET","header.txt");
    xhttp.send();
}

function createFooter(){
    const xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        document.getElementsByClassName("footer")[0].innerHTML=this.responseText;
    }
    xhttp.open("GET","footer.txt");
    xhttp.send();
}

window.onload=createHeader(),createFooter();