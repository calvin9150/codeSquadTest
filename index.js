
    let word = prompt("단어를 입력하세요.");
    let array = word.split(""); 

    const chk = array.some(function(item){
        return !isNaN(item);
    });
    
    if(chk){
        alert("문자를 입력하시오.");
    } else {
        let number = Number(prompt("이동할 만큼의 정수를 입력하시오."));
        if(number>=-100 && number<100){
            let mover = prompt("문자열을 왼쪽으로 이동하려면 L, 오른쪽으로 이동하려면 R을 입력하시오.")
            if(mover = "R"||"r"){
                for(i=0; i<array.length; i++){
                    array[i] = array[array.length-1];
                }
                
                alert(array)
            }
        } else {
            alert("(-100 <= N <100) 의 정수를 입력하시오.")
        }
    }