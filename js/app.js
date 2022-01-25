const unit = document.querySelectorAll(".unit");
const clickUnitButton = document.querySelector("#change-unit");
const waterRecord = document.querySelector("#water-record");
const waterAmount = document.querySelector("#amount");
console.log(unit[0].innerText)


function changeUnit(){
    if (unit[0].innerText.includes("컵")){
        for (let i=0; i<unit.length; i++){
            unit[i].innerText = unit[i].innerText.replace("컵", "ml");
        }    
    } else {
        for (let i=0; i<unit.length; i++){
            unit[i].innerText = unit[i].innerText.replace("ml", "컵");
        }
    }
}

function addWater(){
    waterAmount++;
}
//한번 누르면 물이 1초에 일정 단위만큼 늘어나고
//한번 더 누르면 멈춤

clickUnitButton.addEventListener("click", changeUnit);

function startStopWaterRecord(set){
    waterRecord.addEventListener("click", set);
}