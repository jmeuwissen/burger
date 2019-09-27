document.addEventListener("DOMContentLoaded", function (event) {

    console.log("stuff loaded");
    if (document.getElementsByClassName(".change-eaten")) {
        const els = document.getElementsByClassName(".change-eaten");

        [].forEach.call(els, function (element) {
            console.log("do thing")
            
        


            element.addEventListener("click", function (event) {
                event.preventDefault();
                const id = this.getAttribute("data-id");
                const toBeDevoured = this.getAttribute("data-toBeDevoured");

                const newDevouredState = {
                    devoured: toBeDevoured
                }
                console.log(newDevouredState);

                fetch("/api/burgers/" + id, {
                        method: "PUT",
                        body: JSON.stringify(newDevouredState),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then()
                    .then(
                        function (res) {

                            console.log("changed devoured to ", toBeDevoured);
                            // location.reload();
                        }
                    )
            });
        });
    }

    document.getElementById("submit")
        .addEventListener("click", function (event) {
            event.preventDefault();
            const newBurger = {
                burger_name: document.getElementById("ca").value.trim()
            }
            console.log("posting :" + JSON.stringify(newBurger))
            fetch("/api/burgers", {
                    method: "POST",
                    body: JSON.stringify(newBurger),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then()
                .then(function () {
                    console.log("created new burger");
                    // location.reload();
                })
        })
})