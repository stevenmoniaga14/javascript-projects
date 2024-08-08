function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    missionAbort.addEventListener('mousemove', () => {
        missionAbort.style.backgroundColor = "red";
        // document.querySelector('#abortMission').style.backgroundColor = "red";
    });

    missionAbort.addEventListener('mouseleave', () => {
        missionAbort.style.backgroundColor = "";
        // document.querySelector('#abortMission').style.backgroundColor = "";
    });

    missionAbort.addEventListener('click', function (){
        window.confirm("Are you sure you want to abort the mission?");
        if (missionAbort) {
            paragraph.textContent = "Mission aborted! Space shuttle returning home"
        }
    })

    button.addEventListener('click', function (){
        paragraph.textContent = "Houston! We have a liftoff!"
    });
    
}

window.addEventListener("load", init);
