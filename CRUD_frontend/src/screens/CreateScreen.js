import React, { Component } from 'react'
import { View } from 'react-native'
import { addData } from '../actions/actions';
import { connect } from 'react-redux';
import FormField from '../component/FormField';


class CreateScreen extends Component {

  onSubmit = (title, author) => {
    const { navigation, addData } = this.props
    const elements = {
      title, author
    }
    console.log('CREAT', elements)
    addData(elements);
    navigation.pop()
  }
  render() {
    return (
      <View>
        <FormField
          buttonText='Add'
          onSubmit={this.onSubmit}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addData: (data) => { dispatch(addData(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen)