let selectedAgent;

function selectAgent(agentName) {
    selectedAgent = agentName;
}

function continueStory() {
    
    document.getElementById("storyText").textContent = "Her mom had just told her she wouldn't be allowed to go on the upcoming school trip.";
    document.getElementById("choices").innerHTML = "";
    let choiceButton = document.createElement("button");
    choiceButton.textContent = "Call a friend";
    document.getElementById("choices").appendChild(choiceButton);
}