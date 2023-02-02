# [ES6] map() , filter()
## Array.prototype.map()
- 특정 배열을 `for문`을 도는 것처럼 각각의 요소에 대해 함수를 호출하여 해당 함수를 실행한 뒤 새로운 형태의 배열을 얻을 수 있다.
- 기존에 호출된 배열은 변하지 않고 새로운 배열을 만들 수 있다.

``` javascript
// 원본 배열 생성
const testArray = [1,2,3,4];

const ResultArray = testArray.map(x => {
    console.log(x); // 1 2 3 4
    return x * 2;
});

// map으로 원본배열에 *2를 곱한 새로운 배열 생성
console.log(ResultArray); // [2,4,6,8]

// mpa과 상관없이 기존 배열은 동일한 값 유지
console.log(testArray); // [1,2,3,4]
```

> `array.map((currentValue, index, aarray) => {});`
- 매개변수
  - `currentValue` : 현재 처리하고 있는 원본 배열의 데이터
  - `index` : 현재 처리 중인 인덱스
  - `array` : 현재 map() 메서드를 실행하고 있는 원본 배열

``` javascript
const testArray = [1,2,3,4];

const ResultMap = testArray.map((value, index, arr) => {
    console.log('현재 처리중인 원본데이터 : ' + value);
    console.log('현재 처리중인 인덱스 : ' + index);
    console.log('map메서드를 이용중인 원본 배열 : ' + arr);
});
/*
현재 처리중인 원본데이터 : 1
현재 처리중인 인덱스 : 0
map메서드를 이용중인 원본 배열 : 1,2,3,4
현재 처리중인 원본데이터 : 2
현재 처리중인 인덱스 : 1
map메서드를 이용중인 원본 배열 : 1,2,3,4
현재 처리중인 원본데이터 : 3
현재 처리중인 인덱스 : 2
map메서드를 이용중인 원본 배열 : 1,2,3,4
현재 처리중인 원본데이터 : 4
현재 처리중인 인덱스 : 3
map메서드를 이용중인 원본 배열 : 1,2,3,4
*/
```

### return
- map이 종료된 후 결과로는 새로운 배열을 반환한다.
- return 값이 없을 경우 배열에는 `undefined` 이 들어간 배열이 생성되므로 **반드시 return 값을 설정**해준다.

``` javascript
const testArray = [1,2,3,4];

const ResultMap = testArray.map((x) => {
    console.log(x);
    // return x;
});

console.log(ResultMap); // [undefined, undefined, undefined, undefined]
```

### map을 활용한 예시
#### 배열 내 객체 원하는 요소만 가져오기
- map을 이용할 경우 배열 안에 있는 객체에서 특정값만을 가져와서 배열을 재구성하기 가능하다.

``` javascript
// 학생과 해당 학생의 점수
const testArray = [
    {name: '가', score: 100},
    {name: '나', score: 90},
    {name: '다', score: 80},
];

const ResultMap = testArray.map((x) => {
    return x.score;
});

console.log(ResultMap); // [100, 90, 80]
```
#### 규칙을 활용해 원하는 데이터만 가져오고 싶을 경우
- 배열 내에서 특정 조건을 만족하는 결과값을 가져오고 싶을 경우
``` javascript
// 학생과 해당 학생의 점수
const testArray = [
    {name: '가', score: 100},
    {name: '나', score: 90},
    {name: '다', score: 80},
];

const ResultMap = testArray.map((x) => {
    if(x.score >= 90) {
        return x.name;
    }
});

console.log(ResultMap); // ['가', '나', undefined]
```

> map은 해당조건이 맞지 않을 경우 **return이 없기 때문에** `undefined`이 반환됐다.<br/>
> 이렬 경우 Filter를 사용해야 한다.


## Array.prototype.filter()
- 조건을 주어 해당 조건에 통과하는 값만 가져와 배열을 만들어준다.
- 기존에 호출된 배열은 변하지 않고 원본을 유지하며 filter 조건에 부합된 새로운 배열이 생성된다.

> `array.filter((currentValue, index, array) => {});`
- 매개변수
  - map과 동일.

### return
- filter와 map의 가장 큰 차이는 반환결과이다.
- map의 경우 return값을 지정하지 않았을 경우에 강제로 undefined
- filter의 경우 return값 지정하지 않거나 지정한 조건에 모든 값이 해당하지 않으면 빈 배열 반환.

``` javascript
// 학생과 해당 학생의 점수
const testArray = [
    {name: '가', score: 100},
    {name: '나', score: 90},
    {name: '다', score: 80},
];

const ResultMap = testArray.filter((x) => {
    console.log(x.name);
});

console.log(ResultMap); // []
```
### filter를 활용한 예시
#### 배열 내 원하는 숫자 데이터만 가져오고 싶을 경우
``` javascript
// 배열 내 10이하 숫자만 포함하는 배열 만들기
const numberList = [1,11,3,25,9,10,15];

const numberResultMap = numberList.filter((x) => {
    return x <= 10;
});

console.log(numberResultMap); // [1, 3, 9, 10]
```
#### 배열 내 특정 단어를 포함하는 데이터만 가져오고 싶을 경우
``` javascript
const List = ['김사원', '윤대리', '한주임', '윤상무', '김주임', '최사장', '황차장', '김과장'];

// indexOf는 해당 글자를 포함하지 않으면 -1 반환
const ListResultMap = List.filter((x) => {
    return x.indexOf('주임') !== -1;
});

console.log(ListResultMap); // ['한주임', '김주임']
```

## 정리

||공통점|차이점|
|:---:|:---:|:---:|
|map<td rowspan="2">- for문과 같이 값을 가져온다.<br>- 기존 배열은 유지되며 새로운 배열이 생성</td>|return값 지정하지 않을 시 강제로 undefined 생성.
|filter|return값을 지정하지 않거나 지정한 조건에 모든 값이 해당하지 않을 경우 빈 배열 반환.|

기존 for문
``` javascript
const testArray = [1,2,3,4];

const forResult = [];
for(let i = 0; i < testArray.length; i++) {
    forResult.push(testArray[i] * 2);
}
console.log(forResult, testArray); // [2,4,6,8] [1,2,3,4]
```

---

### Reference
https://ordinary-code.tistory.com/8
#### 더나아가기
https://im-designloper.tistory.com/31


https://junior-datalist.tistory.com/71

https://ko.code-paper.com/javascript/examples-javascript-rename-keys-in-object