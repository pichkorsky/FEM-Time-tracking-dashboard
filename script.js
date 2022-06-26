const periodSelectors = ["daily", "weekly", "monthly"];

const statsElements = [
    {
        current: "work",
        previous: "work-previous"
    },
    {
        current: "play",
        previous: "play-previous"
    },
    {
        current: "study",
        previous: "study-previous"
    },
    {
        current: "exercise",
        previous: "exercise-previous"
    },
    {
        current: "social",
        previous: "social-previous"
    },
    {
        current: "self",
        previous: "self-previous"
    }
];

// data comes from data.json (HTML <script src="./data.json">)
data = JSON.parse(data);

// period comes from clicked HTML element
function showStats(period) {

    for (let selector of periodSelectors) {

        let selectorElement = document.getElementById(selector);

        if (selector == period) {
            selectorElement.classList.add("period-selected");
            continue;
        }

        selectorElement.classList.remove("period-selected");
    }

    // document.getElementById(period).style.color = "hsl(235, 45%, 61%)"

    for (let i = 0; i <= 5; i++) {
        let currentHrs = data[i].timeframes[period].current;
        let previousHrs = data[i].timeframes[period].previous;

        document.getElementById(statsElements[i].current).innerHTML = currentHrs + getPostfix(currentHrs);
        document.getElementById(statsElements[i].previous).innerHTML = getPrefix(period) + previousHrs + getPostfix(previousHrs);
      
    }
}

function getPrefix(period) {
    switch (period) {
        case "daily":
            return "Yesterday - ";

        case "weekly":
            return "Last week - ";
            
        case "monthly":
            return "Last month - ";
        
        default:
            return "Previous period -  ";
    }
}
    
function getPostfix(hours) {
    return (hours == 1) ? "hr" : "hrs";    
}