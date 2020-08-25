import React, {Component} from 'react';
import logo from '../logo.svg';
import {LIST_VIEW, CHART_VIEW, TYPE_OUTCOME, parseToYearAndMonth, padLeft} from '../utility'
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

const tabsText = [LIST_VIEW, CHART_VIEW]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabView: tabsText[0],
        }
    }

    componentDidMount() {
        this.props.actions.getInitialData().then(items=>{
            console.log('haha',items)
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
        const itemsWithCategory = Object.keys(items).map(id => {
            items[id].category = categories[items[id].cid];
            return items[id]
        })

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
                    {/*<ViewTab activeTab={tabView} onTabChange={this.changeView()}/>*/}
                        <CreateBtn onCreateBtnClick={this.createItem}/>
                    {/*如果tabView是列表模式,则显示PriceList*/}
                    {tabView === LIST_VIEW &&
                        <PriceList
                        onModifyItem={this.modifyItem}
                        items={itemsWithCategory}
                        onDeleteItem={this.deleteItem}
                        />
                    }
                    {/*如果tabView是图表模式,则显示          */}
                    {tabView === CHART_VIEW &&
                        <h1>这里是图表模式</h1>
                    }
                        </React.Fragment>
                    }

                </div>
            </React.Fragment>

        )
    }
}

export default withRouter(withContext(Home))