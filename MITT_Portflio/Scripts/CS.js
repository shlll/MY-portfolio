$("#btnmath").click(function () {

    var num1 = Number($("#input1").val());
    var num2 = Number($("#input2").val());
    var num3 = Number($("#input3").val());
    var num4 = Number($("#input4").val());
    var num5 = Number($("#input5").val());


    var sum = num1 + num2 + num3 + num4 + num5;
    var product = num1 * num2 * num3 * num4 * num5;
    var average = sum / 5;
    var smallest = Math.min(num1, num2, num3, num4, num5);
    var largest = Math.max(num1, num2, num3, num4, num5);


    $("#sum").text("The sum is: " + sum);
    $("#product").text("The product is: " + product);
    $("#average").text("The average is: " + average);
    $("#smallest").text("The smallest number is: " + smallest);
    $("#largest").text("The largest number is: " + largest);
});

$("#mathcode").hide();

$("#btncodemath").click(function () {
    $("#mathcode").toggle();
});


$("#btnfb").click(function () {

    var num1 = Number($("#fbnum1").val());
    var num2 = Number($("#fbnum2").val());


    var output = "";


    for (var loop = 1; loop <= 100; loop++) {

        if (loop % num1 == 0 && loop % num2 == 0) {

            output += "FizzBuzz, ";
        }
        else if (loop % num1 == 0) {

            output += "Fizz, ";
        }
        else if (loop % num2 == 0) {

            output += "Buzz, ";
        }
        else {

            output += loop + ", ";
        }
    }


    $("#fbout").text(output.substring(0, output.length - 2));
});

$("#btnclose").click(function () {

    $("#fbnum1").val("");
    $("#fbnum2").val("");
    $("#fbout").text("");
});

$("#pacode").hide();

$("#btnpa").click(function () {
    $("#pacode").toggle();
});

$("#btnFacCalc").click(function () {
    var newFactorial = Number($("#factorialnumber").val());
    var result = 0;
    var i;
    if ($("#factorialnumber").val() != "" && newFactorial > 0) {
        for (i = newFactorial - 1; i > 0; i--) {
            newFactorial = newFactorial * i;
            result = newFactorial;
        }
        $("#result").text("The factorial number : " + result)
    } else {
        $("#result").text("Please input value and the value is greater than 0 and it is numeric")
    }
})

$("#factorialcode").hide();

$("#factorialBtn").click(function () {
    $("#factorialcode").toggle();
});


$("#btnpal").click(function () {
    var word = $("#palin").val();
    var revword = word.split('').reverse().join('');
    if (word == revword) {
        $("#palout").text(word + " is a palidrome");
    } else {
        $("#palout").text(word + " is not a palidrome");
    }
});


$("#fizzbuzzcode").hide();

$("#fizzBizzBtn").click(function () {
    $("#fizzbuzzcode").toggle();
});
