import React from 'react'
import { View } from 'react-native'
import {ListItem ,Badge } from 'react-native-elements';
import {TASK } from '../model'
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { style  } from './style'

import { APP_COLORS } from '../../styles/color'

 const TaskList = ( {taskList,onPressCallBack}  ) =>(
     <View>
         {
               taskList.map((item,k) =>(
                <ListItem  
                    key={k} bottomDivider topDivider containerStyle={style.list}
                    onPress={()=>{onPressCallBack(item.content)}}    
                >
                    <ListItem.Content>
                        <ListItem.Title>
                            {item.content}    
                        </ListItem.Title> 
                    </ListItem.Content>
                    <Badge
                        value={item.status}
                        containerStyle={
                            item.status == TASK.todoStatus 
                            ?  { backgroundColor :  APP_COLORS.accent } 
                            : {  backgroundColor :  APP_COLORS.lightPrimaryColor  }
                        }
                    />
                    <ListItem.Chevron />
                </ListItem>
               ))
         }
      

     </View>
 )

export default TaskList