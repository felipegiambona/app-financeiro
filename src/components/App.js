import React from 'react';
import Cabecalho from './Cabecalho';
import Receita from './Receita';
import ValorDespesaContext, { ValorDespesaProvider } from './ValorDespesaContext';

export default class App extends React.Component {
    render() {

        return (
            <ValorDespesaProvider>
                <Cabecalho />
                <Receita />
            </ValorDespesaProvider>
        )
    }
}