import React from "react";
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import {LIST_VIEW, CHART_VIEW,} from '../utility'

const generateLinkClass = (current, view) => {
    return (current === view) ? 'nav-link active' : 'nav-link'
}
const ViewTab = ({activeTab, onTabChange}) => (
    <ul >
        <li>
            <a
                className={generateLinkClass(activeTab, CHART_VIEW)}
                href="#"
                onClick={(event) => {
                    event.preventDefault();
                    onTabChange(CHART_VIEW)
                }}
            >
                列表模式
            </a>
        </li>
        <li>
                <a
                    className={generateLinkClass(activeTab, LIST_VIEW)}
                    href="#"
                    onClick={(event) => {
                        event.preventDefault();
                        onTabChange(LIST_VIEW)
                    }}
                >
                </a>
                <a
                    className={generateLinkClass(activeTab, CHART_VIEW)}
                    href="#"
                    onClick={(event) => {
                        event.preventDefault();
                        onTabChange(CHART_VIEW)
                    }}
                >
                    图表模式
                </a>
        </li>
    </ul>
);
export default ViewTab