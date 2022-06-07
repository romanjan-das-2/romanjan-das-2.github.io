const ca_name=document.getElementsByTagName("ca_name");
const ca_text=document.getElementsByTagName("ca_text");
var i=-1;
var end_reached=false;
var color_num=0;
//var color_array=["#CCF3EE","#F9F3EE","#F9CEEE"];
var color_array=["#FFFFFF","#FFFFFF","#FFFFFF"];
function next(x) {
    document.getElementById("timer").innerHTML="Current Affairs &nbsp;&nbsp;&nbsp;"+document.getElementById("ca_date").innerText;

    if (x && i<ca_name.length) {
        if(i==ca_name.length-1){
            //do nothing
            document.getElementsByClassName("question_section ca_a")[0].style.opacity="0%";
            document.getElementsByClassName("question_section ca_a")[1].style.display="block";
            end_reached=true;
        }
        else{
            i++;
        }
        document.getElementById("ca_title").innerHTML=(i+1)+". "+ca_name[i].innerHTML;
        document.getElementById("ca_content").innerHTML=ca_text[i].innerHTML;
        if(color_num==color_array.length-1){
            document.getElementsByClassName("question_section")[0].style.backgroundColor=color_array[color_num];
            color_num=0;
        }
        else{
            document.getElementsByClassName("question_section")[0].style.backgroundColor=color_array[color_num];
            color_num++;
        }
    }
    else if(x==false){
        if(i==ca_name.length-1){
            document.getElementsByClassName("question_section ca_a")[0].style.opacity="100%";
            document.getElementsByClassName("question_section ca_a")[1].style.display="none";
            if(end_reached){i=i+1;end_reached=false;}
        }
        if(i>0){
            i=i-1;
            document.getElementById("ca_title").innerHTML=(i+1)+". "+ca_name[i].innerHTML;
            document.getElementById("ca_content").innerHTML=ca_text[i].innerHTML;
            if(color_num==color_array.length-1){
                document.getElementsByClassName("question_section")[0].style.backgroundColor=color_array[color_num];
                color_num=0;
            }
            else{
                document.getElementsByClassName("question_section")[0].style.backgroundColor=color_array[color_num];
                color_num++;
            }
        }
    }
}