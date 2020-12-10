function init() {
    const word = prompt("단어를 입력하시오.");
    const number = Number(prompt("이동할 만큼의 정수(-100 <= N <100)를 입력하시오."));

    if (number >= -100 && number < 100) {
        function print(word, number, mover) {
            mover = mover.toUpperCase();
            const wordArr = word.split("");
            const repeatNumber = number % wordArr.length;
            if (mover === 'R') {
                popAndUnshift(wordArr, repeatNumber);
            } else if (mover === 'L') {
                shiftAndPush(wordArr, repeatNumber);
            }
        }
    } else {
        alert("(-100 <= N <100) 의 정수를 입력하시오.");
        return;
    }
    
    const mover = prompt("L 또는 R을 입력하시오.");
    
    function popAndUnshift(wordArr, repeatNumber) {
        for (let i = 0; i < repeatNumber; i++) {
            const popResult = wordArr.pop();
            wordArr.unshift(popResult);
        }
        const result = wordArr.join("");
        alert(result);
        return result;
    }

    function shiftAndPush(wordArr, repeatNumber) {
        for (let i = 0; i < repeatNumber; i++) {
            const shiftResult = wordArr.shift();
            wordArr.push(shiftResult);
        }
        const result = wordArr.join("");
        alert(result);
        return result;
    }
    print(word, number, mover);
}
    init();