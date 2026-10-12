let selectedAgent;

let stress = 35;
let socialSupport = 65;
let selfEfficacy = 50;
let fatigue = 30;
let wellbeing = 50;

let unlockedEndings = [];


// -------------------------
// STORIES DATA
// -------------------------

const stories = {
    Samantha: {
        name: "Samantha",
        age: 16,
        start: { stress: 35, socialSupport: 65, selfEfficacy: 50, fatigue: 30, wellbeing: 50 },
        scenes: {
            intro: {
                text: "Samantha is excited about the upcoming school trip.",
                choices: [
                    { label: "Continue", next: "momNews" }
                ]
            },
            momNews: {
                text: "For the past few weeks, Samantha had been looking forward to the school trip. She had already imagined the places she would visit, the jokes she would make with her friends, and everything she would tell them about afterward. But this morning, her mom told her she couldn't go. Samantha felt the air leave her chest.",
                effects: { stress: 70, socialSupport: 50, selfEfficacy: 35, fatigue: 45, wellbeing: 20 },
                question: "What should Samantha do?",
                choices: [
                    { label: "Call a friend", next: "callFriend" },
                    { label: "Try to fix it", next: "tryToFix" }
                ]
            },
            callFriend: {
                text: "Samantha didn't want to be alone with her thoughts. She grabbed her phone.",
                question: "Who should Samantha call?",
                choices: [
                    { label: "Valeria", next: "valeria", effects: { stress: 55, socialSupport: 70, selfEfficacy: 40, fatigue: 40, wellbeing: 35 } },
                    { label: "Josefina", next: "josefina", effects: { stress: 75, socialSupport: 45, selfEfficacy: 30, fatigue: 50, wellbeing: 15 } }
                ]
            },
            valeria: {
                text: "Valeria listened to her without interrupting. She didn't tell Samantha that she was overreacting or that everything would be fine. She simply stayed on the phone and let her talk.",
                question: "What should Samantha do next?",
                choices: [
                    { label: "Talk to her mom", next: "talkToMom" },
                    { label: "Write in her diary", next: "writeDiary" },
                    { label: "Bake something sweet", next: "bakeCookies" }
                ]
            },
            josefina: {
                text: "Josefina listened for a moment, but her response left Samantha feeling even more alone.",
                question: "What should Samantha do next?",
                choices: [
                    { label: "Post on Close Friends", next: "postOnInstagram" },
                    { label: "Scroll through TikTok", next: "scrollTikTok" },
                    { label: "Organize her room", next: "organizeRoom" }
                ]
            },
            talkToMom: {
                text: "Samantha talked to her mom and tried to understand her reasons.",
                effects: { stress: 40, socialSupport: 75, selfEfficacy: 50, fatigue: 35, wellbeing: 50 },
                question: "What should Samantha do next?",
                choices: [
                    { label: "Make homework", next: "makeHomework" },
                    { label: "Watch a movie with mom", next: "watchMovieWithMom" },
                    { label: "Go for a walk", next: "goForWalk" }
                ]
            },
            writeDiary: {
                text: "Samantha wrote in her diary about how she was feeling.",
                effects: { stress: 45, socialSupport: 70, selfEfficacy: 50, fatigue: 35, wellbeing: 50 },
                question: "What should Samantha do next?",
                choices: [
                    { label: "Write a letter to her future self", next: "writeLetter" },
                    { label: "Make a drawing", next: "makeDrawing" }
                ]
            },
            bakeCookies: {
                text: "Samantha baked cookies and felt a sense of accomplishment.",
                effects: { stress: 45, socialSupport: 70, selfEfficacy: 55, fatigue: 35, wellbeing: 55 },
                question: "What should Samantha do next?",
                choices: [
                    { label: "Eat the cookies", next: "eatCookies" },
                    { label: "Share the cookies with mom", next: "shareCookies" },
                    { label: "Post a picture on Instagram", next: "postCookies" }
                ]
            },
            makeHomework: { text: "Samantha focused on her homework and felt a sense of accomplishment.", effects: { stress: 30, socialSupport: 75, selfEfficacy: 60, fatigue: 40, wellbeing: 65 }, choices: [] },
            watchMovieWithMom: { text: "Samantha watched a movie with her mom and felt comforted.", effects: { stress: 25, socialSupport: 85, selfEfficacy: 50, fatigue: 25, wellbeing: 65 }, choices: [] },
            goForWalk: { text: "Samantha went for a walk and felt refreshed.", effects: { stress: 20, socialSupport: 80, selfEfficacy: 55, fatigue: 25, wellbeing: 65 }, choices: [] },
            writeLetter: { text: "Samantha wrote a letter to her future self.", effects: { stress: 40, socialSupport: 70, selfEfficacy: 55, fatigue: 35, wellbeing: 60 }, choices: [] },
            makeDrawing: { text: "Samantha drew for an hour. She felt a little lighter.", effects: { stress: 45, socialSupport: 70, selfEfficacy: 50, fatigue: 40, wellbeing: 55 }, choices: [] },
            eatCookies: { text: "Samantha ate the cookies while they were still warm.", effects: { stress: 40, socialSupport: 70, selfEfficacy: 55, fatigue: 35, wellbeing: 60 }, choices: [] },
            shareCookies: { text: "Samantha shared the cookies with her mom.", effects: { stress: 35, socialSupport: 80, selfEfficacy: 55, fatigue: 35, wellbeing: 65 }, choices: [] },
            postCookies: { text: "Samantha posted a picture of the cookies. It didn't help.", effects: { stress: 50, socialSupport: 60, selfEfficacy: 45, fatigue: 40, wellbeing: 45 }, choices: [] },
            postOnInstagram: {
                text: "Samantha posted on Close Friends, but it did not help her feel better.",
                effects: { stress: 80, socialSupport: 50, selfEfficacy: 20, fatigue: 55, wellbeing: 10 },
                question: "What should Samantha do next?",
                choices: [
                    { label: "Delete the post", next: "deletePost" },
                    { label: "Obsessively checking story viewers", next: "checkStory" },
                    { label: "Airplane mode + full volume music", next: "airplaneMode" }
                ]
            },
            deletePost: { text: "Samantha deleted the post. The silence after was worse than before.", effects: { stress: 75, socialSupport: 50, selfEfficacy: 25, fatigue: 55, wellbeing: 15 }, choices: [] },
            checkStory: { text: "Samantha checked the story viewers over and over. She felt worse.", effects: { stress: 85, socialSupport: 45, selfEfficacy: 20, fatigue: 60, wellbeing: 10 }, choices: [] },
            airplaneMode: { text: "Samantha put her phone on airplane mode and let music drown everything out.", effects: { stress: 65, socialSupport: 50, selfEfficacy: 30, fatigue: 50, wellbeing: 25 }, choices: [] },
            scrollTikTok: {
                text: "Samantha scrolled through TikTok, but it did not help her feel better.",
                effects: { stress: 70, socialSupport: 45, selfEfficacy: 25, fatigue: 55, wellbeing: 10 },
                question: "What should Samantha do next?",
                choices: [
                    { label: "Watch TikTok until she falls asleep", next: "watchUntilSleep" },
                    { label: "Search for how to manage anxiety", next: "searchAnxiety" },
                    { label: "Close her phone and try to sleep", next: "closePhoneAndSleep" }
                ]
            },
            watchUntilSleep: { text: "Samantha watched TikTok until she fell asleep. She didn't rest well.", effects: { stress: 75, socialSupport: 45, selfEfficacy: 25, fatigue: 65, wellbeing: 10 }, choices: [] },
            searchAnxiety: { text: "Samantha searched for how to manage anxiety. She felt worse.", effects: { stress: 80, socialSupport: 45, selfEfficacy: 25, fatigue: 60, wellbeing: 15 }, choices: [] },
            closePhoneAndSleep: { text: "Samantha closed her phone and tried to sleep. Tomorrow would be better. Maybe.", effects: { stress: 60, socialSupport: 50, selfEfficacy: 40, fatigue: 50, wellbeing: 30 }, choices: [] },
            organizeRoom: {
                text: "Samantha organized her room, which helped her feel more in control.",
                effects: { stress: 60, socialSupport: 45, selfEfficacy: 45, fatigue: 60, wellbeing: 30 },
                question: "What should Samantha do next?",
                choices: [
                    { label: "Do a deep cleaning", next: "deepCleaning" },
                    { label: "Rearrange the furniture", next: "rearrangeFurniture" },
                    { label: "Organize her bookshelf", next: "organizeBookshelf" }
                ]
            },
            deepCleaning: { text: "Samantha deep cleaned her room. She was exhausted but her room felt new.", effects: { stress: 55, socialSupport: 45, selfEfficacy: 55, fatigue: 70, wellbeing: 35 }, choices: [] },
            rearrangeFurniture: { text: "Samantha rearranged the furniture. The room felt different.", effects: { stress: 55, socialSupport: 45, selfEfficacy: 50, fatigue: 65, wellbeing: 35 }, choices: [] },
            organizeBookshelf: { text: "Samantha organized her bookshelf. It was calming.", effects: { stress: 55, socialSupport: 45, selfEfficacy: 50, fatigue: 55, wellbeing: 40 }, choices: [] },
            tryToFix: {
                text: "Samantha didn't want to just sit with it. She wanted to do something.",
                effects: { stress: 65, socialSupport: 50, selfEfficacy: 45, fatigue: 45, wellbeing: 25 },
                question: "What should Samantha do?",
                choices: [
                    { label: "Talk to her mom again", next: "fixWithMom" },
                    { label: "Talk to another adult she trusts", next: "fixWithAdult" },
                    { label: "Make her own plan", next: "makeOwnPlan" }
                ]
            },
            fixWithMom: {
                text: "Samantha went back to her mom. Not to argue. To understand.",
                effects: { stress: 55, socialSupport: 65, selfEfficacy: 50, fatigue: 40, wellbeing: 35 },
                question: "What should Samantha say?",
                choices: [
                    { label: "Ask why she can't go", next: "momAskWhy" },
                    { label: "Try to negotiate", next: "momNegotiate" },
                    { label: "Accept it, even if it hurts", next: "momAccept" }
                ]
            },
            momAskWhy: { text: "Samantha asked why. She understood a little better.", effects: { stress: 55, socialSupport: 65, selfEfficacy: 50, fatigue: 40, wellbeing: 40 }, choices: [] },
            momNegotiate: { text: "Samantha tried to negotiate. Her mom said no, but gently.", effects: { stress: 60, socialSupport: 60, selfEfficacy: 55, fatigue: 40, wellbeing: 35 }, choices: [] },
            momAccept: { text: "Samantha stopped fighting. Sometimes accepting is not giving up.", effects: { stress: 50, socialSupport: 65, selfEfficacy: 45, fatigue: 40, wellbeing: 45 }, choices: [] },
            fixWithAdult: {
                text: "Samantha thought about who else she could talk to.",
                effects: { stress: 60, socialSupport: 60, selfEfficacy: 45, fatigue: 45, wellbeing: 30 },
                question: "What should Samantha ask?",
                choices: [
                    { label: "Ask them to talk to her mom", next: "adultIntercede" },
                    { label: "Just tell them how she feels", next: "adultVent" },
                    { label: "Ask for their perspective", next: "adultPerspective" }
                ]
            },
            adultIntercede: { text: "Someone was willing to try for her.", effects: { stress: 55, socialSupport: 70, selfEfficacy: 50, fatigue: 45, wellbeing: 40 }, choices: [] },
            adultVent: { text: "They just listened. Sometimes that's what you need.", effects: { stress: 55, socialSupport: 70, selfEfficacy: 45, fatigue: 45, wellbeing: 45 }, choices: [] },
            adultPerspective: { text: "It didn't fix anything. But it made her feel less stuck.", effects: { stress: 50, socialSupport: 65, selfEfficacy: 55, fatigue: 45, wellbeing: 45 }, choices: [] },
            makeOwnPlan: {
                text: "Samantha couldn't change the trip. But she could change what she did that day.",
                effects: { stress: 55, socialSupport: 50, selfEfficacy: 55, fatigue: 45, wellbeing: 40 },
                question: "What should Samantha plan?",
                choices: [
                    { label: "Plan something fun for that day", next: "planFunDay" },
                    { label: "Plan a trip with her friends later", next: "planFriendsTrip" },
                    { label: "Write about what she's feeling", next: "writeAboutIt" }
                ]
            },
            planFunDay: { text: "She wrote down three things she wanted to do. It made the day feel less empty.", effects: { stress: 45, socialSupport: 55, selfEfficacy: 65, fatigue: 45, wellbeing: 60 }, choices: [] },
            planFriendsTrip: { text: "It was with people she chose.", effects: { stress: 45, socialSupport: 70, selfEfficacy: 60, fatigue: 45, wellbeing: 60 }, choices: [] },
            writeAboutIt: { text: "She felt a little lighter.", effects: { stress: 50, socialSupport: 50, selfEfficacy: 55, fatigue: 45, wellbeing: 50 }, choices: [] }
        }
    }
};


// -------------------------
// SCENE ENGINE
// -------------------------

let currentStory = null;
let currentSceneId = null;

function startStory(agentName) {
    currentStory = stories[agentName];

    stress = currentStory.start.stress;
    socialSupport = currentStory.start.socialSupport;
    selfEfficacy = currentStory.start.selfEfficacy;
    fatigue = currentStory.start.fatigue;
    wellbeing = currentStory.start.wellbeing;

    updateStatus();
    showScene("intro");
}

function showScene(sceneId) {
    currentSceneId = sceneId;
    const scene = currentStory.scenes[sceneId];

    if (!scene) {
        endStory(evaluateEnding());
        return;
    }

    if (scene.effects) {
        applyEffects(scene.effects);
    }

    // Big blue box: only the story text
    document.getElementById("storyText").textContent = scene.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    // Small question above the buttons
    if (scene.question) {
        const questionEl = document.createElement("p");
        questionEl.textContent = scene.question;
        choicesDiv.appendChild(questionEl);
    }

    if (scene.choices.length === 0) {
        const btn = document.createElement("button");
        btn.textContent = "End of day";
        btn.onclick = endDayOne;
        choicesDiv.appendChild(btn);
        return;
    }

    scene.choices.forEach(function (choice) {
        const button = document.createElement("button");
        button.textContent = choice.label;
        button.onclick = function () {
            applyEffects(choice.effects);
            showScene(choice.next);
        };
        choicesDiv.appendChild(button);
    });
}

function applyEffects(effects) {
    if (!effects) return;
    if (effects.stress !== undefined) stress = effects.stress;
    if (effects.socialSupport !== undefined) socialSupport = effects.socialSupport;
    if (effects.selfEfficacy !== undefined) selfEfficacy = effects.selfEfficacy;
    if (effects.fatigue !== undefined) fatigue = effects.fatigue;
    if (effects.wellbeing !== undefined) wellbeing = effects.wellbeing;
    updateStatus();
}


// -------------------------
// AGENT PROFILES
// -------------------------

const agentProfiles = {
    teenager: { socialWeight: 0.6, efficacyWeight: 0.4, stressWeight: 0.5, fatigueWeight: 0.5 },
    adult: { socialWeight: 0.4, efficacyWeight: 0.6, stressWeight: 0.5, fatigueWeight: 0.5 },
    elder: { socialWeight: 0.5, efficacyWeight: 0.5, stressWeight: 0.4, fatigueWeight: 0.6 }
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
    { id: "recovered", name: "She came back", subtitle: "She found her way back to herself." },
    { id: "survived", name: "She got through it", subtitle: "Not great. Not terrible. She's still here." },
    { id: "ranout", name: "She ran out", subtitle: "She kept going, but she has nothing left." },
    { id: "grew", name: "She grew", subtitle: "She didn't just survive. She changed." }
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

    startStory(agentName);
}


// -------------------------
// UPDATE STATUS BARS
// -------------------------

function updateStatus() {
    let statusPanel = document.getElementById("statusPanel");

    statusPanel.innerHTML =
        "<div class='stat'><span>Stress</span><div class='barContainer'><div class='bar'><div class='barFill' style='width: " + stress + "%'></div></div><span class='statNumber'>" + stress + "%</span></div></div>" +
        "<div class='stat'><span>Social Support</span><div class='barContainer'><div class='bar'><div class='barFill' style='width: " + socialSupport + "%'></div></div><span class='statNumber'>" + socialSupport + "%</span></div></div>" +
        "<div class='stat'><span>Self-Efficacy</span><div class='barContainer'><div class='bar'><div class='barFill' style='width: " + selfEfficacy + "%'></div></div><span class='statNumber'>" + selfEfficacy + "%</span></div></div>" +
        "<div class='stat'><span>Fatigue</span><div class='barContainer'><div class='bar'><div class='barFill' style='width: " + fatigue + "%'></div></div><span class='statNumber'>" + fatigue + "%</span></div></div>" +
        "<div class='stat'><span>Well-being</span><div class='barContainer'><div class='bar'><div class='barFill' style='width: " + wellbeing + "%'></div></div><span class='statNumber'>" + wellbeing + "%</span></div></div>";
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

    const state = evaluateDayOneState();

    let dayText = "";

    if (state === "depleted") {
        dayText = "Samantha woke up exhausted. The weight of yesterday was still there, heavier than before.";
    } else if (state === "isolated") {
        dayText = "Samantha woke up alone. Her phone was quiet. No one had texted her.";
    } else if (state === "tense_capable") {
        dayText = "Samantha woke up tense. But she knew what she needed to do.";
    } else if (state === "coping") {
        dayText = "Samantha woke up neutral. Not great, not terrible.";
    } else if (state === "connected") {
        dayText = "Samantha woke up feeling supported. Someone had texted her first.";
    } else if (state === "thriving") {
        dayText = "Samantha woke up stronger. She could do this.";
    }

    document.getElementById("storyText").innerHTML =
        "<p>It's Saturday. The day of the trip.</p><p>" + dayText + "</p><p>Her phone buzzed. The group chat. Photos of everyone at the bus stop. Everyone except her.</p>";

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "<p>What should Samantha do?</p>";

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
    document.getElementById("storyText").innerHTML = "<p>Samantha stayed in bed all day. The day passed slowly.</p>";
    showEndingButton();
}

function openGroupChat() {
    stress = clamp(stress + 10, 0, 100);
    socialSupport = clamp(socialSupport - 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy - 5, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);
    wellbeing = clamp(wellbeing - 15, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>Samantha opened the group chat. Photo after photo. The more she looked, the worse she felt.</p>";
    showEndingButton();
}

function replyGroupChat() {
    stress = clamp(stress - 5, 0, 100);
    socialSupport = clamp(socialSupport + 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 5, 0, 100);
    wellbeing = clamp(wellbeing + 5, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>Samantha replied to the group chat. Just a short message. It was small. But she didn't disappear completely.</p>";
    showEndingButton();
}

function textValeria() {
    stress = clamp(stress - 10, 0, 100);
    socialSupport = clamp(socialSupport + 10, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 5, 0, 100);
    wellbeing = clamp(wellbeing + 10, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>Samantha texted Valeria. 'I miss you already.' It helped. More than she expected.</p>";
    showEndingButton();
}

function textBack() {
    stress = clamp(stress - 10, 0, 100);
    socialSupport = clamp(socialSupport + 10, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 5, 0, 100);
    wellbeing = clamp(wellbeing + 10, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>Samantha texted back. She didn't feel so alone.</p>";
    showEndingButton();
}

function textValeriaCheckIn() {
    stress = clamp(stress - 5, 0, 100);
    socialSupport = clamp(socialSupport + 10, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 10, 0, 100);
    wellbeing = clamp(wellbeing + 10, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>Samantha texted Valeria to check in. Taking care of someone else made her feel better than being taken care of.</p>";
    showEndingButton();
}

function getUpAndDoSomething() {
    stress = clamp(stress - 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 10, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);
    wellbeing = clamp(wellbeing + 5, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>Samantha got up. She didn't feel like it. But she did it anyway.</p>";
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
    btn.onclick = function () {
        const endingType = evaluateEnding();
        endStory(endingType);
    };
}


// -------------------------
// EVALUATE ENDING
// -------------------------

function evaluateEnding() {
    const profile = agentProfiles[getAgentType()];
    const resilience = (socialSupport * profile.socialWeight) + (selfEfficacy * profile.efficacyWeight);
    const load = (stress * profile.stressWeight) + (fatigue * profile.fatigueWeight);
    const score = resilience - load + 50;

    if (fatigue > 60 && selfEfficacy < 40) return "ranout";
    if (score > 80 && wellbeing > 60 && selfEfficacy > 60) return "grew";
    if (score > 65) return "recovered";
    return "survived";
}

function endStory(endingId) {
    const ending = endingsList.find(function (e) { return e.id === endingId; });

    if (!unlockedEndings.includes(endingId)) {
        unlockedEndings.push(endingId);
    }

    document.getElementById("continueButton").style.display = "none";
    document.getElementById("endingTitle").textContent = ending.name;
    document.getElementById("endingSubtitle").textContent = ending.subtitle;
    document.getElementById("endingDisplay").style.display = "block";

    renderEndingsTracker();
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

    renderEndingsTracker();
}


// -------------------------
// ENDINGS TRACKER
// -------------------------

function renderEndingsTracker() {
    const grid = document.getElementById("endingsGrid");
    grid.innerHTML = "";

    endingsList.forEach(function (ending) {
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

renderEndingsTracker();