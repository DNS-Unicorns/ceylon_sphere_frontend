import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ProgressBar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AdditionalDetails() {

    const router = useRouter();
    const [progress, setProgress] = useState(1); // Adjust progress

    // Form states
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [showArrivalDate, setShowArrivalDate] = useState(false); // For showing date picker
    const [formattedArrivalDate, setFormattedArrivalDate] = useState('');

    const [departureDate, setDepartureDate] = useState(new Date());
    const [showDepartureDate, setShowDepartureDate] = useState(false); // For showing date picker
    const [formattedDepartureDate, setFormattedDepartureDate] = useState('');

    const [portOfEntry, setPortOfEntry] = useState('');
    const [placeOfStay, setPlaceOfStay] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const handleSaveAndContinue = () => {
        // Handle save and next step
        alert('Next Step');
    };

    const onArrivalDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || arrivalDate;
        setShowArrivalDate(Platform.OS === 'ios');
        setArrivalDate(currentDate);

        // Format the date to display it as dd/mm/yyyy
        const formattedDate = currentDate.toLocaleDateString('en-GB');
        setFormattedArrivalDate(formattedDate);
    };

    const onDepartureDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || departureDate;
        setShowDepartureDate(Platform.OS === 'ios');
        setDepartureDate(currentDate);

        // Format the date to display it as dd/mm/yyyy
        const formattedDate = currentDate.toLocaleDateString('en-GB');
        setFormattedDepartureDate(formattedDate);
    };

    return (
        <ScrollView style={styles.container}>

            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={styles.arrow}>
                <Ionicons name='arrow-back' size={24} color={'black'} />
            </TouchableOpacity>

            {/* Progress Bar */}
            <ProgressBar progress={progress} color="#4CAF50" style={styles.progressBar} />

        <View style={styles.cont1}>
            <Text style={styles.stepText}>STEP 5</Text>
            <Text style={styles.titleText}>Additional Details</Text>

            {/* Date of Arrival in Sri Lanka */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Date of Arrival in Sri Lanka <Text style={styles.required}>*</Text></Text>
                
                <TouchableOpacity onPress={() => setShowArrivalDate(true)}>
                    <TextInput
                        value={formattedArrivalDate}  // Show formatted date
                        placeholder="Select Date"
                        style={styles.input}
                        editable={false}  // Make input not editable by typing
                    />
                </TouchableOpacity>

                {showArrivalDate && (
                    <DateTimePicker
                        mode="date"
                        value={arrivalDate}
                        display="default"
                        onChange={onArrivalDateChange}
                    />
                )}
            </View>

            {/* Port of Entry in Sri Lanka */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Port of Entry in Sri Lanka <Text style={styles.required}>*</Text></Text>
                <Picker
                    selectedValue={portOfEntry}
                    onValueChange={(itemValue) => setPortOfEntry(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Port" value="" />
                    <Picker.Item label="Colombo" value="Colombo" />
                    <Picker.Item label="Mattala" value="Mattala" />
                </Picker>
            </View>

            {/* Place of Stay */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>During your stay, Your place of stay will be <Text style={styles.required}>*</Text></Text>
                <Picker
                    selectedValue={placeOfStay}
                    onValueChange={(itemValue) => setPlaceOfStay(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Place" value="" />
                    <Picker.Item label="Hotel" value="Hotel" />
                    <Picker.Item label="Guest House" value="Guest House" />
                    <Picker.Item label="Relative's Place" value="Relative" />
                </Picker>
            </View>

            {/* Date of Proposed Departure */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Date of Proposed Departure from Sri Lanka <Text style={styles.required}>*</Text></Text>
                
                <TouchableOpacity onPress={() => setShowDepartureDate(true)}>
                    <TextInput
                        value={formattedDepartureDate}  // Show formatted date
                        placeholder="Select Date"
                        style={styles.input}
                        editable={false}  // Make input not editable by typing
                    />
                </TouchableOpacity>

                {showDepartureDate && (
                    <DateTimePicker
                        mode="date"
                        value={departureDate}
                        display="default"
                        onChange={onDepartureDateChange}
                    />
                )}
            </View>

            {/* Address Line 1 in Sri Lanka */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Address Line 1 in Sri Lanka <Text style={styles.required}>*</Text></Text>
                <TextInput
                    value={address}
                    onChangeText={setAddress}
                    style={styles.input}
                    placeholder="Enter address"
                />
            </View>

            {/* City */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>City <Text style={styles.required}>*</Text></Text>
                <TextInput
                    value={city}
                    onChangeText={setCity}
                    style={styles.input}
                    placeholder="Enter city"
                />
            </View>

            {/* State */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>State <Text style={styles.required}>*</Text></Text>
                <TextInput
                    value={state}
                    onChangeText={setState}
                    style={styles.input}
                    placeholder="Enter state"
                />
            </View>

            {/* Zip Code */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Zip Code <Text style={styles.required}>*</Text></Text>
                <TextInput
                    value={zipCode}
                    onChangeText={setZipCode}
                    style={styles.input}
                    placeholder="Enter zip code"
                    keyboardType="numeric"
                />
            </View>

            {/* Country Code */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Country Code <Text style={styles.required}>*</Text></Text>
                <Picker
                    selectedValue={countryCode}
                    onValueChange={(itemValue) => setCountryCode(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Country Code" value="" />
                    <Picker.Item label="+1" value="+1" />
                    <Picker.Item label="+44" value="+44" />
                    <Picker.Item label="+91" value="+91" />
                </Picker>
            </View>

            {/* Contact Number in Sri Lanka */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Contact Number in Sri Lanka</Text>
                <TextInput
                    value={contactNumber}
                    onChangeText={setContactNumber}
                    style={styles.input}
                    placeholder="Enter contact number"
                    keyboardType="numeric"
                />
            </View>

        </View>

            {/* Save & Continue Button */}
            <TouchableOpacity onPress={() => router.push('/Visa/Front/index1')} style={styles.button}>
                <Text style={styles.buttonText} >Save & Continue</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    stepText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        color: '#333',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
    },
    inputContainer: {
        marginBottom: 15,
    },
    labelText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#f8f8f8',
    },
    picker: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#fff',
    },
    required: {
        color: 'red',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    progressBar: {
        height: 6,
        borderRadius: 5,
        marginBottom: 20,
    },
    arrow: {
        marginTop: 10,
    },
    cont1: {
        marginTop:-520,
    }
});
