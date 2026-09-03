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

        document.getElementById("choices").innerHTML =
            "Samantha called Valeria and she comforted Samantha.<br><br>" +
            "Stress: " + stress + "%<br>" +
            "Social support: " + socialSupport + "%<br>" +
            "Self-efficacy: " + selfEfficacy + "%<br>" +
            "Fatigue: " + fatigue + "%<br>" +
            "Well-being: " + wellbeing + "%<br><br>" +
            "What should Samantha do next?";


        let momButton = document.createElement("button");

        momButton.textContent = "Talk to her mom";

        momButton.onclick = talkToMom;

        document.getElementById("choices").appendChild(momButton);


        let diaryButton = document.createElement("button");

        diaryButton.textContent = "Write in her diary";

        diaryButton.onclick = writeDiary;

        document.getElementById("choices").appendChild(diaryButton);


        let planButton = document.createElement("button");

        planButton.textContent = "Make an alternative plan";

        planButton.onclick = makePlan;

        document.getElementById("choices").appendChild(planButton);

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

        document.getElementById("choices").innerHTML =
            "Samantha called Josefina and she didn't help Samantha.<br><br>" +
            "Stress: " + stress + "%<br>" +
            "Social support: " + socialSupport + "%<br>" +
            "Self-efficacy: " + selfEfficacy + "%<br>" +
            "Fatigue: " + fatigue + "%<br>" +
            "Well-being: " + wellbeing + "%";

    };

    document.getElementById("choices").appendChild(josefinaButton);

}


function talkToMom() {

    stress = 40;
    socialSupport = 75;
    selfEfficacy = 50;
    fatigue = 35;
    wellbeing = 50;

    document.getElementById("choices").innerHTML =
        "Samantha talked to her mom and tried to understand her reasons.<br><br>" +
        "Stress: " + stress + "%<br>" +
        "Social support: " + socialSupport + "%<br>" +
        "Self-efficacy: " + selfEfficacy + "%<br>" +
        "Fatigue: " + fatigue + "%<br>" +
        "Well-being: " + wellbeing + "%";

}


function writeDiary() {

    stress = 45;
    socialSupport = 70;
    selfEfficacy = 50;
    fatigue = 35;
    wellbeing = 50;

    document.getElementById("choices").innerHTML =
        "Samantha wrote in her diary about how she was feeling.<br><br>" +
        "Stress: " + stress + "%<br>" +
        "Social support: " + socialSupport + "%<br>" +
        "Self-efficacy: " + selfEfficacy + "%<br>" +
        "Fatigue: " + fatigue + "%<br>" +
        "Well-being: " + wellbeing + "%";

}


function makePlan() {

    stress = 45;
    socialSupport = 70;
    selfEfficacy = 55;
    fatigue = 35;
    wellbeing = 55;

    document.getElementById("choices").innerHTML =
        "Samantha accepted that she wouldn't go and made an alternative plan for the day of the trip.<br><br>" +
        "Stress: " + stress + "%<br>" +
        "Social support: " + socialSupport + "%<br>" +
        "Self-efficacy: " + selfEfficacy + "%<br>" +
        "Fatigue: " + fatigue + "%<br>" +
        "Well-being: " + wellbeing + "%";

}