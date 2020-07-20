import React from "react";
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

const PriceList = ({items, onModifyItem, onDeleteItem}) => {  //设定PriceList的三个props,条目items(在app.js中),编辑条目onModifyItem,删除条目onDeleteItem
    return (                                                   //JSX
        <ul className="list-group list-group-flush">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex               //第一个是key 第一个span是图标 第二个span是标题 第三个span是支出还是收入 第四个span是编辑按钮 第五个是删除按钮
                        justify-content-between align-item-center"
                        key={item.id}       //
                    >
                        <span className="col-1 badge badge-primary">
                            <Ionicon
                                className="rounded-circle"
                                fonSize="30px"
                                style={{ backgroundColor:'#007bff',padding:'5px'}}
                                color={'#fff'}
                                icon={item.category.iconName}
                            />
                        </span>
                        <span className="col-5">{item.title}</span>
                        <span className="col-2 font-weight-bold">{(item.category.type === 'income')? '+':'-'}{item.price}</span>
                        <span className="col-2">{item.date}</span>
                        <a className="col-1" onClick={()=>{onModifyItem(item)}}>
                            <Ionicon
                            className="rounded-circle"
                            fonSize="30px"
                            style={{ backgroundColor:'#28a745',padding:'5px'}}
                            color={'#fff'}
                            icon='ios-create-outline'
                            />
                        </a>
                        <a className="col-1" onClick={()=>{onDeleteItem(item)}}>
                            <Ionicon
                                className="rounded-circle"
                                fonSize="30px"
                                style={{ backgroundColor:'#dc3545',padding:'5px'}}
                                color={'#fff'}
                                icon='ios-close'
                            />
                        </a>
                    </li>
                ))
            }
        </ul>
    )
};






PriceList.propTypes ={
    items:PropTypes.array.isRequired,
    onModifyItem:PropTypes.func.isRequired,
    onDeleteItem:PropTypes.func.isRequired,
};
export default PriceList