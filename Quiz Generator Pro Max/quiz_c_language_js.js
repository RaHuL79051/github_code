function submitQuiz() {
    var q1Answer = document.querySelector('input[name="q1"]:checked').value;
    var q2Answer = document.querySelector('input[name="q2"]:checked').value;
    var q3Answer = document.querySelector('input[name="q3"]:checked').value;
    var q4Answer = document.querySelector('input[name="q4"]:checked').value;
    var q5Answer = document.querySelector('input[name="q5"]:checked').value;
    var q6Answer = document.querySelector('input[name="q6"]:checked').value;
    var q7Answer = document.querySelector('input[name="q7"]:checked').value;
    var q8Answer = document.querySelector('input[name="q8"]:checked').value;
    var q9Answer = document.querySelector('input[name="q9"]:checked').value;
    var q10Answer = document.querySelector('input[name="q10"]:checked').value;
    var q11Answer = document.querySelector('input[name="q11"]:checked').value;
    var q12Answer = document.querySelector('input[name="q12"]:checked').value;
    var q13Answer = document.querySelector('input[name="q13"]:checked').value;
    var q14Answer = document.querySelector('input[name="q14"]:checked').value;
    var q15Answer = document.querySelector('input[name="q15"]:checked').value;
    var score = 0;
    if (q1Answer === "c") {
      score++;
    }
    if (q2Answer === "c") {
      score++;
    }
    if(q3Answer == "b"){
      score++;
    }
    if(q4Answer == "c"){
      score++;
    }
    if(q5Answer == "b"){
      score++;
    }
    if(q6Answer == "c"){
      score++;
    }
    if(q7Answer == "a"){
      score++;
    }
    if(q8Answer == "a"){
      score++;
    }
    if(q9Answer == "a"){
      score++;
    }
    if(q10Answer == "d"){
      score++;
    }
    if(q11Answer == "a"){
      score++;
    }
    if(q12Answer == "a"){
      score++;
    }
    if(q13Answer == "a"){
      score++;
    }
    if(q14Answer == "c"){
      score++;
    }
    if(q15Answer == "a"){
      score++;
    }
    alert("Your score is: " + score);
}