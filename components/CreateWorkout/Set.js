import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

function Set({ index, weightsEnabled, onChange }) {
  const [setValues, setSetValues] = useState({
    reps: '',
    restMin: '',
    restSec: '',
    weight: '',
  });

  const handleChange = (field, value) => {
    setSetValues(prevValues => ({
      ...prevValues,
      [field]: value,
    }));
    onChange(index, field, value);
  };

  const renderInputField = (label, fieldKey) => (
    <View style={styles.inputSection}>
      {label && (
        <View style={styles.inputSectionText}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}

      <TextInput
        style={styles.input}
        value={setValues[fieldKey]}
        onChangeText={value => handleChange(fieldKey, value)}
        keyboardType="numeric"
      />
    </View>
  );

  return (
    <View style={styles.setItem}>
      <Text style={{ fontSize: 17, fontWeight: '800', marginBottom: 5 }}>Set#{index + 1}</Text>

      {renderInputField('Reps', 'reps')}

      <View style={styles.inputSection}>
        {renderInputField('Rest', 'restMin', { marginLeft: 5, marginRight: 10 })}
        <Text style={[styles.label, { marginLeft: 5, marginRight: 10 }]}>min</Text>
        {renderInputField('', 'restSec', { marginLeft: 5, marginRight: 10 })}
        <Text style={[styles.label, { marginLeft: 5, marginRight: 10 }]}>sec</Text>
      </View>

      {weightsEnabled && (
        <View style={styles.inputSection}>
          {renderInputField('Weight', 'weight')}
          <Text style={[styles.label, { marginLeft: 5, marginRight: 10 }]}>kg</Text>
        </View>
      )}
    </View>
  );
}

export default Set;

const styles = StyleSheet.create({
  setItem: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSectionText: {
    width: 55,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500'
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#cae8e5',
    textAlign: 'center',
    width: 40,
    fontSize: 17,
    marginBottom: 2
  },
});