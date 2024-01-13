import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';


import OQE from '../pages/OQE';
import AIE from '../pages/AIE';
import EA from '../pages/EA';
import CT from '../pages/CT';
import IEA from '../pages/IEA';
import DEE from '../pages/DEE';
import CEA from '../pages/CEA';
import SN from '../pages/SN';
import CustomDrawer from '../components/CustomDrawer';
import ADT from '../pages/ADT';
import IAD from '../pages/IAD';
import PA from '../pages/PA';
const Drawer = createDrawerNavigator();

 export default function RD1(){

  return( 
   

    <Drawer.Navigator
    drawerContent={CustomDrawer}
  screenOptions={{
drawerActiveBackgroundColor: '#6495ed',
drawerActiveTintColor:'#ffffff',

drawerInactiveBackgroundColor:'#ffffff',
drawerInactiveTintColor: '#000',
    }}
    >
  <Drawer.Screen
        name="OQE"
        component={OQE}
        options = {{
            title: 'O que é energia limpa',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
           }
        }}
        />
         <Drawer.Screen
        name="EA"
        component={EA}
        options = {{
            title: 'Energia azul',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />
         <Drawer.Screen
        name="CT"
        component={CT}
        options = {{
            title: 'Comparação das turbinas',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />
         <Drawer.Screen
        name="DEE"
        component={DEE}
        options = {{
            title: 'Diferenças entre azul e hídrica',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />
        <Drawer.Screen
        name="AIE"
        component={AIE}
        options = {{
            title: 'A importância da energia azul',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />
       <Drawer.Screen
        name="IEA"
        component={IEA}
        options = {{
            title: 'Investimentos na energia azul',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />

<Drawer.Screen
        name="CEA"
        component={CEA}
        options = {{
            title: 'Curiosidades da energia azul',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />

        <Drawer.Screen
        name="SN"
        component={SN}
        options = {{
            title: 'Sobre nós',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />
         <Drawer.Screen
        name="ADT"
        component={ADT}
        options = {{
            title: 'Avaliação',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />
         <Drawer.Screen
        name="PA"
        component={PA}
        options = {{
            title: 'Perguntas',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />
        <Drawer.Screen
        name="IAD"
        component={IAD}
        options = {{
            title: 'Informações adicionais',
            headerTintColor: '#ffffff',
           headerStyle: {
            backgroundColor: '#6495ed',
    
           }
        }}
        />
    </Drawer.Navigator>
  )
}