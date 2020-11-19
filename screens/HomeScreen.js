import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen=({navigation})=> {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Lets Start"
          onPress={()=>navigation.navigate('Start', {id: 12, name: "Shahzaib"})}
        ></Button>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
  });

  export default HomeScreen;