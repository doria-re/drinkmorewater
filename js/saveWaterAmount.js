const $waterSave = document.querySelector("#save-water");
const $waterTotal = document.querySelector("#total-water");

// let waterAmountText = $waterAmount.innerText;

getWater();

function handleWaterSave(){
    $waterAmount.innerText = 0;
    if ($unit[0].innerText.includes("컵")) {
        localStorage.setItem("water", Number(localStorage.getItem("water")) + (Number(waterAmountText)*200)); 
    } else {
        localStorage.setItem("water", Number(localStorage.getItem("water")) + Number(waterAmountText))
    }
    getWater();
    waterAmountText = 0;

}

function getWater(){
    if($unit[0].innerText.includes("컵")){
        $waterTotal.innerText = Number(localStorage.getItem("water")) / 200
    } else {
        $waterTotal.innerText = localStorage.getItem("water");
    }
}


$waterSave.addEventListener("click", handleWaterSave);


//local storage의 총 water 수정 기능

const $savedWaterAdd = document.querySelector("#add-saved-water");
const $savedWaterMinus = document.querySelector("#minus-saved-water");

function addSavedWater(){
    localStorage.setItem("water", Number(localStorage.getItem("water")) + 100);
    getWater();
}


function minusSavedWater(){
    if (Number(localStorage.getItem("water")) <= 0) {
        alert("0 미만으로 줄일 수 없습니다.");
    } else {
        localStorage.setItem("water", Number(localStorage.getItem("water")) - 100);
        getWater();
    }
}

$savedWaterAdd.addEventListener("click", addSavedWater);
$savedWaterMinus.addEventListener("click", minusSavedWater);
