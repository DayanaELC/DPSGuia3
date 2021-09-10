import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Divider, } from 'react-native-elements';
import { Row, Rows, Table } from 'react-native-table-component';

const DATA = [
    {
        id: '1',
        title: 'Pupusas',
        src:require('./src/imgs/pupusas.jpg'),
        descripcion: 'Tortilla de arroz o maíz rellena de queso, frijoles, chicharron y los ingrdientes que más te gusten',
    },
    {
        id: '2',
        title: 'Nuegados',
        src:require('./src/imgs/nuegados.jpg'),
        descripcion: 'Delicioso bocadillo frito a base de yuca acompañado de miel',
    },
    {
        id: '3',
        title: 'Yuca frita',
        src:require('./src/imgs/yucafrita.jpg'),
        descripcion: 'Porciones de yuca frita con salsa, curtido, pepesca o fritada',
    },
 ];

 const Item = ({ title, img, descripcion }) => (
    <View>
        <Card style={styles.item}>
            <Card.Title style={{ fontSize: 20 }}>{title}</Card.Title>
            <Card.Image style={styles.img} source={img}></Card.Image>
            <Text style={{ textAlign: 'center' }}>{descripcion}</Text>
        </Card>
    </View>
 );

 const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.src} descripcion={item.descripcion} />
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
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
    },
    img: {
        resizeMode: 'contain',
        margin: 8,
    }
 });

AppRegistry.registerComponent("tipicas", () => App);