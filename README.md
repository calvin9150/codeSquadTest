1. step-1 을 구현하기 위한 순서도를 제작하였다.

2. 입력받은 문자열의 철자들을 하나씩 각각 배열 요소로 만들고 싶었지만 방법을 몰랐다.
- google에 " javascript string to array " 검색, split() 라는 메소드를 알게됨. 


var string = "0,1";
var array = string.split(",");
alert(array[0]);