const inputAge = document.querySelector("#age");
const btn = document.getElementById("calcButton");
const answer = document.getElementById("result");

btn.onclick = async function () {
    const calcAge = inputAge.value;
    const conv = parseInt(calcAge);
    const response = await repeat(conv);
    answer.innerHTML = `Age: ${conv} Days: ${response}`;
    localStorage.setItem('SavedValueDays',response);
    localStorage.setItem('SavedValueAge', calcAge);
}

const repeat = async function (n) {
    let ans = "0";
    ans = n * 365;
    return ans;
}
var App = {
isOdd: function (number) {
    if (typeof number !== 'number') {
      throw Error('The given argument is not a number');
    }
    return number % 2 !== 0;
  },
}