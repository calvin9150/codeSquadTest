function init() {

    const cube = [
        ['R', 'R', 'W'],
        ['G', 'C', 'W'],
        ['G', 'B', 'B']
    ];

    const button = document.querySelector('#button');
    let input = document.querySelector('#input');
    input.addEventListener('keypress', enterEvent);
    function enterEvent(event) {
        if (event.keyCode != 13) {
            return;
        }
        clickButton();
    };

    button.addEventListener('click', clickButton
    )
    function clickButton() {
        
        let inputValue = input.value;
        inputValue = inputValue.replace(/U'/g, "u");
        inputValue = inputValue.replace(/R'/g, "r");
        inputValue = inputValue.replace(/L'/g, "l");
        inputValue = inputValue.replace(/B'/g, "b");
        
        const inputArr = inputValue.split("");
        function logs(command) {
            document.getElementById("logs").innerHTML += `${command} <br> [${cube[0]}] <br> [${cube[1]}] <br> [${cube[2]}] <br>`;
        };
        inputArr.forEach(currentValue => {
            if (currentValue === "U") {
                const row = cube[0]
                const shiftResult = row.shift();
                row.push(shiftResult);
                logs("U");
            }
            else if (currentValue === "u") {
                const row = cube[0]
                const popResult = row.pop();
                row.unshift(popResult);
                logs("U'");
        }
            else if (currentValue === "R") {
                let colArr = [cube[0][2], cube[1][2], cube[2][2]];
                const shiftResult = colArr.shift();
                colArr.push(shiftResult);
                for (j = 0; j < 3; j++) {
                    cube[j][2] = colArr[j];
                };
                logs("R");
            }
                 
            else if (currentValue === "r") {
                let colArr = [cube[0][2], cube[1][2], cube[2][2]];
                const popResult = colArr.pop();
                colArr.unshift(popResult);
                for (j = 0; j < 3; j++) {
                    cube[j][2] = colArr[j];
                };
                logs("R'");
            }
                 
            else if (currentValue === "L") {
                let colArr = [cube[0][0], cube[1][0], cube[2][0]];
                const popResult = colArr.pop();
                colArr.unshift(popResult);
                for (j = 0; j < 3; j++) {
                    cube[j][0] = colArr[j];
                };
                logs("L");
            }
            else if (currentValue === "l") {
                let colArr = [cube[0][0], cube[1][0], cube[2][0]];
                const shiftResult = colArr.shift();
                colArr.push(shiftResult);
                for (j = 0; j < 3; j++) {
                    cube[j][0] = colArr[j];
                };
                logs("L'");
            }
                 
            else if (currentValue === "B") {
                const row = cube[2]
                const popResult = row.pop();
                row.unshift(popResult);
                logs("B");
                }
            else if (currentValue === "b") {
                const row = cube[2]
                const shiftResult = row.shift();
                row.push(shiftResult);
                logs("B'");
                }
            else if (currentValue === "Q") {
                document.getElementById("manual").remove();
                document.getElementById("logs").innerHTML += '<h2>Bye~</h2>';
                return;
            }
            document.querySelector('#input').value = "";
        })
        
        }

    
    };

init();