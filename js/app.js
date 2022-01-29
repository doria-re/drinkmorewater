const $unit = document.querySelectorAll(".unit");
const $unitButtonClick = document.querySelector("#change-unit");
const $waterButton = document.querySelector("#water-record");
const $waterAmount = document.querySelector("#amount");
const $waterAddManual = document.querySelector("#add-water-manual");
const $waterMinusManual = document.querySelector("#minus-water-manual");
const $waterSave = document.querySelector("#save-water");
const $waterTotal = document.querySelector("#total-water");
const $savedWaterAdd = document.querySelector("#add-saved-water");
const $savedWaterMinus = document.querySelector("#minus-saved-water");

const HALF_CUP_ML = 100;
const HALF_CUP_CUP = 0.5;
const ONE_CUP = 200;


let currentUnit = $unit[1].innerText;

let count = 0;
let waterAmount = 0;
let waterInterval;



function changeUnit(){
    waterAmount = 0;
    $waterAmount.innerText = 0;
    if (currentUnit === "컵"){
        for (let i=0; i<$unit.length; i++){
            $unit[i].innerText = $unit[i].innerText.replace("컵", "ml");
        }    
    } else {
        for (let i=0; i<$unit.length; i++){
            $unit[i].innerText = $unit[i].innerText.replace("ml", "컵");
        }
    }
    currentUnit = $unit[1].innerText;
    getWater();
}

$unitButtonClick.addEventListener("click", changeUnit);



function onClickButton (){
    count++;
}


function addWater(){
    if (currentUnit === "컵"){
        waterAmount = waterAmount + HALF_CUP_CUP;
    } else{
        waterAmount = waterAmount + HALF_CUP_ML;
    }
    $waterAmount.innerText = waterAmount;
    
}


function handleClickWater(){
    if (count % 2 === 0){
        clearInterval(waterInterval);
        $waterButton.innerText = "눌러서 기록 시작";
    } else {
        waterInterval = setInterval(addWater, 1000);
        $waterButton.innerText = "눌러서 멈춤";
    }
}

$waterButton.addEventListener("click", handleClickWater);






function addWaterManual(){
    if (currentUnit === "컵"){
        waterAmount = waterAmount + HALF_CUP_CUP;
    } else{
        waterAmount = waterAmount + HALF_CUP_ML;
    }
    $waterAmount.innerText = waterAmount;
}

function miunsWaterManual(){
    if (waterAmount <= 0) {
        alert("0 미만으로 줄일 수 없습니다.");
    } else if (currentUnit === "컵"){
        waterAmount = waterAmount - HALF_CUP_CUP;
    } else{
        waterAmount = waterAmount - HALF_CUP_ML;
    }
    $waterAmount.innerText = waterAmount;
}

$waterAddManual.addEventListener("click", addWaterManual);
$waterMinusManual.addEventListener("click", miunsWaterManual);


let localWaterAmount = Number(localStorage.getItem("water"));
let newLocalWaterAmount = 0;


getWater();

function handleWaterSave(){
    if (currentUnit === "컵") {
        newLocalWaterAmount = localWaterAmount + (waterAmount*ONE_CUP);
    } else {
        newLocalWaterAmount = localWaterAmount + waterAmount;
    }
    localStorage.setItem("water", newLocalWaterAmount);
    localWaterAmount = newLocalWaterAmount;
    waterAmount = 0;
    getWater();
    $waterAmount.innerText = waterAmount;
}

function getWater(){
    if(currentUnit === "컵"){
        $waterTotal.innerText = localWaterAmount / ONE_CUP
    } else {
        $waterTotal.innerText = localStorage.getItem("water");
    }
}


$waterSave.addEventListener("click", handleWaterSave);


//local storage의 총 water 수정 기능
//let localWaterAmount = Number(localStorage.getItem("water"));
//let newLocalWaterAmount = 0;


function addLocalWater(){
    newLocalWaterAmount = localWaterAmount + HALF_CUP_ML;
    localStorage.setItem("water", newLocalWaterAmount);
    localWaterAmount = newLocalWaterAmount;
    getWater();
}


function minusLocalWater(){
    if (localWaterAmount <= 0) {
        alert("0 미만으로 줄일 수 없습니다.");
    } else {
        newLocalWaterAmount = localWaterAmount - HALF_CUP_ML;
        localStorage.setItem("water", newLocalWaterAmount);
        localWaterAmount = newLocalWaterAmount;
        getWater();
    }
}

$savedWaterAdd.addEventListener("click", addLocalWater);
$savedWaterMinus.addEventListener("click", minusLocalWater);
