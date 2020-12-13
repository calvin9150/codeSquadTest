# 단계 별 구현한 코드 동작 설명

### Step-1

    1. prompt 함수를 이용하여 사용자에게서 단어를 입력받는다.
    2. 두번째 prompt창에서 단어를 이동할 만큼의 숫자를 입력받는다.
    3. prompt로 받은 숫자는 string 타입이므로 Number 함수를 이용하여 number 타입으로 바꿔준다.
    4. if문 조건을 (-100 <= 입력받은 숫자 <100)으로 하여, 조건이 참이라면 print 함수를 작동한다.
        4-1. print 함수의 기능
            - 3번째 prompt창에서 r, l을 입력받을 때 toUpperCase 함수로 대문자 R, L 로 바꿔준다.
            - 1번째 prompt창에서 입력받은 단어를 split()를 이용해 한 글자마다 배열의 하나의 요소로 나눈다.
            - 2번째 prompt창에서 입력받은 숫자만큼 단어를 이동시키는 작업을 반복할 때, 숫자를 단어 글자 수로 나누고 그 나머지만큼만 이동시키도록 하여 필요없는 반복작업을 하지 않도록 해준다.
            - 3번째 prompt창에서 R을 입력받으면 popAndShift 함수를, L을 입력받으면 shiftAndPush 함수를 작동시킨다.
            - 압력받은 숫자가 범위를 초과하면 prompt()로 "(-100 <= N <100) 의 정수를 입력하시오." 라는 경고창을 출력한다.
    5. popAndShift 함수는 3번째 prompt창에서 R을 입력받으면 단어의 마지막 글자를 pop()으로 배열의 맨 뒤에서 제외하고  그 값을 shift()을 이용하여 배열의 맨 앞으로 보내는 작업을 2번째 prompt에서 입력받은 숫자만큼 반복한다.
    6. shiftAndPush 는 popAndShift 함수의 단어 이동방향을 반대로 한 것이다.
    7. popAndShift, shiftAndPush 두 함수를 통해 이동작업을 끝낸 단어는 배열에서 한 글자마다 나뉘어져 있으므로 join 메서드로 배열의 요소들을 통합하여 alert창에 띄운다.

### Step-2

# 코딩 중 시행착오 사항

### Step-1

1. step-1 을 구현하기 위한 순서도를 제작하였다.

2. 입력받은 문자열의 철자들을 하나씩 각각 배열 요소로 만들고 싶었지만 방법을 몰랐다.

   - google에 " javascript string to array " 검색, split() 라는 메소드를 알게됨.

3. 배열의 순서를 바꾸어 L, R의 기능을 구현하려 했지만 shift, pop, push는 알았지만 배열 맨 앞에 요소를 추가하는 방법을 몰랐다.

   - 'javascript.info' 웹사이트에서 배열에 대해 다시 공부했고, unshift를 이용하였다.

4. step-1의 기능 구현에는 성공했지만 다른 프로젝트들의 코드와 비교해보면 시각적으로도 엉성함이 느껴진다.

   - 다른 프로젝트들의 코드를 분석해보니 너무 크지않은 함수들을 중심으로 가독성이 좋게 짜여져있었다.
   - 코드 가독성에 대해 참고한 강의 <https://youtu.be/ODFp8fnKnTY?list=PLcqDmjxt30RuMjo2hbuUmc1xzPoEGnLdz&t=466> - 좋지않은 코드의 예시를 잘 들어주었다.
   - 나의 경우에는 if문에 다시 if문을 넣는 것을 반복하여 한 눈에 이해하기가 힘들다.
   - 함수를 중심으로 해서 step-1을 다시 코딩 해보았다.

### step-2

1. input으로 받은 명령어를 어떻게 처리해야 하나?
   - split로 한 글자마다 나누어 배열로 만들고 some으로 명령어에 맞는 배열을 찾는다.
