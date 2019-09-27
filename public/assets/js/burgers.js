window.onload(function () {
    


    document.querySelector(".change-sleep")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const id = this.getAttribute("data-id");
        const toBeDevoured = this.getAttribute("data-toBeDevoured");

        const newDevouredState = {
            devoured: toBeDevoured
        }

        fetch("/api/burgers/" + id, {
            method: "PUT",
            data: JSON.stringify(newDevouredState),
            headers: { "Content-Type": "application/json" }
        }).then((res)=> res.json())
        .then(
            function () {
                console.log("changed devoured to ", toBeDevoured);
                location.reload();
            }
        )
    });

    document.querySelector(".create-form")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const newBurger = {
            burger_name: document.getElementById("ca").value.trim()
        }

        fetch("/api/burgers", {
            method: "POST",
            data: JSON.stringify(newBurger),
            headers: { "Content-Type": "application/json" }
        }).then((res)=> res.json())
        .then(function () {
            console.log("created new burger");
            location.reload();
        })
    })
})