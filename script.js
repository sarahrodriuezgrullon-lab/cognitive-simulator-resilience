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
        planButton.textContent = "Bake something sweet";
        planButton.onclick = bakeCookies;

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


        let organizeButton = document.createElement("button");
        organizeButton.textContent = "Organize her room";
        organizeButton.onclick = organizeRoom;

        document.getElementById("choices").appendChild(organizeButton);
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

   document.getElementById("storyText").textContent =
        "Samantha talked to her mom and tried to understand her reasons.";

    document.getElementById("choices").innerHTML =
        "<p>What should Samantha do next?</p>";

   let homeWorkButton = document.createElement("button");
    homeWorkButton.textContent = "Make homework";
    homeWorkButton.onclick = makeHomework;

    document.getElementById("choices").appendChild(homeWorkButton);

    let movieButton = document.createElement("button");
    movieButton.textContent = "Watch a movie with mom";
    movieButton.onclick = watchMovieWithMom;

    document.getElementById("choices").appendChild(movieButton);

    let walkButton = document.createElement("button");
    walkButton.textContent = "Go for a walk";
    walkButton.onclick = goForWalk;

    document.getElementById("choices").appendChild(walkButton);
}

function makeHomework() {

    stress = 30;
    socialSupport = 75;
    selfEfficacy = 60;
    fatigue = 40;
    wellbeing = 65;

    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha focused on her homework and felt a sense of accomplishment.</p>";

        document.getElementById("choices").innerHTML =
        "<p>What should Samantha do next?</p>";
}

function watchMovieWithMom() {

    stress = 25;
    socialSupport = 85;
    selfEfficacy = 50;
    fatigue = 25;
    wellbeing = 65;

    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha watched a movie with her mom and felt comforted.</p>";

    document.getElementById("choices").innerHTML =
        "<p>What should Samantha do next?</p>";
}

function goForWalk() {

    stress = 20;
    socialSupport = 80;
    selfEfficacy = 55;
    fatigue = 25;
    wellbeing = 65;

    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha went for a walk and felt refreshed.</p>";

    document.getElementById("choices").innerHTML =
        "<p>What should Samantha do next?</p>";
}


function writeDiary() {

    stress = 45;
    socialSupport = 70;
    selfEfficacy = 50;
    fatigue = 35;
    wellbeing = 50;

    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha wrote in her diary about how she was feeling.</p>";

        document.getElementById("choices").innerHTML =
        "<p>What should Samantha do next?</p>";

        let saveTheJournalButton = document.createElement("button");
        saveTheJournalButton.textContent = "Write in her diary";
        saveTheJournalButton.onclick = writeDiary;
        
        document.getElementById("choices").appendChild(saveTheJournalButton);

        let writeLetterButton = document.createElement("button");
        writeLetterButton.textContent = "Write a letter to her future self";
        writeLetterButton.onclick = writeLetter;
        
        document.getElementById("choices").appendChild(writeLetterButton);

        let makeDrawingButton = document.createElement("button");
        makeDrawingButton.textContent = "Make a drawing";
        makeDrawingButton.onclick = makeDrawing;

        document.getElementById("choices").appendChild(makeDrawingButton);
}


function bakeCookies() {

    stress = 45;
    socialSupport = 70;
    selfEfficacy = 55;
    fatigue = 35;
    wellbeing = 55;

    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha baked cookies and felt a sense of accomplishment.</p>";

        document.getElementById("choices").innerHTML =
        "<p>What should Samantha do next?</p>";

        let eatCookiesButton = document.createElement("button");
        eatCookiesButton.textContent = "Eat the cookies";
        eatCookiesButton.onclick = eatCookies;

        document.getElementById("choices").appendChild(eatCookiesButton);

        let shareCookiesButton = document.createElement("button");
        shareCookiesButton.textContent = "Share the cookies with mom";
        shareCookiesButton.onclick = shareCookies;

        document.getElementById("choices").appendChild(shareCookiesButton);

        let postCookiesButton = document.createElement("button");
        postCookiesButton.textContent = "Post a picture of the cookies on Instagram";
        postCookiesButton.onclick = postCookies;

        document.getElementById("choices").appendChild(postCookiesButton);
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

    document.getElementById("storyText").innerHTML =
        "<p>Samantha posted on Close Friends, but it did not help her feel better.</p>";

        document.getElementById("choices").innerHTML =
        "<p>What should Samantha do next?</p>";

        let deletePostButton = document.createElement("button");
        deletePostButton.textContent = "Delete the post";
        deletePostButton.onclick = deletePost;

        document.getElementById("choices").appendChild(deletePostButton);

        let chekingStoryButton = document.createElement("button");
        chekingStoryButton.textContent = "Obsessively checking story viewers";
        chekingStoryButton.onclick = checkStory;

        document.getElementById("choices").appendChild(chekingStoryButton);

        let airPlaneMusicButton = document.createElement("button");
        airPlaneMusicButton.textContent = "Samanta put her phone on airplane mode, turned up the volume, and let the music drown everything out.";
        airPlaneMusicButton.onclick = airplaneMode;

        document.getElementById("choices").appendChild(airPlaneMusicButton);
}


function scrollTikTok() {

    stress = 70;
    socialSupport = 45;
    selfEfficacy = 25;
    fatigue = 55;
    wellbeing = 10;

    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha scrolled through TikTok, but it did not help her feel better.</p>";

        document.getElementById("choices").innerHTML =
        "<p>What should Samantha do next?</p>";

        let watchUntilSleepButton = document.createElement("button");
        watchUntilSleepButton.textContent = "Watch TikTok until she falls asleep";
        watchUntilSleepButton.onclick = watchUntilSleep;

        document.getElementById("choices").appendChild(watchUntilSleepButton);

        let searchAnxietyButton = document.createElement("button");
        searchAnxietyButton.textContent = "Search for how to manage anxiety on TikTok";
        searchAnxietyButton.onclick = searchAnxiety;

        document.getElementById("choices").appendChild(searchAnxietyButton);

        let closePhoneAndSleepButton = document.createElement("button");
        closePhoneAndSleepButton.textContent = "Close her phone and try to sleep";
        closePhoneAndSleepButton.onclick = closePhoneAndSleep;

        document.getElementById("choices").appendChild(closePhoneAndSleepButton);
}


function organizeRoom() {

    stress = 60;
    socialSupport = 45;
    selfEfficacy = 45;
    fatigue = 60;
    wellbeing = 30;

    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha organized her room, which helped her feel more in control.</p>";

        document.getElementById("choices").innerHTML =
        "<p>What should Samantha do next?</p>";

        let deepCleaningButton = document.createElement("button");
        deepCleaningButton.textContent = "Do a deep cleaning of her room";
        deepCleaningButton.onclick = deepCleaning;

        document.getElementById("choices").appendChild(deepCleaningButton);

        let rearrangeFurnitureButton = document.createElement("button");
        rearrangeFurnitureButton.textContent = "Rearrange the furniture in her room";
        rearrangeFurnitureButton.onclick = rearrangeFurniture;

        document.getElementById("choices").appendChild(rearrangeFurnitureButton);

        let organizeBookshelfButton = document.createElement("button");
        organizeBookshelfButton.textContent = "Organize her bookshelf";
        organizeBookshelfButton.onclick = organizeBookshelf;

        document.getElementById("choices").appendChild(organizeBookshelfButton);
}