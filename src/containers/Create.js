import React from 'react'
import PropTypes from 'prop-types'
import PriceForm from '../components/PriceForm'
import CategorySelect from "../components/CategorySelect";
import {Tabs, Tab} from '../components/Tabs'
import {TYPE_INCOME, TYPE_OUTCOME} from "../utility";
import {testItems, testCategories} from "../testData";
import withContext from "../WithContext"

export class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null,
        }
    }

    cancelSubmit = () => {
        this.props.history.push('/')
    };

    submitForm = (data, isEditMode) => {
        if (!this.state.selectedCategory) {
            this.setState({
                validationPassed: false
            });
            return
        }
        if (!isEditMode) {
            this.props.actions.createItem(data, this.state.selectedCategory.id).then(this.navigateToHome)
        } else {
            this.props.actions.updateItem(data, this.state.selectedCategory.id).then(this.navigateToHome)
        }
        this.props.history.push('/')
    }

    render() {
        const {data} = this.props
        console.log('data1')

        console.log(data)
        console.log('data2')

        const filterCategories = testCategories.filter(category => category.type === TYPE_OUTCOME);
        return (
            <React.Fragment>
                <div className="create-page py-3 px-3 rounded mt-3" style={{background: '#fff'}}>
                    <Tabs activeIndex={0} onTabChange={() => {
                    }}>
                        <Tab>支出</Tab>
                        <Tab>收入</Tab>
                    </Tabs>
                    <CategorySelect categories={filterCategories} onSelectCategory={() => {
                    }}/>
                </div>
                <div>
                    <PriceForm
                        onFormSubmit={this.submitForm}
                        onCancelSubmit={this.cancelSubmit}

                    />
                </div>
            </React.Fragment>
        );
    }
}

export default withContext(Create)