import React, { Component} from 'react';
import { connect } from 'react-redux';
import {setTheme} from '../actions';

class SetTheme extends Component {
    componenetDidMount() {
        this.props.setTheme('light');
    }
    render() {

const nextTheme = this.props.theme === 'light' ? 'dark' : 'light';
        return <button className="btn white black-text" onClick ={()=> this.props.setTheme(nextTheme)}>{nextTheme} Theme </button>
    }
}


function mapStateToProps(state) {
    return {
        theme: state.theme.themeName
    }
}
export default connect(mapStateToProps, {setTheme: setTheme})(SetTheme);