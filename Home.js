import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView, TouchableOpacity,Platform, StatusBar , ImageBackground, Image, } from 'react-native';
import IssLocationScreen from './IssLocation';
import MeteorScreen from './Meteors';
import UpdateScreen from './Updates';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea}>
               <ImageBackground source={require("../assets/bg.png")} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Rastreador de la EEI</Text>
                </View>
                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("IssLocation")}>
                    <Text style={styles.routeText}>Ubicación de la EEI</Text>
                    <Text style={styles.knowMore}>{"Conoce más >"}</Text>
                    <Text style={styles.bgDigits}>1</Text>
                    <Image style={styles.iconImage} source={require("../assets/iss_icon.png")}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("Meteors")}>
                    <Text style={styles.routeText}>Meteoros</Text>
                    <Text style={styles.knowMore}>{"Conoce más >"}</Text>
                    <Text style={styles.bgDigits}>2</Text>
                    <Image style={styles.iconImage} source={require("../assets/meteor_icon.png")}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("Updates")}>
                    <Text style={styles.routeText}>Actualizaciones</Text>
                    <Text style={styles.knowMore}>{"Conoce más >"}</Text>
                    <Text style={styles.bgDigits}>3</Text>
                    <Image style={styles.iconImage} source={require("../assets/rocket_icon.png")}/>
                </TouchableOpacity>

                </ImageBackground>
              </SafeAreaView> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea:{
      marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
  },
  backgroundImage:{
      flex:1,
      resizeMode:"cover"
  },
  routeCard:{
      flex:0.5,
      marginLeft:50,
      marginRight:50,
      marginTop:50,
      borderRadius:35,
      backgroundColor:"white"
  },
  titleBar:{
      flex:0.15,
      justifyContent:"center",
      alignItems:"center"
  },
  titleText:{
      fontSize:40,
      fontWeight:"bold",
      color:"white"
  },
  routeText:{
      fontSize:25,
      fontWeight:"bold",
      color:"black",
      marginTop:75,
      paddingLeft:30
  },
  knowMore:{
      paddingLeft:30,
      color:"dark_blue",
      fontSize:15
  },
  bgDigits:{
      position:"absolute",
      fontSize:150,
      right:20,
      bottom:-15,
      zIndex:-1,
      color:"rgba(12,20,130,0.5)"
  },
  iconImage:{
      position:"absolute",
      height:200,
      width:200,
      resizeMode:"contain",
      right:20,
      top:-80
  }
});
