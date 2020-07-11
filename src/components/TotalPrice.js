import React from "react";
import PropTypes from 'prop-types'

const TotalPrice = ({income,outcome})=>(
    <div className="row">
        <div className="col">
            收入:<span>{income}</span>
        </div>
        <div className="col">
            支出:<span>{outcome}</span>
        </div>
    </div>
)


TotalPrice.propTypes = {
    income:PropTypes.number.isRequired,
    outcome:PropTypes.number.isRequired,
}
export default TotalPrice