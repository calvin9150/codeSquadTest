(function init() {

    let cube = [
        ['R', 'R', 'W'],
        ['G', 'C', 'W'],
        ['G', 'B', 'B']
    ];

    const button = document.querySelector('#button');

    button.addEventListener('click', () => {
        let input = document.querySelector('#input').value;
        input = input.replace(/U'/g, "u");
        input = input.replace(/R'/g, "r");
        input = input.replace(/L'/g, "l");
        input = input.replace(/B'/g, "b");
        
        const inputArr = input.split("");

        for (i = 0; i < inputArr.length; i++) {
            if (inputArr[i] === "U") {
                (function U() {
                    const row = cube[0]
                    const shiftResult = row.shift();
                    row.push(shiftResult);
                    document.getElementById("logs").innerHTML += `U` + `<br>` + `[${cube[0]}]` + `<br>` + `[${cube[1]}]` + `<br>` + `[${cube[2]}]` + `<br>`;
                })();
            }
    
            else if (inputArr[i] === "u") {
                (function u() {
                    const row = cube[0]
                    const popResult = row.pop();
                    row.unshift(popResult);
                    document.getElementById("logs").innerHTML += `U'` + `<br>` + `[${cube[0]}]` + `<br>` + `[${cube[1]}]` + `<br>` + `[${cube[2]}]` + `<br>`;
                })();
            }
            
            else if (inputArr[i] === "R") {
                (function R() {
                    let colArr = [cube[0][2], cube[1][2], cube[2][2]];
                    const shiftResult = colArr.shift();
                    colArr.push(shiftResult);
                    for (j = 0; j < 3; j++){
                        cube[j][2] = colArr[j];
                    };
                    document.getElementById("logs").innerHTML += `R` + `<br>` + `[${cube[0]}]` + `<br>` + `[${cube[1]}]` + `<br>` + `[${cube[2]}]` + `<br>`;
                })();
            }
                
            else if (inputArr[i] === "r") {
                (function r() {
                    let colArr = [cube[0][2], cube[1][2], cube[2][2]];
                    const popResult = colArr.pop();
                    colArr.unshift(popResult);
                    for (j = 0; j < 3; j++){
                        cube[j][2] = colArr[j];
                    };
                    document.getElementById("logs").innerHTML += `R'` + `<br>` + `[${cube[0]}]` + `<br>` + `[${cube[1]}]` + `<br>` + `[${cube[2]}]` + `<br>`;
                })();
            }
                
            else if (inputArr[i] === "L") {
                (function L() {
                    let colArr = [cube[0][0], cube[1][0], cube[2][0]];
                    const popResult = colArr.pop();
                    colArr.unshift(popResult);
                    for (j = 0; j < 3; j++){
                        cube[j][0] = colArr[j];
                    };
                    document.getElementById("logs").innerHTML += `L` + `<br>` + `[${cube[0]}]` + `<br>` + `[${cube[1]}]` + `<br>` + `[${cube[2]}]` + `<br>`;
                })();
            }
            else if (inputArr[i] === "l") {
                (function l() {
                    let colArr = [cube[0][0], cube[1][0], cube[2][0]];
                    const shiftResult = colArr.shift();
                    colArr.push(shiftResult);
                    for (j = 0; j < 3; j++){
                        cube[j][0] = colArr[j];
                    };
                    document.getElementById("logs").innerHTML += `L'` + `<br>` + `[${cube[0]}]` + `<br>` + `[${cube[1]}]` + `<br>` + `[${cube[2]}]` + `<br>`;
                })();
            }
                
            else if (inputArr[i] === "B") {
                (function B() {
                    const row = cube[2]
                    const popResult = row.pop();
                    row.unshift(popResult);
                    document.getElementById("logs").innerHTML += `B` + `<br>` + `[${cube[0]}]` + `<br>` + `[${cube[1]}]` + `<br>` + `[${cube[2]}]` + `<br>`;
                })();
            }

            else if (inputArr[i] === "b") {
                (function b() {
                    const row = cube[2]
                    const shiftResult = row.shift();
                    row.push(shiftResult);
                    document.getElementById("logs").innerHTML += `B'` + `<br>` + `[${cube[0]}]` + `<br>` + `[${cube[1]}]` + `<br>` + `[${cube[2]}]` + `<br>`;
                })();
            }

            else if (inputArr[i] === "Q") {
                (function Q() {
                    document.getElementById("manual").remove();
                    document.getElementById("logs").innerHTML += '<h2>Bye~</h2>';
                    return;
                })();
            }
        }
 
    }
    )
})();
