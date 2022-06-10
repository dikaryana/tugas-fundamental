import DataSource from '../data/data-source.js';


const main = () => {
    const searchElement = document.querySelector("search-bar");
    const kulinerListElement = document.querySelector("kuliner-list");

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchkuliner(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        kulinerListElement.kuliners = results;
    };

    const fallbackResult = message => {
        kulinerListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;