import React from 'react';

export default class ItemValor extends React.Component {
    render() {
        return (
            <div className="itemValor">
                <span>{this.props.text}</span>
            </div>
        )
    }
}