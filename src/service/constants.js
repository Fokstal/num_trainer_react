// Number Worker

const engNumbersBefore20 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "elve", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const engNumbersOnTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

const hundred = 100;
const thousand = 1000;
const million = 1000000;
const billion = 1000000000;
const trillion = 1000000000000;

//

const presetSettingList = [
    {
        difficult: 0,
        name: "Easy",
        countNumber: 20
    },
    {
        difficult: 1,
        name: "Medium",
        countNumber: 20
    },
    {
        difficult: 2,
        name: "Hard",
        countNumber: 30
    },
    {
        difficult: -1,
        name: "Mix",
        countNumber: 30
    },
];

const minValByDiffArr = [0, hundred, thousand, million, billion];
const maxValByDiffArr = [hundred, thousand, million, billion, trillion]

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Layout

const heartLayout = <i className="fa-regular fa-heart px-1" style={{ color: "red", fontSize: "2rem" }}></i>
const correctRespCharLayout = <i class="fa-solid fa-check" style={{ color: "#4ec922" }}></i>
const incorrectRespCharLayout = <i class="fa-solid fa-xmark" style={{ color: "#c92222" }}></i>

//


export {
    engNumbersBefore20, engNumbersOnTens,
    hundred, thousand, million, billion, trillion,
    presetSettingList,
    minValByDiffArr, maxValByDiffArr,
    delay,
    heartLayout, correctRespCharLayout, incorrectRespCharLayout
}