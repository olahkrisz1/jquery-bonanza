$(document).ready(function () {
  $("#btn1").click(function () {
    $("#btn1").css("background", "red");
  });

  $("#btn2").click(function () {
    $(".para1").fadeOut(2000);
  });

  $("#para2").hide();
  $("#btn3").click(function () {
    $("#para2").fadeIn(3000);
  });

  $("#btn4").click(function () {
    $("#text4").removeClass("red").addClass("green");
  });

  $("#btn5").click(function () {
    $("#text5").append("the second part of the sentence will appear.");
  });

  $("#btn6").click(function () {
    $("#text6").html("Hello <b>world!<b>");
  });

  $("#btn7").click(function () {
    alert($("h3#text7").text());
  });

  $("#btn8").click(function () {
    $("#input1").val("Hello World!!");
  });

  $("#btn9").click(function () {
    $("#text9").hide();
  });

  $("#btn10").click(function () {
    $("#text10").hide(1000);
  });
  $("#btn11").click(function () {
    $("#text10").show();
  });

  $("#text12").hide();
  $("#btn12").click(function () {
    $("#text12").slideDown();
  });

  $("#btnSlideDown").click(function () {
    $("#box").slideDown(3000);
  });

  $("#btnSlideUp").click(function () {
    $("#box").slideUp("slow");
  });

  $("#btnSlideTog").click(function () {
    $("#box").slideToggle(3000);
  });

  $("#moveRight").click(function () {
    $("#box2").animate({
      left: 500,
      height: "300px",
      width: "300px",
      opacity: "0.5",
    });
  });

  $("#moveLeft").click(function () {
    $("#box2").animate({
      left: 0,
      height: "100px",
      width: "100px",
      opacity: "1",
    });
  });
});
