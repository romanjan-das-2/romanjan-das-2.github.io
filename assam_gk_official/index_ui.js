function load_index_ui(){
    var number_of_questions = 15;
    var screen_one_div = document.getElementsByClassName("screen_one")[0];
    var paper_link = [];
    var div_paper = [];
    var div_paper_name = [];
    var span_author_name = [];
    var span_paper_category = [];


    ///for(i=1;i<=number_of_questions;i++){
    for(i=number_of_questions;i>0;i=i-1){
        paper_link[i] = document.createElement("a");
        paper_link[i].href=eval("index_data.paper_"+i+".paper_link") +i+".html";
    
        div_paper[i] = document.createElement("div");
        div_paper[i].className = eval("index_data.paper_"+i+".paper_class");
        paper_link[i].appendChild(div_paper[i]);
    
        div_paper_name[i] = document.createElement("div");
        div_paper_name[i].className = "xxy";
        div_paper_name[i].innerHTML = eval("index_data.paper_"+i+".paper_name") + " number " + i ;
        div_paper[i].appendChild(div_paper_name[i]);

        span_author_name[i] = document.createElement("span");
        span_author_name[i].className = "author_name";
        span_author_name[i].innerHTML = eval("index_data.paper_"+i+".paper_author");
        div_paper[i].appendChild(span_author_name[i]);

        span_paper_category[i] = document.createElement("span");
        span_paper_category[i].className = "paper_category";
        span_paper_category[i].innerHTML = eval("index_data.paper_"+i+".paper_category");
        div_paper[i].appendChild(span_paper_category[i]);

        screen_one_div.appendChild(paper_link[i]);
    }
    
    
}

function loadIndexData(){
    var index_data_script = document.createElement("script");
    //index_data_script.src="index_data.js?v="+Math.random();
    var d = new Date();
    var dateString = d.getDate().toString()+d.getMonth().toString()+d.getFullYear().toString();
    index_data_script.src="index_data.js?v="+dateString;
    index_data_script.setAttribute("onload","load_index_ui();"); 
    document.head.appendChild(index_data_script);
}
