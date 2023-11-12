import {
    engNumbersBefore20, engNumbersOnTens,
    minValByDiffArr, maxValByDiffArr
} from "./constants";

const maxNumberStrLength = 12;

let currentSeparator = null;

function generateNumberMap(countNumber, difficult, separator) {
    currentSeparator = separator;

    if (difficult >= 0) {
        return generateNumberMapByRange(minValByDiffArr[difficult], maxValByDiffArr[difficult], countNumber);
    }

    // return generateNumberMapMix
}

function generateNumberMapByRange(minValue, maxValue, countNumber = 100) {
    checkCorrectCount(countNumber, 100);

    const numbers = getNumbersByRange(countNumber, minValue, maxValue);

    return numbers;
}

function checkCorrectCount(countNumber, range) {
    if (countNumber > range - 1) {
        console.error("Error! Not correct count.")
    }
}

// Random by range
function getNumbersByRange(countNumber, firstNumber, range) {
    let numbers = new Map();
    let i = 0;

    while (i < countNumber) {
        const number = Math.floor(Math.random() * (range + 1))
        let word = getWordByNumber(number);

        if (!numbers.has(number)) {
            numbers.set(number, word);
            i++;
        }
    }

    return numbers;
}

function getWordByNumber(number) {
    let numberStr = convertStringToCorrectForm(number + "");
    let result = "";
    let rank = 1;

    while (numberStr.length > 0) {
        let temp = numberStr.substring(0, 3);
        numberStr = numberStr.substring(3);

        if (temp !== "000") {
            if (temp[0] !== "0") {
                result += engNumbersBefore20[temp[0] * 1 - 1] + " hundred and ";
            }

            if (temp.substring(1) !== "00") {
                let numberTemp = temp.substring(1) * 1;


                if (numberTemp < 20) {
                    result += engNumbersBefore20[temp.substring(1) / 1 - 1];
                }

                if (numberTemp >= 20) {
                    result += engNumbersOnTens[temp[1] / 1 - 2];

                    if (temp[2] / 1 - 1 > -1) {
                        result += currentSeparator + engNumbersBefore20[temp[2] / 1 - 1];
                    }
                }
            }

            switch (rank) {
                case 1:
                    {
                        result += " billion ";
                        break;
                    }

                case 2:
                    {
                        result += " million ";
                        break;
                    }

                case 3:
                    {
                        result += " thousand ";
                        break;
                    }

                default: { }
            }
        }

        rank++;
    }

    return result;
}

function convertStringToCorrectForm(numberStr) {
    let isCorrect = true;

    while (isCorrect) {
        if (numberStr.length === maxNumberStrLength) {
            isCorrect = false;
            continue;
        }

        numberStr = '0' + numberStr;
    }

    return numberStr;
}

export default class NumberWorker {
    static generateNumberMap(countNumber, difficult, separator) {
        return generateNumberMap(countNumber, difficult, separator);
    }
}