import React from 'react'
import PropTypes from 'prop-types'
import Ionicon from 'react-ionicons'
import 'bootstrap/dist/css/bootstrap.min.css'

class PriceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    sumbitForm = (event)=>{
        const { item,onFormSubmit } = this.props;
        const editMode = !!item.id;

        const price =this.priceInput.value.trim() *1;
        const date =this.dateInput.value.trim() *1;
        const title =this.titleInput.value.trim() *1;
        if(price&&date&&title){
            if(price<0){
                this.setState({
                    errorMessage:'价格数字必须大于0'
                })
            } else if ( !isValidDate(date)){
                this.setState({
                    isValidDate:'请填写正确的日期格式'
                })
            } else{
                this.setState({
                    errorMessage:''
                })
                if(editMode){
                    onFormSubmit({ ...item, title, price, date }, editMode)
                }else{
                    onFormSubmit({ title, price, date }, editMode)
                }

            }
        } else {
            this.setState({
                errorMessage: '请输入所有必选项'
            })
        }
        event.preventDefault()
    };
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">标题</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="请输入标题" 
                        ref={(input) => {this.priceInput = input}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">金额</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="price" 
                        placeholder="请输入金额"
                        ref={(input) => {this.priceInput = input}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">日期</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="请输入日期"
                        ref={(input) => {this.dateInput = input}}
                    />
                </div>
                <button type="submit" className="btn btn-primary mr-3">提交</button>
                <button onClick={this.props.onCancelSubmit}>取消</button>
                { !this.state.validatePass &&
                    <div className="alert alert-danger mt-5" role="alert">
                        {this.state.errorMessage}
                    </div>
                }
            </form>
        )
    }
}

export default PriceForm
