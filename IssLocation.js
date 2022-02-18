import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar , ImageBackground, Image, Alert, } from 'react-native';
import  MapView ,{Marker} from 'react-native-maps';
import axios from 'axios';

export default class IssLocationScreen extends Component {
constructor(props){
super(props);
this.state={
    location:{},
}
}

componentDidMount(){
    this.getIssLocation();
}

getIssLocation=()=>{
    axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response=>{
            this.setState({
                location:response.data()
            })
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
}

    render() {
        if(Object.keys(this.state.location).length===0){
            return (
                <View style={styles.container}>
                    <Text style={styles.titleText}>Cargando...</Text>
                </View>
            )
        }else{
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require("../assets/bg.png")} style={styles.backgroundImage}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Localización de la Estación Espacial Internacional</Text>
                    </View>
                    <View style={styles.mapContainer}>
                        <MapView style={styles.map}
                        region={{
                            latitude:this.state.location.latitude,
                            longitude:this.state.location.longitude,
                            latitudeDelta:100,
                            longitudeDelta:100
                        }}>
                            <Marker coordinate={{
                                latitude:this.state.location.latitude,
                                longitude:this.state.location.longitude
                            }}> 
                                <Image source={require('../assets/iss_icon.png')} style={{height:50,width:50}}/>
                            </Marker>
                        </MapView>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Latitud:{this.state.location.latitude}</Text>
                        <Text style={styles.infoText}>Longitud:{this.state.location.longitude}</Text>
                        <Text style={styles.infoText}>Altitud(km):{this.state.location.altitude}</Text>
                        <Text style={styles.infoText}>Velocidad(km/h):{this.state.location.velocity}</Text>
                    </View>
                </ImageBackground>
                
            </View>
        )
        }
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map:{
      width:"100%",
      height:"100%"
    },
    mapContainer:{
        flex:0.7
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover"
    },
    titleContainer:{
        flex:0.1,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        fontSize:30,
        fontWeight:"bold",
        color:"white"
    },
    infoText:{
        fontSize:15,
        fontWeight:"bold",
        color:"black"
    },
    infoContainer:{
        flex:0.2,
        backgroundColor:"white",
        marginTop:-10,
        padding:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    }
    
  });  