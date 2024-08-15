window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (data) {
            const container = document.getElementById("container");

        // Loop through the astronaut data
       
            data.forEach(function(astronaut) { // astronaut; a variable hold for objects so it can access properties; key/pairs
                // Create a div element to hold the astronaut info
                const astronautDiv = document.createElement("div"); // empty div with class = "astronaut"
                astronautDiv.classList.add("astronaut");
    
                // Create the HTML structure for each astronaut. This creates another div within ^^ astronaut with class "bio"
                astronautDiv.innerHTML = `
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active ? "Yes" : "No"}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}" alt="Picture of ${astronaut.firstName} ${astronaut.lastName}">
                `;
    
                // Puts the bio info inside the div astronaut
                container.appendChild(astronautDiv);

        })
    })

})

});

