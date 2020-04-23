import React from 'react';

export default class ItemNome extends React.Component {
    render() {
        return (
            <div className='itemNome'>
                <span>{this.props.text}</span>
            </div>
        )
    }
}