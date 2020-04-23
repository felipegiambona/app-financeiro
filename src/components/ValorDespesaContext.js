import React from 'react';

const ValorDespesaContext = React.createContext();

class ValorDespesaProvider extends React.Component {
    state = {
        valorDespesa: '1'
    }

    setValorDespesa = valorDespesa => {
        this.setState(prevState => ({ valorDespesa }))
    }

    render() {
        const { children } = this.props;
        const { valorDespesa } = this.state;
        const { setValorDespesa } = this;

        return (
            <ValorDespesaContext.Provider value={{ valorDespesa, setValorDespesa }}>
                {children}
            </ValorDespesaContext.Provider>
        )
    }
}

export default ValorDespesaContext;
export { ValorDespesaProvider };