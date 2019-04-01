$(document).ready(function () {
  $("img").hover(function () {
    alert("This is an image")
  });
});


var submit = document.getElementById("form1")

$(document).ready(function () {
  $('#3').click(function () {
    var number1 = $("input[name = answer1]: checked").val();
    var number2 = $("input[name = answer2]: checked").val();
    var number3 = $("input[name = answer3]: checked").val();
    var number4 = $("input[name = answer4]: checked").val();
    var number5 = $("input[name = answer5]: checked").val();
    var number6 = $("input[name = answer6]: checked").val();
    var number7 = $("input[name = answer7]: checked").val();
    var number8 = $("input[name = answer8]: checked").val();
    var number9 = $("input[name = answer9]: checked").val();
    var number10 = $("input[name = answer10]: checked").val();

    var numbers = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10];
    var right = 0;
    var wrong = 0;

    if (number1 === input.correct) {
      right++
    }
    if (number2 === input.correct) {
      right++
    }
    if (number3 === input.correct) {
      right++
    }
    if (number4 === input.correct) {
      right++
    }
    if (number5 === input.correct) {
      right++
    }
    if (number6 === input.correct) {
      right++
    }
    if (number7 === input.correct) {
      right++
    }
    if (number8 === input.correct) {
      right++
    }
    if (number9 === input.correct) {
      right++
    }
    if (number10 === input.correct) {
      right++
    }


    var percentage = right / 10 * 100

    if (percentage > 79) {
      remark = "Excellent Perfomance"
    }
    if (percentage > 49 && percentage < 80) {
      remark = "Fairly Passed"
    }
    if (percentage < 50) {
      remark = "Poor Performance, kindly re-do the test"
    }

  }
  });
