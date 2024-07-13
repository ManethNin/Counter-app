import React, { Component } from 'react';

class Counter extends Component {


    styles = {
        fontSize: '20px',
        fontWeight: "normal",
        margin: '10px'
    };


    render() {
        return (
            <div className='row'>
                <div className="col-1">
                    <span style={this.styles} className={this.getColor()}>{this.formatCount()}</span>

                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter.id)} className='btn btn-secondary btn-sm '>+</button>

                    <button onClick={() => this.props.onDecrement(this.props.counter.id)} className='btn btn-secondary btn-sm m-2'
                        disabled={this.props.counter.value === 0}>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm '>Delete</button>
                </div>
                {console.log(this.props.counter.value)} {/* props value get updated. but the case is we dont update the state */}
                {/* <img src={this.state.imgURL} alt="" /> */}
                {/* {this.state.tags.length === 0 && 'Please create a new tag'}
                {this.renderTags()} */}

            </div>
        );
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There is no tags!</p>

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

    // }

    getColor() {
        let clz = 'badge badge-sm m-2 badge-';

        clz += this.props.counter.value === 0 ? 'warning' : 'primary';
        return clz
    }

    formatCount() {
        return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    }
}

export default Counter;