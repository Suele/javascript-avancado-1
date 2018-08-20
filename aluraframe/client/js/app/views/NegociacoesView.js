class NegociacoesView{

    constructor(elemento){
      this._elemento = elemento;
    }

  _template(listaDeNegociacoes){
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>
              
        <tbody>
          ${listaDeNegociacoes.negociacoes.map((negociacao) => {
            return `
              <tr>
                <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
                <td>${negociacao.volume}</td>
              </tr>
            `
          }).join('')}
        </tbody>
              
        <tfoot>
          <td colspan="3"></td>
          <td>${listaDeNegociacoes.negociacoes.reduce(function(total, negociacao) {
            return total + negociacao.volume;
            }, 0.0)}
          </td>
        </tfoot>
      </table>
   `;
  }

  atualiza(listaDeNegociacoes){
    
    this._elemento.innerHTML = this._template(listaDeNegociacoes);
  }
}