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

        if (inputArr.includes("U")){
            (function u() {
                const row = cube[0]
                const shiftResult = row.shift();
                row.push(shiftResult);
                console.log(cube);
            })();
        }
    }
        )
}

init();
