import React from "react";
import PropTypes from 'prop-types'
import {padLeft, range} from "../utility";

class MonthPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,                  //控制 [月份选择器]菜单的下拉状态
            selectedYear: this.props.year   //传入props的年份
        }
    };


    componentDidMount() {
        document.addEventListener('click', this.handleClick, false)
    }

    componentWillUnmount() {
        document.addEventListener('click', this.handleClick, false)
    }

    // handleClick = (event) => {
    //     if (this.node.contains(event.target)) {
    //         return;
    //     }
    //     this.setState({
    //         isOpen: false,
    //     })
    // };

    toggleDropdown = (event) => {
        event.preventDefault();
        this.setState({isOpen: !this.state.isOpen})     //打开菜单
    };

    selectYear = (event, yearNumber) => {           //给state一个选择好的年(数字字符串
        event.preventDefault();
        this.setState({
            selectedYear: yearNumber
        })
    };

    selectMonth = (event, monthNumber) => {
        event.preventDefault();
        this.setState({
            isOpen: false,                                     //选择好月份后,关闭菜单
        });
        this.props.onChange(this.state.selectedYear, monthNumber)
        //使用this.state.selectedYear而不是yearNumber,是要确保selectMonth执行时，
        //访问到的props和state就是render执行时的那份数据
    };


    render() {
        // 通过闭包来访问props和state,确保selectMonth执行时，访问到的props和state就是render执行时的那份数据
        const {year, month} = this.props;
        const {selectedYear} = this.state;
        const {isOpen} = this.state;
        const monthRange = range(12, 1);
        const yearRange = range(9, -4).map(number => number + year);


        return (
            <div className="dropdown month-picker-component" ref={(ref) => {
                this.node = ref
            }}>

                <h4>选择月份</h4>

                <button
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={this.toggleDropdown}
                >
                    {`${year}年 ${padLeft(month)}月`}
                </button>

                {/*//当isOpen为True时,返回下拉菜单*/}
                {isOpen &&
                <div className="dropdown-menu" style={{display: 'block'}}>
                    <div className="row">
                        <div className="col border-right">
                            {yearRange.map((yearNumber, index) =>
                                <a key={index}
                                   className={(yearNumber === selectedYear) ? 'dropdown-item active' : 'dropdown-item'}
                                   href="#"
                                   onClick={(event) => {
                                       this.selectYear(event, yearNumber)
                                   }}>


                                    {yearNumber}年
                                </a>
                            )}
                        </div>
                        <div className="col border-right">
                            {monthRange.map((monthNumber, index) =>
                                <a key={index}
                                   className={(monthNumber === month) ? 'dropdown-item active' : 'dropdown-item'}
                                   onClick={(event) => {
                                       this.selectMonth(event, monthNumber)
                                   }}
                                   href="#">
                                    {padLeft(monthNumber)}月
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                }


            </div>
        )
    }
}

MonthPicker.propsTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default MonthPicker
