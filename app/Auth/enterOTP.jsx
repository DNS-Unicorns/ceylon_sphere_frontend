import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function EnterOTP() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const router = useRouter();

    // Function to handle OTP input changes
    const handleOtpChange = (index, value) => {
        if (value.length > 1) return; // Prevent more than one digit
        const otpCopy = [...otp];
        otpCopy[index] = value;
        setOtp(otpCopy);
    };

    return (
        <View style={styles.container}>

            <View style={styles.container2}>
                {/* Back Button */}
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                {/* Title Section */}
                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>OTP Verification</Text>
                    <Text style={styles.subtitleText}>Check your email to see the code</Text>
                </View>
            </View>

            {/* OTP Input */}
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(value) => handleOtpChange(index, value)}
                    />
                ))}
            </View>

            {/* Verify Button */}
            <TouchableOpacity style={styles.verifyButton} onPress={() => router.push("/Auth/resetPW")}>
                <Text style={styles.verifyButtonText}>Verify</Text>
            </TouchableOpacity>

            {/* Resend Code Link */}
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => alert('OTP Resended')}>
                    <Text style={styles.resendCodeLink}>Resend code</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        marginTop: 20,
        marginBottom: 20,
    },
    headerContainer: {
        marginBottom: 20,
    },
    titleText: {
        fontSize: 44,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#4CAF50',
        // paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    subtitleText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
        color: '#fff',
        backgroundColor: '#4CAF50',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 24,
        backgroundColor: '#f8f8f8',
    },
    verifyButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    verifyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    resendCodeLink: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    container2: {
        backgroundColor: '#4CAF50',
        marginBottom: 30,
        padding: -20,
        margin: -20,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
});

