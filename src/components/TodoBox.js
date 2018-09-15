import React, { Component } from 'react';
import '../styles/TodoBox.css';
import PropTypes from 'prop-types';

class TodoBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: '',
        };

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(e);
        this.setState(
            {
                todoText: '',
            }
        );
    }

    getInputValue() {
        return this.state.todoText;
    }
    render() {
        return(
            <div>
                <h1>Mi first Todo List</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.todoText} 
                    onChange={ 
                        (e) => {this.setState({ todoText: e.target.value }) }
                    }
                    className="TodoBox-input"
                    />
                    <input type="submit" value="Add" className="TodoBox-button"/>
                </form>
            </div>
        );
    }
}

TodoBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default TodoBox;