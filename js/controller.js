'use strict'

let gCanvas;
let gCtx;
let currentImage;

function onInit() {
    //gTextRows = ['', '', ''];//?
    //gTextRowIndex = 0;//?
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    let lineAtBottom = getLineObject(1);//
    lineAtBottom.position.y = gCanvas.height - 30;//
    renderImgs();
}
//render imgs from service
function renderImgs() {
    let imgs = getImgs();
    var selectedId = getselectedLineIdx();
    let strHtmls = imgs.map(function (img) {//strHtmls is array
        //var className = (selectedId === img.id) ? 'selected' : '';
        //class="${className}"
        return `<img src="${img.url}" 
        onclick="onSelectedImg(this,'${img.id}')">`
        console.log(strHtmls)
    });
    let elImagContainer = document.querySelector('.modal-image-container');
    elImagContainer.innerHTML = strHtmls;
}
//when user click on image
function onSelectedImg(ev, imgId) {
    //console.log(ev, +imgId);
    let elCanvasContainer = document.querySelector('.canvas-container');
    elCanvasContainer.style.display = 'block';
    setSelectedImg(imgId);
    displayOnlyCanvas();
    renderModal(ev);
}

// display the canvas
function displayOnlyCanvas() {
    var elSelectedModal = document.querySelector('.modal-selected-img')
    var elImageModal = document.querySelector('.modal-image-container')
    var elBoxModal = document.querySelector('.modal-box-container')

    elImageModal.style.display = 'none';
    elSelectedModal.style.display = 'block';
    elBoxModal.style.display = 'flex';
}

function renderModal(ev) {
    currentImage = ev;
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.drawImage(currentImage, 0, 0);
    drawTextLines();
}
//get input txt from the user
function onDrawTextInCanvas(txt) {
    //console.log(txt)
    let line = getSelectedLine();
    console.log(line)
    line.txt = txt;
    renderModal(currentImage);
}

function onAddEmptyRow() {
    //addEmptyLineOfText(gCanvas.height / 2);
    addLineOfText(gCanvas.height / 2);//check number of rows
}
//change focus in rows -css
function onReplaceRows() {
    let selectedRowId = getselectedLineIdx();
    if (selectedRowId === 2) setSelectedLineId(0)
    else setSelectedLineId(++selectedRowId);
    renderModal(currentImage);
}

function drawTextLines() {
    gCtx.lineWidth = 2
    let lines = getAllLines();///get gMeme
    console.log(lines)
    lines.forEach((line, idx) => {
        if (gMeme.selectedLineIdx === idx) gCtx.fillStyle = 'yellow';
        else gCtx.fillStyle = line.color;
        gCtx.font = line.size + 'px Arial';
        gCtx.textAlign = line.align;
        //gCtx.strokeStyle = 'yellow';
        gCtx.fillText(line.txt, line.position.x, line.position.y);
    });
}

function onRemoveLine() {
    removeLine();
    var selectedLine = getselectedLineIdx();
    selectedLine = (selectedLine === 2) ? 0 : selectedLine++;
    setSelectedLineId(selectedLine);
    renderModal(currentImage);
}

function onBack() {
    var elSelectedModal = document.querySelector('.modal-selected-img')
    var elImageModal = document.querySelector('.modal-image-container')
    var elBoxModal = document.querySelector('.modal-box-container')
    var elCanvasContainer = document.querySelector('.canvas-container');
    elCanvasContainer.style.display = 'none';
    elImageModal.style.display = 'block';
    elSelectedModal.style.display = 'none';
    elBoxModal.style.display = 'none';
}

function onAlignLeft() {
    alignLeft();
    renderModal(currentImage);
}

function onAlignRight() {
    alignRight();
    renderModal(currentImage);
}

function onAlignCenter() {
    alignCenter();
    renderModal(currentImage);
}

function onIncrease(){
    increase();
    renderModal(currentImage);
    
}

function onDecrease(){
    decrease();
    renderModal(currentImage);
    
}


