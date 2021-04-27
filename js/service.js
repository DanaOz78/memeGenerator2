'use strict'

//var gImgs = [{ id: 1, url: 'img/popo.jpg', keywords: ['happy'] }];
var gNextId = 1;
var gImgs;
var gKeywords = { 'happy': 12, 'sad': 1 }
var STORAGE_KEY = 'imgs';
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            position: { x: 30, y: 30 },
            txt: 'Welcome!',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            position: { x: 30, y: 200 },
            txt: 'hello',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

createImgs();

function createImgs() {
    var imgs = loadFromStorage(STORAGE_KEY);
    //var imgs;
    console.log(imgs)
    if (!imgs || !imgs.length) {
        imgs = [
            { id: gNextId++, url: 'meme-imgs/1.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/2.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/3.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/4.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/5.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/6.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/7.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/8.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/9.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/10.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/11.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/12.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/13.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/14.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/15.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/16.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/17.jpg', keywwords: ['happy'] },
            { id: gNextId++, url: 'meme-imgs/18.jpg', keywwords: ['happy'] },

        ]
    }
    gImgs = imgs;
    addToStorage(STORAGE_KEY, imgs)
}

function getImgs() {
    return gImgs;
}

// set the selected img by imgId
function setSelectedImg(imgId) {
    gMeme.selectedImgId = +imgId;
    //console.log(gMeme.selectedImgId)
}
//return the selected image
function getSelectedImg() {
    var imgs = gImgs;
    var img = imgs.find(img => (img.id === gMeme.selectedImgId))
    return img;
}

// getSelectedLine() returned an object like the followig:
//   {
//      position: { x: 1, y: 2 },
//      txt: 'I never eat Falafel',
//      size: 20,
//      align: 'left',
//      color: 'red'
//   }
//return the selected line
function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}


function getLineObject(index) {
    return gMeme.lines[index];
}

// setSelectedLine() sets an object like the followig:
//   {
//      position: { x: 1, y: 2 },
//      txt: 'I never eat Falafel',
//      size: 20,
//      align: 'left',
//      color: 'red'
//   }
function setSelectedLine(lineObject) {
    gMeme.lines[gMeme.selectedLineIdx] = lineObject;
}


function setTextOfLine(textLineIndex, txt) {
    gMeme.lines[textLineIndex].txt = txt;
}

function getTextOfLine(textLineIndex) {
    return gMeme.lines[textLineIndex].txt;
}

function addLineOfText(posY) {
    let newLine = {
        position: { x: 30, y: posY },
        txt: '',
        size: 20,
        align: 'left',
        color: 'red'
    };

    gMeme.lines.push(newLine);
    // gMeme.selectedLineIdx = gMeme.lines.length - 1;
}


function removeLine() {
    console.log(gMeme.lines[gMeme.selectedLineIdx]);
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function getAllLines() {
    return gMeme.lines;
}

function getselectedLineIdx() {
    return gMeme.selectedLineIdx;
}

function setSelectedLineId(lineId) {
    gMeme.selectedLineIdx = lineId;
}

function alignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].position.x = 30;;

}

function alignRight() {
    gMeme.lines[gMeme.selectedLineIdx].position.x += 200;

}

function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].position.x = 100;

}

function increase() {
    gMeme.lines[gMeme.selectedLineIdx].size += 2;
}

function decrease() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 2;
}

