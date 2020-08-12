import React from 'react';
import PropTypes from 'prop-types'
import {CHART_VIEW} from "../utility";

export class Tabs extends React.Component {


    render() {
        const {children, activeIndex} = this.props;
        return (

            <ul>
                {React.Children.map(children, (child, index) => {
                    const activeClassName = (activeIndex === index) ? 'nav-link active' : 'nav-link';
                    return (
                        <li>
                            <a
                                className={activeClassName}
                                href="#"
                            >
                                {child}
                            </a>
                        </li>
                    )
                })}
            </ul>

        )
    }
}

Tabs.propTypes = {
    activeIndex: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired,
};

export const Tab = ({children}) =>
    <React.Fragment></React.Fragment>