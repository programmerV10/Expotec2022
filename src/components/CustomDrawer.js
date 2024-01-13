import React from 'react';
import {
View,
Image,
Text,
StyleSheet,
} from 'react-native';
import {
DrawerContentScrollView,
DrawerItemList,
} from '@react-navigation/drawer';

export default function CustomDrawer(props){
    return(
        <DrawerContentScrollView>
        <View style={{alignContent: 'center', alignItems: 'center'}}>
         <Image
         source={require('./DrawerIco.png')}
         style={styles.image}
         />
         <Text style = {styles.text}>Bem Vindo ao App Energia</Text>
    </View>
<DrawerItemList {...props}/>
    
    </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({

    image:{
width:225,
height:220,
    },
   text:{
    color: '#000000',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
   },
})