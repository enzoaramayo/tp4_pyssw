export class Correo {

    from: string;
    to: string;
    subject: string;
    value: string;

    constructor(from?: string, to?: string, subject?: string, value?: string) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.value = value;
    }

}
