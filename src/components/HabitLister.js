import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const HabitLister = () => {
    const data = {
        list1: [1, 2, 3],
        list2: [4, 5, 6],
        list3: [7, 8, 9]
    }
    const [currentList, setCurrentList] = React.useState(data.list1);

    const NavBarText = ({text, link}) => {
        return (
            <TouchableOpacity
                onPress={() => setCurrentList(link)}
            >
                <Text style={styles.navBarText}>{text}</Text>
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item }) => (
        <Text>{item}</Text>
      );

    return (
        <View>
            <View style={styles.navBar}>
                <NavBarText text={"Implemented"} link={data.list1} />
                <NavBarText text={"Implementing"} link={data.list2} />
                <NavBarText text={"To implement"} link={data.list3} />
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
