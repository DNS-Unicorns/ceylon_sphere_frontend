import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.container2}>
                {/* Back Button */}
                <TouchableOpacity onPress={() => alert('Go Back')} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                {/* Title Section */}
                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>Getting Started</Text>
                    <Text style={styles.subtitleText}>Create your account first</Text>
                </View>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                    placeholder="John Doe"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholder="john123@example.com"
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Country</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={country}
                        onValueChange={(itemValue) => setCountry(itemValue)}
                        style={styles.picker}>
                        <Picker.Item label="Select Country" value="" />
                        <Picker.Item label="Germany" value="Germany" />
                        <Picker.Item label="United States" value="United States" />
                        <Picker.Item label="Canada" value="Canada" />
                    </Picker>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={styles.passwordInput}
                        placeholder="••••••••"
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.signUpButton} onPress={() => alert('Sign Up')}>
                <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.footerContainer}>
                <Text>Already a Member? <Text style={styles.loginLink} onPress={() => alert('Login')}>Login</Text></Text>
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
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#f8f8f8',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
    },
    picker: {
        height: 50,
        color: '#333',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#f8f8f8',
    },
    passwordInput: {
        flex: 1,
    },
    signUpButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    loginLink: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    container2: {
        backgroundColor: '#4CAF50',
        marginBottom: 30,
        padding:-20,
        margin:-20,
        // borderEndStartRadius:80,\
        // borderRadius: 80,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
    }
});
