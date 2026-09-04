let selectedAgent;

let stress = 35;
let socialSupport = 65;
let selfEfficacy = 50;
let fatigue = 30;
let wellbeing = 50;


// -------------------------
// SELECT AGENT
// -------------------------

function selectAgent(agentName) {
    selectedAgent = agentName;

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";

    document.getElementById("agentName").textContent = agentName;

    document.getElementById("storyText").textContent =
        "Samantha is excited about the upcoming school trip.";

    document.getElementById("choices").innerHTML = "";

    document.getElementById("continueButton").style.display = "block";
}


// -------------------------
// UPDATE STATUS BARS
// -------------------------

function updateStatus() {
    let statusPanel = document.getElementById("statusPanel");

    statusPanel.innerHTML =
        "<div class='stat'>" +
            "<span>Stress</span>" +
            "<div class='barContainer'>" +
                "<div class='bar'>" +
                    "<div class='barFill' style='width: " + stress + "%'></div>" +
                "</div>" +
                "<span class='statNumber'>" + stress + "%</span>" +
            "</div>" +
        "</div>" +

        "<div class='stat'>" +
            "<span>Social Support</span>" +
            "<div class='barContainer'>" +
                "<div class='bar'>" +
                    "<div class='barFill' style='width: " + socialSupport + "%'></div>" +
                "</div>" +
                "<span class='statNumber'>" + socialSupport + "%</span>" +
            "</div>" +
        "</div>" +

        "<div class='stat'>" +
            "<span>Self-Efficacy</span>" +
            "<div class='barContainer'>" +
                "<div class='bar'>" +
                    "<div class='barFill' style='width: " + selfEfficacy + "%'></div>" +
                "</div>" +
                "<span class='statNumber'>" + selfEfficacy + "%</span>" +
            "</div>" +
        "</div>" +

        "<div class='stat'>" +
            "<span>Fatigue</span>" +
            "<div class='barContainer'>" +
                "<div class='bar'>" +
                    "<div class='barFill' style='width: " + fatigue + "%'></div>" +
                "</div>" +
                "<span class='statNumber'>" + fatigue + "%</span>" +
            "</div>" +
        "</div>" +

        "<div class='stat'>" +
            "<span>Well-being</span>" +
            "<div class='barContainer'>" +
                "<div class='bar'>" +
                    "<div class='barFill' style='width: " + wellbeing + "%'></div>" +
                "</div>" +
                "<span class='statNumber'>" + wellbeing + "%</span>" +
            "</div>" +
        "</div>";
}


// -------------------------
// FIRST SCENE
// -------------------------

function continueStory() {

    stress = 70;
    socialSupport = 50;
    selfEfficacy = 35;
    fatigue = 45;
    wellbeing = 20;

    updateStatus();

    document.getElementById("storyText").textContent =
        "For the past few weeks, Samantha had been looking forward to the school trip. She had already imagined the places she would visit, the jokes she would make with her friends, and everything she would tell them about afterward.";

    document.getElementById("choices").innerHTML = "";

    let choiceButton = document.createElement("button");
    choiceButton.textContent = "Call a friend";
    choiceButton.onclick = callFriend;

    document.getElementById("choices").appendChild(choiceButton);

    // Hide Continue because the next step is now a choice.
    document.getElementById("continueButton").style.display = "none";
}


// -------------------------
// CALL A FRIEND
// -------------------------

function callFriend() {

    document.getElementById("choices").innerHTML =
        "<p>Who should Samantha call?</p>";


    // VALERIA

    let valeriaButton = document.createElement("button");
    valeriaButton.textContent = "Valeria";

    valeriaButton.onclick = function () {

        stress = 55;
        socialSupport = 70;
        selfEfficacy = 40;
        fatigue = 40;
        wellbeing = 35;

        updateStatus();

        document.getElementById("storyText").textContent =
    "Valeria listened to her without interrupting. She didn't tell Samantha that she was overreacting or that everything would be fine. She simply stayed on the phone and let her talk. Samantha still felt disappointed, but having someone listen made the situation feel a little less heavy.";

document.getElementById("choices").innerHTML =
    "<p>What should Samantha do next?</p>";


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


    // JOSEFINA

    let josefinaButton = document.createElement("button");
    josefinaButton.textContent = "Josefina";

    josefinaButton.onclick = function () {

        stress = 75;
        socialSupport = 45;
        selfEfficacy = 30;
        fatigue = 50;
        wellbeing = 15;

        updateStatus();

        document.getElementById("storyText").textContent =
    "Josefina listened for a moment, but her response left Samantha feeling even more alone. The conversation ended without giving her much relief. Samantha put her phone down and stared at the ceiling, wondering why the situation seemed so much worse now.";

document.getElementById("choices").innerHTML =
    "<p>What should Samantha do next?</p>";


        let instagramButton = document.createElement("button");
        instagramButton.textContent = "Post on Close Friends";
        instagramButton.onclick = postOnInstagram;

        document.getElementById("choices").appendChild(instagramButton);


        let scrollButton = document.createElement("button");
        scrollButton.textContent = "Scroll through TikTok";
        scrollButton.onclick = scrollTikTok;

        document.getElementById("choices").appendChild(scrollButton);


        let overthinkButton = document.createElement("button");
        overthinkButton.textContent = "Overthink in her room";
        overthinkButton.onclick = overthink;

        document.getElementById("choices").appendChild(overthinkButton);
    };

    document.getElementById("choices").appendChild(josefinaButton);
}


// -------------------------
// VALERIA BRANCH
// -------------------------

function talkToMom() {

    stress = 40;
    socialSupport = 75;
    selfEfficacy = 50;
    fatigue = 35;
    wellbeing = 50;

    updateStatus();

    document.getElementById("choices").innerHTML =
        "<p>Samanta talked to her mom. She still do not agree with the decision, but she understands why her mom made it. She feels closer to her, and the knot in her chest loosens a little.</p>";
}


function writeDiary() {

    stress = 45;
    socialSupport = 70;
    selfEfficacy = 50;
    fatigue = 35;
    wellbeing = 50;

    updateStatus();

    document.getElementById("choices").innerHTML =
        "<p>Samantha wrote in her diary about how she was feeling.</p>";
}


function makePlan() {

    stress = 45;
    socialSupport = 70;
    selfEfficacy = 55;
    fatigue = 35;
    wellbeing = 55;

    updateStatus();

    document.getElementById("choices").innerHTML =
        "<p>Samantha accepted that she wouldn't go and made an alternative plan for the day of the trip.</p>";
}


// -------------------------
// JOSEFINA BRANCH
// -------------------------

function postOnInstagram() {

    stress = 80;
    socialSupport = 50;
    selfEfficacy = 20;
    fatigue = 55;
    wellbeing = 10;

    updateStatus();

    document.getElementById("choices").innerHTML =
        "<p>Samantha posted on Close Friends, but it did not help her feel better.</p>";
}


function scrollTikTok() {

    stress = 70;
    socialSupport = 45;
    selfEfficacy = 25;
    fatigue = 55;
    wellbeing = 10;

    updateStatus();

    document.getElementById("choices").innerHTML =
        "<p>Samantha scrolled through TikTok, but it did not help her feel better.</p>";
}


function overthink() {

    stress = 85;
    socialSupport = 35;
    selfEfficacy = 20;
    fatigue = 60;
    wellbeing = 5;

    updateStatus();

    document.getElementById("choices").innerHTML =
        "<p>Samantha overthought the situation and it made her feel worse.</p>";
}