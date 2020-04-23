import React from 'react';
import Saldo from './Saldo';
import Previsão from './Previsao';

export default class InfoMes extends React.Component {
    render() {
        return (
            <div className="infoMes">
                <Saldo />
                <Previsão />
            </div>
        );
    }
}