/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

interface Action {
  id: string;
  name: string;
  type: 'rest' | 'work';
  length: number;
}

interface ItemProps {
  action: Action;
}

function Item({action}: ItemProps) {
  return (
    <View
      style={action.type === 'rest' ? styles.restAction : styles.workAction}>
      <Text style={styles.name}>{action.name}</Text>
      <Text style={styles.length}>{action.length}s</Text>
    </View>
  );
}

const App = () => {
  const [actions] = useState<Action[]>([
    {
      id: '1',
      name: 'Squat Tempo 3;1',
      type: 'work',
      length: 30,
    },
    {
      id: '2',
      name: 'High knees (Speed)',
      type: 'work',
      length: 30,
    },
    {
      id: '3',
      name: 'Wide Squat 3;1',
      type: 'work',
      length: 30,
    },
    {
      id: '4',
      name: 'Mountain Climbers (Speed)',
      type: 'work',
      length: 30,
    },
    {
      id: '5',
      name: 'Rest',
      type: 'rest',
      length: 60,
    },
    {
      id: '6',
      name: 'Squat Tempo 3;1',
      type: 'work',
      length: 30,
    },
    {
      id: '7',
      name: 'High knees (Speed)',
      type: 'work',
      length: 30,
    },
    {
      id: '8',
      name: 'Wide Squat 3;1',
      type: 'work',
      length: 30,
    },
    {
      id: '9',
      name: 'Mountain Climbers (Speed)',
      type: 'work',
      length: 30,
    },
    {
      id: '19',
      name: 'Rest',
      type: 'rest',
      length: 60,
    },
  ]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={actions}
          renderItem={({item}) => <Item action={item} />}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => console.log('tap')}>
          <View>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  restAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#15BF9A',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  workAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#68B7FC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    display: 'flex',
  },
  length: {
    fontSize: 18,
    fontWeight: 'bold',
    display: 'flex',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 100,
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#F9D35A',
    borderRadius: 100,
    height: 60,
    width: 60,
  },
  addButtonText: {
    color: 'white',
    fontSize: 56,
    lineHeight: 66,
  },
});

export default App;
