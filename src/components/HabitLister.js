import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const HabitLister = () => {
    const data = {
        list1: {
            habits: [1, 2, 3],
            text: "Implemented", 
            color: "#72CC50",
        },
        list2: {
            habits: [4, 5, 6],
            text: "Implementing", 
            color: "#019875",
        },
        list3: {
            habits: [7, 8, 9],
            text: "To implement", 
            color: "#00AEAD",
        },
    }
    const [currentList, setCurrentList] = React.useState(data.list1.habits);

    const NavBarText = ({list}) => {
        return (
            <TouchableOpacity
                onPress={() => setCurrentList(list.habits)}
            >
                <Text style={[styles.navBarText, {color: list.color}]}>{list.text}</Text>
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item }) => (
        <Text>{item}</Text>
      );

    return (
        <View>
            <View style={styles.navBar}> 
                <NavBarText list={data.list1} />
                <NavBarText list={data.list2} />
                <NavBarText list={data.list3} />
            </View>
            <FlatList
                data={currentList}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navBarText: {
        fontSize: 18
    }
})

export default HabitLister
