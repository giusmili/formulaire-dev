document.addEventListener("DOMContentLoaded",(e)=>{
        e.preventDefault()

        const inputNom = document.querySelectorAll('input[type="text"]')[0]
        const inputPrenom = document.getElementsByTagName("input")[1]
        const inputNumber = document.getElementsByTagName("input")[2]
        const btn_submit = document.getElementsByTagName('input')[3]
        const element = document.querySelector("p")
        //console.log(inputNom.value)

        btn_submit.addEventListener("click",(e)=>{
            e.preventDefault()
            inputNom.value && inputPrenom.value && inputNumber.value ? element.innerText = `Bonjour ${inputNom.value} ${inputPrenom.value } ${inputNumber.value}` : 
            element.innerText = "Remplir les champs"
            
            
        })
})