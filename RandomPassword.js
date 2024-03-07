const passwordBox=document.querySelector('#Password');
const PassLength=8;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="@#&<>_-$";

const allChars= upperCase + lowerCase + number + symbols;

function createPassword(){
    let password= "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password +=symbols[Math.floor(Math.random() * symbols.length)];   

    while(PassLength > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password; // it will display password into input box

}

//  creating password by clicking on button 
const button=document.querySelector('.btn');
button.addEventListener("click", () => {
    createPassword();
})

// it allow us to edit text
document.designMode="on";  

// both doesnot allow to edit 
// document.designMode="off";
// document.designMode;



//copy context onclicking on icon
// const copyIcon= document.querySelector('#icon');
// copyIcon.addEventListener("click", () => {
//     copyPassword();
// })



// this code is for to copy the text

// const copyPassword = () => {
//     // passwordBox.Select();
//     const textcopy=document.querySelector('#text');  
//     navigator.clipboard.writeText(textcopy.innerText);
// }