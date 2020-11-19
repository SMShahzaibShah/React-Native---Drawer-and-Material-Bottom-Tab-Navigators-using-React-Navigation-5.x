import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const startScreen =({navigation , route})=> {
    const id = route.params.id;
    const name = route.params.name;
    return(
      <View style={styles.container}>
      <Text>Screen 1</Text>
    <Text>ID: {id}</Text>
    <Button title="Get New ID"
      onPress={()=>navigation.setParams(
        {id: Math.floor(Math.random()*100)}
      )}
    />
    <Text>Name:{name}</Text>
      <Text>Welcome to My App</Text>
      <Button title="Go to Dashboard"
        onPress={()=> navigation.navigate('Dashboard') }/>
    </View>
  );
  }

  const styles = StyleSheet.create({
    container:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
  });

  export default startScreen;