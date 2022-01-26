const $waterSave = document.querySelector("#save-water");
const $waterTotal = document.querySelector("#total-water");

// let waterAmountText = $waterAmount.innerText;

const savedWater = localStorage.getItem("water");

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

function saveWater(){
    
}

$waterSave.addEventListener("click", handleWaterSave);


//local storage의 총 water 수정 기능


