const maxlengthContentEditableLib = require('maxlength-contenteditable');
const mainInput = document.getElementById('main');
const sideBarWithColNumbers = document.getElementById('for-numbers-of-cols');
const HeaderBarWithRowsAndSections = document.getElementById('top-header');
const oneOfDiv = document.getElementById('campaign');
let tabIndex = 0;
let copyBuffer;
const textForEmptyInput = 'justEmpty';
let focusedElements = [];
const localStorageDataForApp = localStorage.getItem('seoApp');
const arrOfCellsObjectsStorage = JSON.parse(localStorageDataForApp);




for(let i = 0; i < 14; i++) {
    for(let j = 0; j < 500; j++) {

        const newElem = createInput();
        newElem.classList.add(`row${i + 1}`);
        newElem.classList.add(`col${mainInput.childNodes[i].childElementCount + 1}`);
        newElem.col = mainInput.childNodes[i].childElementCount + 1;
        newElem.row = i + 1;
        newElem.id = `row${newElem.row}col${newElem.col}`;
        newElem.innerText = textForEmptyInput;
        newElem.classList.add('cell-without-text');
        for(let i = 0; i < arrOfCellsObjectsStorage.length; i++) {
            const found = arrOfCellsObjectsStorage[i];
            if(found.col === newElem.col && found.row === newElem.row) {
                if(found.value) {
                    newElem.innerText = found.value;
                    newElem.classList.remove('cell-without-text');
                    newElem.dataset.content = found.value.length;
                    // console.log(found.value.codePointAt(0), found.value.codePointAt(1), found.value.codePointAt(2), found.value.codePointAt(3));
                }
            }
        }

        mainInput.childNodes[i].appendChild(newElem);
        if (i < 1) {
            const numberOfCol = createNumberOfCell();
            numberOfCol.innerText = mainInput.childNodes[i].childElementCount;
            numberOfCol.id = `col${mainInput.childNodes[i].childElementCount}`;
            numberOfCol.col = mainInput.childNodes[i].childElementCount;
            sideBarWithColNumbers.appendChild(numberOfCol);

            const checkbox = createCheckbox();
            checkbox.setAttribute('name', `col${mainInput.childNodes[i].childElementCount}`);
            numberOfCol.appendChild(checkbox);
            moreActionsElemCreate(numberOfCol);
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
    input.setAttribute('class', 'for-col-of-cel');

    return input;
}

function createCheckbox() {
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('checked', '');
    input.setAttribute('class', 'cols-checkbox');

    return input;
}

function addOneMoreInput() {
    const plus = document.createElement('h4');
    plus.innerText = '+';
    plus.setAttribute('class', 'addInput');

    return plus;
}

function removeHideEmtyCellText() {

    for (let i = 0; i < focusedElements.length; i++) {
        const input = document.getElementById(focusedElements[i]);
        if (input.innerText === '' || input.innerText === textForEmptyInput) {
            input.innerText = textForEmptyInput;
            input.classList.add('cell-without-text');
            input.dataset.content = 0;
        }
    }
    focusedElements = [];
}

document.addEventListener('click', (event) => {

    const inputs = document.getElementsByClassName('input-cell');
    const prevFocColCellNumber = document.getElementsByClassName('focused-col');
    const prevFocRowCellNumber = document.getElementsByClassName('focused-row');

    const colMenu = document.getElementById('col-menu-with-actions');
    colMenu.style.left = `-9999px`;
    colMenu.style.top = `-9999px`;
    const focusedMoreMenu = document.getElementsByClassName('more-actions-btn-focused');
    for(let i = 0; i < focusedMoreMenu.length; i++) {
        focusedMoreMenu[i].classList.remove('more-actions-btn-focused');
    }

    if(event.target.classList.contains('more-actions-btn')) {
        event.target.classList.add('more-actions-btn-focused');
        showColMenu(event.target.col, event.pageX, event.pageY);
    }

    if(event.target.id === 'add-col-with-plus') {
        console.log(event.target.parentNode.col);
        mutateCellToCellWithPluses(event.target.parentNode.col);
        // createColWithPlus(event.target.parentNode.col)
    }

    if(event.target.id === 'add-col-with-square-brackets') {
        console.log(event.target.parentNode.col);
        addRemoveCol(1, event.target.parentNode.col, '+');
        createStringWithSquadBrackets(event.target.parentNode.col);
    }

    if(event.target.id === 'add-col-with-quotes') {
        console.log(event.target.parentNode.col);
        addRemoveCol(1, event.target.parentNode.col, '+');
        createStringWithDoubleQuotes(event.target.parentNode.col);
    }

    if(event.target.id === 'delete-col-with-shift') {
        console.log(event.target.parentNode.col);
        addRemoveCol(1, event.target.parentNode.col, '-');
    }

    if(event.target.id === 'add-empty-col') {
        console.log(event.target.parentNode.col);
        addRemoveCol(1, event.target.parentNode.col, '+');
    }


    if(event.target.id === 'clean-col') {
        console.log(event.target.parentNode.col);
        addRemoveCol(1, event.target.parentNode.col, 'false');
    }

    if(event.target.id === 'get-data-from-adGroup') {
        const rowAdGroupCells = document.getElementsByClassName('row3');
        const rowDescription1AdGroupCells = document.getElementsByClassName('row8');
        for (let i = 0; i < rowAdGroupCells.length; i++) {
            if (rowAdGroupCells[i].innerText === textForEmptyInput) {
                rowDescription1AdGroupCells[i].innerText = rowAdGroupCells[i].innerText;
                focusedElements.push(rowDescription1AdGroupCells[i].id);
            } else {
                rowDescription1AdGroupCells[i].innerText = rowAdGroupCells[i].innerText;
                rowDescription1AdGroupCells[i].classList.remove('cell-without-text');
                rowDescription1AdGroupCells[i].dataset.content = rowDescription1AdGroupCells[i].innerText.length;
                rowDescription1AdGroupCells[i].focus();
            }
        }
        removeHideEmtyCellText();
    }

    if (event.target.id === 'save-btn'){
        const arrOfCells = getAllInputsValuesArrForStorage();
        localStorage.setItem('seoApp', JSON.stringify(arrOfCells));
    }

    if (event.target.id === 'clear-localStorage'){
        if(confirm("Хотите удалить содержимое всеx ячеeк и очистить Локальное хранилище?")) {
            for(let i = 0; i < inputs.length; i++) {
                inputs[i].classList.add('cell-without-text');
                inputs[i].innerText = textForEmptyInput;
                inputs[i].dataset.content = 0;
            }
            localStorage.setItem('seoApp', JSON.stringify([]));
        }
    }

    if (event.target.id === 'all-cols') {
        const cols = document.getElementsByClassName('cols-checkbox');
        if (event.target.checked === true) {
            for (let i = 0; i < cols.length; i++) {
                if (cols[i].checked === false) {
                    cols[i].click();
                }
            }
        } else {
            for (let i = 0; i < cols.length; i++) {
                if (cols[i].checked === true) {
                    cols[i].click();
                }
            }
        }
    }

   if (event.target.id === 'all-rows') {
        const rows = document.getElementsByClassName('row-checkbox');
        if (event.target.checked === true) {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].checked === false) {
                    rows[i].click();
                }
            }
        } else {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].checked === true) {
                    rows[i].click();
                }
            }
        }
    }

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
            newElem.innerText = i + 1;
            newElem.classList.add(`col${mainInput.childNodes[i].childElementCount}`);
            mainInput.childNodes[i].insertBefore(newElem, placeBefore[i]);
        }
    }

    if (event.target.classList.contains('addInput')) {

    }

    if (event.target.classList.contains('input-cell')) {

        for(let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('contenteditable','false');
        }
        changeFocuseOnRowSidePanel(`row${event.target.row}`);
        changeFocuseOnColSidePanel(`col${event.target.col}`);
        event.target.classList.remove('cell-without-text');
        if (event.target.innerText === textForEmptyInput) {
            event.target.innerText = '';
        }
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
    // const test1 = getValuesFromCelPosition(1, 1);
    // const test2 = getValuesFromCelPosition(1, 2);
    // console.log(test1, test2);
    // addRemoveCol(1, 5, '-');
    if(e.key === 'Tab'){
        event.preventDefault();
        // removeHideEmtyCellText();
        if(event.target.row && event.target.col) {
            const inputs = document.getElementsByClassName('input-cell');
            for(let i = 0; i < inputs.length; i++) {
                inputs[i].setAttribute('contenteditable','false');
            }
            if (event.target.row < 14) {

                changeFocuseOnRowSidePanel(`row${event.target.row + 1}`);

                const nextCell = document.getElementById(`row${event.target.row + 1}col${event.target.col}`);
                nextCell.setAttribute('contenteditable','true');
                nextCell.classList.remove('cell-without-text');
                if (nextCell.innerText === textForEmptyInput) {
                    nextCell.innerText = '';
                }
                setEndOfContenteditable(nextCell);
                nextCell.focus();
                const positionElem = getCoords(nextCell);
                // focusedElements.push(nextCell.id);
                window.scrollTo(positionElem.left - 500, positionElem.top - 300);
            } else if (event.target.row === 14) {
                if (document.getElementById(`row1col${event.target.col + 1}`)) {
                    changeFocuseOnRowSidePanel(`row1`);
                    changeFocuseOnColSidePanel(`col${event.target.col + 1}`);

                    const nextCell = document.getElementById(`row1col${event.target.col + 1}`);
                    nextCell.setAttribute('contenteditable', 'true');
                    nextCell.classList.remove('cell-without-text');
                    if (nextCell.innerText === textForEmptyInput) {
                        nextCell.innerText = '';
                    }

                    setEndOfContenteditable(nextCell);
                    nextCell.focus();
                    const positionElem = getCoords(nextCell);
                    // focusedElements.push(nextCell.id);
                    window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                } else {
                    const nextCell = document.getElementById(`row1col${event.target.col}`);
                    nextCell.setAttribute('contenteditable', 'true');
                    nextCell.classList.remove('cell-without-text');
                    if (nextCell.innerText === textForEmptyInput) {
                        nextCell.innerText = '';
                    }
                    setEndOfContenteditable(nextCell);
                    nextCell.focus();
                    // focusedElements.push(nextCell.id);
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

                    if(arrOfColRows.length === 1) {
                        arrOfColRows[0] = checkJustEmpyCell(arrOfColRows[0]);
                        function checkJustEmpyCell(elemOfArr) {
                            let arr = [];
                            let str;
                            for(let i = 0; i <elemOfArr.length; i++) {
                                arr.push(elemOfArr.codePointAt(i));
                                str = arr.join('');
                            }
                            if (str === '13' || str === '1061171151166910911211612113') {
                                return 'justEmpty';
                            } else {
                                return elemOfArr;
                            }
                        }
                        const elem = document.getElementById(`row${event.target.row}col${event.target.col + i}`);

                        if (arrOfColRows[0].indexOf(String.fromCodePoint(13)) === arrOfColRows[0].length - 1) {
                            const arr = arrOfColRows[0].split(String.fromCodePoint(13));
                            arrOfColRows[0] = arr.join('');
                        }
                        elem.innerText = arrOfColRows[0];
                        elem.dataset.content = arrOfColRows[0].length;
                        elem.classList.remove('cell-without-text');
                        if (elem.innerText === textForEmptyInput) {
                            elem.innerText = '';
                        }
                        focusedElements.push(elem.id);

                        if (i === arrWithNewLine.length - 1) {
                            const elem = document.getElementById(`row${event.target.row}col${event.target.col + i}`);

                            elem.setAttribute('contenteditable', 'true');
                            setEndOfContenteditable(elem);
                            elem.classList.remove('cell-without-text');
                            if (elem.innerText === textForEmptyInput) {
                                elem.innerText = '';
                            }
                            elem.focus();
                            focusedElements.push(elem.id);
                            changeFocuseOnRowSidePanel(`row${event.target.row}`);
                            changeFocuseOnColSidePanel(`col${event.target.col + i}`);
                            elem.dataset.content = arrOfColRows[0].length;
                            console.log(1, arrOfColRows[0].length);
                            const positionElem = getCoords(elem);

                            window.scrollTo(positionElem.left - 500, positionElem.top - 300);
                        }

                    } else {
                        if(arrWithNewLine[i].indexOf('\t') > -i) {
                            for (let j = 0; j < arrOfColRows.length; j++) {
                                const elem = document.getElementById(`row${event.target.row + j}col${event.target.col + i}`);
                                elem.innerText = arrOfColRows[j];
                                elem.dataset.content = arrOfColRows[j].length;
                                elem.classList.remove('cell-without-text');
                                if (elem.innerText === textForEmptyInput) {
                                    elem.innerText = '';
                                }
                                focusedElements.push(elem.id);

                                if (j === arrOfColRows.length - 1) {
                                    elem.dataset.content = arrOfColRows[j].length - 1;
                                }

                                if (i === arrWithNewLine.length - 1) {
                                    const elem = document.getElementById(`row${event.target.row + j}col${event.target.col + i}`);
                                    elem.setAttribute('contenteditable', 'true');
                                    setEndOfContenteditable(elem);
                                    elem.classList.remove('cell-without-text');
                                    if (elem.innerText === textForEmptyInput) {
                                        elem.innerText = '';
                                    }
                                    elem.focus();
                                    focusedElements.push(elem.id);
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
                event.target.classList.remove('cell-without-text');
                if (event.target.innerText === textForEmptyInput) {
                    event.target.innerText = '';
                }
                focusedElements.push(event.target.id);
                event.target = arrWithNewLine[0];
                event.target.dataset.content = arrWithNewLine[0].length;
            }
            removeHideEmtyCellText();
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
                    allInRow6[i].classList.remove('cell-without-text');
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
            let newString = 'too large query';
            if (arr.length < 100) {
                newString = arr.join(String.fromCodePoint(13, 10));
                copyBuffer = newString;
            }
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

document.addEventListener('focusout', (event) => {
    if(event.target.classList.contains('input-cell')) {
        focusedElements.push(event.target.id);
        removeHideEmtyCellText();
    }
    const arrOfCells = getAllInputsValuesArrForStorage();
    localStorage.setItem('seoApp', JSON.stringify(arrOfCells));
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
        if(document.querySelectorAll(`[name=col${someElem[i].col}]`)[0].checked && document.querySelectorAll(`[name=row${someElem[i].row}]`)[0].checked) {
            const el = {};
            el.col = someElem[i].col;
            el.row = someElem[i].row;
            el.fileTitle = title;
            if (someElem[i].innerText === textForEmptyInput) {
                el.value = '';
            } else {
                el.value = someElem[i].innerText;
            }
            allElements.push(el);
        }
    }

    console.log(allElements);

    // let xhr = new XMLHttpRequest();
    // var url = "http://localhost:3000/users";
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader("Content-type", "application/json");
    // xhr.addEventListener("load", reqListener);
    // var data = JSON.stringify(allElements);
    // xhr.send(data);
}

function getAllInputsValuesArrForStorage() {
    const someElem = document.getElementsByClassName('input-cell');
    const allElements = [];
    for(let i = 0; i < someElem.length; i++) {

        const el = {};
        el.col = someElem[i].col;
        el.row = someElem[i].row;
        if (someElem[i].innerText === textForEmptyInput) {
            el.value = ''
        } else {
            el.value = someElem[i].innerText;
        }
        allElements.push(el);
    }

    return allElements;
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

//
// document.addEventListener('mousedown', (event) => {
//     if(event.target.classList.contains('input-cell')) {
//         const pos = getCoords(event.target);
//         const rangeDiv = document.getElementById('div-range-to-copy');
//         rangeDiv.startPosX =  event.pageX;
//         rangeDiv.startPosY =  event.pageY;
//         rangeDiv.style.left = `${event.pageX}px`;
//         rangeDiv.style.top = `${event.pageY}px`;
//         rangeDiv.style.display = 'block';
//     }
// });
//
// document.addEventListener('mousemove', (event) => {
//     const rangeDiv = document.getElementById('div-range-to-copy');
//     if(rangeDiv.startPosY || rangeDiv.startPosX) {
//         if(event.pageX < rangeDiv.startPosX) {
//             rangeDiv.style.width = `${event.pageX + rangeDiv.startPosX}px`;
//         }
//         if (event.pageY < rangeDiv.startPosY) {
//             rangeDiv.style.height = `${event.pageY + rangeDiv.startPosY}px`;
//         }
//         if (event.pageX > rangeDiv.startPosX) {
//             rangeDiv.style.width = `${event.pageX - rangeDiv.startPosX}px`;
//         }
//         if (event.pageY < rangeDiv.startPosY) {
//             rangeDiv.style.height = `${event.pageY - rangeDiv.startPosY}px`;
//         }
//
//     }
// });
//
// document.addEventListener('mouseup', (event) => {
//     const rangeDiv = document.getElementById('div-range-to-copy');
//     rangeDiv.style.left = '0';
//     rangeDiv.style.top = '0';
//     rangeDiv.style.width = '0';
//     rangeDiv.style.height = '0';
//     rangeDiv.style.display = 'none';
// });

function add2Cols(row, col) {
    const cellsToReplace = getValuesFromCelPosition(row, col);
}
// function cleanColum(colId) {
//     const rowCells = document.getElementsByClassName(`col${colId}`);
//     for (let i = 0; i < rowCells.length; i++) {
//         rowCells[i].innerText = textForEmptyInput;
//         if(rowCells[i].classList.contains('cell-without-text')) {
//             rowCells[i].classList.remove('cell-without-text');
//         }
//         rowCells[i].classList.add('cell-without-text');
//         rowCells[i].dataset.content = '0';
//     }
// }
function addRemoveCol(row, col, action) {
    const cellsToStay = getValuesBeforeCelPosition(row, col);
    const cellsToReplace = getValuesFromCelPosition(row, col);

    if (action === '+') {

    } else if (action === '-') {
        for (let j = 0; j < 13; j++) {
            cellsToReplace[j].value = textForEmptyInput;
        }
    } else if (action === 'false') {
        for (let j = 0; j < 13; j++) {
            cellsToReplace[j].value = textForEmptyInput;
        }
    }

    for(let i = 0; i < cellsToReplace.length; i++) {
        let cell;
        if (action === '+') {
            cell = document.getElementById(`row${cellsToReplace[i].row}col${cellsToReplace[i].col + 1}`);
        } else if (action === '-') {
            cell = document.getElementById(`row${cellsToReplace[i].row}col${cellsToReplace[i].col - 1}`);
        } else if (action === 'false') {
            cell = document.getElementById(`row${cellsToReplace[i].row}col${cellsToReplace[i].col}`);
        }
        if(cell) {
            if(cellsToReplace[i].value === textForEmptyInput || cellsToReplace[i].value === '') {
            } else {
                cell.classList.remove('cell-without-text');
                cell.innerText = cellsToReplace[i].value;
                cell.dataset.content = cellsToReplace[i].value.length;
            }
        }
    }
    for(let i = 0; i < cellsToStay.length; i++) {
        const cell = document.getElementById(`row${cellsToStay[i].row}col${cellsToStay[i].col}`);
        if(cell) {
            if(cellsToStay[i].value === textForEmptyInput || cellsToStay[i].value === '') {
            } else {
                cell.classList.remove('cell-without-text');
                cell.innerText = cellsToStay[i].value;
                cell.dataset.content = cellsToStay[i].value.length;
            }
        }
    }
}

function getValuesBeforeCelPosition(row, col) {
    const cells = document.getElementsByClassName('input-cell');
    let rowForFind = 1;
    let colForFind = 2;
    const result = [];
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('cell-without-text')) {
        } else {
            cells[i].innerText = textForEmptyInput;
            cells[i].classList.add('cell-without-text');
            cells[i].dataset.content = 0;
        }
        if (rowForFind < 14) {
            const cell = document.getElementById(`row${rowForFind++}col${colForFind}`);
            if (cell) {
                result.push({
                    value: cell.innerText,
                    col: cell.col,
                    row: cell.row
                });
            }
        } else if (rowForFind === 14) {
            const cell = document.getElementById(`row${rowForFind}col${colForFind++}`);
            rowForFind = 1;
            if (cell) {
                result.push({
                    value: cell.innerText,
                    col: cell.col,
                    row: cell.row
                });
            }
        }
        if (colForFind === col) {
            return result;
        }
    }

    return result;
}

function getValuesFromCelPosition(row, col) {
    const cells = document.getElementsByClassName('input-cell');
    let rowForFind = 1;
    let colForFind = col;
    const result = [];
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('cell-without-text')) {
        } else {
            cells[i].innerText = textForEmptyInput;
            cells[i].classList.add('cell-without-text');
            cells[i].dataset.content = 0;
        }
        if (rowForFind < 14) {
            const cell = document.getElementById(`row${rowForFind++}col${colForFind}`);
            if (cell) {
                result.push({
                    value: cell.innerText,
                    col: cell.col,
                    row: cell.row
                });
            }
        } else if (rowForFind === 14) {
            const cell = document.getElementById(`row${rowForFind}col${colForFind++}`);
            rowForFind = 1;
            if (cell) {
                result.push({
                    value: cell.innerText,
                    col: cell.col,
                    row: cell.row
                });
            }
        }
    }

    return result;
}

function moreActionsElemCreate(elementToAppend) {
    // const elToAppend = document.getElementById(id);
    const img = document.createElement('img');
    img.setAttribute('src', '/images/moreActions.png');
    img.classList.add('more-actions-btn');
    img.col = elementToAppend.col;
    elementToAppend.appendChild(img);
}


function showColMenu(col, pageX, pageY){
    const colMenu = document.getElementById('col-menu-with-actions');
    colMenu.col = col;
    colMenu.style.left = `${pageX}px`;
    colMenu.style.top = `${pageY}px`;
    // colMenu.addEventListener('mouseleave', () => {
    //         colMenu.style.left = `-9999px`;
    //         colMenu.style.top = `-9999px`;
    //         const focusedMoreMenu = document.getElementsByClassName('more-actions-btn-focused');
    //         for(let i = 0; i < focusedMoreMenu.length; i++) {
    //             focusedMoreMenu[i].classList.remove('more-actions-btn-focused');
    //         }
    // });
}

function mutateCellToCellWithPluses (col) {
    const cell = document.getElementById(`row4col${col}`);
    let arr;
    let editArr;
    if (cell.innerText.search(/\[/g) !== -1) {
        let arrToEdit = cell.innerText.split('');
        arrToEdit.shift();
        arrToEdit.pop();
        arr = arrToEdit.join('');
        arr = arr.split(String.fromCodePoint(32));
       console.log(arr);
    } else if (cell.innerText.search(/\"/g) !== -1) {
        let arrToEdit = cell.innerText.split('');
        arrToEdit.shift();
        arrToEdit.pop();
        arr = arrToEdit.join('');
        arr = arr.split(String.fromCodePoint(32));
       console.log(arr);
    } else {
        arr = cell.innerText.split(String.fromCodePoint(32));
    }

        const maped = arr.map((x) => {
            if (x.search(/\+/g) !== -1 || x === textForEmptyInput) {
                console.log('contains +');
                return x;
            } else {
                return '\+' + x;
            }
        });
        const stringsWithPlus = maped.join(String.fromCodePoint(32));
        if (cell.innerText === textForEmptyInput) {
        } else {
            cell.innerText = stringsWithPlus;
            cell.dataset.content = stringsWithPlus.length;
        }
}

function createStringWithSquadBrackets(col) {
    const cell = document.getElementById(`row4col${col + 1}`);
    const cellToAdd = document.getElementById(`row4col${col}`);
    let newString;
    if (cell.innerText === textForEmptyInput) {
        console.log(cell.innerText);
    } else {
        if (cell.innerText.search(/\+/g) !== -1) {
            const checkPlus = cell.innerText.split('+');
            checkPlus.unshift('[');
            checkPlus.push(']');
            newString = checkPlus.join('');
            console.log(newString);
        } else if (cell.innerText.search(/\[/g) !== -1) {
            newString = cell.innerText;
        } else if (cell.innerText.search(/\"/g) !== -1) {
            const checkQuotes = cell.innerText.split('"');

            checkQuotes.unshift('[');
            checkQuotes.push(']');
            newString = checkQuotes.join('')
            console.log(newString);
        } else {
            const checkQuotes = cell.innerText.split('');
            checkQuotes.unshift('[');
            checkQuotes.push(']');
            newString = checkQuotes.join('');
        }
        cellToAdd.innerText = newString;
        cellToAdd.dataset.content = newString.length;
        cellToAdd.classList.remove('cell-without-text');
        cellToAdd.click();
    }
}

function createStringWithDoubleQuotes(col) {
    const cell = document.getElementById(`row4col${col + 1}`);
    const cellToAdd = document.getElementById(`row4col${col}`);
    let newString;
    if (cell.innerText === textForEmptyInput) {
        console.log(cell.innerText);
    } else {
        if (cell.innerText.search(/\+/g) !== -1) {
            const checkPlus = cell.innerText.split('+');
            checkPlus.unshift('"');
            checkPlus.push('"');
            newString = checkPlus.join('');
            console.log(newString);
        } else if (cell.innerText.search(/\"/g) !== -1) {
            newString = cell.innerText;
        } else if (cell.innerText.search(/\[/g) !== -1) {
            let arr = cell.innerText.split('[');
            let checkQuotes = arr.join('');
            checkQuotes = checkQuotes.split(']');
            checkQuotes.unshift('"');
            checkQuotes.push('"');
            newString = checkQuotes.join('')
            console.log(newString);
        } else {
            const checkQuotes = cell.innerText.split('');
            checkQuotes.unshift('"');
            checkQuotes.push('"');
            newString = checkQuotes.join('');
        }
        cellToAdd.innerText = newString;
        cellToAdd.dataset.content = newString.length;
        cellToAdd.classList.remove('cell-without-text');
        cellToAdd.click();
    }
}
