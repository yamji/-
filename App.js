 import React, {useState} from 'react';
 import TodoList from './components/TodoList';
 import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
 import TodoInsert from './components/TodoInsert';
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
  
   return (
     <SafeAreaView style={styles.container}>
      <View style={styles.touch}>
      <TouchableOpacity
        onPress={()=>{
        navigation.navigate()
      }}>
        <Image source={require("./assets/hee.png")}
        style = {styles.img}/>
      </TouchableOpacity>
      <Text style={styles.appTitle}>That's me</Text>
      </View>
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
   touch:{
    flexDirection:'row',
   },
   appTitle: {
     color: '#fff',
     fontSize: 40,
     marginTop: 30,
     marginBottom: 30,
     fontWeight: '300',
     textAlign: 'center',
     marginLeft: 530,
     backgroundColor: '	#FF7F50',
     
   },
  
   
   card: {
     backgroundColor: '#fff',
     flex: 1,
     borderTopLeftRadius: 10, // to provide rounded cornerss
     borderTopRightRadius: 10, // to provide rounded corners
     marginLeft: 30,
     marginRight: 30,
   },
   img: {
      width:100,
      height:50,
      marginTop: 30,
     marginBottom: 30,
      resizeMode:'contain',
   },
 });
 
 export default App;

