$(document).ready(function () {
  // Initialize counter
  let count = 0;

  // Update the count on the page
  function updateCount() {
    $("#count").text(count);
  }

  // Event listener for the button click
  $("#incrementBtn").click(function () {
    // Increment the count
    count++;
    // Update the count on the page
    updateCount();
  });

  //toggle the visibility of the element with id "something"
  $("#show").click(() => {
    $("#something").toggle();

    if ($("#something").is(":visible")) {
      $("#show").text("Hide Something");
    } else {
      $("#show").text("Show Something");
    }
  });

  //selectors
  // Select all elements with class "item" and change their background color to red
  $(".counter").css("background-color", "red");

  // Select the element with id "myDiv" and add multiple styles
  $("div").css({
    width: "200px",
    height: "200px",
    background: "red",
    border: "1px solid black",
  });

  // Select all input elements and disable them
  $("input").prop("disabled", true);

  // Select the first paragraph element and change its font size to 20px
  $("p:first").css("font-size", "20px");

  // Select all elements with attribute "data-toggle" and remove the attribute
  $("[data-toggle]").removeAttr("data-toggle");


  //event handling
  // $("div").bind('click', function () {
  //   // jQuery code goes here
  //   alert("hey")
  // });

  // $("div").click(function () {
  //   // jQuery code goes here
  //   alert("hey2")
  // });


  $("div").dblclick(function () {
    // jQuery code goes here
    alert("hey2")
  });


  // $("#2ndDiv").mouseenter(function () {
  //   // jQuery code goes here
  //   $("#2ndDiv").css("background-color", "black");
  // });

  // if ($("#2ndDiv").mouseenter(function () {
  //   // jQuery code goes here
  //   $("#2ndDiv").css("background-color", "black");
  // }));
  // else {
  //   $("#2ndDiv").css("background-color", "white");
  // }
  // ;



  $("#2ndDiv").mouseenter(function () {
    $(this).css("background-color", "blue"); // Change background color on mouseenter
  });
  $("#2ndDiv").mouseleave(function () {
    $(this).css("background-color", "red"); // Change background color on mouseleave
  });


});
