import './kuliner-item.js';

class kulinerList extends HTMLElement {
    set kuliners(kuliners) {
        this._kuliners = kuliners;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = "";
        this._kuliners.forEach(kuliner => {
            const kulinerItemElement = document.createElement("kuliner-item");
            kulinerItemElement.kuliner = kuliner
            this.appendChild(kulinerItemElement);
        })
    }
}

customElements.define("kuliner-list", kulinerList);