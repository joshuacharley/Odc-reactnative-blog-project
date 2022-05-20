import * as React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';


const DATA = [
    {
        id: 1,
        title: "ODC Lunching",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    },
     {
        id: 2,
        title: "No to Corruption",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    },
     {
        id: 3,
        title: "Orange New course Office Assistant",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    },
     {
        id: 4,
        title: "Orange Venture Capital",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    },
     {
        id: 5,
        title: "ODC Wordpress course",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    },
     {
        id: 6,
        title: "Top Up to have Points",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    },
      {
        id: 7,
        title: "Life at Orange HQ",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    },
      {
        id: 8,
        title: "Employees Actions To Work",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    },
      {
        id: 9,
        title: "New Employment Status",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    },
      {
        id: 10,
        title: "Orange New CEO",
        description: "lorem ipsum dolor sit Lorem ipsum dolor sit amet. ",
    }
];

const Item = ({ title, description }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </View>
);



export default function DetailsScreen({ navigation }) {
    const renderItem = ({ item }) => (

        <Item title={item.title} description={item.description} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
     
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        marginTop: 10,
    },
    item: { 
        backgroundColor: '#FFAD60',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
    },
})