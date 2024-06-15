
var email = document.getElementById(`email`);
var password = document.getElementById(`password`);
var useremail = document.getElementById(`useremail`);
var note = document.getElementById(`note`);
var logincontainer = document.getElementById(`logincontainer`);
var homecontainer = document.getElementById(`homecontainer`);
var ul = document.getElementById(`ul`);

cheackifuserlogin() ;
function loginuser(){
    if(!email.value || !password.value){
        alert(`please enter email and password`);
    }
    
    else 
     JSON.stringify(password);
    JSON.stringify(email);rendernote()
    localStorage.setItem("email", email.value )
    localStorage.setItem("password", password.value )
    email.innerHTML = ``
    password.innerHTML = ``
    
    
    cheackifuserlogin();
    
}

    
    
 
function cheackifuserlogin(){
    var email = localStorage.getItem("email");
    email = JASON.parse("email")
    
if(email === email){
    // note =JSON.parse(note)
    homecontainer.style.display="block"
logincontainer.style.display="none"
useremail.innerHTML = email;

}
else {
    homecontainer.style.display="none"
logincontainer.style.display="block"

cheackifuserlogin();

}

}


 function submitNote() {
    note.innerHTML = note.value
  note = JSON.stringify(note);
  localStorage.setItem("note", note);


  
  
 }

 function getvaluefromlocalstorage(){
    localStorage.getItem("email")
localStorage.getitem("note")
 note =JSON.parse("note") 
 email =JSON.parse("email")



 }

function rendernote(){
    var ul = document.getElementById(`ul`);


ul.innerHTML = `<li>${note}  ${email}</li>`
}


function logout(){
 localStorage.clear();

 
}







