import React from 'react'
import { View ,Text} from 'react-native'
import {Button } from 'react-native-elements';
import Modal from 'react-native-modal'
import { style  } from './style'


const MenuTask = () => (
        <Modal 
        isVisible
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        AnimationInTiming={1000}
        AnimationOutTiming={1000}
        BackdropTransitionInTiming={1000}
        BackdropTransitionOutTiming={1000}
        >
            <View style={style.modal}>
                <View style={style.textView}  >
                <Text>
                    Que souhaitez vous faire sur la tache
                </Text>
            </View>
            <View style={style.buttonView}>
                <Button 
                    buttonStyle={style.buttonDelette}
                    title="supprimer"
                    onPress ={()=>console.log('salut from onpress supprimer ')}
                />
                 <Button 
                    buttonStyle={style.buttonChangeStatus}
                    title="Changer status"
                    onPress ={()=>console.log('salut from onpress changer status ')}
                />
            </View>
            </View>               

        </Modal>
)
export default MenuTask 