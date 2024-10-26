import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/basicItems/Collapsible';
import { ThemedText } from '@/components/basicItems/ThemedText';

type TextInputFieldProps = {
  question: string;
  placeholder: string;
  minorText: string;
};

export function TextInputFieldLong({ question, placeholder, minorText }: TextInputFieldProps) {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Collapsible title={question}>
        {minorText && <ThemedText> {minorText}
        </ThemedText>}
      </Collapsible>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        multiline={true}
        textAlignVertical="top"
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: 5,
    fontFamily: "RobotoThin",
    fontSize: 16,
    color: '#ddd',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    alignItems: 'baseline',
    backgroundColor: '#f5f5f5',
    height: 100
  },
  inputFocused: {
    borderColor: '#ddd',
    borderWidth: 1,
  },
  infoIcon: {
    marginLeft: 8,
  },
  collapsibleContent: {
    marginTop: 8,
  },
  minorText: {
    fontSize: 14,
  },
});