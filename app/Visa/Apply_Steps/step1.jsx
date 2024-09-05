import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ProgressBar } from 'react-native-paper';  // Import ProgressBar
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Step1() {

    const router = useRouter();

  const [progress, setProgress] = useState(0.2);  // Set initial progress

  const [nationality, setNationality] = useState('');
  const [residence, setResidence] = useState('');
  const [visaType, setVisaType] = useState('');
  const [visaCategory, setVisaCategory] = useState('');
  const [purposeOfTravel, setPurposeOfTravel] = useState('');
  const [subVisaType, setSubVisaType] = useState('');
  const [travelDocument, setTravelDocument] = useState('');

  const handleSaveAndContinue = () => {
    // Increase progress when the user clicks 'Save & Continue'
    setProgress(0.5);  // Update according to step progress
    alert('Next Step');
  };

  return (


    <ScrollView style={styles.container}>

    <TouchableOpacity onPress={() => router.back()} style={styles.arrow}>
        <Ionicons name='arrow-back' size={24} color={'black'} />
    </TouchableOpacity>

    {/* ProgressBar showing 10% progress for Step 1 */}
    <ProgressBar progress={progress} color="#4CAF50" style={styles.progressBar} />


      <Text style={styles.stepText}>STEP 1</Text>
      <Text style={styles.titleText}>Eligibility Criteria</Text>

      <View style={styles.dropdownContainer}>
        <Text>Nationality </Text>
        <Picker
          selectedValue={nationality}
          onValueChange={(itemValue) => setNationality(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Nationality" value="" />
          <Picker.Item label="Nationality 1" value="1" />
          <Picker.Item label="Nationality 2" value="2" />
        </Picker>
      </View>

      <View style={styles.dropdownContainer}>
        <Text>Country of Residence <Text style={styles.required}>*</Text></Text>
        <Picker
          selectedValue={residence}
          onValueChange={(itemValue) => setResidence(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Residence" value="" />
          <Picker.Item label="Country 1" value="1" />
          <Picker.Item label="Country 2" value="2" />
        </Picker>
      </View>

      <View style={styles.dropdownContainer}>
        <Text>Visa Type <Text style={styles.required}>*</Text></Text>
        <Picker
          selectedValue={visaType}
          onValueChange={(itemValue) => setVisaType(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Visa Type" value="" />
          <Picker.Item label="Visa 1" value="1" />
          <Picker.Item label="Visa 2" value="2" />
        </Picker>
      </View>

      <View style={styles.dropdownContainer}>
        <Text>Visa Category <Text style={styles.required}>*</Text></Text>
        <Picker
          selectedValue={visaCategory}
          onValueChange={(itemValue) => setVisaCategory(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Visa Category" value="" />
          <Picker.Item label="Category 1" value="1" />
          <Picker.Item label="Category 2" value="2" />
        </Picker>
      </View>

      <View style={styles.dropdownContainer}>
        <Text>Purpose of Travel <Text style={styles.required}>*</Text></Text>
        <Picker
          selectedValue={purposeOfTravel}
          onValueChange={(itemValue) => setPurposeOfTravel(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Purpose" value="" />
          <Picker.Item label="Purpose 1" value="1" />
          <Picker.Item label="Purpose 2" value="2" />
        </Picker>
      </View>

      <View style={styles.dropdownContainer}>
        <Text>Sub Visa Type <Text style={styles.required}>*</Text></Text>
        <Picker
          selectedValue={subVisaType}
          onValueChange={(itemValue) => setSubVisaType(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Sub Visa Type" value="" />
          <Picker.Item label="Sub Visa 1" value="1" />
          <Picker.Item label="Sub Visa 2" value="2" />
        </Picker>
      </View>

      <View style={styles.dropdownContainer}>
        <Text>Type of Travel Document <Text style={styles.required}>*</Text></Text>
        <Picker
          selectedValue={travelDocument}
          onValueChange={(itemValue) => setTravelDocument(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select Document" value="" />
          <Picker.Item label="Document 1" value="1" />
          <Picker.Item label="Document 2" value="2" />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Save & Continue" onPress={() => router.push('/Visa/Apply_Steps/step2')} color="#4CAF50" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  stepText: {
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 60,
  },
  progressBar:{
    height: 5,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  arrow:{
    marginTop:10,
  },
  required: {
    color: 'red',
  },
});
