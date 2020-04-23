import React from 'react';
import ValorDespesaContext from './ValorDespesaContext';

export default class Saldo extends React.Component {
    static contextType = ValorDespesaContext;

    render() {
        const valorDespesa = this.context;

        return (
            <div className="saldo">
                <span>Saldo</span>
                <span className="valorSaldo">R$ {valorDespesa.valorDespesa}</span>
            </div>
        )
    }
}