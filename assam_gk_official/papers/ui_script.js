function load_logic_script(){
    var logic_script = document.createElement("script");
    logic_script.src="logic_script.js";
    logic_script.setAttribute("onload","xyz();");
    document.head.appendChild(logic_script);
}

function load_ui(){
    var link1=document.createElement("link");
    link1.rel="preconnect";
    link1.href="https://fonts.googleapis.com";
    document.head.appendChild(link1);

    var link2=document.createElement("link");
    link2.rel="preconnect";
    link2.crossOrigin="";
    link2.href="https://fonts.gstatic.com";
    document.head.appendChild(link2);

    var link3=document.createElement("link");
    link3.rel="stylesheet";
    link3.href="https://fonts.googleapis.com/css2?family=Varela+Round&amp;display=swap";
    document.head.appendChild(link3);


    var div_top_panel = document.createElement("div");
    div_top_panel.className = "top_panel";
    div_top_panel.id = "top_panel";

    var span_timer = document.createElement("div");
    span_timer.className = "timer";
    span_timer.id = "timer";
    span_timer.innerHTML = "General Knowledge &nbsp;&nbsp;0 m : 0 s";
    div_top_panel.appendChild(span_timer);

    var span_asg = document.createElement("span");
    span_asg.setAttribute("style","display: none; font-size: 5vw;");
    span_asg.id = "asg";
    span_asg.innerHTML = "&nbsp;&nbsp;&nbsp;Assam General Knowledge";
    div_top_panel.appendChild(span_asg);

    document.body.appendChild(div_top_panel);

    var div_question_section = document.createElement("div");
    div_question_section.id = "question_section";
    div_question_section.className = "question_section";

    var div_the_question = document.createElement("div");
    div_the_question.id="the_question";
    div_the_question.className="the_question";
    div_question_section.appendChild(div_the_question);

    var div_the_options = document.createElement("div");
    div_the_options.className = "the_options";
    div_question_section.appendChild(div_the_options);

/////////////////////////////////////////////////////////

    var br = document.createElement("br");
    div_the_options.appendChild(br);

    var input_a = document.createElement("input");
    input_a.setAttribute("type","radio");
    input_a.setAttribute("name","options");
    input_a.setAttribute("id","option_1");
    input_a.setAttribute("value","1");
    div_the_options.appendChild(input_a);

    var label_a = document.createElement("label");
    label_a.setAttribute("for","option_1");
    label_a.setAttribute("id","label_for_option_1");
    div_the_options.appendChild(label_a);

    var br_1 = document.createElement("br");
    div_the_options.appendChild(br_1);


    /////////////////////////////////////////////////////////

    var br_2 = document.createElement("br");
    div_the_options.appendChild(br_2);

    var input_b = document.createElement("input");
    input_b.setAttribute("type","radio");
    input_b.setAttribute("name","options");
    input_b.setAttribute("id","option_2");
    input_b.setAttribute("value","2");
    div_the_options.appendChild(input_b);

    var label_b = document.createElement("label");
    label_b.setAttribute("for","option_2");
    label_b.setAttribute("id","label_for_option_2");
    div_the_options.appendChild(label_b);

    var br_3 = document.createElement("br");
    div_the_options.appendChild(br_3);

    /////////////////////////////////////////////////////////

    var br_4 = document.createElement("br");
    div_the_options.appendChild(br_4);

    var input_c = document.createElement("input");
    input_c.setAttribute("type","radio");
    input_c.setAttribute("name","options");
    input_c.setAttribute("id","option_3");
    input_c.setAttribute("value","3");
    div_the_options.appendChild(input_c);

    var label_c = document.createElement("label");
    label_c.setAttribute("for","option_3");
    label_c.setAttribute("id","label_for_option_3");
    div_the_options.appendChild(label_c);

    var br_5 = document.createElement("br");
    div_the_options.appendChild(br_5);

    /////////////////////////////////////////////////////////

    var br_6 = document.createElement("br");
    div_the_options.appendChild(br_6);

    var input_d = document.createElement("input");
    input_d.setAttribute("type","radio");
    input_d.setAttribute("name","options");
    input_d.setAttribute("id","option_4");
    input_d.setAttribute("value","4");
    div_the_options.appendChild(input_d);

    var label_d = document.createElement("label");
    label_d.setAttribute("for","option_4");
    label_d.setAttribute("id","label_for_option_4");
    div_the_options.appendChild(label_d);
    /*
    var br_7 = document.createElement("br");
    div_the_options.appendChild(br_7);
    */

    var div_bottom_panel = document.createElement("div");
    div_bottom_panel.className = "bottom_panel";

    var button_next = document.createElement("button");
    button_next.className = "next_button";
    button_next.id = "next_button";
    button_next.innerHTML = " Done &gt;";
    button_next.setAttribute("onclick","before_xyz();");
    div_bottom_panel.appendChild(button_next);

    document.body.appendChild(div_bottom_panel);
    document.body.appendChild(div_question_section);

    var alert_dialog = document.createElement("div");
    alert_dialog.className="alert_dialog";
    alert_dialog.setAttribute("onclick","clear_alert_dialog();");
    var alert_dialog_div = document.createElement("div");
    alert_dialog_div.className="alert_dialog_div";
    alert_dialog_div.innerHTML="Pressing back again will cancel this paper <br><br><br><span style=\"color:blue;text-align:center;\">OK</span>";
    alert_dialog.appendChild(alert_dialog_div);
    document.body.appendChild(alert_dialog);

    load_logic_script();
}
