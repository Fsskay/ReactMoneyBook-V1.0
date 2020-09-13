import React, {Component} from 'react';
import logo from '../logo.svg';
import {LIST_VIEW, CHART_VIEW, TYPE_OUTCOME, parseToYearAndMonth, padLeft, TYPE_INCOME} from '../utility'
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import TotalPrice from "../components/TotalPrice";
import MonthPicker from "../components/MonthPicker"
import CreateBtn from "../components/CreateBtn";
import {Tabs, Tab} from '../components/Tabs'
import Ionicon from 'react-ionicons'
import {AppContext} from "../App"
import withContext from '../WithContext'
import {withRouter} from 'react-router-dom'
import Loader from '../components/Loader'
import { Colors } from '../utility'
import PieChart from '../components/PieChart'

const chartData = [
    {value:100,name:'一'},
    {value:200,name:'二'},
    {value:300,name:'三'},
    {value:150,name:'四'},
    {value:200,name:'五'},
    {value:300,name:'六'}
]


const tabsText = [LIST_VIEW, CHART_VIEW]

const generateChartDataByCategory = (items,type = TYPE_INCOME) =>{
    let categoryMap = {}
    items.filter(item => item.category.type ===type).forEach(item =>{
        if (categoryMap[item.cid]){
            categoryMap[item.cid].value += (item.price * 1)
            categoryMap[item.cid].items.push(item.id)
        } else {
            categoryMap[item.cid] ={
                name:item.category.name,
                value:item.price *1,
                items:[item.id]
            }
        }
    })
    return Object.keys(categoryMap).map(mapKey =>({...categoryMap[mapKey]}))
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabView: tabsText[0],
        }
    }

    componentDidMount() {
        this.props.actions.getInitialData().then(items=>{
        })
    }

    changeView = (index) => {
        this.setState({
            tabView: tabsText[index]
        })
    };
    changeDate = (year, month) => {
        this.props.actions.selectNewMonth(year, month)
    };
    modifyItem = (item) => {
        this.props.history.push(`/edit/${item.id}`)
    };
    createItem = () => {
        // this.setState({
        //     items: [newItem, ...this.state.items]
        // })
        this.props.history.push('/create')
    };
    deleteItem = (item) => {
        // const filteredItems = this.state.items.filter(item => item.id !== deletedItem.id);
        // this.setState({
        //     items: filteredItems
        // })
        this.props.actions.deleteItem(item)
    };

    render() {
        const {data} = this.props;
        const {items, categories, currentDate, isLoading} = data

        const {tabView} = this.state

        //es6语法,将items和category由对象转化为对象数组
        const itemsWithCategory = Object.keys(items).map(id => {
            items[id].category = categories[items[id].cid];
            return items[id]
        })

        const chartOutcomDataByCategory = generateChartDataByCategory(itemsWithCategory, TYPE_OUTCOME)
        const chartIncomeDataByCategory = generateChartDataByCategory(itemsWithCategory, TYPE_INCOME)

        let totalIncome = 0, totalOutcome = 0;
        itemsWithCategory.forEach(item => {
            if (item.category.type === TYPE_OUTCOME) {
                totalOutcome += item.price
            } else {
                totalIncome += item.price
            }
        });


        console.log('items',items);
        console.log('categories',categories);

        console.log('itemsWithCategory',itemsWithCategory);


        return (
            <React.Fragment>
                <div className="App-header">
                    <div className="row mb-5 justify-content-center">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <MonthPicker
                                year={currentDate.year}
                                month={currentDate.month}
                                onChange={this.changeDate}
                            />
                        </div>
                        <div className="col">
                            <TotalPrice
                                income={totalIncome}
                                outcome={totalOutcome}
                            />
                        </div>
                    </div>
                </div>
                <div className="content-area py-3 px-3">

                    {isLoading &&
                    <Loader/>
                    }
                    {!isLoading &&
                        <React.Fragment>
                        <Tabs activeIndex={0} onTabChange={this.changeView}>
                            <Tab>
                                <Ionicon
                                    className="rounder-circle mr-2"
                                    fontSize="25px"
                                    color={'#006bff'}
                                    icon='ios-paper'
                                />
                                列表模式
                            </Tab>
                            <Tab>
                                <Ionicon
                                    className="rounder-circle mr-2"
                                    fontSize="25px"
                                    color={'#007bff'}
                                    icon='ios-pie'
                                />
                                图表模式

                            </Tab>
                        </Tabs>
                        <CreateBtn onCreateBtnClick={this.createItem}/>

                    {tabView === LIST_VIEW &&
                        <PriceList
                        onModifyItem={this.modifyItem}
                        items={itemsWithCategory}
                        onDeleteItem={this.deleteItem}
                        />
                    }
                    { tabView === LIST_VIEW && itemsWithCategory.length === 0 &&
                    <div className="alert alert-light text-center no-record">
                        您还没有任何记账记录
                    </div>
                    }
                    {tabView === CHART_VIEW &&
                    <React.Fragment>
                        <PieChart title="本月支出" categoryData={chartOutcomDataByCategory} />
                        <PieChart title="本月收入" categoryData={chartIncomeDataByCategory} />
                    </React.Fragment>
                    }
                        </React.Fragment>
                    }

                </div>
            </React.Fragment>

        )
    }
}

export default withRouter(withContext(Home))