


import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Button, View, TextInput, ScrollView, TouchableOpacity,TouchableHighlight,Modal,modalVisible, Keyboard } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { products,employees,orders } from "./dummylist";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
function HomeScreen({ navigation, route,orders }) {
  // Defining state object

  const [getList, setList] = useState([products]);




  return (
    
    <View style={styles.container}>
  
  
    <View style={styles.inputContainer}>
        <TouchableHighlight
              style={styles.appButtonContainer}
              onPress={() => navigation.navigate('Manage Products', { randNum: getList })}
        
            >
              <Text style={styles.appButtonText}>Manage Products</Text>
            </TouchableHighlight>
     
             <TouchableHighlight
              style={styles.appButtonContainer}
              onPress={() => navigation.navigate('Manage Employees', { randNum: getList })}
        
            >
              <Text style={styles.appButtonText}>Manage Employees</Text>
            </TouchableHighlight>
             <TouchableHighlight
              style={styles.appButtonContainer}
              onPress={() => navigation.navigate('Manage Orders', { randNum: getList })}
            >
              <Text style={styles.appButtonText}>Manage Orders</Text>
            </TouchableHighlight>
     
         
          
          
         
   
     
        
        </View>
        </View>
  );
}
function  ManageProducts({ navigation, route }) {


  // Apply navigation option of the screen here so that we can access component props and members
   const [getList, setList] = useState(products);

  return (
    <View >
        <ScrollView style={styles.scrollview}>
      {getList.map((item, index) =>
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.7}
            onPress={() => navigation.navigate('Product Details', { itemkey: item})}
        >
          <View style={styles.scrollviewItem}>
            <Text style={styles.scrollviewText}>name is {item.data.name}</Text>
            <Text style={styles.scrollviewText}> Price is {item.data.price}</Text>      
            <Text style={styles.scrollviewText}>location is {item.data.location}</Text>

            
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
    </View>
  );
}
function  ManageOrders({ navigation, route }) {


  // Apply navigation option of the screen here so that we can access component props and members
   const [getList, setList] = useState(orders);

  return (
    <View >
        <ScrollView style={styles.scrollview}>
      {getList.map((item, index) =>
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.7}
            onPress={() => navigation.navigate('Product Details', { itemkey: item})}
        >
          <View style={styles.scrollviewItem}>
            <Text style={styles.scrollviewText}>Order name is {item.data.name}</Text>
            <Text style={styles.scrollviewText}>Delievery time is {item.data.time}</Text>      
            <Text style={styles.scrollviewText}>location is {item.data.location}</Text>

            
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
    </View>
  );
}
function  ManageEmployees({ navigation, route }) {


  // Apply navigation option of the screen here so that we can access component props and members
   const [getList, setList] = useState(employees);

  return (
    <View >
        <ScrollView style={styles.scrollview}>
      {getList.map((item, index) =>
        <TouchableOpacity
          key={item.key}
          activeOpacity={0.7}
            onPress={() => navigation.navigate('Employee Details', { itemkey: item})}
        >
          <View style={styles.scrollviewItem}>
            <Text style={styles.scrollviewText}>name is {item.data.name}</Text>
            <Text style={styles.scrollviewText}>Age is {item.data.age}</Text>      
            <Text style={styles.scrollviewText}>location is {item.data.location}</Text>

            
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
    </View>
  );
}
function  Product({ navigation, route }) {


  // Apply navigation option of the screen here so that we can access component props and members
  const getnumber = route.params.itemkey;
  

  return (
     <Card>
    <Card.Title title={getnumber.data.name}   />
    <Card.Content>
      <Title>{getnumber.data.price} </Title>
      <Paragraph>{getnumber.data.location} </Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/200' }} />
  
  </Card>
  );
}
function  Employee({ navigation, route }) {


  // Apply navigation option of the screen here so that we can access component props and members
  const getnumber = route.params.itemkey;
  

  return (
     <Card>
    <Card.Title title={getnumber.data.name}   />
    <Card.Content>
      <Title>{getnumber.data.age} years </Title>
      <Paragraph>{getnumber.data.location} </Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/200' }} />
  
  </Card>
  );
}
function  Order({ navigation, route }) {


  // Apply navigation option of the screen here so that we can access component props and members
  const getnumber = route.params.itemkey;
  

  return (
     <Card>
    <Card.Title title={getnumber.data.name}   />
    <Card.Content>
      <Title>{getnumber.data.time}  </Title>
      <Paragraph>{getnumber.data.location} </Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/200' }} />
  
  </Card>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
 <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Manage Products" component={ManageProducts} />
         <Stack.Screen name="Product Details" component={Product} />
         <Stack.Screen name="Manage Employees" component={ManageEmployees} />
           <Stack.Screen name="Employee Details" component={Employee} />
            <Stack.Screen name="Manage Orders" component={ManageOrders} />
           <Stack.Screen name="Order Details" component={Order} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    marginBottom:60,
    elevation: 8,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    marginBottom:40,
    
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    alignSelf:'flex-start',
    textTransform: 'uppercase',
    
  },

  red:{
    color: 'blue',
    fontSize: 20,
    
 backgroundColor:'lightgrey',
    
    marginTop:10
  },

  scrollviewText: {
    fontSize: 15,
    color: 'black'
  },
  scrollview: {
    backgroundColor:"black",
    
    width: '100%',
    
  
  },
  scrollviewItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: 'lightgrey',
    alignSelf: "center",
    padding: 10,
    margin: 5,
    width: '80%',
    borderRadius: 10
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 40
  },
  inputContainer: {
    paddingTop:20,
    flexDirection: "column",
    width: '90%',
    justifyContent: "space-between",
    alignItems: "center"
  },

});
