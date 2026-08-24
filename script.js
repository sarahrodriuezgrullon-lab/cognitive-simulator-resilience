let selectedAgent;

let stress = 35;
let socialSupport = 65;
let selfEfficacy = 50;
let fatigue = 30;
let wellbeing = 50;

function selectAgent(agentName) {

    selectedAgent = agentName;

}

function continueStory() {



    stress = 70;
    socialSupport = 50;
    selfEfficacy = 35;
    fatigue = 45;
    wellbeing = 20;

    document.getElementById("storyText").textContent =
        "Her mom had just told her she wouldn't be allowed to go on the upcoming school trip";

    document.getElementById("choices").innerHTML =
        "Stress: " + stress + "%<br>" +
        "Social support: " + socialSupport + "%<br>" +
        "Self-efficacy: " + selfEfficacy + "%<br>" +
        "Fatigue: " + fatigue + "%<br>" +
        "Well-being: " + wellbeing + "%";

    let choiceButton = document.createElement("button");

    choiceButton.textContent = "Call a friend";
    choiceButton.onclick = callFriend;

    document.getElementById("choices").appendChild(choiceButton);

    
}

function callFriend() {

    socialSupport = 70;
    stress = 20;
    
    document.getElementById("choices").innerHTML =
        "Stress: " + stress + "%<br>" +
        "Social support: " + socialSupport + "%"; 
}