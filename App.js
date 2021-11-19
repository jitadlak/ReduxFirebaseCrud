import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Provider} from 'react-redux'
import { store } from './src/Redux/store'
import { Screen1 } from './src/Screens/dataScreen'
const App = () => {
  return (
   <Provider store={store}>

  <Screen1/>

   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
