let selectedAgent;

let stress = 35;
let socialSupport = 65;
let selfEfficacy = 50;
let fatigue = 30;
let wellbeing = 50;

let unlockedEndings = [];
let hasCalledFriend = false;
let usedVices = false; 


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
                choices: [{ label: "Continue", next: "momNews" }]
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
    },

    Fabián: {
        name: "Fabián",
        age: 27,
        start: { stress: 30, socialSupport: 55, selfEfficacy: 70, fatigue: 35, wellbeing: 60 },
        scenes: {
            intro: {
                text: "Fabián got the call at 4:47 PM. It was his manager. Short sentences. 'We're restructuring.' 'We have to let you go.' 'We'll send the details by email.' Fabián sat on the couch and stared at the wall. The apartment was too quiet.",
                effects: { stress: 65, socialSupport: 50, selfEfficacy: 55, fatigue: 50, wellbeing: 30 },
                question: "What should Fabián do?",
                choices: [
                    { label: "Call his best friend", next: "callFriend", effects: { stress: 55, socialSupport: 70, selfEfficacy: 55, fatigue: 50, wellbeing: 30 } },
                    { label: "Start job hunting", next: "jobHunting", effects: { stress: 55, socialSupport: 50, selfEfficacy: 65, fatigue: 50, wellbeing: 35 } },
                    { label: "Tell his family", next: "tellFamily", effects: { stress: 60, socialSupport: 60, selfEfficacy: 55, fatigue: 50, wellbeing: 35 } },
                    { label: "Sit on the couch and do nothing", next: "couch", effects: { stress: 70, socialSupport: 50, selfEfficacy: 55, fatigue: 55, wellbeing: 25 } }
                ]
            },
            
            // ROUTE 1: CALL FRIEND
            callFriend: {
                text: "His friend picked up on the second ring. Fabián didn't say anything at first. Then he said, 'I got fired.' His friend didn't try to fix it. He just listened.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Tell his family", next: "tellFamilyAfterCall", effects: { stress: 45, socialSupport: 75, selfEfficacy: 55, fatigue: 50, wellbeing: 40 } },
                    { label: "Make a plan with his friend", next: "planWithFriend", effects: { stress: 50, socialSupport: 65, selfEfficacy: 65, fatigue: 50, wellbeing: 35 } },
                    { label: "Just vent and not plan", next: "justVent", effects: { stress: 45, socialSupport: 65, selfEfficacy: 50, fatigue: 55, wellbeing: 30 } }
                ]
            },
            tellFamilyAfterCall: {
                text: "Fabián called his mom after talking to his friend. He told her what happened. She listened. She said, 'You're not alone in this.' It didn't fix anything. But it helped.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Thank his friend and hang up", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 80, selfEfficacy: 55, fatigue: 50, wellbeing: 45 } },
                    { label: "Ask his friend for advice", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 75, selfEfficacy: 65, fatigue: 50, wellbeing: 40 } },
                    { label: "Invite his friend to hang out", next: "chooseClosingScene", effects: { stress: 35, socialSupport: 85, selfEfficacy: 55, fatigue: 45, wellbeing: 50 } }
                ]
            },
            planWithFriend: {
                text: "Fabián and his friend started brainstorming. Companies, contacts, ideas. For the first time since the call, Fabián felt like he had a direction.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Thank his friend and hang up", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 80, selfEfficacy: 75, fatigue: 50, wellbeing: 45 } },
                    { label: "Ask his friend for advice", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 75, selfEfficacy: 85, fatigue: 50, wellbeing: 45 } },
                    { label: "Invite his friend to hang out", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 80, selfEfficacy: 75, fatigue: 45, wellbeing: 55 } }
                ]
            },
            justVent: {
                text: "Fabián talked for an hour. He didn't make a plan. He just let it all out. When he hung up, he felt lighter. Not fixed. But lighter.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Thank his friend and hang up", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 70, selfEfficacy: 50, fatigue: 55, wellbeing: 35 } },
                    { label: "Ask his friend for advice", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 70, selfEfficacy: 60, fatigue: 55, wellbeing: 35 } },
                    { label: "Invite his friend to hang out", next: "chooseClosingScene", effects: { stress: 35, socialSupport: 75, selfEfficacy: 50, fatigue: 50, wellbeing: 40 } }
                ]
            },

            // ROUTE 2: JOB HUNTING
            jobHunting: {
                text: "Fabián opened his laptop. He didn't want to feel this. So he did what he knew how to do: he started planning. He opened LinkedIn. He started a list of contacts, old colleagues, companies he admired. Each name was a small piece of control.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Send messages to his contacts", next: "sendMessages", effects: { stress: 45, socialSupport: 65, selfEfficacy: 65, fatigue: 50, wellbeing: 35 } },
                    { label: "Make a detailed plan for the week", next: "detailedPlan", effects: { stress: 50, socialSupport: 50, selfEfficacy: 75, fatigue: 50, wellbeing: 40 } },
                    { label: "Close the laptop and rest", next: "closeLaptop", effects: { stress: 50, socialSupport: 50, selfEfficacy: 60, fatigue: 40, wellbeing: 35 } }
                ]
            },
            sendMessages: {
                text: "Fabián sent five messages. Three people replied within the hour. One of them knew about an opening. It wasn't a job offer. But it was a start.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Send more messages", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 70, selfEfficacy: 70, fatigue: 50, wellbeing: 40 } },
                    { label: "Apply to 3 jobs he actually wants", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 65, selfEfficacy: 75, fatigue: 50, wellbeing: 45 } },
                    { label: "Update his LinkedIn profile", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 65, selfEfficacy: 70, fatigue: 50, wellbeing: 40 } }
                ]
            },
            detailedPlan: {
                text: "Fabián made a plan for the week. Goals, contacts, applications. It was detailed. It was controllable. For the first time since the call, he felt steady.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Start executing the plan", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 50, selfEfficacy: 85, fatigue: 50, wellbeing: 50 } },
                    { label: "Review the plan one more time", next: "chooseClosingScene", effects: { stress: 50, socialSupport: 50, selfEfficacy: 80, fatigue: 50, wellbeing: 45 } },
                    { label: "Take a break before starting", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 50, selfEfficacy: 75, fatigue: 45, wellbeing: 45 } }
                ]
            },
            closeLaptop: {
                text: "Fabián closed the laptop. He didn't want to plan. He just wanted to stop. So he did. He rested. Tomorrow he could start again.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Rest on the couch", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 50, selfEfficacy: 60, fatigue: 35, wellbeing: 40 } },
                    { label: "Make a cup of tea", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 50, selfEfficacy: 60, fatigue: 35, wellbeing: 45 } },
                    { label: "Take a nap", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 50, selfEfficacy: 55, fatigue: 30, wellbeing: 40 } }
                ]
            },

            // ROUTE 3: TELL FAMILY
            tellFamily: {
                text: "Fabián called his mom. He told her what happened. She didn't say much. But she said, 'Come home this weekend. We'll figure it out.' It wasn't a solution. But it was something.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Go home for the weekend", next: "goHome", effects: { stress: 50, socialSupport: 75, selfEfficacy: 55, fatigue: 45, wellbeing: 45 } },
                    { label: "Start job hunting", next: "jobHuntingAfterFamily", effects: { stress: 55, socialSupport: 60, selfEfficacy: 65, fatigue: 50, wellbeing: 35 } },
                    { label: "Take the day to rest and think", next: "restAndThink", effects: { stress: 50, socialSupport: 60, selfEfficacy: 55, fatigue: 35, wellbeing: 40 } }
                ]
            },
            goHome: {
                text: "Fabián went home for the weekend. His mom made his favorite food. They didn't talk about the job. They just were together. It was enough.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Accept and enjoy the weekend", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 90, selfEfficacy: 65, fatigue: 45, wellbeing: 60 } },
                    { label: "Tell her he'll think about it", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 70, selfEfficacy: 60, fatigue: 45, wellbeing: 45 } },
                    { label: "Tell her not to worry", next: "chooseClosingScene", effects: { stress: 55, socialSupport: 60, selfEfficacy: 50, fatigue: 45, wellbeing: 35 } }
                ]
            },
            jobHuntingAfterFamily: {
                text: "Fabián went back to his apartment and started applying. He had support now. And he had a plan.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Apply to 5 more jobs", next: "chooseClosingScene", effects: { stress: 50, socialSupport: 60, selfEfficacy: 70, fatigue: 50, wellbeing: 40 } },
                    { label: "Update his resume", next: "chooseClosingScene", effects: { stress: 55, socialSupport: 60, selfEfficacy: 65, fatigue: 50, wellbeing: 35 } },
                    { label: "Stop and rest for the day", next: "chooseClosingScene", effects: { stress: 50, socialSupport: 60, selfEfficacy: 60, fatigue: 40, wellbeing: 35 } }
                ]
            },
            restAndThink: {
                text: "Fabián didn't do anything. He didn't plan. He didn't call anyone. He just rested. It felt strange. But it also felt necessary.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Sleep for a while", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 60, selfEfficacy: 55, fatigue: 30, wellbeing: 40 } },
                    { label: "Watch a movie", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 60, selfEfficacy: 55, fatigue: 35, wellbeing: 45 } },
                    { label: "Go for a short walk", next: "chooseClosingScene", effects: { stress: 40, socialSupport: 60, selfEfficacy: 60, fatigue: 35, wellbeing: 45 } }
                ]
            },

            // ROUTE 4: COUCH
            couch: {
                text: "Fabián didn't move. He sat on the couch and stared at the wall. The hours passed. He didn't eat. He didn't sleep. He just stayed there, waiting for something to change. Nothing did.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Get up and take a shower", next: "bathroomChoices", effects: { stress: 60, socialSupport: 50, selfEfficacy: 55, fatigue: 50, wellbeing: 30 } },
                    { label: "Call his best friend", next: "callFriendAfterCouch", effects: { stress: 55, socialSupport: 70, selfEfficacy: 55, fatigue: 50, wellbeing: 35 } },
                    { label: "Open his laptop and start planning", next: "planAfterCouch", effects: { stress: 55, socialSupport: 50, selfEfficacy: 65, fatigue: 50, wellbeing: 35 } }
                ]
            },
            callFriendAfterCouch: {
                text: "Fabián called his friend. He didn't know what to say. But his friend stayed on the line anyway.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Ask for advice", next: "chooseClosingScene", effects: { stress: 50, socialSupport: 75, selfEfficacy: 60, fatigue: 50, wellbeing: 40 } },
                    { label: "Just listen to his friend talk", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 75, selfEfficacy: 55, fatigue: 50, wellbeing: 45 } },
                    { label: "Thank him and hang up", next: "chooseClosingScene", effects: { stress: 50, socialSupport: 70, selfEfficacy: 55, fatigue: 50, wellbeing: 40 } }
                ]
            },
            planAfterCouch: {
                text: "Fabián opened his laptop. He started making a list. Names, companies, ideas. It wasn't a solution. But it was a move.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Make a detailed plan", next: "chooseClosingScene", effects: { stress: 50, socialSupport: 50, selfEfficacy: 70, fatigue: 50, wellbeing: 40 } },
                    { label: "Send a few messages", next: "chooseClosingScene", effects: { stress: 45, socialSupport: 60, selfEfficacy: 65, fatigue: 50, wellbeing: 40 } },
                    { label: "Close the laptop and rest", next: "chooseClosingScene", effects: { stress: 50, socialSupport: 50, selfEfficacy: 60, fatigue: 45, wellbeing: 35 } }
                ]
            },

            // CLOSING SCENES (Baño, Cocina, Balcón)
            chooseClosingScene: {
                text: "It was getting late. The day was almost over. Fabián needed to do one last thing before going to sleep.",
                question: "Where should Fabián go?",
                choices: [
                    { label: "Go to the bathroom", next: "bathroomChoices" },
                    { label: "Go to the kitchen", next: "kitchenChoices" },
                    { label: "Go to the balcony", next: "balconyChoices" }
                ]
            },
            bathroomChoices: {
                text: "Fabián stepped into the bathroom and turned on the water. The warm steam filled the room. For the first time all day, he felt like he could breathe.",
                question: "What should Fabián do?",
                choices: [
                    { label: "Take a quick shower", next: "quickShower", effects: { stress: 45, fatigue: 35, wellbeing: 45 } },
                    { label: "Do his skin care routine", next: "skinCare", effects: { stress: 40, fatigue: 40, wellbeing: 55 } },
                    { label: "Shave", next: "shave", effects: { stress: 45, selfEfficacy: 65, wellbeing: 45 } },
                    { label: "Take three sleeping pills instead of two", next: "sleepingPills", effects: { stress: 40, fatigue: 70, selfEfficacy: 20, wellbeing: 10 } }
                ]
            },
            quickShower: { text: "Fabián took a quick shower. It wasn't relaxing. But it woke him up.", effects: { stress: 45, fatigue: 35, wellbeing: 45 }, choices: [] },
            skinCare: { text: "Fabián did his full skin care routine. A small ritual. But it made him feel human again.", effects: { stress: 40, fatigue: 40, wellbeing: 55 }, choices: [] },
            shave: { text: "Fabián shaved carefully. He was still here. And that was enough.", effects: { stress: 45, selfEfficacy: 65, wellbeing: 45 }, choices: [] },
            sleepingPills: { 
                text: "Fabián didn't want to feel anything. He took three sleeping pills instead of two. He just wanted to sleep. To disappear for a while.", 
                effects: { stress: 40, fatigue: 70, selfEfficacy: 20, wellbeing: 10 }, 
                choices: [],
                triggerVices: true 
            },
            
            kitchenChoices: {
                text: "Fabián walked to the kitchen. The dirty dishes were still in the sink. The trash was full. He needed to do something with his hands.",
                question: "What should Fabián do?",
                choices: [
                    { label: "Wash the dishes", next: "washDishes", effects: { stress: 45, fatigue: 55, selfEfficacy: 70, wellbeing: 45 } },
                    { label: "Cook dinner", next: "cookDinner", effects: { stress: 40, fatigue: 40, selfEfficacy: 60, wellbeing: 55 } },
                    { label: "Take out the trash", next: "takeOutTrash", effects: { stress: 45, selfEfficacy: 70, wellbeing: 45 } },
                    { label: "Grab a beer to relax", next: "grabBeer", effects: { stress: 40, fatigue: 60, selfEfficacy: 25, wellbeing: 15 } }
                ]
            },
            washDishes: { text: "Fabián washed the dishes. The warm water and the repetitive motion calmed his mind.", effects: { stress: 45, fatigue: 55, selfEfficacy: 70, wellbeing: 45 }, choices: [] },
            cookDinner: { text: "Fabián cooked dinner. He sat down and ate. It was the first real meal he'd had all day.", effects: { stress: 40, fatigue: 40, selfEfficacy: 60, wellbeing: 55 }, choices: [] },
            takeOutTrash: { text: "Fabián took out the trash. The cold night air hit his face. It felt good to do something physical.", effects: { stress: 45, selfEfficacy: 70, wellbeing: 45 }, choices: [] },
            grabBeer: { 
                text: "Fabián opened a beer. Then another. He just wanted to turn his brain off. It worked. For a little while.", 
                effects: { stress: 40, fatigue: 60, selfEfficacy: 25, wellbeing: 15 }, 
                choices: [],
                triggerVices: true
            },
            
            balconyChoices: {
                text: "Fabián stepped onto the balcony. The night air was cold. The city lights were bright. He just stood there.",
                question: "What should Fabián do?",
                choices: [
                    { label: "Watch the sunset", next: "watchSunset", effects: { stress: 40, wellbeing: 55 } },
                    { label: "Just stand there and breathe", next: "justBreathe", effects: { stress: 45, fatigue: 35, wellbeing: 50 } },
                    { label: "Smoke a cigarette", next: "smokeCigarette", effects: { stress: 35, fatigue: 50, selfEfficacy: 20, wellbeing: 10 } }
                ]
            },
            watchSunset: { text: "Fabián watched the sunset. The sky turned orange and pink. It was beautiful. And for a moment, he forgot about the job.", effects: { stress: 40, wellbeing: 55 }, choices: [] },
            justBreathe: { text: "Fabián stood there and breathed. In. Out. In. Out. The cold air filled his lungs. It was simple. It was enough.", effects: { stress: 45, fatigue: 35, wellbeing: 50 }, choices: [] },
            smokeCigarette: { 
                text: "Fabián lit a cigarette. He didn't even smoke that much. But right now, he needed something to do with his hands. Something to make the anxiety stop.", 
                effects: { stress: 35, fatigue: 50, selfEfficacy: 20, wellbeing: 10 }, 
                choices: [],
                triggerVices: true
            },

            // DAY 2 SCENES
            day2Start: {
                text: "Fabián woke up. The apartment was quiet. He looked at the clock. 8:00 AM. He had the whole day ahead of him, and no job to go to. He could feel the anxiety creeping in.",
                question: "What should Fabián do first?",
                choices: [
                    { label: "Go for a 5km walk", next: "walk1", effects: { stress: 55, fatigue: 50, wellbeing: 35 }, conditions: { badStart: false } },
                    { label: "Make breakfast", next: "makeBreakfast", effects: { stress: 55, fatigue: 45, wellbeing: 40 } },
                    { label: "Stay in bed", next: "stayInBedDay2", effects: { stress: 60, fatigue: 55, wellbeing: 25 }, conditions: { badStart: true } }
                ]
            },
            stayInBedDay2: {
                text: "Fabián didn't want to get up. The bed was warm. The world was cold. He pulled the covers over his head.",
                question: "What should Fabián do?",
                choices: [
                    { label: "Watch series all day", next: "watchSeries", effects: { stress: 50, fatigue: 65, selfEfficacy: 15, wellbeing: 10 } },
                    { label: "Sleep until the afternoon", next: "sleepAfternoon", effects: { stress: 55, fatigue: 60, selfEfficacy: 15, wellbeing: 10 } },
                    { label: "Finally get up and eat something", next: "getUpEat", effects: { stress: 50, fatigue: 45, selfEfficacy: 40, wellbeing: 35 } }
                ]
            },
            watchSeries: { text: "Fabián watched series all day. He didn't move. He didn't eat. He just watched. The world outside didn't exist.", effects: { stress: 50, fatigue: 65, selfEfficacy: 15, wellbeing: 10 }, choices: [] },
            sleepAfternoon: { text: "Fabián slept until the afternoon. When he woke up, the day was already gone. He had done nothing.", effects: { stress: 55, fatigue: 60, selfEfficacy: 15, wellbeing: 10 }, choices: [] },
            getUpEat: { text: "Fabián finally got up. He made a sandwich. It wasn't much. But it was something.", effects: { stress: 50, fatigue: 45, selfEfficacy: 40, wellbeing: 35 }, choices: [] },
            
            walk1: {
                text: "Fabián put on his shoes and went outside. The morning air was cold. He started walking. One kilometer. Two. The rhythm of his steps started to clear his head.",
                question: "What should Fabián do?",
                choices: [
                    { label: "Run for another 30 minutes", next: "runMore", effects: { stress: 40, fatigue: 55, selfEfficacy: 75, wellbeing: 50 } },
                    { label: "Go into a bakery and have breakfast", next: "bakery", effects: { stress: 40, fatigue: 45, wellbeing: 60 } },
                    { label: "Go back home", next: "walkHome", effects: { stress: 50, fatigue: 50, wellbeing: 40 } },
                    { label: "Go to his friend's house", next: "friendHouse", conditions: { calledFriend: true }, effects: { stress: 30, socialSupport: 90, wellbeing: 65 } }
                ]
            },
            runMore: {
                text: "Fabián started running. His lungs burned. But he didn't stop. When he finally stopped, the anxiety was gone. For now.",
                effects: { stress: 35, fatigue: 50, selfEfficacy: 85, wellbeing: 55 },
                choices: []
            },
            bakery: {
                text: "Fabián walked into a small bakery. The smell of fresh bread and coffee filled the air. He sat by the window and ordered a croissant and a black coffee. For a moment, he felt normal.",
                effects: { stress: 40, fatigue: 45, wellbeing: 60 },
                choices: []
            },
            walkHome: {
                text: "Fabián walked back home. The walk helped. He wasn't cured. But he felt a little lighter.",
                effects: { stress: 50, fatigue: 50, wellbeing: 40 },
                choices: []
            },
            friendHouse: {
                text: "Fabián went to his friend's house. They didn't talk about the job. They just hung out. Played video games. Laughed. It was exactly what he needed.",
                effects: { stress: 30, socialSupport: 90, wellbeing: 65 },
                choices: []
            },
            makeBreakfast: {
                text: "Fabián opened the fridge. Eggs, butter, bread. He made himself a proper breakfast. He sat down, ate, and drank his coffee slowly.",
                question: "What should Fabián do next?",
                choices: [
                    { label: "Go to his friend's house", next: "friendHouse", conditions: { calledFriend: true }, effects: { stress: 30, socialSupport: 90, wellbeing: 65 } },
                    { label: "Stay home and plan", next: "stayHomePlan", effects: { stress: 45, selfEfficacy: 80, wellbeing: 50 } },
                    { label: "Go back to bed", next: "stayInBedDay2", effects: { stress: 60, fatigue: 55, wellbeing: 30 } }
                ]
            },
            stayHomePlan: {
                text: "Fabián opened his laptop. He spent the morning applying to jobs and updating his resume. It wasn't fun. But it felt productive.",
                effects: { stress: 45, selfEfficacy: 80, wellbeing: 50 },
                choices: []
            },
            day2BadStart: {
                text: "Fabián woke up with a pounding headache. His mouth was dry. The room was spinning. He felt terrible.",
                question: "What should Fabián do?",
                choices: [
                    { label: "Go back to sleep", next: "sleepAfternoon", effects: { stress: 55, fatigue: 60, selfEfficacy: 15, wellbeing: 10 } },
                    { label: "Scroll on his phone", next: "watchSeries", effects: { stress: 50, fatigue: 65, selfEfficacy: 15, wellbeing: 10 } }
                ]
            }
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

    hasCalledFriend = false;
    usedVices = false;
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

    // Track if Fabián called his friend
    if (sceneId === "callFriend" || sceneId === "callFriendAfterCouch" || sceneId === "tellFamilyAfterCall" || sceneId === "planWithFriend" || sceneId === "justVent") {
        hasCalledFriend = true;
    }

    // Track if Fabián used vices
    if (scene.triggerVices) {
        usedVices = true;
    }

    if (scene.effects) {
        applyEffects(scene.effects);
    }

    document.getElementById("storyText").textContent = scene.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    if (scene.question) {
        const questionEl = document.createElement("p");
        questionEl.textContent = scene.question;
        choicesDiv.appendChild(questionEl);
    }

    if (scene.choices.length === 0) {
        // If it's the end of Fabián's Day 2, evaluate the ending
        if (sceneId === "endDayTwo" || sceneId === "watchSeries" || sceneId === "sleepAfternoon" || sceneId === "getUpEat" || sceneId === "friendHouse" || sceneId === "stayHomePlan" || sceneId === "runMore" || sceneId === "bakery" || sceneId === "walkHome") {
            endStory(evaluateEnding());
            return;
        }
        
        const btn = document.createElement("button");
        btn.textContent = "End of day";
        btn.onclick = endDayOne;
        choicesDiv.appendChild(btn);
        return;
    }

    scene.choices.forEach(function (choice) {
        // Check conditions
        if (choice.conditions) {
            if (choice.conditions.calledFriend && !hasCalledFriend) return;
            if (choice.conditions.badStart && !usedVices) return;
            if (choice.conditions.badStart === false && usedVices) return; 
        }

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

function getPronoun() {
    if (selectedAgent === "Samantha") return "She";
    if (selectedAgent === "Fabián") return "He";
    if (selectedAgent === "Mariana") return "She";
    return "She";
}

function getPronounLower() {
    return getPronoun().toLowerCase();
}


// -------------------------
// ENDINGS DEFINITION
// -------------------------

const endingsList = [
    { id: "recovered", name: "came back", subtitle: "{pronoun} found {pronounLower} way back." },
    { id: "survived", name: "got through it", subtitle: "Not great. Not terrible. {pronoun} is still here." },
    { id: "ranout", name: "ran out", subtitle: "{pronoun} kept going, but {pronounLower} has nothing left." },
    { id: "grew", name: "grew", subtitle: "{pronoun} didn't just survive. {pronoun} changed." }
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
        "<div class='stat'><span>Stress</span><div class='barContainer'><div class='bar'><div class='barFill fill-stress' style='width: " + stress + "%'></div></div><span class='statNumber'>" + stress + "%</span></div></div>" +
        "<div class='stat'><span>Social Support</span><div class='barContainer'><div class='bar'><div class='barFill fill-social' style='width: " + socialSupport + "%'></div></div><span class='statNumber'>" + socialSupport + "%</span></div></div>" +
        "<div class='stat'><span>Self-Efficacy</span><div class='barContainer'><div class='bar'><div class='barFill fill-efficacy' style='width: " + selfEfficacy + "%'></div></div><span class='statNumber'>" + selfEfficacy + "%</span></div></div>" +
        "<div class='stat'><span>Fatigue</span><div class='barContainer'><div class='bar'><div class='barFill fill-fatigue' style='width: " + fatigue + "%'></div></div><span class='statNumber'>" + fatigue + "%</span></div></div>" +
        "<div class='stat'><span>Well-being</span><div class='barContainer'><div class='bar'><div class='barFill fill-wellbeing' style='width: " + wellbeing + "%'></div></div><span class='statNumber'>" + wellbeing + "%</span></div></div>";
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
    if (selectedAgent === "Fabián") {
        stress = clamp(stress + 10, 0, 100);
        fatigue = clamp(fatigue + 5, 0, 100);
        updateStatus();
        
        if (usedVices) {
            showScene("day2BadStart");
        } else {
            showScene("day2Start");
        }
        return;
    }

    // ... (Samantha's Day 2 logic) ...
    stress = clamp(stress + 10, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);

    updateStatus();

    const state = evaluateDayOneState();
    const pronoun = getPronoun();
    const pronounLower = getPronounLower();

    let dayText = "";

    if (state === "depleted") {
        dayText = pronoun + " woke up exhausted. The weight of yesterday was still there, heavier than before.";
    } else if (state === "isolated") {
        dayText = pronoun + " woke up alone. The phone was quiet. No one had texted.";
    } else if (state === "tense_capable") {
        dayText = pronoun + " woke up tense. But " + pronounLower + " knew what " + pronounLower + " needed to do.";
    } else if (state === "coping") {
        dayText = pronoun + " woke up neutral. Not great, not terrible.";
    } else if (state === "connected") {
        dayText = pronoun + " woke up feeling supported. Someone had texted first.";
    } else if (state === "thriving") {
        dayText = pronoun + " woke up stronger. " + pronoun + " could do this.";
    }

    document.getElementById("storyText").innerHTML =
        "<p>It's the next day.</p><p>" + dayText + "</p>";

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "<p>What should " + selectedAgent + " do?</p>";

    if (state === "depleted") {
        addChoice("Stay in bed", stayInBed);
        addChoice("Open the phone", openGroupChat);
    } else if (state === "isolated") {
        addChoice("Reply to a message", replyGroupChat);
        addChoice("Stay in bed", stayInBed);
    } else if (state === "tense_capable") {
        addChoice("Text a friend", textValeria);
        addChoice("Get up and do something", getUpAndDoSomething);
    } else if (state === "coping") {
        addChoice("Reply to a message", replyGroupChat);
        addChoice("Get up and do something", getUpAndDoSomething);
    } else if (state === "connected") {
        addChoice("Text back", textBack);
        addChoice("Get up and do something", getUpAndDoSomething);
    } else if (state === "thriving") {
        addChoice("Text a friend to check in", textValeriaCheckIn);
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
// DAY 2 - CHOICES (Samantha)
// -------------------------

function stayInBed() {
    stress = clamp(stress + 5, 0, 100);
    socialSupport = clamp(socialSupport - 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy - 5, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);
    wellbeing = clamp(wellbeing - 10, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>" + selectedAgent + " stayed in bed all day. The day passed slowly.</p>";
    showEndingButton();
}

function openGroupChat() {
    stress = clamp(stress + 10, 0, 100);
    socialSupport = clamp(socialSupport - 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy - 5, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);
    wellbeing = clamp(wellbeing - 15, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>" + selectedAgent + " opened the phone. Message after message. The more " + getPronounLower() + " looked, the worse it felt.</p>";
    showEndingButton();
}

function replyGroupChat() {
    stress = clamp(stress - 5, 0, 100);
    socialSupport = clamp(socialSupport + 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 5, 0, 100);
    wellbeing = clamp(wellbeing + 5, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>" + selectedAgent + " replied. Just a short message. It was small. But it mattered.</p>";
    showEndingButton();
}

function textValeria() {
    stress = clamp(stress - 10, 0, 100);
    socialSupport = clamp(socialSupport + 10, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 5, 0, 100);
    wellbeing = clamp(wellbeing + 10, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>" + selectedAgent + " texted a friend. 'I miss you.' It helped. More than expected.</p>";
    showEndingButton();
}

function textBack() {
    stress = clamp(stress - 10, 0, 100);
    socialSupport = clamp(socialSupport + 10, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 5, 0, 100);
    wellbeing = clamp(wellbeing + 10, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>" + selectedAgent + " texted back. " + getPronoun() + " didn't feel so alone.</p>";
    showEndingButton();
}

function textValeriaCheckIn() {
    stress = clamp(stress - 5, 0, 100);
    socialSupport = clamp(socialSupport + 10, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 10, 0, 100);
    wellbeing = clamp(wellbeing + 10, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>" + selectedAgent + " texted a friend to check in. Taking care of someone else felt better than being taken care of.</p>";
    showEndingButton();
}

function getUpAndDoSomething() {
    stress = clamp(stress - 5, 0, 100);
    selfEfficacy = clamp(selfEfficacy + 10, 0, 100);
    fatigue = clamp(fatigue + 5, 0, 100);
    wellbeing = clamp(wellbeing + 5, 0, 100);
    updateStatus();
    document.getElementById("storyText").innerHTML = "<p>" + selectedAgent + " got up. " + getPronoun() + " didn't feel like it. But " + getPronounLower() + " did it anyway.</p>";
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

    // Final negativo
    if (fatigue > 60 && selfEfficacy < 40) return "ranout";
    
    // "He grew" ahora es más alcanzable
    if (score > 70 && wellbeing > 55 && selfEfficacy > 55) return "grew";
    
    // "He came back"
    if (score > 60) return "recovered";
    
    // "He got through it"
    return "survived";
}

function endStory(endingId) {
    const ending = endingsList.find(function (e) { return e.id === endingId; });

    if (!unlockedEndings.includes(endingId)) {
        unlockedEndings.push(endingId);
    }

    document.getElementById("continueButton").style.display = "none";

    const pronoun = getPronoun();
    const pronounLower = getPronounLower();

    document.getElementById("endingTitle").textContent =
        pronoun + " " + ending.name;

    document.getElementById("endingSubtitle").textContent =
        ending.subtitle
            .replace(/\{pronoun\}/g, pronoun)
            .replace(/\{pronounLower\}/g, pronounLower);

    document.getElementById("endingDisplay").style.display = "block";

    renderEndingsTracker();
}

function resetGame() {
    stress = 35;
    socialSupport = 65;
    selfEfficacy = 50;
    fatigue = 30;
    wellbeing = 50;

    hasCalledFriend = false;
    usedVices = false;

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

    const pronoun = getPronoun();

    endingsList.forEach(function (ending) {
        const div = document.createElement("div");

        if (unlockedEndings.includes(ending.id)) {
            div.textContent = "✓ " + pronoun + " " + ending.name;
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

// -------------------------
// MODAL CONTROLS
// -------------------------

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cerrar modal si se hace clic fuera
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}