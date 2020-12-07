
    const word = prompt("단어를 입력하세요.");
    const array = word.split(""); 

    const chk = array.some(function(item){
        return !isNaN(item);
    });
    
    if(chk){
        alert("문자를 입력하시오.");
    } else {
        const number = Number(prompt("이동할 만큼의 정수를 입력하시오."));
        if(number>=-100 && number<100){
            const mover = prompt("문자열을 왼쪽으로 이동하려면 L, 오른쪽으로 이동하려면 R을 입력하시오.")
            if(mover === "R"|| mover ===  "r"){
                for(i=0; i<number; i++){
                    array.unshift(array[array.length-1])
                    array.pop()
                }
                alert(array)
            } else if (mover === "L" || mover === "l") {
                for (i = 0; i < number; i++) {
                    array.push(array[0])
                    array.shift()
                } alert(array)
            } else {
                alert("L 혹은 R을 입력하시오.")
            }
        } else {
            alert("(-100 <= N <100) 의 정수를 입력하시오.")
        }
    }