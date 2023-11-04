const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;

function goResult() {
	qna.style.webkitAnimation = "fadeOut 1s";
	qna.style.animation = "fadeOut 1s";
	setTimeout(() => {
		result.style.webkitAnimation = "fadeIn 1s";
		result.style.animation = "fadeIn 1s";
		setTimeout(() => {
			qna.style.display = "none";
			result.style.display = "block";

		}, 450)})
}
function addAnswer(answerText, qIdx){
	let a = document.querySelector(".answerBox");
	let answer = document.createElement("button")
	answer.classList.add("answerList");
	answer.classList.add("my-3");
	answer.classList.add("py-3");
	answer.classList.add("mx-auto");
	answer.classList.add("fadeIn");

	a.appendChild(answer);
	answer.innerHTML = answerText;

	answer.addEventListener("click", function(){
		let children = document.querySelectorAll(".answerList");
		for(let i = 0; i < children.length; i++){
			children[i].disabled = true;
			children[i].style.webkitAnimation = "fadeOut 0.5s";
			children[i].style.animation = "fadeOut 0.5s";
		}
		setTimeout(() => {
			for(let i = 0; i < children.length; i++){
				children[i].style.display = "none";
			}
			goNext(++qIdx);
		}, 450)
	
	}, false);
}

function goNext(qIdx){
	if(qIdx+1 === endPoint) {
		goResult();
		return;
	}

	let q = document.querySelector(".qBox");
	q.innerHTML = qnaList[qIdx].q;
	for(let i in qnaList[qIdx].a){
		addAnswer(qnaList[qIdx].a[i].answer,qIdx); 
	}
		let status = document.querySelector('.statusBar');
		status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin () {
	main.style.webkitAnimation = "fadeOut 1s";
	main.style.animation = "fadeOut 1s";
	setTimeout(() => {
		qna.style.webkitAnimation = "fadeIn 1s";
		qna.style.animation = "fadeIn 1s";
		setTimeout(() => {
			main.style.display = "none";
			qna.style.display = "block";
		}, 450)
		let qIdx = 0;
		goNext(qIdx);
	}, 450);	
}