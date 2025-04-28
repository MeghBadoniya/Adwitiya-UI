class AdwButton extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode : "closed"})
        const element = document.createElement("button")

        element.innerHTML = this.innerHTML

        const elementStyle = {
            backgroundColor : "green",
            color : "lightgreen"
        }
        Object.assign(element.style,elementStyle)

        element.addEventListener("mouseenter",() => {
            element.style.backgroundColor = "red"
        })

        shadow.appendChild(element)
    }
}
customElements.define("adw-button",AdwButton)