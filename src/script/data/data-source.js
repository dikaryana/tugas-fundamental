import kuliners from "./kuliners.js";
class DataSource {
    static searchkuliner(keyword) {
        return new Promise((resolve, reject) => {
            const filteredkuliners = kuliners.filter(kuliner => kuliner.name.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredkuliners.length) {
                this.resolve(filteredkuliners);
            } else {
                this.reject(`${keyword} is not found"`);

            }
        });
    }

}
export default DataSource;