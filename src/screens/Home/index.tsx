import { Alert, Text, TextInput, View, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import { AppColors } from '../../common/theme/app_colors';
import { Participant } from '../../common/components/task/participant';
import React, { useState } from 'react';

export function Home() {
  // Insets
  const insets = useSafeAreaInsets();

  function handleAddTask() {
    setTaskList((oldValue) => [...oldValue, newTask]);
    setNewTask(''); // clear the input field
  }

  function handleRemoveTask({ task }: { task: string }) {
    Alert.alert(
      'Remove Task',
      `Do you really want to remove the task? ${task}`,
      [
        { text: 'Cancel', style: 'cancel', },
        {
          text: 'Remove',
          onPress: () => {
            setTaskList(
              (oldValue) => oldValue.filter((value) => value !== task)
            );
          },
        },
      ],
    );
  }

  // Input text state
  const [newTask, setNewTask] = useState<string>('');

  // Task List state
  const [taskList, setTaskList] = useState<string[]>([
    'Estudar React Native',
    'Estudar React',
  ]);



  // Aux
  let isVisible = false;

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{ flex: 1 }
      }>
      <StatusBar backgroundColor="blue" barStyle="dark-content" translucent />
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
            onChangeText={text => setNewTask(text)}
            value={newTask}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleAddTask}
          >
            <Text style={{ color: AppColors.lightGray }}>Add</Text>
          </TouchableOpacity>
        </View>
        {/* Compenentização a partir daqui*/}
        <View style={{ alignItems: 'flex-start', flex: 1 }}>
          {/* Abordagem com FlatList */}
          <FlatList
            data={taskList}
            keyExtractor={(_, index) => index.toString()}
            style={{ width: '100%', marginTop: 20, flex: 1 }}
            renderItem={({ item, index }) => (
              <Participant
                task={item}
                onRemove={() => handleRemoveTask({ task: item })}
              />
            )}
            ListEmptyComponent={
              <Text style={styles.emptyListState} >
                No tasks found
              </Text>
            }
          />
          {/* Abordagem com ScrollView */}
          {
            isVisible && <ScrollView style={{ width: '100%', marginTop: 20 }} >
              {
                taskList.map((task, index) => {
                  let margin = index === taskList.length - 1 ? insets.bottom + 100 : 0
                  return (
                    <View key={index} style={{ marginBottom: margin }} >
                      <Participant
                        task={task} onRemove={() => handleRemoveTask({ task })}
                      />
                    </View>
                  )
                },
                )
              }
            </ScrollView>
          }
        </View>
      </View >
    </SafeAreaView>
  );


}