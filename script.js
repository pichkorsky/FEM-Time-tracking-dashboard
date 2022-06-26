const periodSelectors = ["daily", "weekly", "monthly"];

const hrsDisplays = [ {current: "work",     previous: "work-previous"    },
                      {current: "play",     previous: "play-previous"    },
                      {current: "study",    previous: "study-previous"   },
                      {current: "exercise", previous: "exercise-previous"},
                      {current: "social",   previous: "social-previous"  },
                      {current: "self",     previous: "self-previous"    }];

let displaysNum = hrsDisplays.length
let highlitedSelector = "daily"; // tracks highlitedSelector and shows daily stats on page load
let stats = JSON.parse(data);    // data comes from data.json (HTML <script src="./data.json">)


// period comes from clicked HTML element
function showStats(period) {

    updateHighlitedSelector(period);

    // show stats
    for (let i = 0; i < displaysNum; i++) {
        let currentHrs = stats[i].timeframes[period].current;
        let previousHrs = stats[i].timeframes[period].previous;

        let currHrsDisplay = document.getElementById(hrsDisplays[i].current);
        let prevHrsDisplay = document.getElementById(hrsDisplays[i].previous);

        currHrsDisplay.innerHTML = currentHrs + getPostfix(currentHrs);
        prevHrsDisplay.innerHTML = getPrefix(period) + previousHrs + getPostfix(previousHrs);
    }
}

function updateHighlitedSelector(selectorToHighlight) {
    if (selectorToHighlight == highlitedSelector) { return; }
    document.getElementById(highlitedSelector).classList.remove("period-selected")
    document.getElementById(selectorToHighlight).classList.add("period-selected");
    highlitedSelector = selectorToHighlight;
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