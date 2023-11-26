import { Text, View } from "react-native";
import {styles} from './home.style'
import NavBar from "../../components/Nav/Nav";
import React from "react";
import FlatListComponent from "../../components/FlatList/flatList";
function Home(){
    return (
        <View style={styles.container}>
            <NavBar/>
            <FlatListComponent/>
        </View>
    )
}
export default Home 