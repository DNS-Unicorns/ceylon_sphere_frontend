import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Index1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Ionicons name="mic-outline" size={24} color="black" />
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.notificationIcon} />
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#FF6366' }]}>
          <Text style={styles.cardTitle}>Red Notices</Text>
          <Text style={styles.viewList}>View List ➔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#FFDA56' }]}>
          <Text style={styles.cardTitle}>Yellow Notices</Text>
          <Text style={styles.viewList}>View List ➔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#5DAE69' }]}>
          <Text style={styles.cardTitle}>UN Notices</Text>
          <Text style={styles.viewList}>View List ➔</Text>
        </TouchableOpacity>
      </View>

      <BottomNavigation router={router} />
    </View>
  );
}

const BottomNavigation = ({ router }) => (

  <View style={styles.bottomNavContainer}>
    <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Officer/Applications/index1')}>
      <Ionicons name="grid-outline" size={24} color="black" />
      <Text>Applications</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Ionicons name="shield-outline" size={24} color="white" />
      <Text style={styles.active}>Interpol</Text>
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
  cardsContainer: {
    flex: 1,
  },
  card: {
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  viewList: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 5,
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
