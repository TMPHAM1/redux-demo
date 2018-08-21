import React from 'react';
import {connect} from 'react-redux';
import SetTheme from './SetTheme'

const Nav = props => {
    return (
        <nav className = {props.navColor}>
            <div className="nav-wrapper">
                <span classname={`brand-log ${props.textColor}`}>The App</span>
            <ul>
            <li>
            <a classname={`${props.textColor}`} href="!#"> Home </a>
            </li>
            <li>  <a classname={`${props.textColor}`} href="!#"> About </a>
            </li>
            <li>  <a classname={` ${props.textColor}`} href="!#"> Contact </a>
            </li>
            <SetTheme/>
            </ul>
            </div>
        </nav>
    )
}
function mapStateToProps(state) {
    return {
        navColor: state.theme.theme.navecolor,
        textColor: state.theme.theme.textColor
    }
}
export default connect(mapStateToProps)(Nav)