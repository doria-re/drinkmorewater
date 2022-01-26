const $waterButton = document.querySelector("#water-record");
const $waterAmount = document.querySelector("#amount");

let waterAmountText = $waterAmount.innerText;

let count = 0;

function onClickButton (){
    count++;
}

function addWater(){
    if ($unit[0].innerText.includes("컵")){
        waterAmountText = Number(waterAmountText) + 0.5;
        $waterAmount.innerText = waterAmountText;
    } else{
        waterAmountText = Number(waterAmountText) + 100;
        $waterAmount.innerText = waterAmountText;
    }
    
}

let waterInterval;
function water(){
    if (count % 2 === 0){
        clearInterval(waterInterval);
        $waterButton.innerText = "눌러서 기록 시작";
    } else {
        waterInterval = setInterval(addWater, 1000);
        $waterButton.innerText = "눌러서 멈춤";
    }
}

$waterButton.addEventListener("click", water);

