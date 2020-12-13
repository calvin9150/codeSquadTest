# 단계 별 구현한 코드 동작 설명

### Step-2
-브라우저 화면에서 작동합니다!!

      1. 과제에 주어진 큐브를 2차원 배열로 구현했다 : const cube = [['R', 'R', 'W'],['G', 'C', 'W'],['G', 'B', 'B']];
      2. html에서 input에 단어를 입력하고 enter key 혹은 "입력" 버튼을 클릭하면 clickButton()이 실행된다.
      3. clickButton 함수에서 input값 중 U' 와 같이 '가 붙은 명령어는 소문자 u로 치환했다. (입력받은 단어를 한 글자마다 split로 나누어 배열로 만들어야 하는데 '도 글자의 하나로 인식하므로)
      4. 각 명령어는 step-1에서 구현한 것을 바탕으로 배열 요소의 이동을 통해 if문 안에 구현했다.
      5. 배열화한 명령어를 forEach로 모든 요소 중 if문 조건에 맞는 것을 실행하도록 하였다.
      6. 명령어 Q를 입력하면 html에서 루빅스 큐브 설명문과 input, button이 화면에서 사라지고 "Bye~" 를 맨 밑에 출력한다.

# 작업 순서

### step-2

1. input으로 받을 명령어 중 U' 처럼 '가 붙은 것은 어떻게 처리해야 하나? (입력받은 단어를 한 글자마다 나누어 배열로 만들어야 하는데 '도 글자의 하나로 인식하므로)
   - U'는 소문자 u로 치환했다.
