import React, {Component} from 'react';
import logo from '../logo.svg';

import {LIST_VIEW, CHART_VIEW, TYPE_OUTCOME} from '../utility'
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import TotalPrice from "../components/TotalPrice";
import MonthPicker from "../components/MonthPicker"

const items = [
    {
        "id": 1,
        "title": "去云南旅游",
        "price": 200,
        "category": {"id": 1, "name": "旅行", "type": "outcome", "iconName": "ios-plane"}
    },
    {
        "id": 2,
        "title": "去云南旅游",
        "price": 400,
        "category": {"id": 2, "name": "旅行", "type": "outcome", "iconName": "ios-plane"}
    },
    {
        "id": 3,
        "title": "理财",
        "price": 1000,
        "category": {"id": 3, "name": "理财", "type": "income", "iconName": "ios-plane"}
    }
];

class Home extends Component {
    render() {
        let totalIncome = 0, totalOutcome = 0;
        items.forEach(item=>{
            if (item.category.type === TYPE_OUTCOME) {
                totalOutcome += item.price
            } else {
                totalIncome += item.price
            }
        });
        return (
            <React.Fragment>
                <header className="App-header">
                    <div className="row mb-5">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <MonthPicker
                                year={2018}
                                month={8}
                                onChange={() => {
                                }}
                            />
                        </div>
                        <div className="col">
                            <TotalPrice
                                income={totalIncome}
                                outcome={totalOutcome}
                            />
                        </div>
                    </div>

                </header>
                <div className="content-area py-3 px-3">
                        <ViewTab activeTab={LIST_VIEW} onTabChange={()=>{}}/>
                        <creatBtn onClick={()=>{}}/>
                        <PriceList onModifyItem={()=>{}} items={items} onDeleteItem={()=>{}}/>
                </div>
            </React.Fragment>
        )

    }
}

export default Home