import React, { Component, useState } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {

        const { onReset, onDelete, onIncrement, counters, onDecrement } = this.props

        return (
            <div>
                <button onClick={onReset} className='btn btn-secondary btn-sm m-2'>Reset</button>

                {
                    counters.map(counter =>
                        <div>
                            <Counter key={counter.id}
                                onIncrement={(counterId) => onIncrement(counterId)}
                                onDecrement={(counterId) => onDecrement(counterId)}
                                onDelete={(counterId) => onDelete(counterId)}

                                counter={counter}>   {/*use this so we can easy to add other items to the counter. ex- other than id,value...*/}
                                <h4>Counter num {counter.id}</h4></Counter>

                        </div>
                    )
                } {/*children of a element(<h4>Counter num {counter.id}</h4>) can call by props.children*/}
                {/* these are props.We can't change it after defined. props allow you to pass values from a parent component (Counters) to a child component (Counter). React handles the passing of props, and the child component uses them to initialize its state or for other purposes. */}
            </div >
        );
    }
}

export default Counters;
