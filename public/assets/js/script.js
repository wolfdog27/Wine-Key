const { endsWith } = require("sequelize/types/lib/operators")

//Search "submit" button
$(".search-wine").on("submit")

//on click for submit button, grab value from input field then location.href=backend route+wine name (concatenate) wine name
//back end route req.params.name, api/wine/search/:name, 
//button click event to go from home page to individual restaurant page - for each restaurant

//set up backend route with req.params.winename
// $(document).ready(function () {
$(".location").on("change", function (event) {
    console.log("clicked", $(this).val());
    //modify to relate to restaurant name or id, may need to enter seeds to get appropriate restaurant ids
    console.log("clicked", $(this).attr)
    // console.log("clicked", $(this).find(":selected").data("id"));
    // location.href = "/restaurant/" + $(this).find(":selected").data("id");
    // $.ajax({
    //     method: "GET",
    //     url: "/restaurant/" + restaurantName
    // }).then(function (restaurantData) {
    //     res.render("specificrestaurant.handlebars", restaurantData)
    // })
})
// })

    // $(".EG-Seattle").on("click", function(event) {
    //   event.preventDefault();
    //   console.log("clicked EGS");
    //   var restaurant_id = $(this).children(".restaurant_id").val();
    //   $.ajax({
    //     method: "GET",
    //     url: "/restaurant/" + restaurant_id
    //   }).then(function(data) {

    //     location.reload();
    //   });

    // });
    // $(".EG-Tacoma").on("click", function(event) {
    //   event.preventDefault();

    //   var restaurant_id = $(this).children(".restaurant_id").val();
    //   $.ajax({
    //     method: "GET",
    //     url: "/restaurant/" + restaurant_id
    //   }).then(function(data) {
    //     // console.log("clicked EGT");
    //     location.reload();
    //   });

    // });
    // $(".EG-Bellevue").on("click", function(event) {
    //   event.preventDefault();

    //   var restaurant_id = $(this).children(".restaurant_id").val();
    //   $.ajax({
    //     method: "GET",
    //     url: "/restaurant/" + restaurant_id
    //   }).then(function(data) {
    //     // console.log("clicked EGT");
    //     location.reload();
    //   });

    // });
    // $(".Aerlume").on("click", function(event) {
    //   event.preventDefault();

    //   var restaurant_id = $(this).children(".restaurant_id").val();
    //   $.ajax({
    //     method: "GET",
    //     url: "/restaurant/" + restaurant_id
    //   }).then(function(data) {
    //     // console.log("clicked Aer");
    //     location.reload();
    //   });

    // });
    // $(".Aqua").on("click", function(event) {
    //   event.preventDefault();
    // //   console.log("clicked Aqua");
    //   var restaurant_id = $(this).children(".restaurant_id").val();
    //   $.ajax({
    //     method: "GET",
    //     url: "/restaurant/" + restaurant_id
    //   }).then(function(data) {

    //     location.reload();
    //   });

    // });


//   });

  //submit button to grab wine name from input field and search for wine id, returning inventory information with restaurant id
