import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import Favicon from "../assets/ski.png";

export default function CategoryListItem(props) {
    const { category } = props;

    function touchAble() {
        Alert.alert("Thông báo", "Click");
    }

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => touchAble()}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image style={styles.categoryImage} source={Favicon}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 16,
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16,
    },
    title: {
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: "700",
    },
    categoryImage: {
        width: 64,
        height: 64
    }
});
