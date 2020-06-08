export class SignoZodiacal {

    nameSigno: string;
    date_range: string;
    current_date: string;
    description: string;
    compatibility: string;
    color: string;
    lucky_number: string;
    image: string;

    SignoZodiaco(nameSigno?: string, date_range?: string, current_date?: string, description?: string, compatibility?: string, color?: string, lucky_number?: string, image?: string) {
        this.nameSigno = nameSigno;
        this.date_range = date_range;
        this.current_date = current_date;
        this.description = description;
        this.compatibility = compatibility;
        this.color = color;
        this.lucky_number = lucky_number;
        this.image = image;
    }
}
