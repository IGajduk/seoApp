const maxlengthContentEditableLib = require('maxlength-contenteditable');
const mainInput = document.getElementById('main');
const sideBarWithColNumbers = document.getElementById('for-numbers-of-cols');
const HeaderBarWithRowsAndSections = document.getElementById('top-header');
const oneOfDiv = document.getElementById('campaign');
let tabIndex = 0;
let copyBuffer;


for(let i = 0; i < 14; i++) {
    for(let j = 0; j < 1000; j++) {

        const newElem = createInput();
        newElem.classList.add(`row${i + 1}`);
        newElem.classList.add(`col${mainInput.childNodes[i].childElementCount + 1}`);
        newElem.col = mainInput.childNodes[i].childElementCount + 1;
        newElem.row = i + 1;
        newElem.id = `row${newElem.row}col${newElem.col}`;

        // newElem.innerText = i + 1;
        // newElem.setAttribute('tabindex', `${tabIndex++}`);

        mainInput.childNodes[i].appendChild(newElem);
        if (i < 1) {
            const numberOfCol = createNumberOfCell();
            numberOfCol.innerText = mainInput.childNodes[i].childElementCount;
            numberOfCol.id = `col${mainInput.childNodes[i].childElementCount}`;
            sideBarWithColNumbers.appendChild(numberOfCol);
        }

        if (newElem.row === 6 || newElem.row === 7) {
            newElem.setAttribute('data-max-length', '30');
        } else if (newElem.row === 8 || newElem.row === 9) {
            newElem.setAttribute('data-max-length', '90');
        } else if (newElem.row === 11 || newElem.row === 12) {
            newElem.setAttribute('data-max-length', '15');
        }
    }
    mainInput.childNodes[i].appendChild(addOneMoreInput());
}

maxlengthContentEditableLib.maxlengthContentEditable(); // browserify main.js -o bundle.js

// function createBlockWithAddBtnAndInput() {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'block-with-input-and-btn');
//
//     const input = document.createElement('input');
//     input.setAttribute('class', 'input-add-many-cells');
//     input.setAttribute('type', 'text');
//
//     const btn = document.createElement('input');
//     btn.setAttribute('class', 'btn-add-many-cells');
//     btn.setAttribute('type', 'submit');
//
//     div.appendChild(input);
//     div.appendChild(btn);
// }


function createInput() {
    const input = document.createElement('p');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'input-cell');
    input.setAttribute('data-content', '0');
    // input.setAttribute('tabindex', `${tabIndex++}`);
    input.setAttribute('contenteditable','false');

    return input;
}

function createNumberOfCell() {
    const input = document.createElement('p');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'for-col-of-cel');

    return input;
}

function addOneMoreInput() {
    const plus = document.createElement('h4');
    plus.innerText = '+';
    plus.setAttribute('class', 'addInput');

    return plus;
}


document.addEventListener('click', (event) => {

    const prevFocColCellNumber = document.getElementsByClassName('focused-col');
    const prevFocRowCellNumber = document.getElementsByClassName('focused-row');
    if (prevFocColCellNumber.length && prevFocRowCellNumber.length) {
        prevFocColCellNumber[0].classList.remove('focused-col');
        prevFocRowCellNumber[0].classList.remove('focused-row');
    }

    if (event.target.classList.contains('addInput')) {
        const placeBefore = document.getElementsByClassName('addInput');
        for(let i = 0; i < mainInput.childNodes.length; i++) {
            const newElem = createInput();
            newElem.classList.add(`row${i + 1}`);
            newElem.row = i + 1;
            newElem.col = mainInput.childNodes[i].childElementCount;
            newElem.id = `row${newElem.row}col${newElem.col}`;
            // newElem.setAttribute('tabindex', `${tabIndex++}`);
            newElem.innerText = i + 1;
            newElem.classList.add(`col${mainInput.childNodes[i].childElementCount}`);
            mainInput.childNodes[i].insertBefore(newElem, placeBefore[i]);
        }
    }
    if (event.target.classList.contains('addInput')) {

    }
    if (event.target.classList.contains('input-cell')) {
        const inputs = document.getElementsByClassName('input-cell');
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('contenteditable','false');
        }


        changeFocuseOnRowSidePanel(`row${event.target.row}`);
        changeFocuseOnColSidePanel(`col${event.target.col}`);

        event.target.setAttribute('contenteditable','true');
        event.target.focus();
    }

    if(event.target.id === 'btn-create-document'){
        sendRequest(prompt("Введите имя документа"));
    }
    // if (event.target.classList.contains('col-header')) {
    //     const someElem = document.getElementsByClassName('input-cell');
    //     const allElements = {};
    //     for(let i = 0; i < someElem.length; i++) {
    //
    //         const classArrCurElem = someElem[i].attributes[1].innerText.split(' ');
    //         const el = {};
    //         el.col = classArrCurElem[2].split('col')[1];
    //         el.row = classArrCurElem[1].split('row')[1];
    //         el.innerText = someElem[i].innerText;
    //         allElements[i] = el;
    //     }
    // }
});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        event.preventDefault();
        if(event.target.row && event.target.col) {
            const inputs = document.getElementsByClassName('input-cell');
            for(let i = 0; i < inputs.length; i++) {
                inputs[i].setAttribute('contenteditable','false');
            }
            if (event.target.row < 14) {

                changeFocuseOnRowSidePanel(`row${event.target.row + 1}`);

                const nextCell = document.getElementById(`row${event.target.row + 1}col${event.target.col}`);
                nextCell.setAttribute('contenteditable','true');
                setEndOfContenteditable(nextCell);
                nextCell.focus();
                const positionElem = getCoords(nextCell);
                window.scrollTo(positionElem.left - 500, positionElem.top - 300);
            } else if (event.target.row === 14) {
                if (document.getElementById(`row1col${event.target.col + 1}`)) {
                    changeFocuseOnRowSidePanel(`row1`);
                    changeFocuseOnColSidePanel(`col${event.target.col + 1}`);

                    const nextCell = document.getElementById(`row1col${event.target.col + 1}`);
                    nextCell.setAttribute('contenteditable', 'true');
                    setEndOfContenteditable(nextCell);
                    nextCell.focus();
                    const positionElem = getCoords(nextCell);
                    window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                } else {
                    const nextCell = document.getElementById(`row1col${event.target.col}`);
                    nextCell.setAttribute('contenteditable', 'true');
                    setEndOfContenteditable(nextCell);
                    nextCell.focus();
                    const positionElem = getCoords(nextCell);
                    window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                }
            }
        }
    }
    maxlengthContentEditableLib.maxlengthContentEditable();
});

document.addEventListener('paste', (event) => {
    event.preventDefault();
    if(event.target.row && event.target.col) {

    navigator.clipboard.readText()
        .then(text => {
            if (text) {
                copyBuffer = text;
            }

            const arrWithNewLine = copyBuffer.split('\n');
            if (arrWithNewLine.length) {
                for (let i = 0; i < arrWithNewLine.length; i++) {
                    const arrOfColRows = arrWithNewLine[i].split('\t');

                    if(arrOfColRows.length === 1){
                        const elem = document.getElementById(`row${event.target.row}col${event.target.col + i}`);
                        elem.innerText = arrOfColRows[0];
                        elem.dataset.content = arrOfColRows[0].length - 1;

                        if (i === arrWithNewLine.length - 1) {
                            const elem = document.getElementById(`row${event.target.row}col${event.target.col + i}`);
                            elem.setAttribute('contenteditable', 'true');
                            setEndOfContenteditable(elem);
                            elem.focus();
                            changeFocuseOnRowSidePanel(`row${event.target.row}`);
                            changeFocuseOnColSidePanel(`col${event.target.col + i}`);
                            elem.dataset.content = arrOfColRows[0].length;
                            const positionElem = getCoords(elem);
                            window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                        }

                    } else {
                        if(arrWithNewLine[i].indexOf('\t') > -i) {
                            for (let j = 0; j < arrOfColRows.length; j++) {
                                const elem = document.getElementById(`row${event.target.row + j}col${event.target.col + i}`);
                                elem.innerText = arrOfColRows[j];
                                elem.dataset.content = arrOfColRows[j].length;

                                if (j === arrOfColRows.length - 1) {
                                    elem.dataset.content = arrOfColRows[j].length - 1;
                                }

                                if (i === arrWithNewLine.length - 1) {
                                    const elem = document.getElementById(`row${event.target.row + j}col${event.target.col + i}`);
                                    elem.setAttribute('contenteditable', 'true');
                                    setEndOfContenteditable(elem);
                                    elem.focus();
                                    changeFocuseOnRowSidePanel(`row${event.target.row + j}`);
                                    changeFocuseOnColSidePanel(`col${event.target.col + i}`);
                                    elem.dataset.content = arrOfColRows[j].length;
                                    const positionElem = getCoords(elem);
                                    window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                                }

                            }
                        }
                    }
                }
            } else {
                console.log(arrWithNewLine[0]);
                event.target = arrWithNewLine[0];
                event.target.dataset.content = arrWithNewLine[0].length;
            }
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
    }
});

document.addEventListener('input', (event) => {
    const allInRow6 = document.getElementById('headline2').childNodes;

    if(event.target.classList.contains('row5')) {
        if(event.target.innerText.length > 30) {
            let arrOfRows = changeLongString(event.target.innerText);
            let row5 = arrOfRows[0].join(' ');
            let row6 = arrOfRows[1].join(' ');
            event.target.innerText = row5;
            for (let i = 0; i < allInRow6.length; i++) {
                if(allInRow6[i].col === event.target.col) {
                   allInRow6[i].innerText = row6;
                    allInRow6[i].dataset.content = row6.length;
                    allInRow6[i].setAttribute('contenteditable', 'true');
                    setEndOfContenteditable(allInRow6[i]);
                    allInRow6[i].focus();

                    const prevFocColCellNumber = document.getElementsByClassName('focused-col');
                    const prevFocRowCellNumber = document.getElementsByClassName('focused-row');
                    if (prevFocColCellNumber.length) {
                        prevFocColCellNumber[0].classList.remove('focused-col');
                        prevFocRowCellNumber[0].classList.remove('focused-row');
                    }
                    const rowNumberCellEl = document.getElementById(`row6`);
                    const colNumberCellEl = document.getElementById(`col${event.target.col}`);

                    rowNumberCellEl.classList.add('focused-row');
                    colNumberCellEl.classList.add('focused-col');
                }
            }
        }
    }

    if(event.target.classList.contains('row6') || event.target.classList.contains('row7')) {
        if(event.target.innerText.length  === 30) {
            // event.target.style
        }
    }

    if(event.target.classList.contains('input-cell')) {
        event.target.dataset.content = event.target.innerText.length;
    }
});

window.addEventListener('scroll', (e) => {
    const lastKnownScrollYPosition = -window.scrollY;
    const lastKnownScrollXPosition = -window.scrollX;
    sideBarWithColNumbers.style.top = `${lastKnownScrollYPosition}px`;
    HeaderBarWithRowsAndSections.style.left = `${lastKnownScrollXPosition}px`;
});


document.addEventListener('copy', (event) => {

    navigator.clipboard.readText()
        .then(text => {
            let arr = text.split(String.fromCodePoint(13, 10, 13, 10));
            const newString = arr.join(String.fromCodePoint(13, 10));
            copyBuffer = newString;
            navigator.clipboard.writeText(newString)
                .then(() => {
                    console.log('ok');
                })
                .catch(err => {
                    console.log('Something went wrong', err);
                });
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
});




function changeFocuseOnRowSidePanel(id) {
    const prevFocRowCellNumber = document.getElementsByClassName('focused-row');
    if (prevFocRowCellNumber.length) {
        for(let i = 0; i < prevFocRowCellNumber.length; i++) {
            prevFocRowCellNumber[i].classList.remove('focused-row');
        }
    }
    const rowNumberCellEl = document.getElementById(id);
    rowNumberCellEl.classList.add('focused-row');
}

function changeFocuseOnColSidePanel(id) {
    const prevFocColCellNumber = document.getElementsByClassName('focused-col');
    if (prevFocColCellNumber.length) {
        for(let i = 0; i < prevFocColCellNumber.length; i++) {
            prevFocColCellNumber[i].classList.remove('focused-col');
        }
    }
    const colNumberCellEl = document.getElementById(id);
    colNumberCellEl.classList.add('focused-col');
}





function setEndOfContenteditable(contentEditableElement) {
    var range,selection;
    if(document.createRange) {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
}







function changeLongString(string) {
    let result = [];
    let arrForRow5 = [];
    let arrForRow6 = [];

    const inpValue = string.split(' ');

    let indexOfLastWordInString = myMap(inpValue, function (word) {

        return word.length + 1;
    });
    for (let i = 0; i < inpValue.length; i++) {
        if (indexOfLastWordInString >= i) {
            arrForRow5.push(inpValue[i]);
        } else {
            arrForRow6.push(inpValue[i]);
        }
    }
    result.push(arrForRow5, arrForRow6);

    return result;
}

function myMap(arr, callback) {
    let lengthOf = 0;
    let index;
    for(let i = 0; i < arr.length; i++) {
        lengthOf = lengthOf + callback(arr[i]);
        if(lengthOf > 30) {
            index = i - 1;

            return index;
        }
    }
}

// const someElem = document.getElementsByClassName('input-cell');
//     const allElements = [];
//     for(let i = 0; i < someElem.length; i++) {
//
//         const el = {};
//         el.col = someElem[i].col;
//         el.row = someElem[i].row;
//         el.value = someElem[i].innerText;
//         console.log(someElem[i].innerText);
//         allElements.push(el);
// }




function reqListener () {
    console.log(this.responseText);
    window.open(this.responseText);
}

function sendRequest(title) {
    if(isNaN(title) == 'null') {
        return false;
    }
    const someElem = document.getElementsByClassName('input-cell');
    const allElements = [];
    for(let i = 0; i < someElem.length; i++) {

        const el = {};
        el.col = someElem[i].col;
        el.row = someElem[i].row;
        el.value = someElem[i].innerText;
        allElements.push(el);
    }
    allElements[0].fileTitle = title;

    let xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/users";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.addEventListener("load", reqListener);
    var data = JSON.stringify(allElements);
    xhr.send(data);
}

//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("POST", "http://localhost:3000/users");
// oReq.send(JSON.stringify(allElements));




// document.getElementById('btn-create-document');


function getCoords(elem) { // кроме IE8-
    const box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}
