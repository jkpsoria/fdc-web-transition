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
});
