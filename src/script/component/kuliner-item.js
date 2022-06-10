class kulinerItem extends HTMLElement {
    set kuliner(kuliner) {
        this._kuliner = kuliner;
        this.render();
    }

    render() {
        this.innerHTML = `
            <img class="fan-art-kuliner" src="${this._kuliner.fanArt}" alt="Fan Art">
            <div class="kuliner-info">
                <h2>${this._kuliner.name}</h2>
                <p>${this._kuliner.description}</p>
            </div>`;
    }
}

customElements.define("kuliner-item", kulinerItem);