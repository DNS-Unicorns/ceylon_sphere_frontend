import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ApplicationDetailScreen() {
    const [isEligibilityOpen, setEligibilityOpen] = useState(false);
    const [isPassportOpen, setPassportOpen] = useState(false);
    const [isContactOpen, setContactOpen] = useState(false);
    const [isAdditionalOpen, setAdditionalOpen] = useState(false);

    const router = useRouter();

    return (
      
        <ScrollView contentContainerStyle={styles.container}>

            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={styles.arrow}>
                <Ionicons name='arrow-back' size={24} color={'black'} />
            </TouchableOpacity>

            <View style={styles.headerContainer}>
                <Text style={styles.applicationNumber}>Application No: SLVS4257-09-011</Text>
                <Text style={styles.statusPending}>Pending</Text>
                <Text style={styles.dateTime}>04-08-2024 08:12 AM</Text>
                <Text style={styles.country}>RUSSIA</Text>
            </View>

            <View style={styles.section}>
                <TouchableOpacity onPress={() => setEligibilityOpen(!isEligibilityOpen)}>
                    <Text style={styles.sectionTitle}>Eligibility Criteria</Text>
                </TouchableOpacity>
                {isEligibilityOpen && <Text style={styles.sectionContent}>Eligibility content goes here...</Text>}
            </View>

            <View style={styles.section}>
                <TouchableOpacity onPress={() => setPassportOpen(!isPassportOpen)}>
                    <Text style={styles.sectionTitle}>Passport Details</Text>
                </TouchableOpacity>
                {isPassportOpen && <Text style={styles.sectionContent}>Passport details content goes here...</Text>}
            </View>

            <View style={styles.section}>
                <TouchableOpacity onPress={() => setContactOpen(!isContactOpen)}>
                    <Text style={styles.sectionTitle}>Contact Details</Text>
                </TouchableOpacity>
                {isContactOpen && <Text style={styles.sectionContent}>Contact details content goes here...</Text>}
            </View>

            <View style={styles.section}>
                <TouchableOpacity onPress={() => setAdditionalOpen(!isAdditionalOpen)}>
                    <Text style={styles.sectionTitle}>Additional Details</Text>
                </TouchableOpacity>
                {isAdditionalOpen && <Text style={styles.sectionContent}>Additional details content goes here...</Text>}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.rejectButton}>
                    <Text style={styles.rejectButtonText}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.approveButton}>
                    <Text style={styles.approveButtonText}>Approve</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#F8F8F8',
    },
    headerContainer: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    applicationNumber: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    statusPending: {
        color: '#FFD700',
        fontSize: 16,
        marginTop: 5,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    dateTime: {
        color: '#FFFFFF',
        fontSize: 14,
        marginTop: 5,
    },
    country: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    section: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#333333',
        fontWeight: 'bold',
    },
    sectionContent: {
        marginTop: 10,
        fontSize: 14,
        color: '#555555',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    rejectButton: {
        flex: 1,
        backgroundColor: '#D9534F',
        padding: 15,
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    rejectButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    approveButton: {
        flex: 1,
        backgroundColor: '#5DAE69',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    approveButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
