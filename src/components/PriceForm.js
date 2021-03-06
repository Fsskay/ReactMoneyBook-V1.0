import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'
import 'bootstrap/dist/css/bootstrap.min.css'
import { isValidDate } from '../utility'

class PriceForm extends React.Component {
    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired,
        onCancelSubmit: PropTypes.func.isRequired,
        item: PropTypes.object,
    }
    static defaultProps = {
        item: {}
    }
    state = {
        validatePass: true,
        errorMessage: '',
    }



    sumbitForm = (event)=>{
        const { item,onFormSubmit } = this.props;
        //如果item.id有内容,那就是编辑模式
        const editMode = !!item.id;

        const price =this.priceInput.value.trim() *1;
        const date =this.dateInput.value.trim() ;
        const title =this.titleInput.value.trim() ;
        if (price && title && date ) {
            console.log(1)
            if (price < 0) {
                this.setState({
                    validatePass: false,
                    errorMessage: '价格数字必须大于0'
                })
            } else if (!isValidDate(date)) {
                this.setState({
                    validatePass: false,
                    errorMessage: '请填写正确的日期格式'
                })
            } else {
                this.setState({
                    validatePass: true,
                    errorMessage: ''
                })
                if (editMode) {
                    onFormSubmit({...item, title, price, date}, editMode)
                } else {
                    onFormSubmit({title, price, date}, editMode)
                }
            }
        } else {
            this.setState({
                validatePass: false,
                errorMessage: '请输入所有必选项'
            })
        }
        event.preventDefault()
    }


    render() {
        const { title, price, date } = this.props.item
        return (
            <React.Fragment>
            <form onSubmit={(event) => {this.sumbitForm(event)}} noValidate style={{background: '#fff'}}>
                <div className="form-group">
                    <label htmlFor="title"><strong>标题*</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="请输入标题"
                        defaultValue={title}
                        ref={(input) => {this.titleInput = input}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price"><strong>金额*</strong></label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder="请输入金额"
                        defaultValue={price}
                        ref={(input) => {this.priceInput = input}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date"><strong>日期*</strong></label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        placeholder="请输入日期"
                        defaultValue={date}
                        ref={(input) => {this.dateInput = input}}
                    />
                </div>
                <button type="submit" className="btn btn-primary mr-3">提交</button>
                <button className="btn mr-3" onClick={this.props.onCancelSubmit}>取消</button>
                {!this.state.validatePass &&
                    <div className="alert alert-danger mt-5" role="alert">
                        {this.state.errorMessage}
                    </div>
                }
            </form>
            </React.Fragment>
        )
    }
}

export default PriceForm
