const words = ["SELF-TAUGHT", "COMMITTED", "DEDICATED", "FULLSTACK"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			setTimeout(deletingEffect, 1500)
			return false;
		};
		timer = setTimeout(loopTyping, 100);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();

function typingQudusayo() {
	let qudusayo = ['Q', 'U', 'D', 'U', 'S', 'A', 'Y', 'O'];
	var typeQue = function() {
		if (qudusayo.length > 0) {
			document.getElementById('qudusayo').innerHTML += qudusayo.shift();
		}
		timer = setTimeout(typeQue, 300);
	};
	typeQue();
}
typingQudusayo()