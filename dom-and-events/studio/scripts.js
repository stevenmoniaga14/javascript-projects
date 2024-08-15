// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function () {
    const takeOffBtn = document.querySelector("#takeoff");
    let flightStatus = document.querySelector("#flightStatus");
    const shuttleBackground = document.querySelector("#shuttleBackground");
    
    let spaceShuttleHeight = document.querySelector("#spaceShuttleHeight");
    const landingBtn = document.querySelector("#landing")
    const missionAbort = document.querySelector("#missionAbort");
    let rocket = document.querySelector("#rocket");
    let spaceShuttleWidth = document.querySelector("#spaceShuttleWidth")
    
    const up = document.querySelector("#up");
    const down = document.querySelector("#down");
    const right = document.querySelector("#right");
    const left = document.querySelector("#left");

    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "230px";

    takeOffBtn.addEventListener('click', function (){
        if (flightStatus.innerHTML !== "Shuttle in flight") {
        const isTakeoffReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
       
        // Once user clicks "Ok" if condition runs, confirms a boolean expression
        if (isTakeoffReady) {
            flightStatus.textContent = "Shuttle in flight";

            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        }
    }
   }); 

    landingBtn.addEventListener('click', function (){
            window.alert("The shuttle is landing. Landing gear engaged.")
      
            flightStatus.textContent = "The shuttle has landed."
            shuttleBackground.style.backgroundColor = "green"
            spaceShuttleHeight.textContent = 0;
            rocket.style.bottom = "0px";
            rocket.style.left = "230px";
            spaceShuttleWidth.textContent = 0;
    

});
    
    missionAbort.addEventListener('click', function (){
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.textContent = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "red";
            spaceShuttleHeight.textContent = 0;
            spaceShuttleWidth.textContent = 0;
            rocket.style.bottom = "0px";
            rocket.style.left = "230px";
        }
    
   });


   up.addEventListener('click', function(){
    if (flightStatus.innerHTML === "Shuttle in flight" && parseInt(spaceShuttleHeight.innerHTML) < 250000) {
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
    }
});

    down.addEventListener('click', function(){
    if (flightStatus.innerHTML === "Shuttle in flight" && parseInt(spaceShuttleHeight.innerHTML) !== 0) {
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
    } 
});

    right.addEventListener('click', function(){
    if (flightStatus.innerHTML === "Shuttle in flight" && parseInt(spaceShuttleWidth.innerHTML) < 200000) {
    spaceShuttleWidth.innerHTML = parseInt(spaceShuttleWidth.innerHTML) + 10000;
    rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    }
});

left.addEventListener('click', function(){
    if (flightStatus.innerHTML === "Shuttle in flight" && parseInt(spaceShuttleWidth.innerHTML) > -250000) {
    spaceShuttleWidth.innerHTML = parseInt(spaceShuttleWidth.innerHTML) - 10000;
    rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
    }

});

});











/*
// Initialize rocket position
    rocket.style.position = "absolute";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";

    // Move shuttle up
    upButton.addEventListener('click', function () {
        let currentBottom = parseInt(rocket.style.bottom);
        rocket.style.bottom = (currentBottom + 10) + "px";

        // Increase shuttle height
        const currentHeight = parseInt(spaceShuttleHeight.textContent);
        spaceShuttleHeight.textContent = currentHeight + 10000;
    });

    // Move shuttle down
    downButton.addEventListener('click', function () {
        let currentBottom = parseInt(rocket.style.bottom);
        rocket.style.bottom = (currentBottom - 10) + "px";

        // Decrease shuttle height
        const currentHeight = parseInt(spaceShuttleHeight.textContent);
        spaceShuttleHeight.textContent = currentHeight - 10000;
    });

    // Move shuttle left
    leftButton.addEventListener('click', function () {
        let currentLeft = parseInt(rocket.style.left);
        rocket.style.left = (currentLeft - 10) + "px";
    });

    // Move shuttle right
    rightButton.addEventListener('click', function () {
        let currentLeft = parseInt(rocket.style.left);
        rocket.style.left = (currentLeft + 10) + "px";
    });
});

*/

