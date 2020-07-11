import React from "react";
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

const generateLinkClass = (current,view) => {
    return (current === view) ? 'nav-link active':'nav-link'
}
const ViewTab = ({activeTab,onTabChange}) =>(
    <ul className="nav nav-tabs nav-fill my-4">
        <li className="nav-item">
            <a className="nav-link active" href="#">
                列表模式
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
                图表模式
            </a>
        </li>
    </ul>
);
export default ViewTab

