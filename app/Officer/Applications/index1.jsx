import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useRouter, } from 'expo-router';

export default function Index1() {

    const router = useRouter(); // use the router object here
  
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <Ionicons name="mic-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.notificationIcon} />
        </View>
  
        <View style={styles.cardsContainer}>
          <View style={styles.row}>
            <Card title="All" count={138} backgroundColor="#5DAE69" />
            <Card title="Pending" count={8} backgroundColor="#F8F8F8" router={router} />
          </View>
          <View style={styles.row}>
            <Card title="In-Process" count={46} backgroundColor="#F8F8F8" />
            <Card title="Approved" count={57} backgroundColor="#F8F8F8" />
          </View>
          <View style={styles.row}>
            <Card title="Urgent" count={5} backgroundColor="#F8F8F8" />
            <Card title="Rejected" count={21} backgroundColor="#E86363" />
          </View>
        </View>
  
        <BottomNavigation router={router} />
      </View>
    );
  }
  
  const Card = ({ title, count, backgroundColor, link }) => (
    <TouchableOpacity
      // onPress={router.push("/Officer/Applications/pending")}
      style={[styles.card, { backgroundColor }]} // Call router.push only when pressed
      onPress={() => router.push('/Officer/Applications/pending')}
    >
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardCount}>{count}</Text>
    </TouchableOpacity>
  );
  
  const BottomNavigation = ({ router }) => (
    <View style={styles.bottomNavContainer}>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="grid-outline" size={24} color="white" />
        <Text style={styles.active}>Applications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Officer/Interpol/index1')}>
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
    marginTop:40,
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
  cardsContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cardTitle: {
    fontSize: 16,
    color: '#7A7A7A',
  },
  cardCount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#5DAE69',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginBottom:-20,
    marginHorizontal:-20,
  },
  navItem: {
    alignItems: 'center',
  },
  active: {
    color:'#fff',
  }
});
