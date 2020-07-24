import React, {Component} from 'react';
import logo from '../logo.svg';

import {LIST_VIEW, CHART_VIEW, TYPE_OUTCOME, parseToYearAndMonth} from '../utility'
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import TotalPrice from "../components/TotalPrice";
import MonthPicker from "../components/MonthPicker"


const categoies = {
    "1": {
        "id": 1, "name": "旅行", "type": "outcome", "iconName": "ios-plane"
    },
    "2": {
        "id": 2, "name": "理财", "type": "income", "iconName": "ios-plane"
    }
};
const items = [
    {
        "id": 1,
        "title": "去云南旅游",
        "price": 200,
        "date": "2020年01月01日",
        "cid": 1
    },
    {
        "id": 2,
        "title": "去云南旅游",
        "price": 400,
        "date": "2020年01月02日",
        "cid": 1

    },
    {
        "id": 3,
        "title": "理财",
        "price": 1000,
        "date": "2020年01月03日",
        "cid": 2
    }
];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW,
        }
    }

    render() {
        const {items, currentDate, tabView} = this.state;
        const itemsWithCategory = items.map(item => {
            item.category = categoies[item.cid];
            return item
        });

        let totalIncome = 0, totalOutcome = 0;
        itemsWithCategory.forEach(item => {
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
                                year={currentDate.year}
                                month={currentDate.month}
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
                    <ViewTab activeTab={tabView} onTabChange={() => {
                    }}/>
                    <creatBtn onClick={() => {
                    }}/>
                    <PriceList onModifyItem={() => {}} items={itemsWithCategory} onDeleteItem={() => {
                    }}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home