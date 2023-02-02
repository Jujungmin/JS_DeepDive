const testArray = [
	{name: '가', score: 100},
	{name: '나', score: 90},
	{name: '다', score: 80},
];

const resultMap = testArray.map((item,index,arr) => {
	// 1. key 값 변경
	// return {
	//     string: item.name,
	//     number: item.score
	// }

	// 2. value 값 변경 및 추가
	// return {
	//     ...item, score: 0
	// }

	// 3. resultMap에 새로운 공통필드 추가
	// return {
	// 	...item, add: 10
	// }
	// 왜 복사 한번하고 수정|추가해야되는거지?

	return {
		...item,
		score: 3,
	}
})
console.log(resultMap)