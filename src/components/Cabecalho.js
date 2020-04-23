import React from 'react';
import InfoMes from './InfoMes';

export default class Cabecalho extends React.Component {
    render() {
        return (
            <div className="cabecalho">
                <span>Janeiro</span>
                <InfoMes />
            </div>
        )
    }
}