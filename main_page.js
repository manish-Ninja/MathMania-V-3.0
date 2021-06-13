/*
!Note Write the code here correctly otherwise you may face any problems that you can't imagine.
*This is to send the question to the player number 2
*/ 
function send()
{
number1 = document.getElementById("1_input").value;
number2 = document.getElementById("2_input").value;

actual_answer = parseInt(number1)*parseInt(number2);
question_number = "<h4>" + number1 + "X " + number2 + "</h4>";
input_box = "<br>Answer: <input type='text' id='input_check_box' placeholder='Type here your answer to the question respectively'>"; 
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}