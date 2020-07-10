import React from "react";
import Ionicon from 'react-ionicons'

const PriceList = ({items, onModifyItem, onDeleteItem}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                items.map((item) => (
                    <li className="list-group-item d-flex
                        justify-content-between align-item-center"
                        key={item.id}
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
                        <button className="col-1 btn btn-primary" onClick={()=>{onModifyItem(item)}}>编辑</button>
                        <button className="col-1 btn btn-danger" onClick={()=>{onDeleteItem(item)}}>删除</button>

                    </li>
                ))
            }
        </ul>
    )
};

export default PriceList