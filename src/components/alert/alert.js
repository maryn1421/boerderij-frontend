export default function Alert(type, text) {
    this.type = type;
    this.text = text;

    this.showAlert = () => {
        const container = document.getElementById("response-container")
        const alert = document.createElement("p")
        alert.classList.add("alert__" + type.toLowerCase().trim());
        alert.textContent = text;
        container.appendChild(alert)
        setTimeout(() => {
            container.removeChild(alert)
        }, 5000)
    }
}

