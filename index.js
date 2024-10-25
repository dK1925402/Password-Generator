const passwordscreen = document.querySelector("#inputbar");

const copydata = document.querySelector("[data-copy]");
const passwordLength = document.querySelector("#para");
const slider = document.querySelector("[data-lengthSlider]"); 


const AllCheckbox = document.querySelectorAll("input[type=checkbox]"); 


const colour = document.getElementById("changethis");

const generate = document.getElementById("password-btn");

const copyText = document.getElementById("copybutton");

passwordscreen.value ="PASSWORD";
slider.value=12;
passwordLength.innerHTML=slider.value;




const allData =[
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz',
    '0123456789',
    '!@#$%^&*()-_=+[]{};:",.<>/?|\~`'

];

let check =[];
let printdata=[];


function changecolor(length){
console.log("change colour")

    if(length<8){
        colour.style.backgroundColor="red";
        
    }

    else if(length>8 && length <12 ){
        colour.style.backgroundColor="yellow";
    }
    else{
        colour.style.backgroundColor="green";
    }

   
}


function generateString(length ,characters ) {

    changecolor(length);
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    passwordscreen.value =result;



}


function copyPassword(){

    navigator.clipboard.writeText(passwordscreen.value);
    
    // Alert the copied text
    alert("Copied the text: " + passwordscreen.value);
}

copyText.addEventListener("click",copyPassword);



function handleslider(e){
passwordLength.innerHTML=slider.value;}

slider.addEventListener("change",handleslider);

function generatePassword_button(){
// start
for(let i = 0 ; i<4; i++){

    if(AllCheckbox[i].checked){
        // console.log(i);
        check[i] =true;

    }
    else{
        check[i] =false;
    }
}

for( i = 0 ; i<4; i++){

    if(check[i]){
        // console.log(i);
  print[i] = allData[i];

    }
    else{
       print[i] ="";
    }
}



generateString(slider.value,(print[0]+print[1]+print[2]+print[3]));

}




generate.addEventListener("click",generatePassword_button);


