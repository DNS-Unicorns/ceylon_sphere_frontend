import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Index() {

    const router = useRouter();

  return (
    <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => router.back()} style={styles.arrow}>
                <Ionicons name='arrow-back' size={24} color={'black'} />
            </TouchableOpacity>


      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Ionicons name="mic-outline" size={24} color="black" />
        <Ionicons name="filter-outline" size={24} color="black" style={styles.notificationIcon} />
      </View>

      <Text style={styles.title}>Pending Applications (08)</Text>
      <ScrollView style={styles.scrollContainer}>
        <ApplicationCard router={router} />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
      </ScrollView>

      <BottomNavigation router={router} />
    </View>
  );
}

const ApplicationCard = ({ router }) => (

  <TouchableOpacity style={styles.applicationCard} onPress={() => router.push('/Officer/Applications/details')}>
    <View>
      <Text style={styles.applicationId}>SLVS4257-09-011</Text>
      <Text style={styles.applicationDate}>04-08-2024 08.12 AM</Text>
    </View>
    <Text style={styles.applicationCountry}>RUSSIA</Text>
    <Text style={styles.applicationStatus}>Pending</Text>
  </TouchableOpacity>
);

const BottomNavigation = ({router}) => (
  <View style={styles.bottomNavContainer}>
    <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Officer/Applications/index1')}>
      <Ionicons name="grid-outline" size={24} color="white" />
      <Text style={styles.active}>Applications</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Ionicons name="shield-outline" size={24} color="black" />
      <Text>Interpol</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Ionicons name="person-outline" size={24} color="black" />
      <Text>Profile</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  notificationIcon: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  applicationCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applicationId: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  applicationDate: {
    color: '#7A7A7A',
  },
  applicationCountry: {
    color: 'green',
    fontWeight: 'bold',
  },
  applicationStatus: {
    backgroundColor: '#F8C471',
    padding: 8,
    borderRadius: 20,
    color: 'white',
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#5DAE69',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom: -20,
    marginHorizontal: -20,
  },
  navItem: {
    alignItems: 'center',
  },
  active: {
    color: '#fff',
  },
});

