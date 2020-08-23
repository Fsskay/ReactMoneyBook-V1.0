import React from 'react';
import PropTypes from 'prop-types'
import {CHART_VIEW} from "../utility";

export class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.activeIndex           //继承home父组件的activeIndex
        }
    }

    tabChange = (event, index) => {
        event.preventDefault();
        this.setState({
            activeIndex: index                       //修改当前state的activeIndex的index
        });
        this.props.onTabChange(index)               //传回当前index的值给home父组件的onTabChange={this.changeView}方法
    };

    render() {
        const {children} = this.props;
        const {activeIndex} = this.state;
        return (

            <ul class="nav nav-tabs nav-fill my-4 ">
                {/*  React.Children.map(this.props.children,function(child) {
                    return <li>{child}</li>
                    })*/}
                {/*children就是tab,child就是React元素,index为序列*/}

                {React.Children.map(children, (child, index) => {
                    const activeClassName = (activeIndex === index) ? 'nav-link active' : 'nav-link';
                    return (
                        <li className="nav-item ">
                            <a
                                onClick={(event) => {
                                    this.tabChange(event, index)
                                }}
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
    <React.Fragment>{children}</React.Fragment>