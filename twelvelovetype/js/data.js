const qnaList = [
	{
		q: "1. 이성 사이에 진정한 친구는 있다, 없다?" ,
		a: [
			{
				answer: "a. 이성 사이에 친구가 어딨어? 절대 없어"
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 친구 있지. 절대 이성으로만 안 보일 뿐"
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 난 잘 모르겠어.."
				,type: ["sheep", "pig"]
			}
		]

	},
	{
		q: "2. 좋아하는 사람이 생겨 연락하고자 한다" ,
		a: [
			{
				answer: "a. 바로 먼저 연락한다"
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 언제 연락할지, 어떻게 말할지 심사숙고하여 연락한다."
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 상대방에게 먼저 연락 올 때까지 기다린다."
				,type: ["sheep", "pig"]
			}
		]

	},
	{
		q: "3. 당신의 고백 스타일은?" ,
		a: [
			{
				answer: "a. 호감이 보이면 바로 고백한다"		
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 상대방이 고백할 때까지 기다린다"
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 완벽한 분위기, 완벽한 타이밍에서 고백한다."
				,type: ["sheep", "pig"]
			}
		]

	},
	{
		q: "4. 호감가는 고백 멘트를 고른다면?" ,
		a: [
			{
				answer: "a. 박력 그 자체, 야 나랑 사귀자 "
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 섬세한 나 너 많이 좋아해, 나랑 사귈래? "
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 센스있는 우리 내일은 연인으로 만날까요"
				,type: ["sheep", "pig"]
			}
		]

	},
	{
		q: "5. 오늘 연인과 첫 데이트 하는 날이다. 첫 날 허용할 수 있는 스킨십의 범위는?" ,
		a: [
			{
				answer: "a. 쑥스러워.. 손 잡기 정도??"
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 요즘 시대가 어느 때인데, 가벼운 뽀뽀까지 가능이야"
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 어차피 내 연인인데 왜?? 모든 스킨십 다 돼!"
				,type: ["sheep", "pig"]
			}
		]

	},
	{
		q: "6. 기념일이 다가온다. 당신은 어떻게 할 것인가? (ex - 100, 200일)" ,
		a: [
			{
				answer: "a. 무슨 기념일이야, 그냥 평소처럼 해"
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 맛있는 밥이나 사줄까? 아니면 꽃이라도?"
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 이미 깜짝 이벤트 다 준비해놨어"
				,type: ["sheep", "pig"]
			}
		]

	},
	{
		q: "7. 연인이 오늘 머리를 바꾸고 옷도 새로 샀다" ,
		a: [
			{
				answer: "a. 눈치 못 채고 그냥 있는다"
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 눈치는 채나 말은 꺼내지 않는다"
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 오 대박 오늘 머리도 바꾸고 옷도 새로 샀네?라고 하며 단번에 눈치챈다"
				,type: ["sheep", "pig"]
			}
		]

	},
	{
		q: "8. 연인이 데이트가 끝난 후, 집에 데려다 달라고 한다" ,
		a: [
			{
				answer: "a. 각자 만났던 장소에서 헤어진다."
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 연인이 살고 있는 집의 역이나 정류장까지 데려다준다."
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 집 앞까지 데려다준다."
				,type: ["sheep", "pig"]
			}
		]

	},
	{
		q: "9. 연인에게 하루종일 연락이 안 온다.." ,
		a: [
			{
				answer: "a. 뭐.. 언젠가 연락 오겠지. 내가 할 일 하며 기다린다"
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 초조해서 마음 졸이며 인스타, 페북, 카톡 등 모든 SNS 다 들어가본다."
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 연인에게 연락 올 때까지 무한 카톡, 무한 전화"
				,type: ["sheep", "pig"]
			}
		]

	},
	{
		q: "10. 연인이 연락도 없이 보고싶다고 우리집 앞에 와서 기다린다. " ,
		a: [
			{
				answer: "a. 아니 갑자기 오면 어떡해.. 하 나 준비도 안 했는데 왜 와. 짜증나네"
				,type: ["cow", "tiger","dragon","chick"]
			}
			,{
				answer: "b. 아 그래?? 나 할 것들 좀만 마무리하고 나갈게"
				,type: ["mouse", "rabbit", "snake", "dog", "monkey"]
			}
			,{
				answer: "c. 헐 대박, 어디야?? 당장 나갈게!"
				,type: ["sheep", "pig"]
			}
		]

	}
]