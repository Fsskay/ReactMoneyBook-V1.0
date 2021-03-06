import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'

const CreateBtn = ({ onCreateBtnClick }) => (
    <button
        className="btn btn-primary btn-block d-flex justify-content-center align-items-center"
        onClick={(event) => {onCreateBtnClick()}}
        style={{marginTop:5}}
    >
        <Ionicon
            className="rounded-circle"
            fontSize="30px"
            color='#fff'
            icon='ios-add-circle'
        />
        <strong>创建一条新的记账记录</strong>
    </button>
);

CreateBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default CreateBtn