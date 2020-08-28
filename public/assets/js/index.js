$(function () {
  $(".change-devoured").on("click", function (event) {
    console.log("button works");
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("boolean is changed to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    console.log("button works");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created a new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-form").on("click", function (event) {
    // var id = $(this).data("planid");
    var id = $("[name=id]").val().trim();

    // Send the POST request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
      // data: newBurger
    }).then(function () {
      console.log("delted a burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
