import { Text, TextInput, View, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { AppColors } from '../../common/theme/app_colors';
import { Participant } from '../../common/components/task/participant';
export function Home() {

 function handleAddTask() {
  console.log('Add task');
 }

 return (
  <SafeAreaView
   edges={['bottom']}
   style={{ flex: 1 }
   }>
   <StatusBar backgroundColor="blue" barStyle="dark-content" />
   <View style={styles.container}>
    <Text style={styles.title}>Task List</Text>
    <Text style={styles.subtitle}>powered by: Artur</Text>
    <View style={styles.formView}>
     <TextInput
      style={styles.formField}
      selectionColor={AppColors.purple}
      placeholder='Add a new task'
      placeholderTextColor={AppColors.darkGray}
      keyboardType='email-address'
     />
     <TouchableOpacity
      style={styles.buttonStyle}
      onPress={handleAddTask}
     >
      <Text style={{ color: AppColors.lightGray }}>Add</Text>
     </TouchableOpacity>
    </View>
    {/* Compenentização a partir daqui*/}
    <View style={{ alignItems: 'flex-start' }}>
     <Participant name={'Estudar React Native'} />
    </View>
   </View >

  </SafeAreaView>
 );
}