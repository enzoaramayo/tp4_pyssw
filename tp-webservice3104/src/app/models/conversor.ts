export class Conversor {

    value: string;
    from: string;
    to: string;
    result: string;
    resultInverso: string;
    
    Conversor(value?: string, from?: string, to?: string, result?: string, resultInverso?: string) {
        this.value = value;
        this.from = from;
        this.to = to;
        this.result = result;
        this.resultInverso = resultInverso;
    }

}
