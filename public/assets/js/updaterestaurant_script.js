$(document).ready(function () {

    //this one works
    $(".addRestaurant").off().on("click", (event) => {
        event.preventDefault();
        var newRestaurant = {
            restaurantName: $("#createRestaurantName").val().trim(),
            phoneNumber: $("#createPhoneNumber").val().trim(),
            address: $("#createAddress").val().trim(),
        };
        $.ajax({
            url: "/api/restaurants/",
            type: "POST",
            data: newRestaurant
        }).done(
            function () {
                console.log("Added new store");
                location.reload();
            }
        ).fail(function() {
            document.getElementById("restaurantUpdateError").style.display="block"
            // alert("There is already a restaurant with this name")
        })
    });

    //these three say that id is not defined and $(this).parent... is not a function
    $(".updateRestaurantName").each(function (index) {
        $(this).off().on("click", (event) => {
            var id = $(this).data("id");
            console.log("id", id);

            var newRestaurantName = {
                restaurantName: $(this).parent().parent().prev().children("input").val().trim()
            };
            console.log("new name", newRestaurantName);

            $.ajax("/api/restaurants/storename/" + id, {
                type: "PUT",
                data: newRestaurantName
            }).then(
                () => {
                    console.log("changed wine name to", newRestaurantName);
                    location.reload();
                }
            );
        })
    });

    $(".updatePhoneNumber").each(function (index) {
        $(this).off().on("click", (event) => {
            var id = $(this).data("id");
            console.log("id", id);

            var newPhoneNumber = {
                phoneNumber: $(this).parent().parent().prev().children("input").val().trim()
            };
            console.log("new name", newPhoneNumber);

            $.ajax("/api/restaurants/phone/" + id, {
                type: "PUT",
                data: newPhoneNumber
            }).then(
                function () {
                    console.log("changed phone number to", newPhoneNumber);
                    location.reload();
                }
            );
        })
    });

    $(".updateAddress").each(function (index) {
        $(this).off().on("click", (event) => {
            var id = $(this).data("id");
            console.log("id", id);

            var newAddress = {
                address: $(this).parent().parent().prev().children("input").val().trim()
            };
            console.log("new address", newAddress);

            $.ajax("/api/restaurants/address/" + id, {
                type: "PUT",
                data: newAddress
            }).then(
                function () {
                    console.log("changed address to", newAddress);
                    location.reload();
                }
            );
        })
    });

    //this one deletes, but the location.reload is not working
    $(".deleteRestaurant").off().on("click", function (event) {
        var id = $(this).data("id");
        console.log(id)

        $.ajax("/api/restaurants/" + id, {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
            }
        );
    });

});