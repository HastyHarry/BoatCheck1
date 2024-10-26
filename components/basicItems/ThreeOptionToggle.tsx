import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type OptionType = 'Option1' | 'Option2' | 'Option3' | null;

type toggleProps = {
  option1: string;
  option2: string;
  option3: string;
};

export function ThreeOptionToggle({option1, option2, option3}: toggleProps){
  const [selected, setSelected] = useState<OptionType>(null);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selected === "Option1" && styles.selectedButton,
          ]}
          onPress={() => setSelected('Option1')}
        >
          <Text style={selected === 'Option1' ? styles.selectedText : styles.text}>{option1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selected === 'Option2' && styles.selectedButton,
          ]}
          onPress={() => setSelected('Option2')}
        >
          <Text style={selected === 'Option2' ? styles.selectedText : styles.text}>{option2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selected === 'Option3' && styles.selectedButton,
          ]}
          onPress={() => setSelected('Option3')}
        >
          <Text style={selected === 'Option3' ? styles.selectedText : styles.text}>{option3}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
  },
  question: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedButton: {
    backgroundColor: '#ddd',
  },
  text: {
    fontFamily: 'RobotoThin',
    color: '#333',
  },
  selectedText: {
    fontFamily: 'RobotoThin',
    fontWeight: 'bold',
    color: '#000',
  },
});