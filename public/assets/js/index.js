$(function () {
  $(".change-devoured").on("click", function (event) {
    console.log("button works");
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });

  $(".delete-button").on("click", function (event) {
    var id = $("[name=id]").val().trim();

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function () {
      location.reload();
    });
  });
});
