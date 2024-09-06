import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function VisaApplication() {
  const router = useRouter(); // use the router object here
  const [isPendingApprovalVisible, setPendingApprovalVisible] = useState(false);
  const [isOlderVisible, setOlderVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Visa Applications</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Waiting for payment</Text>
          <View style={styles.applicationBox}>
            <Text style={styles.applicationText}>Application No: SLVS4257-09-011</Text>
            <TouchableOpacity>
              <Ionicons name="information-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setPendingApprovalVisible(!isPendingApprovalVisible)}
        >
          <Text style={styles.sectionTitle}>Pending Approval</Text>
          <Ionicons
            name={isPendingApprovalVisible ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        {isPendingApprovalVisible && <View style={styles.sectionContent}>No any approval</View>}

        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setOlderVisible(!isOlderVisible)}
        >
          <Text style={styles.sectionTitle}>Older</Text>
          <Ionicons
            name={isOlderVisible ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        {isOlderVisible && <View style={styles.sectionContent}></View>}

        <TouchableOpacity style={styles.applyButton} onPress={() => router.push('/Visa/Apply_Steps/step1')}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavigation router={router} />
    </View>
  );
}

const BottomNavigation = ({ router }) => (
  <View style={styles.bottomNavContainer}>
    <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Browse/index1')}>
      <Ionicons name="earth-outline" size={24} color="black" />
      <Text style={styles.navLabel}>Browse</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Visa')}>
      <Ionicons name="document-text-outline" size={24} color="white" />
      <Text style={styles.navLabel1}>Visa</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Guide')}>
      <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
      <Text style={styles.navLabel}>Guide</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Wishlist')}>
      <Ionicons name="heart-outline" size={24} color="black" />
      <Text style={styles.navLabel}>Wishlist</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Profile')}>
      <Ionicons name="person-outline" size={24} color="black" />
      <Text style={styles.navLabel}>Profile</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    padding: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 50,
    marginTop: 20,
    marginLeft: 60,
  },
  section: {
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  applicationBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applicationText: {
    fontSize: 16,
    color: '#333',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  sectionContent: {
    paddingLeft: 10,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
  },
  applyButton: {
    backgroundColor: '#18BA83',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  applyText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#18BA83',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#DADADA',
    marginBottom: -22,
    marginHorizontal: -22,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: '#333333',
  },
  navLabel1: {
    fontSize: 12,
    color: '#fff',
  },
  navItemActive: {
    alignItems: 'center',
    backgroundColor: '#18BA83',
    borderRadius: 20,
    padding: 10,
  },
  navLabelActive: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
