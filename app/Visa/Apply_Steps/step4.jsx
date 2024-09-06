import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ProgressBar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ContactDetails() {

    const router = useRouter();
    const [progress, setProgress] = useState(0.8); // Adjust progress

    const [email, setEmail] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');

    const handleSaveAndContinue = () => {
        // Handle save and next step
        setProgress(0.9); // Example progress
        alert('Next Step');
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

            <Text style={styles.stepText}>STEP 4</Text>
            <Text style={styles.titleText}>Contact Details</Text>

            {/* Personal Email ID */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Personal Email ID <Text style={styles.required}>*</Text></Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholder="Enter your email"
                    keyboardType='email-address'
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

            {/* Mobile Number */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Mobile Number <Text style={styles.required}>*</Text></Text>
                <TextInput
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    style={styles.input}
                    placeholder="Enter your mobile number"
                    keyboardType='numeric'
                />
            </View>

            {/* Facebook */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Facebook</Text>
                <TextInput
                    value={facebook}
                    onChangeText={setFacebook}
                    style={styles.input}
                    placeholder="Enter Facebook username"
                />
            </View>

            {/* Twitter */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Twitter</Text>
                <TextInput
                    value={twitter}
                    onChangeText={setTwitter}
                    style={styles.input}
                    placeholder="Enter Twitter username"
                />
            </View>

            {/* Instagram */}
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Instagram</Text>
                <TextInput
                    value={instagram}
                    onChangeText={setInstagram}
                    style={styles.input}
                    placeholder="Enter Instagram username"
                />
            </View>

            {/* Save & Continue Button */}
            <TouchableOpacity onPress={() => router.push('/Visa/Apply_Steps/step5')} style={styles.button}>
                <Text style={styles.buttonText}>Save & Continue</Text>
            </TouchableOpacity>

        </View>


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
        color: '#333',
    },
    inputContainer: {
        marginBottom: 20,
    },
    labelText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 16,
    },
    picker: {
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
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
    },
    cont1: {
        marginTop:-390,
    }
});
