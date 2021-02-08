import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView } from 'react-native'
import Headerr from './components/header'
import TaskList from './components/task-list'
import ButtonAddTask from './components/button-add-task'
import MenuTask from './components/menu-task'


const taskList = [
  {
    id: 0,
    content : 'aller acheter du lait',
    status : 'En cours'
  },
  {
    id: 1,
    content : 'se brosser les dents',
    status : 'En cours'
  },
  {
    id: 2,
    content : 'Faire le ménage',
    status : 'Terminée'
  }

]



export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {taskList}
  }
  displayMenuTask = (task) =>{
    console.log('salut from app displayMenuTask', task);
  }

  render () {
    return (
    <View style={{flex:1 }}>
      <Headerr content='Liste de Taches'></Headerr>
      <ScrollView>
         <TaskList  onPressCallBack={this.displayMenuTask}   taskList ={this.state.taskList } />
      </ScrollView>
      <MenuTask/>
      <ButtonAddTask/>

    </View>
    )
  }
}
/*
cd test1
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios # requires an iOS device or macOS for access to an iOS simulator
- npm run web

*/