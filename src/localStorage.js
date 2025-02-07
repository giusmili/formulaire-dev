document.addEventListener("DOMContentLoaded",(e)=>{
        e.preventDefault()
        const parent = document.querySelector("section")
        const title = document.createElement("h2")
        const stockUser = localStorage.getItem("user")
        const eventButton = document.querySelector("section button")
        const stockSession = sessionStorage.getItem("app")
        parent.prepend(title)
        title.innerHTML += `<span aria-hidden="true">👍</span>Bonjour ${stockUser} ${stockSession}`

        eventButton.addEventListener("click",()=>{
            document.location.href = "index.html"
            sessionStorage.clear()
            localStorage.clear()
        })
      
})