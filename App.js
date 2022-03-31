import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
     
     {/* Today's Tasks */}
     <View style={styles.tasksWrapper}>
       <Text style={styles.sectionTitle}>This Week's Tasks:</Text>
       <View style={styles.items}>
         {/* this is where the tasks will go! */}
         <Task text='Task-1: set up project environment.'/>
         <Task text='Task-2: start working on one of the pages.'/>
         <Task text='Task-3: clean the house.'/>
         <Task text='Task-4: download Java SDK.'/>


       </View>

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#557174'
},
items: {
  marginTop: 40,

},
});
