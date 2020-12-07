document.querySelector('#word').focus();



button.addEventListener('click', () => {
    const word = document.querySelector('#word').value;
    let array = word.split(""); 
    const button = document.querySelector('#button');
    
    const chk = array.some(function(item){
        console.log(item);
        return !isNaN(item);
    });
    
    if(chk){
        alert("문자를 입력하시오.");
    } else {
        alert(array[0]);
    }

    
})