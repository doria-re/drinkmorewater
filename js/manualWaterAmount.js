const $waterAddManual = document.querySelector("#add-water-manual");
const $waterMinusManual = document.querySelector("#minus-water-manual");

// let waterAmountText = $waterAmount.innerText;

function addWaterManual(){
    if ($unit[0].innerText.includes("컵")){
        waterAmountText = Number(waterAmountText) + 0.5;
        $waterAmount.innerText = waterAmountText;
    } else{
        waterAmountText = Number(waterAmountText) + 100;
        $waterAmount.innerText = waterAmountText;
    }
}

function miunsWaterManual(){
    if (Number($waterAmount.innerText) <= 0) {
        alert("0 미만으로 줄일 수 없습니다.");
    } else if ($unit[0].innerText.includes("컵")){
        waterAmountText = Number(waterAmountText) - 0.5;
        $waterAmount.innerText = waterAmountText;
    } else{
        waterAmountText = Number(waterAmountText) - 100;
        $waterAmount.innerText = waterAmountText;
    }
}

$waterAddManual.addEventListener("click", addWaterManual);
$waterMinusManual.addEventListener("click", miunsWaterManual);