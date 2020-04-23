import React from 'react';

export default class ItemVencimento extends React.Component {
    render() {
        return (
            <div className="itemVencimento">
                <span>{this.props.text}</span>
            </div>
        )
    }
}