import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { editData } from '../actions/actions'
import FormField from '../component/FormField'

const EditScreen = ({ navigation, data, editData }) => {

  const id = navigation.getParam('id')
  console.log('edit id', id)

  const onSubmit = (title, author) => {
  const elements = {
   title, author,id
}
    editData(elements)
    navigation.pop()
  }

  return (
    <View>
      <FormField
        buttonText='Save'
        onSubmit={onSubmit}
      />
    </View>
  )
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editData: (data) => { dispatch(editData(data)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditScreen)
