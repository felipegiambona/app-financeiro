import React from 'react';

export default class ItemData extends React.Component {
    render() {
        return (
            <div className="itemData">
                <span>{this.props.text}</span>
            </div>
        )
    }
}