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


    
    document.getElementById("choices").innerHTML =
        "Who should Samantha call?";

   
    let valeriaButton = document.createElement("button");
    valeriaButton.textContent = "Valeria";
    valeriaButton.onclick = () => {
        
    stress = 55;
    socialSupport = 70;
    selfEfficacy = 40;
    fatigue = 40;
    wellbeing = 35;
        
        
        document.getElementById("choices").innerHTML = "Samantha called Valeria and she comforted Samantha.<br><br>" +
    "Stress: " + stress + "%<br>" +
    "Social support: " + socialSupport + "%<br>" +
    "Self-efficacy: " + selfEfficacy + "%<br>" +
    "Fatigue: " + fatigue + "%<br>" +
    "Well-being: " + wellbeing + "%";
    
   
    };
    document.getElementById("choices").appendChild(valeriaButton);

    
    let josefinaButton = document.createElement("button");
    josefinaButton.textContent = "Josefina";
    josefinaButton.onclick = () => {
        
    stress = 75;
    socialSupport = 45;
    selfEfficacy = 30;
    fatigue = 50;
    wellbeing = 15;
        
        document.getElementById("choices").innerHTML = "Samantha called Josefina and she didn't help Samantha.<br><br>" +
    "Stress: " + stress + "%<br>" +
    "Social support: " + socialSupport + "%<br>" +
    "Self-efficacy: " + selfEfficacy + "%<br>" +
    "Fatigue: " + fatigue + "%<br>" +
    "Well-being: " + wellbeing + "%";
    
   
    };
    document.getElementById("choices").appendChild(josefinaButton);
}