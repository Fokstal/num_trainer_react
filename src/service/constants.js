const presetSettingList = [
    {
        difficult: 1,
        name: "Easy",
        countNumber: 20
    },
    {
        difficult: 2,
        name: "Medium",
        countNumber: 20
    },
    {
        difficult: 3,
        name: "Hard",
        countNumber: 30
    },
    {
        difficult: -1,
        name: "Mix",
        countNumber: 30
    },
];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Layout

const heartLayout = <i className="fa-regular fa-heart px-1" style={{ color: "red", fontSize: "2rem" }}></i>
const correctRespCharLayout = <i class="fa-solid fa-check" style={{ color: "#4ec922" }}></i>
const incorrectRespCharLayout = <i class="fa-solid fa-xmark" style={{ color: "#c92222" }}></i>

export { presetSettingList, delay, heartLayout, correctRespCharLayout, incorrectRespCharLayout }