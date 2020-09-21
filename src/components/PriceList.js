import React from "react";
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import {Colors} from "../utility";

const PriceList = ({items, onModifyItem, onDeleteItem}) => {
    return (

        <div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex
                        justify-content-between align-item-center">
                    <strong className="col-1" style={{color:'rgb(0, 123, 255)'}}>类型</strong>
                    <strong className="col-5" style={{color:'rgb(0, 123, 255)'}}>名称</strong>
                    <strong className="col-2" style={{color:'rgb(0, 123, 255)'}}>金额</strong>
                    <strong className="col-2" style={{color:'rgb(0, 123, 255)'}}>日期</strong>
                    <strong className="col-1" style={{color:'rgb(0, 123, 255)'}}>编辑</strong>
                    <strong className="col-1" style={{color:'rgb(0, 123, 255)'}}>删除</strong>

                </li>
            </ul>

            <ul className="list-group list-group-flush">
                {
                    items.map((item) => {
                        const itemPriceClassName = (item.category.type === 'income') ? 'col-2 font-weight-bold red-income' : 'col-2 font-weight-bold'
                        return(
                        <li className="list-group-item d-flex
                            justify-content-between align-item-center"
                            key={item.id}       //
                        >
                            <span className="col-1">
                                <Ionicon
                                    className="rounded-circle priceListIcon"
                                    fonSize="30px"
                                    style={{ backgroundColor:'#007bff',padding:'2px'}}
                                    color={'#fff'}
                                    icon={item.category.iconName}
                                />
                            </span>
                            <span className="col-5 font-weight-bold">{item.title}</span>
                            <span className={itemPriceClassName}>{(item.category.type === 'income')? '+':'-'}{item.price}</span>
                            <span className="col-2"><em>{item.date}</em></span>
                            <a className="col-1" onClick={(event)=>{onModifyItem(item)}}>
                                <Ionicon
                                className="rounded-circle priceListIcon"
                                fonSize="30px"
                                style={{ backgroundColor:'#28a745',padding:'6px'}}
                                color={'#fff'}
                                icon='ios-create-outline'
                                />
                            </a>
                            <a className="col-1" onClick={(event)=>{onDeleteItem(item)}}>
                                <Ionicon
                                    className="rounded-circle priceListIcon"
                                    fonSize="30px"
                                    style={{ backgroundColor:'#dc3545',padding:'1px'}}
                                    color={'#fff'}
                                    icon='ios-close'
                                />
                            </a>
                        </li>
                    )}
                    )
                }
            </ul>
        </div>
    )
};






PriceList.propTypes ={
    items:PropTypes.array.isRequired,
    onModifyItem:PropTypes.func.isRequired,
    onDeleteItem:PropTypes.func.isRequired,
};
export default PriceList