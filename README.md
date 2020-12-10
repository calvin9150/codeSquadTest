1. step-1 을 구현하기 위한 순서도를 제작하였다.

2. 입력받은 문자열의 철자들을 하나씩 각각 배열 요소로 만들고 싶었지만 방법을 몰랐다.

- google에 " javascript string to array " 검색, split() 라는 메소드를 알게됨.

3. 배열의 순서를 바꾸어 L, R의 기능을 구현하려 했지만 shift, pop, push는 알았지만 배열 맨 앞에 요소를 추가하는 방법을 몰랐다.

- 'javascript.info' 웹사이트에서 배열에 대해 다시 공부했고, unshift를 이용하였다.

4. step-1의 기능 구현에는 성공했지만 다른 프로젝트들의 코드와 비교해보면 시각적으로도 엉성함이 느껴진다.

- 다른 프로젝트들의 코드를 분석해보니 너무 크지않은 함수들을 중심으로 가독성이 좋게 짜여져있었다.
- 코드 가독성에 대해 참고한 강의 ( https://youtu.be/ODFp8fnKnTY?list=PLcqDmjxt30RuMjo2hbuUmc1xzPoEGnLdz&t=466 ) - 좋지않은 코드의 예시를 잘 들어주었다.
- 나의 경우에는 if문에 다시 if문을 넣는 것을 반복하여 한 눈에 이해하기가 힘들다.
- 함수를 중심으로 해서 step-1을 다시 코딩 해보았다.

var string = "0,1";
var array = string.split(",");
alert(array[0]);
