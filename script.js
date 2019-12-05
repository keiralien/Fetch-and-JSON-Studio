// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let hoursArray = [];
            let container = document.getElementById("container");
            let astronautCount = document.querySelector("h2");
                astronautCount.innerHTML = `Astronaut Count: ${json.length}`;
            
            for (let i = 0; i < json.length; i++) {
                hoursArray.push([i,json[i]["hoursInSpace"]]);
            }
            
            hoursArray.sort(function(a,b){return b[1]-a[1]});

            for (let i = 0; i < json.length; i++) {
                if (json[hoursArray[i][0]]["active"] === true) {
                    container.innerHTML += `
                        <div class="astronaut">
                            <div class="bio">
                                <h3> ${json[hoursArray[i][0]]["firstName"]} ${json[hoursArray[i][0]]["lastName"]}</h3>
                                <ul>
                                    <li>Hours in space: ${json[hoursArray[i][0]]["hoursInSpace"]}</li>
                                    <li id="active">Active: ${json[hoursArray[i][0]]["active"]}</li>
                                    <li>Skills: ${json[hoursArray[i][0]]["skills"]}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[hoursArray[i][0]]["picture"]}"/>
                        </div>
                    `;
                } else {
                    container.innerHTML += `
                        <div class="astronaut">
                            <div class="bio">
                                <h3> ${json[hoursArray[i][0]]["firstName"]} ${json[hoursArray[i][0]]["lastName"]}</h3>
                                <ul>
                                    <li>Hours in space: ${json[hoursArray[i][0]]["hoursInSpace"]}</li>
                                    <li>Active: ${json[hoursArray[i][0]]["active"]}</li>
                                    <li>Skills: ${json[hoursArray[i][0]]["skills"]}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[hoursArray[i][0]]["picture"]}"/>
                        </div>
                    `;
                };
            };
        });
    });
});