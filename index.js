function init() {

    let cube = [
        ['R', 'R', 'W'],
        ['G', 'C', 'W'],
        ['G', 'B', 'B']
    ];

    const button = document.querySelector('#button');

    function check(arr, search) {
        return arr.some(row => row.includes(search)); // 배열에서 찾음
    }

    button.addEventListener('click', () => {
        let input = document.querySelector('#input').value;
        input = input.replace(/U'/g, "u");
        input = input.replace(/R'/g, "r");
        input = input.replace(/L'/g, "l");
        input = input.replace(/R'/g, "r");
        
        const inputArr = input.split("");
        console.log(inputArr); //

        for (i = 0; i < inputArr.length; i++){
            if (inputArr[i]==="U"){
                (function U() {
                    const row = cube[0]
                    const shiftResult = row.shift();
                    row.push(shiftResult);
                    console.log(cube);
                    document.getElementById("logs").innerHTML = `U`+`<br>`+`[${cube[0]}]`+`<br>`+`[${cube[1]}]`+`<br>`+`[${cube[2]}]`+`<br>`;
                })();
            }
    
            if (inputArr[i]==="u"){
                (function u() {
                    const row = cube[0]
                    const popResult = row.pop();
                    row.unshift(popResult);
                    console.log(cube);
                    document.getElementById("logs").innerHTML = `U'`+`<br>`+`[${cube[0]}]`+`<br>`+`[${cube[1]}]`+`<br>`+`[${cube[2]}]`+`<br>`;
                })();
            }
        }
        
    }
        )
}

init();
