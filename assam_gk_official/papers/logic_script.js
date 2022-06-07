
var i = 1;
var y = 1;
var z = Object.keys(questions_and_answers).length + 2;
var marks = 0;
var u = 0;
var v = 0;
var stringx = "";
var unanswered = 0;
var ff = false;
var gg = false;
var timer;
var stringflx = "";

var histState = false;
function createsNewHist(){
    window.location.href = window.location.href + "#x";
}

window.setTimeout(createsNewHist,500);
var windowstate = 0;
window.onpopstate = function(){
    if(windowstate!=0 && histState==false){
        histState = true;
        ///alert("Pressing back again will cancel this paper.");
        document.getElementsByClassName("alert_dialog")[0].style.display="block";
    }
    windowstate++;
}

function clear_alert_dialog(){
    document.getElementsByClassName("alert_dialog")[0].style.display="none";
}

function abc() {
    document.getElementById("next_button").disabled = true;
    if (!gg) {
        ///document.getElementsByClassName("first_screen")[0].remove();
        clearInterval(timer);
        document.getElementById("timer").remove();
        document.getElementById("asg").style.display="block";
        document.getElementsByClassName("bottom_panel")[0].remove();
        gg = true;
    }
    if (ff) {
        document.getElementsByClassName("results_div")[0].remove();
        document.getElementsByClassName("bottom_panel")[0].remove();
    }
    document.getElementsByClassName("question_section")[0].remove();

    var h = document.body;
    var l = document.createElement("div");
    l.setAttribute("class", "x_panel");

    var m = document.createElement("div");
    m.setAttribute("class", "x_panel");
    h.append(m);

    for (i = 1; i < z - 1; i++) {
        var j = eval("questions_and_answers.question_" + i);
        var f = document.createElement("p");
        f.setAttribute("class", "x_question");
        f.innerHTML = i + ". " + j.the_question;
        var g = document.createElement("p");
        g.setAttribute("class", "x_answer");
        if (j.correct == 1) {
            g.innerHTML = "Answer: " + j.option_a;
        }
        else if (j.correct == 2) {
            g.innerHTML = "Answer: " + j.option_b;
        }
        else if (j.correct == 3) {
            g.innerHTML = "Answer: " + j.option_c;
        }
        else if (j.correct == 4) {
            g.innerHTML = "Answer: " + j.option_d;
        }

        h.append(f);
        h.append(g);
    }
    h.append(l);
}

var timer_time = 0;
var timer_time_minute = 0;
function timer_func() {
    stringflx = timer_time_minute + " min : " + timer_time + " sec";
    stringx = "General Knowledge &nbsp;&nbsp;" + timer_time_minute + " m : " + timer_time + " s";
    document.getElementById("timer").innerHTML = stringx;
    if (timer_time == 60) {
        timer_time = 0;
        timer_time_minute++;
    }
    timer_time++;
}

function before_xyz(){
    if(histState==true){
        window.location.href = window.location.href + "#x";
        histState = false;
    }
    var x2 = eval("questions_and_answers.question_"+(y-1));
    var uu = 0;
    if (document.getElementById("option_1").checked == true) {
        uu = 1;
    }
    else if (document.getElementById("option_2").checked == true) {
        uu = 2;
    }
    else if (document.getElementById("option_3").checked == true) {
        uu = 3;
    }
    else if (document.getElementById("option_4").checked == true) {
        uu = 4;
    }

    document.getElementById("label_for_option_"+x2.correct).style.backgroundColor = "green";
    document.getElementById("label_for_option_"+x2.correct).style.color = "white";

    if((uu!=x2.correct)&&(uu!=0)){
        document.getElementById("label_for_option_"+uu).style.backgroundColor="red";
        document.getElementById("label_for_option_"+uu).style.color="white";
        document.getElementById("label_for_option_"+uu).style.textDecoration = "line-through 0.8vw";
    }
    document.getElementById("next_button").setAttribute("onclick","xyz();");
    document.getElementById("next_button").innerHTML = " Next &gt;";
    
    document.getElementById("option_1").disabled = true;
    document.getElementById("option_2").disabled = true;
    document.getElementById("option_3").disabled = true;
    document.getElementById("option_4").disabled = true;
}


function xyz() {
    
    document.getElementById("option_1").disabled = false;
    document.getElementById("option_2").disabled = false;
    document.getElementById("option_3").disabled = false;
    document.getElementById("option_4").disabled = false;
    if(histState==true){
        window.location.href = window.location.href + "#x";
        histState = false;
    }

    ff = true;
    if (!gg) {
        ///document.getElementsByClassName("first_screen")[0].remove();
        timer = setInterval(timer_func, 1000);
        gg = true;
    }

    if (y < z) {
        var x = eval("questions_and_answers.question_" + y);
        if (y == 1) {
            document.getElementById("the_question").innerHTML = y + ". " + x.the_question;
            document.getElementById("label_for_option_1").innerHTML = " a) " + x.option_a;
            document.getElementById("label_for_option_2").innerHTML = " b) " + x.option_b;
            document.getElementById("label_for_option_3").innerHTML = " c) " + x.option_c;
            document.getElementById("label_for_option_4").innerHTML = " d) " + x.option_d;
            document.getElementById("option_1").checked = false;
            document.getElementById("option_2").checked = false;
            document.getElementById("option_3").checked = false;
            document.getElementById("option_4").checked = false;
            v = x.correct;
            console.log("x.correct: " + x.correct);
        }


        if (y != 1) {
            if (document.getElementById("option_1").checked == true) {
                u = 1;
            }
            else if (document.getElementById("option_2").checked == true) {
                u = 2;
            }
            else if (document.getElementById("option_3").checked == true) {
                u = 3;
            }
            else if (document.getElementById("option_4").checked == true) {
                u = 4;
            }
            else if ((document.getElementById("option_1").checked == false) && (document.getElementById("option_2").checked == false) && (document.getElementById("option_3").checked == false) && (document.getElementById("option_4").checked == false)) {
                u = 0;
                unanswered++;
            }

            console.log("u value " + u);
            if (u == v) {
                marks++;
                console.log("marks :" + marks);
            }

            if (y < z - 1) {
                document.getElementById("the_question").innerHTML = y + ". " + x.the_question;
                document.getElementById("label_for_option_1").innerHTML = " a) " + x.option_a;
                document.getElementById("label_for_option_2").innerHTML = " b) " + x.option_b;
                document.getElementById("label_for_option_3").innerHTML = " c) " + x.option_c;
                document.getElementById("label_for_option_4").innerHTML = " d) " + x.option_d;
                document.getElementById("option_1").checked = false;
                document.getElementById("option_2").checked = false;
                document.getElementById("option_3").checked = false;
                document.getElementById("option_4").checked = false;
                v = x.correct;

                
                document.getElementById("label_for_option_1").style.backgroundColor="white";
                document.getElementById("label_for_option_1").style.color="black";
                document.getElementById("label_for_option_1").style.textDecoration = "none";
                document.getElementById("label_for_option_2").style.backgroundColor="white";
                document.getElementById("label_for_option_2").style.color="black";
                document.getElementById("label_for_option_2").style.textDecoration = "none";
                document.getElementById("label_for_option_3").style.backgroundColor="white";
                document.getElementById("label_for_option_3").style.color="black";
                document.getElementById("label_for_option_3").style.textDecoration = "none";
                document.getElementById("label_for_option_4").style.backgroundColor="white";
                document.getElementById("label_for_option_4").style.color="black";
                document.getElementById("label_for_option_4").style.textDecoration = "none";
                document.getElementById("next_button").setAttribute("onclick","before_xyz();");
                document.getElementById("next_button").innerHTML = " Done &gt;";
                console.log("x.correct: " + x.correct);
            }
            else {
                document.getElementById("next_button").disabled = true;
                //document.getElementById("home_button").disabled = true;
                document.getElementsByTagName("input")[0].disabled = true;
                document.getElementsByTagName("input")[1].disabled = true;
                document.getElementsByTagName("input")[2].disabled = true;
                document.getElementsByTagName("input")[3].disabled = true;
                console.log("submitted");
                console.log("marks :" + marks);
                clearInterval(timer);
                //alert("You scored : "+marks + "\nTime taken : " + stringx);

                document.getElementsByClassName("the_question")[0].remove();
                document.getElementsByClassName("the_options")[0].remove();
                document.getElementById("timer").remove();
                document.getElementById("asg").innerHTML="&nbsp;&nbsp;&nbsp;Assam GK & Current Affairs";
                document.getElementById("asg").style.display="block";

                var m = document.createElement("div");
                m.setAttribute("class", "results_div");
                ///var spanx = "<span class=\"big\">" + marks + "</span>" + "<span class=\"small\"> out of </span><span class=\"big\">" + (z-2) + "</span><br><br>";
                var spanx = "<span class=\"big\">" + marks + "/" + (z - 2) + "</span><br><br>";
                m.innerHTML = spanx + "You scored : " + marks + "<br>Total questions : " + (z - 2) + "<br>Correct answers : " + marks + "<br>Wrong answers : " + (z - marks - unanswered - 2) + "<br>Unanswered : " + unanswered + "<br>Time taken : " + stringflx + "<br><br><a class=\"answers_button\" onclick=\"abc();\">View answers</a>";
                //m.innerHTML = spanx + "আপুনি লাভ কৰা নম্বৰ : " + marks + "<br>মুঠ প্ৰশ্ন সংখ্যা : " + (z - 2) + "<br>শুদ্ধ উত্তৰ : " + marks + "<br>ভুল উত্তৰ : " + (z - marks - unanswered - 2) + "<br>উত্তৰ নাই দিয়া : " + unanswered + "<br>সময় লাগিল : " + stringflx + "<br><br><a class=\"answers_button\" onclick=\"abc();\">উত্তৰসমূহ চাওক</a>";
                var n = document.getElementsByClassName("question_section")[0];
                n.append(m);
            }

        }
        y++;
    }

}