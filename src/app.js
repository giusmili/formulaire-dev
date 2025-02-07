document.addEventListener("DOMContentLoaded",(e)=>{
        e.preventDefault()

        const inputNom = document.querySelectorAll('input[type="text"]')[0]
        const inputPrenom = document.getElementsByTagName("input")[1]
        const inputNumber = document.getElementsByTagName("input")[2]
        const btn_submit = document.getElementsByTagName('input')[3]
        const element = document.querySelector(".warning")
        console.log(element)

        btn_submit.addEventListener("click",(e)=>{
            e.preventDefault()
            if(inputNom.value && inputPrenom.value && inputNumber.value){
                
                element.innerText = `Bonjour ${inputNom.value} ${inputPrenom.value } ${inputNumber.value}` 
            }
            else{
                element.classList.add("warning-alert")
                element.innerHTML =  "Remplir les champs"
            }
            
            
        })
            
            
})