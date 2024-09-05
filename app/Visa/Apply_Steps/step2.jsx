import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ProgressBar } from 'react-native-paper';  // Import ProgressBar
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Step1() {

    const router = useRouter();

    const [progress, setProgress] = useState(0.4);  // Set initial progress

    const handleFileUpload = (fileType) => {
        // You can implement the file picker here using expo-document-picker or react-native-document-picker
        alert(`Upload file for ${fileType}`);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Back button */}
            <TouchableOpacity onPress={() => router.back()} style={styles.arrow}>
                <Ionicons name='arrow-back' size={24} color={'black'} />
            </TouchableOpacity>

            {/* ProgressBar showing progress */}
            <ProgressBar progress={progress} color="#4CAF50" style={styles.progressBar} />

            <Text style={styles.stepText}>STEP 2</Text>
            <Text style={styles.titleText}>Upload Documents</Text>

            {/* File Upload Section */}
            <View style={styles.uploadContainer}>
                {/* File Upload 1 */}
                <View style={styles.fileUploadBox}>
                    <Text style={styles.fileLabel}>Passport Bio Page <Text style={styles.required}>*</Text></Text>
                    <Text style={styles.fileSubText}>.jpg files upto 1MB</Text>
                    <TouchableHighlight
                        onPress={() => handleFileUpload('Passport Bio Page')}
                        style={styles.uploadButton}
                        underlayColor="#f0f0f0">
                        <Text style={styles.uploadText}>Choose File</Text>
                    </TouchableHighlight>
                </View>

                {/* File Upload 2 */}
                <View style={styles.fileUploadBox}>
                    <Text style={styles.fileLabel}>Invitation Letter from Sponsor OR Travel Plan/ Itinerary <Text style={styles.required}>*</Text></Text>
                    <Text style={styles.fileSubText}>.jpg files upto 1MB</Text>
                    <TouchableHighlight
                        onPress={() => handleFileUpload('Invitation Letter')}
                        style={styles.uploadButton}
                        underlayColor="#f0f0f0">
                        <Text style={styles.uploadText}>Choose File</Text>
                    </TouchableHighlight>
                </View>

                {/* File Upload 3 */}
                <View style={styles.fileUploadBox}>
                    <Text style={styles.fileLabel}>Additional Documents <Text style={styles.required}>*</Text></Text>
                    <Text style={styles.fileSubText}>.jpg files upto 1MB</Text>
                    <TouchableHighlight
                        onPress={() => handleFileUpload('Additional Documents')}
                        style={styles.uploadButton}
                        underlayColor="#f0f0f0">
                        <Text style={styles.uploadText}>Choose File</Text>
                    </TouchableHighlight>
                </View>
            </View>

            {/* Save & Continue Button */}
            <View style={styles.buttonContainer}>
                <Button title="Save & Continue" onPress={() => router.push('/Visa/Apply_Steps/step3')} color="#4CAF50" />
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
    uploadContainer: {
        marginBottom: 20,
    },
    fileUploadBox: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 8,
        borderColor: '#ccc',
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    fileLabel: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    required: {
        color: 'red',
    },
    fileSubText: {
        color: '#666',
        marginBottom: 10,
    },
    uploadButton: {
        alignSelf: 'flex-start',
    },
    uploadText: {
        color: '#4CAF50',
        fontWeight: 'bold',
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
});
