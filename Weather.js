import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "cloud",
        gradient: ["#2193b0", "#6dd5ed"],
        title: "Clouds",
        subtitle: "Cloudy Moody"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#f05053", "#e1eec3"],
        title: "",
        subtitle: ""
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#373B44", "#4286f4"],
        title: "",
        subtitle: ""
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
        title: "",
        subtitle: ""
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#085078", "#85D8CE"],
        title: "",
        subtitle: ""
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
        title: "",
        subtitle: ""
    },
    Atmosphere: {
        iconName: "weather-partly-cloudy",
        gradient: ["#00B4DB", "#0083B0"],
        title: "",
        subtitle: ""
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "",
        subtitle: ""
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "",
        subtitle: ""
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
    }
})