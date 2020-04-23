import React from 'react';
import ItemNome from './ItemNome';
import ItemData from './ItemData';
import ItemVencimento from './ItemVencimento';
import ItemStatus from './ItemStatus';
import ItemValor from './ItemValor';
import ValorDespesaContext from './ValorDespesaContext';

export default class Receita extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itens: [],
            newItemNome: '',
            newItemData: '',
            newItemVencimento: '',
            newItemStatus: '',
            newItemValor: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextType = ValorDespesaContext;

    handleSubmit(e) {
        const {valorDespesa, setValorDespesa} = this.context;
        
        this.setState({
            itens: [
                ...this.state.itens,
                {
                    nome: this.state.newItemNome,
                    data: this.state.newItemData,
                    vencimento: this.state.newItemVencimento,
                    status: this.state.newItemStatus,
                    valor: this.state.newItemValor
                }
            ]
        });

        setValorDespesa(this.state.newItemValor);

        this.setState({ newItemNome: '' });
        this.setState({ newItemData: '' });
        this.setState({ newItemVencimento: '' });
        this.setState({ newItemStatus: '' });
        this.setState({ newItemValor: '' });

        e.preventDefault();
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="receita">
                        <div className="tituloMovimentacao">
                            Receita
                        </div>
                    </div>

                    <div className="itensValores">
                        <input
                            className="inputNome"
                            placeholder="Nome"
                            value={this.state.newItemNome}
                            onChange={e => this.setState({ newItemNome: e.target.value })}>
                        </input>

                        <input
                            className="inputData"
                            placeholder="Data"
                            value={this.state.newItemData}
                            onChange={e => this.setState({ newItemData: e.target.value })}>
                        </input>

                        <input
                            className="inputVencimento"
                            placeholder="Vencimento"
                            value={this.state.newItemVencimento}
                            onChange={e => this.setState({ newItemVencimento: e.target.value })}>
                        </input>

                        <select
                            className="selectStatus"
                            value={this.state.newItemStatus}
                            onChange={e => this.setState({ newItemStatus: e.target.value })}>
                            <option>Selecione</option>
                            <option>Pago</option>
                            <option>Não Pago</option>
                        </select>

                        <input
                            className="inputValor"
                            placeholder="R$ 0,00"
                            value={this.state.newItemValor}
                            onChange={e => this.setState({ newItemValor: e.target.value })}>
                        </input>
                        <button type="submit" className="btnSalvarValores">Adicionar</button>
                    </div>
                </form>

                <div>
                    {this.state.itens.map((item, index) => {
                        return (
                            <div key={index} className="gridValores">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><ItemNome text={item.nome} /></td>
                                            <td><ItemData text={item.data} /></td>
                                            <td><ItemVencimento text={item.vencimento} /></td>
                                            <td><ItemStatus text={item.status} /></td>
                                            <td><ItemValor text={item.valor} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}