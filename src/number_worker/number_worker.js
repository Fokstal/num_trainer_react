const engNumbersBefore20 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "elve", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const engNumbersOnTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

const hundred = 100;
const thousand = 1000;
const million = 1000000;
const billion = 1000000000;
const trillion = 1000000000000;

function generateNumberMap(countNumber, difficult) {
    switch (difficult) {
        case 1: {
            return generateToHundred(countNumber);
        }

        default: {
            return "Data is not valid!";
        }
    }
}

function generateToHundred(countNumber = 100) {
    checkCorrectCount(countNumber, hundred);

    const numbers = getNumbersByRange(countNumber, 0, hundred);

    return numbers;
}

function checkCorrectCount(countNumber, range) {
    if (countNumber > range - 1) {
        console.error("Error! Not correct count.")
    }
}

function getNumbersByRange(countNumber, firstNumber, range) {
    let numbers = new Map();
    let i = 0;

    while (i < countNumber) {
        const number = Math.floor(Math.random() * range)
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
                        result += "-" + engNumbersBefore20[temp[2] / 1 - 1];
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
        if (numberStr.length === 12) {
            isCorrect = false;
            continue;
        }

        numberStr = '0' + numberStr;
    }

    return numberStr;
}

export default class NumberWorker {
    static generateToHundred(countNumber) {
        return generateToHundred(countNumber);
    }

    static generateNumberMap(countNumber, difficult) {
        return generateNumberMap(countNumber, difficult);
    }
}