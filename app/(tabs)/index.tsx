import { Image, StyleSheet, View, Text, Platform } from 'react-native';
import React from 'react';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { rgbaArrayToRGBAColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';




export default function HomeScreen() {
  return (
    <ThemedView style= {styles.background}>
      <View style={styles.divimage}>
       <Image 
        source={require('/Users/txt.hackathon/Desktop/React Native/profile/assets/images/IMG_4210 Small.jpeg')} 
        style={styles.image} />
        </View>
<View> <Text style={styles.name}>Alexander Nocelotl</Text> </View>
<View style={styles.container}>
<Text style={styles.text}>
  About Me:
</Text>
</View>

<View style={styles.ocontainer}> <Text style={styles.passion}>My name is Alexander Nocelotl and I'm currently 16. My passions include things like books, splatoon, nintendo games, design, music, volleyball, and biking. The role I chose for SCLA 2024 is Developer. The reason I chose to be a dev is because I’ve always pushed away learning how to code because I thought it was difficult to understand. But this year I want to undertake the Dev role to better my skills and understand coding isn’t hard to understand. My dream career involves being a musical game composer for nintendo. I want to go to Japan and learn Japanese so I can become an employee at Nintendo of Japan. I want to become the person who is behind all the beautiful music at Nintendo and help create the next generation of music.
</Text></View>
 </ThemedView>);



}

const styles = StyleSheet.create({
  background:{
backgroundColor: 'white',
  },
  name:{
    paddingTop: 20,
    fontSize: 25,
textAlign:'center',
  },
  ocontainer: {
    justifyContent: 'center',
  },
  passion: {
    fontSize: 15,
    textAlign: "center",
    padding: 30,
    color: 'grey',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divimage:{
paddingTop: 20,
  },
  image: {
    
    borderWidth: 3,
    borderColor: 'blue',
    margin: 'auto',
    borderRadius: 200,
    width: 200,
    height: 200,
  },

  text: {
    marginTop: 20,
    fontSize: 20,
    color: 'rgb(15, 93, 183)',
    
    },
    


 


});

