import React, { Component } from 'react';

class Quote extends Component {

    render() {
        return (
            <div>
                <img src={this.props.image} alt={this.props.imageAlt}></img>
                <blockquote>
                    <p>{this.props.quote}</p>
                    <cite>{this.props.author}</cite>
                </blockquote>
            </div>
        );
    }
}

export default Quote;