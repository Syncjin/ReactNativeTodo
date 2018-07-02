import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get("window")

export default class ToDo extends Component{
    state = {
        isEditing: false,
        isCompleted: false
    }
    render(){
        const {isCompleted} = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View 
                        style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}> 
                        {/* 배열로 멀티 스타일사용, 삼항연산자도 사용 가능 */}
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>Hello Todo</Text>
            </View>
        )
    }
    _toggleComplete = () => {
        this.setState(prevState => {
            return ({
                isCompleted: !prevState.isCompleted
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor:"#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        marginRight: 20
    },
    completedCircle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "#F23657"
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20 //상단과 하단
    }
})