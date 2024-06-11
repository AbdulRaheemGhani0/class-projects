
var email = document.getElementById(`email`);
var password = document.getElementById(`password`);
var useremail = document.getElementById(`useremail`);
var note = document.getElementById(`note`);
var logincontainer = document.getElementById(`logincontainer`);
var homecontainer = document.getElementById(`homecontainer`);
var ul = document.getElementById(`ul`);


function loginuser(){
    if(!email.value || !password.value){
        alert(`please enter email and password`);
    }
    
    else 
     JSON.stringify(password);
    JSON.stringify(email);
    localStorage.setItem("email", email.value )
    localStorage.setItem("password", password.value )
    email.innerHTML = ``
    password.innerHTML = ``
    
    
    cheackifuserlogin();
    }
    
 
function cheackifuserlogin(){
    var email = localStorage.getItem("email")
if(email){
    // note =JSON.parse(note)
    homecontainer.style.display="block"
logincontainer.style.display="none"
useremail.innerText = email;

}
else {
    homecontainer.style.display="none"
logincontainer.style.display="block"

cheackifuserlogin();
}

}


 function submitNote() {
    var note = note.value
  notevalue = JSON.stringify(note);
  localStorage.setItem("note", notevalue);



  
 }

 function getvaluefromlocalstorage(){
    localStorage.getItem("email")
localStorage.getitem("note")
 note =JSON.parse(note) 
 email =JSON.parse(email)


rendernote()
 }

function rendernote(){

ul.innerHTML = `<li>${note} ,</br> ${email}</li>`
}
// localStorage.clear();













 
// var notearea = document.getElementById(`notearea`);
// notearea
















// var email = document.getElementById("gamil")
// email.innerHTML = `${email.value}`
// // console.log(email)
// var password = document.getElementById("password")
// password.innerHTML = `${password.value}`
// // console.log(password)
// function submitFormData(){
   
// console.log(`Email==>${email.value},Password==>${password.value}
// `)
// email.value=""
// password.value= ""
// }

//  var loginbtn = document.getElementById(`login-btton`)
//  loginbtn.innerHTML = function 

// function login() {
// console.log(`${email.value}`,`${password.value}`)




// }





