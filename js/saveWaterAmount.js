const $waterSave = document.querySelector("#save-water");
const $waterTotal = document.querySelector("#total-water");

getWater();

function getWater(){
    if($unit[0].innerText.includes("컵")){
        $waterTotal.innerText = Number(localStorage.getItem("water")) / 200
    } else {
        $waterTotal.innerText = localStorage.getItem("water");
    }
}


function saveWater(){
    if ($unit[0].innerText.includes("컵")) {
        localStorage.setItem("water", (Number($waterAmount.innerText)*200)); 
    } else {
        localStorage.setItem("water", $waterAmount.innerText)
    }
    getWater();
}


$waterSave.addEventListener("click", saveWater);