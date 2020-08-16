import React from "react";
import PropTypes from 'prop-types'

//初始化TotalPrice,设定为输入income,outcome,输出JSX的div
//函数型组件 TotalPrice ,父组件的props,income和outcome作为参数


const TotalPrice = ({income,outcome})=>(
    <div className="row">
        <div className="col">
            收入:<span>{income}</span>
        </div>
        <div className="col">
            支出:<span>{outcome}</span>
        </div>
    </div>
);


TotalPrice.propTypes = {
    income:PropTypes.number.isRequired,
    outcome:PropTypes.number.isRequired,
};
export default TotalPrice