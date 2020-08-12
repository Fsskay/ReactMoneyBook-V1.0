import React from 'react'
import PropTypes from 'prop-types'
import PriceForm from '../components/PriceForm'


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
        if(!isEditMode) {
            this.props.actions.createItem(data, this.state.selectedCategory.id).then(this.navigateToHome)
        } else {
            this.props.actions.updateItem(data, this.state.selectedCategory.id).then(this.navigateToHome)
        }
        this.props.history.push('/')
    }

    render() {

        return (
            <div>
                <PriceForm
                    onFormSubmit={this.submitForm}
                    onCancelSubmit={this.cancelSubmit}
                    // item={editItem}
                />
            </div>
        );
    }
}

export default Create