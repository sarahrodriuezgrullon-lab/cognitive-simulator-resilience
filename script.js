let selectedAgent;

let stress = 35;
let socialSupport = 65;
let selfEfficacy = 50;
let fatigue = 30;
let wellbeing = 50;

// Endings unlocked during this browser session
let unlockedEndings = [];


// -------------------------
// AGENT PROFILES (by age)
// -------------------------

const agentProfiles = {
    teenager: {
        socialWeight: 0.6,
        efficacyWeight: 0.4,
        stressWeight: 0.5,
        fatigueWeight: 0.5
    },
    adult: {
        socialWeight: 0.4,
        efficacyWeight: 0.6,
        stressWeight: 0.5,
        fatigueWeight: 0.5
    },
    elder: {
        socialWeight: 0.5,
        efficacyWeight: 0.5,
        stressWeight: 0.4,
        fatigueWeight: 0.6
    }
};

function getAgentType() {
    if (selectedAgent === "Samantha") return "teenager";
    if (selectedAgent === "Fabián") return "adult";
    if (selectedAgent === "Mariana") return "elder";
    return "teenager";
}


// -------------------------
// ENDINGS DEFINITION
// -------------------------

const endingsList = [
    { id: "recovered",   name: "She came back",     subtitle: "She found her way back to herself." },
    { id: "survived",    name: "She got through it", subtitle: "Not great. Not terrible. She's still here." },
    { id: "ranout",      name: "She ran out",        subtitle: "She kept going, but she has nothing left." },
    { id: "disappeared", name: "She disappeared",    subtitle: "She stopped reaching out. No one noticed in time." },
    { id: "grew",        name: "She grew",           subtitle: "She didn't just survive. She changed." },
    { id: "numb",        name: "She went numb",      subtitle: "She stopped feeling. That was the only way." }
];


// -------------------------
// UTILITIES
// -------------------------

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}


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
    document.getElementById("continueButton").textContent = "Continue";
    document.getElementById("continueButton").onclick = continueStory;

    updateStatus();
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

    document.getElementById("choices").innerHTML =
        "<p>What should Samantha do?</p>";

    let callButton = document.createElement("button");
    callButton.textContent = "Call a friend";
    callButton.onclick = callFriend;
    document.getElementById("choices").appendChild(callButton);

    let fixButton = document.createElement("button");
    fixButton.textContent = "Try to fix it";
    fixButton.onclick = tryToFix;
    document.getElementById("choices").appendChild(fixButton);

    document.getElementById("continueButton").style.display = "none";
}


// -------------------------
// CALL A FRIEND
// -------------------------

function callFriend() {

    document.getElementById("choices").innerHTML =
        "<p>Who should Samantha call?</p>";

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
// HELPER: END OF DAY BUTTON
// -------------------------

function showEndOfDay() {
    document.getElementById("choices").innerHTML = "";

    let endDayButton = document.createElement("button");
    endDayButton.textContent = "End of day";
    endDayButton.onclick = endDayOne;
    document.getElementById("choices").appendChild(endDayButton);
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
        "<p>Samantha focused on her homework and felt a sense of accomplishment. The night felt a little lighter.</p>";

    showEndOfDay();
}

function watchMovieWithMom() {
    stress = 25;
    socialSupport = 85;
    selfEfficacy = 50;
    fatigue = 25;
    wellbeing = 65;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha watched a movie with her mom and felt comforted. For a couple of hours, she forgot about the trip.</p>";

    showEndOfDay();
}

function goForWalk() {
    stress = 20;
    socialSupport = 80;
    selfEfficacy = 55;
    fatigue = 25;
    wellbeing = 65;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha went for a walk and felt refreshed. The air helped. Her thoughts slowed down a little.</p>";

    showEndOfDay();
}


// -------------------------
// DIARY BRANCH
// -------------------------

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

    let writeLetterButton = document.createElement("button");
    writeLetterButton.textContent = "Write a letter to her future self";
    writeLetterButton.onclick = writeLetter;
    document.getElementById("choices").appendChild(writeLetterButton);

    let makeDrawingButton = document.createElement("button");
    makeDrawingButton.textContent = "Make a drawing";
    makeDrawingButton.onclick = makeDrawing;
    document.getElementById("choices").appendChild(makeDrawingButton);
}

function writeLetter() {
    stress = 40;
    socialSupport = 70;
    selfEfficacy = 55;
    fatigue = 35;
    wellbeing = 60;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha wrote a letter to her future self. She told her that this week would pass, and that she would be okay. She didn't believe it fully, but writing it helped.</p>";

    showEndOfDay();
}

function makeDrawing() {
    stress = 45;
    socialSupport = 70;
    selfEfficacy = 50;
    fatigue = 40;
    wellbeing = 55;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha drew for an hour. She didn't think about the trip. She just drew. When she finished, she felt a little lighter.</p>";

    showEndOfDay();
}


// -------------------------
// BAKING BRANCH
// -------------------------

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

function eatCookies() {
    stress = 40;
    socialSupport = 70;
    selfEfficacy = 55;
    fatigue = 35;
    wellbeing = 60;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha ate the cookies while they were still warm. For a moment, everything felt okay.</p>";

    showEndOfDay();
}

function shareCookies() {
    stress = 35;
    socialSupport = 80;
    selfEfficacy = 55;
    fatigue = 35;
    wellbeing = 65;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha shared the cookies with her mom. They ate together in the kitchen. It wasn't much. It was enough.</p>";

    showEndOfDay();
}

function postCookies() {
    stress = 50;
    socialSupport = 60;
    selfEfficacy = 45;
    fatigue = 40;
    wellbeing = 45;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha posted a picture of the cookies on Instagram. She waited for likes. They came. It didn't help.</p>";

    showEndOfDay();
}


// -------------------------
// JOSEFINA BRANCH - INSTAGRAM
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
    airPlaneMusicButton.textContent = "Put her phone on airplane mode and let music drown everything out";
    airPlaneMusicButton.onclick = airplaneMode;
    document.getElementById("choices").appendChild(airPlaneMusicButton);
}

function deletePost() {
    stress = 75;
    socialSupport = 50;
    selfEfficacy = 25;
    fatigue = 55;
    wellbeing = 15;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha deleted the post. She felt embarrassed for posting it in the first place. The silence after was worse than before.</p>";

    showEndOfDay();
}

function checkStory() {
    stress = 85;
    socialSupport = 45;
    selfEfficacy = 20;
    fatigue = 60;
    wellbeing = 10;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha checked the story viewers over and over. She refreshed the page. She checked again. The numbers didn't change. She felt worse.</p>";

    showEndOfDay();
}

function airplaneMode() {
    stress = 65;
    socialSupport = 50;
    selfEfficacy = 30;
    fatigue = 50;
    wellbeing = 25;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha put her phone on airplane mode, turned up the volume, and let the music drown everything out. For a while, she didn't have to think about anything.</p>";

    showEndOfDay();
}


// -------------------------
// JOSEFINA BRANCH - TIKTOK
// -------------------------

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

function watchUntilSleep() {
    stress = 75;
    socialSupport = 45;
    selfEfficacy = 25;
    fatigue = 65;
    wellbeing = 10;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha watched TikTok until she fell asleep. Her phone was still playing when her eyes closed. She didn't rest well.</p>";

    showEndOfDay();
}

function searchAnxiety() {
    stress = 80;
    socialSupport = 45;
    selfEfficacy = 25;
    fatigue = 60;
    wellbeing = 15;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha searched for how to manage anxiety on TikTok. She watched dozens of videos. She didn't feel calmer. She felt worse.</p>";

    showEndOfDay();
}

function closePhoneAndSleep() {
    stress = 60;
    socialSupport = 50;
    selfEfficacy = 40;
    fatigue = 50;
    wellbeing = 30;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha closed her phone and tried to sleep. It took a while. But she eventually fell asleep. Tomorrow would be better. Maybe.</p>";

    showEndOfDay();
}


// -------------------------
// JOSEFINA BRANCH - ORGANIZE
// -------------------------

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

function deepCleaning() {
    stress = 55;
    socialSupport = 45;
    selfEfficacy = 55;
    fatigue = 70;
    wellbeing = 35;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha deep cleaned her room. It took hours. When she finished, she was exhausted but her room felt new.</p>";

    showEndOfDay();
}

function rearrangeFurniture() {
    stress = 55;
    socialSupport = 45;
    selfEfficacy = 50;
    fatigue = 65;
    wellbeing = 35;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha rearranged the furniture in her room. It took a while, and she was tired, but the room felt different. She felt different too.</p>";

    showEndOfDay();
}

function organizeBookshelf() {
    stress = 55;
    socialSupport = 45;
    selfEfficacy = 50;
    fatigue = 55;
    wellbeing = 40;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha organized her bookshelf. She sorted books, dusted shelves, and found things she had forgotten. It was calming.</p>";

    showEndOfDay();
}


// -------------------------
// TRY TO FIX IT BRANCH
// -------------------------

function tryToFix() {
    stress = 65;
    socialSupport = 50;
    selfEfficacy = 45;
    fatigue = 45;
    wellbeing = 25;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha didn't want to just sit with it. She wanted to do something. Anything. So she started thinking about what she could actually do.</p>";

    document.getElementById("choices").innerHTML =
        "<p>What should Samantha do?</p>";

    let momButton = document.createElement("button");
    momButton.textContent = "Talk to her mom again";
    momButton.onclick = fixWithMom;
    document.getElementById("choices").appendChild(momButton);

    let adultButton = document.createElement("button");
    adultButton.textContent = "Talk to another adult she trusts";
    adultButton.onclick = fixWithAdult;
    document.getElementById("choices").appendChild(adultButton);

    let ownPlanButton = document.createElement("button");
    ownPlanButton.textContent = "Make her own plan";
    ownPlanButton.onclick = makeOwnPlan;
    document.getElementById("choices").appendChild(ownPlanButton);
}


// -------------------------
// FIX WITH MOM
// -------------------------

function fixWithMom() {
    stress = 55;
    socialSupport = 65;
    selfEfficacy = 50;
    fatigue = 40;
    wellbeing = 35;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha went back to her mom. Not to argue. To understand. She asked if they could talk about it again.</p>";

    document.getElementById("choices").innerHTML =
        "<p>What should Samantha say?</p>";

    let askWhyButton = document.createElement("button");
    askWhyButton.textContent = "Ask why she can't go";
    askWhyButton.onclick = momAskWhy;
    document.getElementById("choices").appendChild(askWhyButton);

    let negotiateButton = document.createElement("button");
    negotiateButton.textContent = "Try to negotiate";
    negotiateButton.onclick = momNegotiate;
    document.getElementById("choices").appendChild(negotiateButton);

    let acceptButton = document.createElement("button");
    acceptButton.textContent = "Accept it, even if it hurts";
    acceptButton.onclick = momAccept;
    document.getElementById("choices").appendChild(acceptButton);
}

function momAskWhy() {
    stress = 55;
    socialSupport = 65;
    selfEfficacy = 50;
    fatigue = 40;
    wellbeing = 40;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha asked why. Her mom explained. It wasn't a simple answer. Money, timing, safety. Samantha didn't like it. But she understood a little better.</p>";

    showEndOfDay();
}

function momNegotiate() {
    stress = 60;
    socialSupport = 60;
    selfEfficacy = 55;
    fatigue = 40;
    wellbeing = 35;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha tried to negotiate. She offered to pay part of it. To do extra chores. Her mom listened. She said no. But she said it gently. And she said she was proud of Samantha for asking.</p>";

    showEndOfDay();
}

function momAccept() {
    stress = 50;
    socialSupport = 65;
    selfEfficacy = 45;
    fatigue = 40;
    wellbeing = 45;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha stopped fighting. She said okay. It hurt. But fighting was making it worse. Sometimes accepting is not giving up. Sometimes it's just choosing not to hurt more.</p>";

    showEndOfDay();
}


// -------------------------
// FIX WITH ANOTHER ADULT
// -------------------------

function fixWithAdult() {
    stress = 60;
    socialSupport = 60;
    selfEfficacy = 45;
    fatigue = 45;
    wellbeing = 30;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha thought about who else she could talk to. Someone who might understand. Someone who might help her see it differently.</p>";

    document.getElementById("choices").innerHTML =
        "<p>What should Samantha ask?</p>";

    let intercedeButton = document.createElement("button");
    intercedeButton.textContent = "Ask them to talk to her mom";
    intercedeButton.onclick = adultIntercede;
    document.getElementById("choices").appendChild(intercedeButton);

    let ventButton = document.createElement("button");
    ventButton.textContent = "Just tell them how she feels";
    ventButton.onclick = adultVent;
    document.getElementById("choices").appendChild(ventButton);

    let perspectiveButton = document.createElement("button");
    perspectiveButton.textContent = "Ask for their perspective";
    perspectiveButton.onclick = adultPerspective;
    document.getElementById("choices").appendChild(perspectiveButton);
}

function adultIntercede() {
    stress = 55;
    socialSupport = 70;
    selfEfficacy = 50;
    fatigue = 45;
    wellbeing = 40;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha asked them to talk to her mom. They said they would try. Samantha didn't know if it would change anything. But someone was willing to try for her.</p>";

    showEndOfDay();
}

function adultVent() {
    stress = 55;
    socialSupport = 70;
    selfEfficacy = 45;
    fatigue = 45;
    wellbeing = 45;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha told them everything. They didn't try to fix it. They just listened. Sometimes that's what you need. Someone who doesn't try to make it better, just stays with you in it.</p>";

    showEndOfDay();
}

function adultPerspective() {
    stress = 50;
    socialSupport = 65;
    selfEfficacy = 55;
    fatigue = 45;
    wellbeing = 45;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>They listened and then told Samantha something she hadn't thought about. Not a solution. Just another way to look at it. It didn't fix anything. But it made her feel less stuck.</p>";

    showEndOfDay();
}


// -------------------------
// MAKE HER OWN PLAN
// -------------------------

function makeOwnPlan() {
    stress = 55;
    socialSupport = 50;
    selfEfficacy = 55;
    fatigue = 45;
    wellbeing = 40;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha couldn't change the trip. But she could change what she did that day. She opened her notes and started planning.</p>";

    document.getElementById("choices").innerHTML =
        "<p>What should Samantha plan?</p>";

    let funDayButton = document.createElement("button");
    funDayButton.textContent = "Plan something fun for that day";
    funDayButton.onclick = planFunDay;
    document.getElementById("choices").appendChild(funDayButton);

    let friendsTripButton = document.createElement("button");
    friendsTripButton.textContent = "Plan a trip with her friends later";
    friendsTripButton.onclick = planFriendsTrip;
    document.getElementById("choices").appendChild(friendsTripButton);

    let writeAboutItButton = document.createElement("button");
    writeAboutItButton.textContent = "Write about what she's feeling";
    writeAboutItButton.onclick = writeAboutIt;
    document.getElementById("choices").appendChild(writeAboutItButton);
}

function planFunDay() {
    stress = 45;
    socialSupport = 55;
    selfEfficacy = 65;
    fatigue = 45;
    wellbeing = 60;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha planned a day for herself. Not as good as the trip. But hers. She wrote down three things she wanted to do. It made the day feel less empty.</p>";

    showEndOfDay();
}

function planFriendsTrip() {
    stress = 45;
    socialSupport = 70;
    selfEfficacy = 60;
    fatigue = 45;
    wellbeing = 60;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha texted her friends about doing something together later. They said yes. It wasn't the school trip. But it was something to look forward to. And it was with people she chose.</p>";

    showEndOfDay();
}

function writeAboutIt() {
    stress = 50;
    socialSupport = 50;
    selfEfficacy = 55;
    fatigue = 45;
    wellbeing = 50;
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha wrote about what she was feeling. Not to fix it. Just to get it out of her head. When she finished, she felt a little lighter.</p>";

    showEndOfDay();
}


// -------------------------
// EVALUATE DAY 1 STATE
// -------------------------

function evaluateDayOneState() {
    if (stress > 70 && fatigue > 55 && selfEfficacy < 40) return "depleted";
    if (socialSupport < 55 && stress > 70) return "isolated";
    if (stress > 55 && selfEfficacy > 50) return "tense_capable";
    if (selfEfficacy > 55 && socialSupport > 70 && wellbeing > 55) return "thriving";
    if (socialSupport > 70 && wellbeing > 50) return "connected";
    return "coping";
}


// -------------------------
// END OF DAY 1 → DAY 2
// -------------------------

function endDayOne() {
    stress = clamp(stress + 10, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);

    updateStatus();

    document.getElementById("continueButton").style.display = "none";

    const state = evaluateDayOneState();

    let dayText = "";

    if (state === "depleted") {
        dayText = "Samantha woke up exhausted. The weight of yesterday was still there, heavier than before. She didn't know if she could get out of bed.";
    } else if (state === "isolated") {
        dayText = "Samantha woke up alone. Her phone was quiet. No one had texted her. The room felt too big.";
    } else if (state === "tense_capable") {
        dayText = "Samantha woke up tense. But she knew what she needed to do. Today was going to be hard. She was ready for hard.";
    } else if (state === "coping") {
        dayText = "Samantha woke up neutral. Not great, not terrible. Just another day she had to get through.";
    } else if (state === "connected") {
        dayText = "Samantha woke up feeling supported. Someone had texted her first. It wasn't much. But it was enough to start the day.";
    } else if (state === "thriving") {
        dayText = "Samantha woke up stronger. The trip still hurt. But she had people and she had herself. She could do this.";
    }

    document.getElementById("storyText").innerHTML =
        "<p>It's Saturday. The day of the trip.</p>" +
        "<p>" + dayText + "</p>" +
        "<p>Her phone buzzed. The group chat. Photos of everyone at the bus stop. Everyone except her.</p>";

    document.getElementById("choices").innerHTML =
        "<p>What should Samantha do?</p>";

    if (state === "depleted") {
        addChoice("Stay in bed", stayInBed);
        addChoice("Open the group chat", openGroupChat);
    } else if (state === "isolated") {
        addChoice("Reply to the group chat", replyGroupChat);
        addChoice("Stay in bed", stayInBed);
    } else if (state === "tense_capable") {
        addChoice("Text Valeria", textValeria);
        addChoice("Get up and do something", getUpAndDoSomething);
    } else if (state === "coping") {
        addChoice("Reply to the group chat", replyGroupChat);
        addChoice("Get up and do something", getUpAndDoSomething);
    } else if (state === "connected") {
        addChoice("Text back", textBack);
        addChoice("Get up and do something", getUpAndDoSomething);
    } else if (state === "thriving") {
        addChoice("Text Valeria to check in", textValeriaCheckIn);
        addChoice("Get up and do something", getUpAndDoSomething);
    }
}

function addChoice(label, action) {
    let button = document.createElement("button");
    button.textContent = label;
    button.onclick = action;
    document.getElementById("choices").appendChild(button);
}


// -------------------------
// DAY 2 - CHOICES
// -------------------------

function stayInBed() {
    stress = clamp(stress + 5, 0, 100);
    socialSupport = clamp(socialSupport - 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy - 5, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);
    wellbeing = clamp(wellbeing - 10, 0, 100);
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha stayed in bed all day. She watched the group chat from afar. The day passed slowly. She didn't feel better. She just felt time passing.</p>";

    showEndingButton();
}

function openGroupChat() {
    stress = clamp(stress + 10, 0, 100);
    socialSupport = clamp(socialSupport - 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy - 5, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);
    wellbeing = clamp(wellbeing - 15, 0, 100);
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha opened the group chat. Photo after photo. Everyone smiling. Everyone together. She wasn't there. She couldn't stop scrolling. The more she looked, the worse she felt.</p>";

    showEndingButton();
}

function replyGroupChat() {
    stress = clamp(stress - 5, 0, 100);
    socialSupport = clamp(socialSupport + 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 5, 0, 100);
    wellbeing = clamp(wellbeing + 5, 0, 100);
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha replied to the group chat. Just a short message. A heart. A 'have fun'. It was small. But she didn't disappear completely. And that mattered.</p>";

    showEndingButton();
}

function textValeria() {
    stress = clamp(stress - 10, 0, 100);
    socialSupport = clamp(socialSupport + 10, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 5, 0, 100);
    wellbeing = clamp(wellbeing + 10, 0, 100);
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha texted Valeria. She didn't ask for much. Just a message. Valeria replied a few minutes later. 'I miss you already.' It helped. More than Samantha expected.</p>";

    showEndingButton();
}

function textBack() {
    stress = clamp(stress - 10, 0, 100);
    socialSupport = clamp(socialSupport + 10, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 5, 0, 100);
    wellbeing = clamp(wellbeing + 10, 0, 100);
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha texted back. She wrote more than she meant to. But it felt good to be honest with someone. They texted for a while. She didn't feel so alone.</p>";

    showEndingButton();
}

function textValeriaCheckIn() {
    stress = clamp(stress - 5, 0, 100);
    socialSupport = clamp(socialSupport + 10, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 10, 0, 100);
    wellbeing = clamp(wellbeing + 10, 0, 100);
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha texted Valeria to check in. Not about herself. About Valeria. How was the trip going? Valeria sent back a long message. Samantha read it and smiled. Taking care of someone else made her feel better than being taken care of.</p>";

    showEndingButton();
}

function getUpAndDoSomething() {
    stress = clamp(stress - 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 10, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);
    wellbeing = clamp(wellbeing + 5, 0, 100);
    updateStatus();

    document.getElementById("storyText").innerHTML =
        "<p>Samantha got up. She didn't feel like it. But she did it anyway. She made breakfast. She cleaned her desk. She did things. Small things. But hers.</p>";

    showEndingButton();
}


// -------------------------
// SHOW "CONTINUE TO ENDING" BUTTON
// -------------------------

function showEndingButton() {
    document.getElementById("choices").innerHTML = "";

    const btn = document.getElementById("continueButton");
    btn.style.display = "block";
    btn.textContent = "Continue";
    btn.onclick = function() {
        const endingType = evaluateEnding();
        endStory(endingType);
    };
}


// -------------------------
// ENDINGS
// -------------------------

function evaluateEnding() {
    const profile = agentProfiles[getAgentType()];

    const resilience =
        (socialSupport * profile.socialWeight) +
        (selfEfficacy * profile.efficacyWeight);

    const load =
        (stress * profile.stressWeight) +
        (fatigue * profile.fatigueWeight);

    const score = resilience - load + 50;

    if (score > 80 && wellbeing > 60 && selfEfficacy > 60) return "grew";
    if (score > 65) return "recovered";
    if (socialSupport < 45 && wellbeing < 40) return "disappeared";
    if (fatigue > 60 && selfEfficacy < 40) return "ranout";
    if (wellbeing < 25 && stress < 55) return "numb";
    return "survived";
}

function endStory(endingId) {
    const ending = endingsList.find(function(e) { return e.id === endingId; });

    if (!unlockedEndings.includes(endingId)) {
        unlockedEndings.push(endingId);
    }

    document.getElementById("continueButton").style.display = "none";

    document.getElementById("endingTitle").textContent = ending.name;
    document.getElementById("endingSubtitle").textContent = ending.subtitle;
    document.getElementById("endingDisplay").style.display = "block";
}

function resetGame() {
    stress = 35;
    socialSupport = 65;
    selfEfficacy = 50;
    fatigue = 30;
    wellbeing = 50;

    document.getElementById("endingDisplay").style.display = "none";

    document.getElementById("startScreen").style.display = "block";
    document.getElementById("gameScreen").style.display = "none";

    document.getElementById("continueButton").textContent = "Continue";
    document.getElementById("continueButton").onclick = continueStory;

    renderEndingsTracker();
}


// -------------------------
// ENDINGS TRACKER
// -------------------------

function renderEndingsTracker() {
    const grid = document.getElementById("endingsGrid");
    grid.innerHTML = "";

    endingsList.forEach(function(ending) {
        const div = document.createElement("div");

        if (unlockedEndings.includes(ending.id)) {
            div.textContent = "✓ " + ending.name;
            div.className = "endingUnlocked";
        } else {
            div.textContent = "? ???";
            div.className = "endingLocked";
        }

        grid.appendChild(div);
    });

    document.getElementById("endingsCount").textContent = unlockedEndings.length;
}

// Initialize tracker on page load
renderEndingsTracker();