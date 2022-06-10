class appBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Kuliner indonesia</h2>`;
    }
}
customElements.define("app-bar", appBar)