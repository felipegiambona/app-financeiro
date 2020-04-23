import React from 'react';

export default class ItemStatus extends React.Component {
    render() {
        return (
            <div className="itemStatus">
                <span>{this.props.text}</span>
            </div>
        )
    }
}