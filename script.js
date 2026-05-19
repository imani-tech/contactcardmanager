// ***************store elements in variables**************
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const typeInput = document.getElementById("typeInput");
const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");
const contactsList = document.getElementById("contactsList")

// *****************VALIDATION**************
  let contacts = JSON.parse(localStorage.getItem("contactCards")) || [];
 displayCard();
 submitBtn.addEventListener("click", (e) => {
    e.preventDefault()      
    // validate if empty
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let phone = phoneInput.value.trim();
    let type = typeInput.value.trim(); 
     //Validate name 
    function nameValidation(){
    if(name === "") {
        errorMessage.textContent = "name is required"
        return false;
    }   
    
    if(name.length < 3) {
        errorMessage.textContent = "Enter a valid name"
        return false;
    } 
        return true    
    }
     // validate email
    let isEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    function emailValidation(){
        if (email === "") {
            errorMessage.textContent = "Email is required";
            return false;
        }
        if(!isEmail.test(email)){ 
            errorMessage.textContent = "Enter a valid email";
            return false;
        }
        return true;
   
    }
 // validate phone number
    let isPhoneNumber = /^\d{8,15}$/
    function phoneValidation(){
        if (phone === "") {
            errorMessage.textContent = "Phone number is required";
             return false;
        }
        if(!isPhoneNumber.test(phone)) { 
            errorMessage.textContent = "Enter a valid Phone number"
            return false
        }
        return true;
    
    }
    
// validating type
    function typevalidation(){        
        if(type === "")  {
            errorMessage.textContent = "Contact type is required"
            return false;
        }
        return true;
    
    }

    if(!nameValidation()){
        return
    }
    if(!emailValidation()){
        return
    }      
    if(!phoneValidation()){
        return;
    }
    if(!typevalidation()){
        return
    }
    errorMessage.textContent = "great"
    let card = {name, email, phone, type}    
    contacts.push(card);
    displayCard()
})
    

   function displayCard(){
    contactsList.innerHTML = ""    
    // ************Card Display **************
//    *********looping through Contact array*******8
    for(let i = 0; i < contacts.length; i++){
        let position = contacts[i] 
            //  looping through card object
         for (const info in position) {       
           let p = document.createElement("p")           
           p.classList.add("card-para")
           p.textContent = position[info]                  
          contactsList.append(p); 
         }       
                
        //  making a delete btn
          let deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.classList.add("delete-btn");
          contactsList.append(deleteBtn);
          deleteBtn.addEventListener("click", () => {
          contacts.splice(i, 1)   
          displayCard()      
          })
           
          }        
    }    
    localStorage.setItem("contactCards", JSON.stringify(contacts))
   
   
   
 
 