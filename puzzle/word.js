// HTML elements
const word1 = document.getElementById('word1'); // answer
const word2 = document.getElementById('word2'); // buttons
const check = document.getElementById('check'); // word1 === word2?
const progress = document.getElementById('progress'); // progress check 
const time = document.getElementById('time');

// Game objects
const game = {
    btns: [],
    maxPlay: 3,
    current: 0,
};

game.startTime = Date.now();

game.words = 'apple,linux,javascript,tutorial,codesquad,baby,girlfriend,legend'.split(',');

// Choose 1 word from words;
game.choose = function () {
    const idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};

game.addButtons = function () {
    for (let i = 0; i < this.letters.length; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};

game.removeButtons = function () {
    for (let i = 0; i < this.btns.length; i++) {
        word2.removeChild(this.btns[i]);
    }
    this.btns = [];
};

game.checkGood = function () {
    return this.answer === this.letters.join('');
};

game.updateDisplay = function () {
    if (this.checkGood()) {
        check.innerHTML = '일치합니다';
    } else {
        check.innerHTML = '일치하지 않습니다';
    }
};

game.init = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
};
game.init();

game.copyBtnText = function () {
    for (let i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
};

game.swap = function () {
    const temp = [];
    // Copy and swap
    while (game.letters.length !== 0) {
        const s = game.letters.pop();
        temp.push(s);
    }
    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();
};

game.rshift = function () {
    const s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
};

game.lshift = function () {
    const s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.updateDisplay();
};

game.progress = function () {
    if (game.checkGood()) {
        game.current++;
        game.removeButtons();
        game.init();
        game.shuffle();
        let str = '';
        for (let i = 0; i < game.current; i++) {
            str += 'O';
        }
        progress.innerHTML = str;
    }

    if (game.current === game.maxPlay) {
        const sec = (Date.now() - game.startTime) / 1000;
        alert('Good! Your Record: ' + sec + ' sec');
        clearInterval(x);
        check.innerHTML = 'Thanks for playing';
    }
};

// Event handlers
const swap = function () {
    game.swap();
    game.progress();
};

const rshift = function () {
    game.rshift();
    game.progress();
};

const lshift = function () {
    game.lshift();
    game.progress();
};

// Shuffle
game.shuffle = function () {
    const toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        game.swap();
    }

    const rmax = Math.max(game.answer.length - 2, 1);
    const n = Math.floor(Math.random() * rmax) + 1;
    for (let i = 0; i < n; i++) {
        game.rshift();
    }
};
game.shuffle();

const updateTime = function () {
    const now = Date.now() - game.startTime;
    time.innerHTML = now / 1000 + ' s';
};

const intervalId = setInterval(updateTime, 50);
