import React, {Component} from 'react';
import logo from '../logo.svg';
import {LIST_VIEW, CHART_VIEW, TYPE_OUTCOME, parseToYearAndMonth,padLeft} from '../utility'
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import TotalPrice from "../components/TotalPrice";
import MonthPicker from "../components/MonthPicker"
import CreateBtn from "../components/CreateBtn";
import { Tabs, Tab } from '../components/Tabs'


const categories = {
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
        "date": "2020-01-01-",
        "cid": 1
    },
    {
        "id": 2,
        "title": "去云南旅游",
        "price": 400,
        "date": "2020-01-02",
        "cid": 1

    },
    {
        "id": 3,
        "title": "理财",
        "price": 1000,
        "date": "2020-01-03",
        "cid": 2
    },
    {
        "id": 3,
        "title": "理财",
        "price": 1000,
        "date": "2020-08-01",
        "cid": 2
    }
];
const newItem = {
    "id": 4,
    "title": "新添加的项目",
    "price": 300,
    "date": "2020-01-04",
    "cid": 1
};



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW,
        }
    }
    changeView = (view) => {
        this.setState({
            tabView: view
        })
    };
    changeDate = (year,month) => {
        this.setState({
            currentDate:{year,month}
        })
    };
    modifyItem = () => {

    };
    createItem = () => {
            this.setState({
                items:[newItem,...this.state.items]
            })
    };
    deleteItem = (deletedItem) => {
        const filteredItems = this.state.items.filter(item => item.id !== deletedItem.id);
        this.setState({
            items:filteredItems
        })
    };

    render() {
        const {items, currentDate, tabView} = this.state;
        const itemsWithCategory = items.map(item => {
            item.category = categories[item.cid];
            return item
        }).filter(item =>{
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
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
                <div>
                    <div>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div>
                        <div>
                            <MonthPicker
                                year={currentDate.year}
                                month={currentDate.month}
                                onChange={this.changeDate}
                            />
                        </div>
                        <div>
                            <TotalPrice
                                income={totalIncome}
                                outcome={totalOutcome}
                            />
                        </div>
                    </div>
                </div>

                    <div>
                        <React.Fragment>
                            <Tabs activeIndex={0} onTabChange={()=>{}}>
                                <Tab>1st item</Tab>
                                <Tab>2st item</Tab>
                                <Tab>3st item</Tab>
                            </Tabs>
                            <ViewTab activeTab={tabView} onTabChange={()=>this.changeView()}/>
                            <CreateBtn onClick={()=>this.createItem()}/>
                            { tabView === LIST_VIEW &&
                                <PriceList
                                    onModifyItem={()=>this.modifyItem}
                                    items={itemsWithCategory}
                                    onDeleteItem={this.deleteItem}
                                />
                            }
                            { tabView === CHART_VIEW &&
                                <h1>这里是图表模式</h1>
                            }
                        </React.Fragment>
                    </div>
            </React.Fragment>
        )
    }
}

export default Home