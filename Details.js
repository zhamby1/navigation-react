import React from "react";
import {View, Text, StatusBar} from "react-native";
import styles from "./styles";

export default function Details({route, navigation}){
    const {content, title} = route.params;
    //we are going to use the useffect hook
    //use effect is a hook that allows you to perform side effects in your function components
    //side effects are anything that affects something outside of the function
    //use effect runs after every render

    React.useEffect(() => {
        navigation.setOptions({title})
    
    }, [])

    
    return(
        <View style = {styles.container}>
            <StatusBar barStyle={"dark-content"} />
            <Text>{content}</Text>
        </View>
    )
    
}