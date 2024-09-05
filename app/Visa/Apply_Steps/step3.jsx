import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ProgressBar } from 'react-native-paper';  // Import ProgressBar
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Step1() {

    const router = useRouter();

    const [progress, setProgress] = useState(0.5);  // Set initial progress
    const [nationality, setNationality] = useState('');
    const [residence, setResidence] = useState('');
    const [visaCategory, setVisaCategory] = useState('');
    const [purposeOfTravel, setPurposeOfTravel] = useState('');
    const [subVisaType, setSubVisaType] = useState('');
    const [travelDocument, setTravelDocument] = useState('');
    const [placeI, setplaceI] = useState('');
    
    const [issueDate, setIssueDate] = useState(new Date());
    const [showIssueDate, setShowIssueDate] = useState(false);
    const [formattedIssueDate, setFormattedIssueDate] = useState('');

    const [expireDate, setExpireDate] = useState(new Date());
    const [showExpireDate, setShowExpireDate] = useState(false);
    const [formattedExpireDate, setFormattedExpireDate] = useState('');

    const handleSaveAndContinue = () => {
        setProgress(0.7);  // Update progress as per your step
        alert('Next Step');
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || issueDate;
        setShowIssueDate(Platform.OS === 'ios');
        setIssueDate(currentDate);
        
        // Format the date to display it as dd/mm/yyyy
        const formattedDate = currentDate.toLocaleDateString('en-GB');
        setFormattedIssueDate(formattedDate);
    };

    const onExpireDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || expireDate;
        setShowExpireDate(Platform.OS === 'ios');
        setExpireDate(currentDate);

        // Format the date to display it as dd/mm/yyyy
        const formattedDate = currentDate.toLocaleDateString('en-GB');
        setFormattedExpireDate(formattedDate);
    };

    return (
        <ScrollView style={styles.container}>

            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={styles.arrow}>
                <Ionicons name='arrow-back' size={24} color={'black'} />
            </TouchableOpacity>

            {/* Progress Bar */}
            <ProgressBar progress={progress} color="#4CAF50" style={styles.progressBar} />

            <Text style={styles.stepText}>STEP 3</Text>
            <Text style={styles.titleText}>Passport Details</Text>

            <View style={styles.dropdownContainer}>
                <Text>Passport Number <Text style={styles.required}>*</Text></Text>
                <TextInput
                    value={nationality}
                    onChangeText={setNationality}
                    style={styles.picker}
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.dropdownContainer}>
                <Text>Issuing Country <Text style={styles.required}>*</Text></Text>
                <Picker
                    selectedValue={residence}
                    onValueChange={(itemValue) => setResidence(itemValue)}
                    style={styles.picker}>
                    <Picker.Item label="Select Country" value="" />
                    <Picker.Item label="Country 1" value="1" />
                    <Picker.Item label="Country 2" value="2" />
                </Picker>
            </View>

            <View style={styles.dropdownContainer}>
                <Text>Passport Issue Date <Text style={styles.required}>*</Text></Text>
                
                <TouchableOpacity onPress={() => setShowIssueDate(true)}>
                    <TextInput
                        value={formattedIssueDate}  // Show formatted date
                        placeholder="Select Date"
                        style={styles.picker}
                        editable={false}  // Make input not editable by typing
                    />
                </TouchableOpacity>

                {showIssueDate && (
                    <DateTimePicker
                        mode="date"
                        value={issueDate}
                        display="default"
                        onChange={onDateChange}
                    />
                )}
            </View>

            <View style={styles.dropdownContainer}>
                <Text>Passport Expire Date <Text style={styles.required}>*</Text></Text>
                
                <TouchableOpacity onPress={() => setShowExpireDate(true)}>
                    <TextInput
                        value={formattedExpireDate}  // Show formatted date
                        placeholder="Select Date"
                        style={styles.picker}
                        editable={false}  // Make input not editable by typing
                    />
                </TouchableOpacity>

                {showExpireDate && (
                    <DateTimePicker
                        mode="date"
                        value={expireDate}
                        display="default"
                        onChange={onExpireDateChange}
                    />
                )}
            </View>

            <View style={styles.dropdownContainer}>
                <Text>Place of Issue <Text style={styles.required}>*</Text></Text>
                <TextInput
                    value={placeI}
                    onChangeText={setplaceI}
                    style={styles.picker}
                />
            </View>

            <View style={styles.dropdownContainer}>
                <Text>Passport Type <Text style={styles.required}>*</Text></Text>
                <Picker
                    selectedValue={residence}
                    onValueChange={(passportType) => setResidence(passportType)}
                    style={styles.picker}>
                    <Picker.Item label="Select Passport Type" value="" />
                    <Picker.Item label="Type 1" value="1" />
                    <Picker.Item label="Type 2" value="2" />
                </Picker>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Save & Continue" onPress={() => router.push('/Visa/Apply_Steps/step4')} color="#4CAF50" />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    stepText: {
        fontSize: 18,
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
        paddingVertical: 9,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 60,
    },
    progressBar: {
        height: 5,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
    },
    arrow: {
        marginTop: 10,
    },
    required: {
        color: 'red',
    }
});







