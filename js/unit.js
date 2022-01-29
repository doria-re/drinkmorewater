const $unit = document.querySelectorAll(".unit");
const $unitButtonClick = document.querySelector("#change-unit");

// let waterAmountText = $waterAmount.innerText;

function changeUnit(){
    waterAmountText = 0;
    $waterAmount.innerText = 0;
    if ($unit[0].innerText.includes("컵")){
        for (let i=0; i<$unit.length; i++){
            $unit[i].innerText = $unit[i].innerText.replace("컵", "ml");
        }    
    } else {
        for (let i=0; i<$unit.length; i++){
            $unit[i].innerText = $unit[i].innerText.replace("ml", "컵");
        }
    }
    getWater();
}

$unitButtonClick.addEventListener("click", changeUnit);


