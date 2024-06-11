// let InputData = document.getElementById('search')
// let BtnData = document.getElementById('input-btn')
// let TextData = document.getElementById('textData')

// BtnData.addEventListener('click',() => {
//     // // console.log(InputData.value);
//     // InputData.value = ""

//     TextData.innerHTML += `<h1 class="text-[25px] text-white pl-[30px] pt-[30px] ">${InputData.value}</h1>`
//     InputData.value = ""
// })


let inputData = document.getElementById("search");
let BtnData = document.getElementById("input-Btn");
let textData = document.getElementById("text-Data");

let counter = 1;

BtnData.addEventListener('click', () => {
    if (inputData.value.trim() !== "") {
        textData.innerHTML += `
            <h1 class="text-[white] pl-[50px] pt-[20px] text-[25px]">${counter}. ${inputData.value}</h1>
        `;
        inputData.value = "";
        counter++;
    }
});