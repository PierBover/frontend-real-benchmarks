let keepUpdating = true;

let currentStep = 1;
let currentFrame = 1

let colorIndex = 0;
let fps = 0;
let concurrentItems = 100;

function nextSecond () {
	console.log(currentStep, '[', fps, ']', concurrentItems);
	concurrentItems += 100;
	currentStep ++;
	//if (fps >= 60) concurrentItems += 100;
	//else concurrentItems -= 100;

	if (fps < 10) {
		keepUpdating = false;
	}

	fps = 0;
}

let timeStart = performance.now();
let timeEnd = timeStart;

export function getNextStep () {

	let posX = 0;
	let posY = 0;

	timeEnd = performance.now();

	const timeDiff = timeEnd - timeStart;

	if (timeDiff >= 1000) {
		nextSecond();
		timeStart = timeEnd;
	}

	if (!keepUpdating) return null;

	fps ++;

	const array = [];

	for (let index = currentFrame; index <= currentFrame + concurrentItems; index++) {


		array.push({
			id: 'key-' + index,
			text: 'text '+ index,
			isButton: index % 100 === 0
		});

		//colorIndex ++;
		//if (colorIndex >= colors.length) colorIndex = 0;

		posX += 10;

		if (posX >= 1000) {
			posX = 0;
			posY += 10;
		}
	}

	currentFrame ++;

	return array;
}