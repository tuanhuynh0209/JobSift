import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
// import { useFonts } from "expo-font";

const NearbyJob = (props) => {
    const { dataNearby } = props

    // const [fontsLoaded] = useFonts({
    //     Rubik: require("../assets/fonts/Rubik/static/Rubik-Bold.ttf"),
    //     RukbikNormal: require("../assets/fonts/Rubik/static/Rubik-Regular.ttf"),

    // });

    // if (!fontsLoaded) {
    //     return null; // Return null or a loading indicator while fonts are loading
    // }

    return (
        <TouchableOpacity style={styles.nearbyContainer}>
            <Image style={styles.jobImage} source={require('../assets/favicon.png')}></Image>
            <View style={styles.nearByBody}>
                <Text style={styles.nearByJobName}>{dataNearby.title_job}</Text>
                <Text style={styles.nearByJobCategory}>{dataNearby.jobCate}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    nearbyContainer: {
        display: "flex",
        flexDirection: "row",
        elevation: 5,
        marginTop: 15,
        marginBottom: 15,
        width: "100%",
        backgroundColor: "#fff",
        padding: 15,
        gap: 20,
        borderRadius: 16,
        
        alignItems: "center"
    },
    nearByJobName: {
        // fontFamily: "Rubik",
        fontWeight: "700"
    },
    nearByJobCategory: {
        // fontFamily: "RukbikNormal",
        color: "rgba(171,171,171,1)",
        fontWeight: "600"
    },

})

export default NearbyJob