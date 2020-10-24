module.exports = function toReadable (number) {
    let resultString = "";
    let arr = number.toString().split("").reverse().map(el => parseInt(el));
    let numbersArr = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let numbersTenArr = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];

    if (number === 0) return "zero"
    if (number < 20) return numbersArr[number].trim()
    if (number > 19 && number < 100) return (numbersTenArr[arr[1]] + numbersArr[arr[0]]).trim()
    let tens = (number - arr[2] * 100)
    let ost = ""
    if (tens < 20) ost = numbersArr[tens]
    if (tens > 19 && tens < 100) ost = numbersTenArr[arr[1]] + numbersArr[arr[0]]


    resultString = (numbersArr[arr[2]] + " hundred" + ost).trim()

    return resultString
}
