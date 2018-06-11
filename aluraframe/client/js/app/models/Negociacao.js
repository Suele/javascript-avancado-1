class Negociacao{

    constructor(date, quantidade, valor){
        this.data = date;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    volume(){
        return this.quantidade * this.valor;
    }
}