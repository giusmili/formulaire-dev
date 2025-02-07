document.addEventListener("DOMContentLoaded",(e)=>{
        e.preventDefault()

 
        const btn_submit = document.getElementsByTagName('input')[3]
       


        const User = {

            inputNom: document.querySelectorAll('input[type="text"]')[0],
            inputPrenom: document.getElementsByTagName("input")[1],
            inputNumber: document.getElementsByTagName("input")[2],
            element: document.querySelector(".warning"),

            getUser(){
                if(this.inputNom.value && this.inputPrenom.value && this.inputNumber.value){
                    this.element.classList.add("warning-success")
                    this.element.classList.remove("warning-alert")
                    this.element.innerText = `Bonjour ${this.inputNom.value} ${this.inputPrenom.value } ${this.inputNumber.value}` 
                }
                else{
                    this.element.classList.remove("warning-success")
                    this.element.classList.add("warning-alert")
                    this.element.innerHTML =  "Remplir les champs"
                }
            }

        }
   

        btn_submit.addEventListener("click",(e)=>{
            e.preventDefault()
           
            User.getUser()
            
        })
            
            
})