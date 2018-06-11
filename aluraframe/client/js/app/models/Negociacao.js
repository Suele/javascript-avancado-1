class Negociacao{

    constructor(date, quantidade, valor){
        this._data = date;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    getDate(){
        return this._data;
    }

    getQuantidade(){
        return this._quantidade;
    }

    getValor(){
        return this._valor;
    }

    volume(){
        return this.quantidade * this.valor;
    }
}