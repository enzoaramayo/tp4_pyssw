export class Country {

    country: string;
    totalRecovered: string;
    totalDeaths: string;
    totalCases: string;
    newCases: string;
    newDeaths: string;
    image: string;

    constructor(country?: string, totalRecovered?: string, totalDeaths?: string, totalCases?: string, newDeaths?: string, newCases?: string, image?: string) {
        this.country = country;
        this.totalRecovered = totalRecovered;
        this.totalCases = totalCases;
        this.totalDeaths = totalDeaths;
        this.newCases = newCases;
        this.newDeaths = newDeaths;
        this.image = image;

    }
}
