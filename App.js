 import React, {useState} from 'react';
 import TodoList from './components/TodoList';
 import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
 import TodoInsert from './components/TodoInsert';
 import { NavigationContainer } from '@react-navigation/native'; 
 import { createStackNavigator } from '@react-navigation/stack';
import { menu } from './components/menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
 const App = () => {
   // todos: {id: Number, textValue: string, checked: boolean }
   const [todos, setTodos] = useState([]);
 
   const addTodo = text => {
     setTodos([
       ...todos,
       {id: Math.random().toString(), textValue: text, checked: false},
     ]);
   };
 
   const onRemove = id => e => {
     setTodos(todos.filter(todo => todo.id !== id));
   };
 
   const onToggle = id => e => {
     setTodos(
       todos.map(todo =>
         todo.id === id ? {...todo, checked: !todo.checked} : todo,
       ),
     );
   };
 
   const Drawer = createDrawerNavigator();
   return (
     <SafeAreaView style={styles.container}>
      <NavigationContainer> 
            <Drawer.Navigator
              initialRouteName="menu"
              drawerType="front">
                <Drawer.Screen name="menu" component={menu}>
                  
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer> 
      <TouchableOpacity
        onPress={()=>{
        navigation.navigate()
      }}>
        <Text style={styles.btn}>←</Text>
      </TouchableOpacity>
       <Text style={styles.appTitle}>That's me</Text>
       <View style={styles.card}>
         <TodoInsert onAddTodo={addTodo} />
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FF7F50',
   },
   appTitle: {
     color: '#fff',
     fontSize: 36,
     marginTop: 30,
     marginBottom: 30,
     fontWeight: '300',
     textAlign: 'center',
     backgroundColor: '	#FF7F50',
   },
   card: {
     backgroundColor: '#fff',
     flex: 1,
     borderTopLeftRadius: 10, // to provide rounded corners
     borderTopRightRadius: 10, // to provide rounded corners
     marginLeft: 10,
     marginRight: 10,
   },
 });
 
 export default App;

