import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';

export default function Index1() {

    const router = useRouter(); // use the router object here
  
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <Ionicons name="mic-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.notificationIcon} />
        </View>

        {/* Cards Container */}
        <ScrollView style={styles.cardsContainer}>
          <Card 
            image={require('../../assets/images/nilaweli.jpg')} 
            title="Hikkaduwa Beach" 
            location="Southern Coast" 
            activities={['Surfing', 'Diving', 'Scuba-Diving']}
            rating={4.9}
          />
          <Card 
            image={require('../../assets/images/nilaweli2.jpeg')} 
            title="Unawatuna Beach" 
            location="Southern Coast" 
            activities={['Surfing', 'Diving', 'Scuba-Diving', 'Snorkeling']}
            rating={4.9}
          />

        <Card 
            image={require('../../assets/images/hikkaduwa.gif')} 
            title="Hikkaduwa Beach" 
            location="Southern Coast" 
            activities={['Surfing', 'Diving', 'Scuba-Diving']}
            rating={4.9}
          />
        </ScrollView>
  
        <BottomNavigation router={router} />
      </View>
    );
  }
  
  const Card = ({ image, title, location, activities, rating }) => (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardLocation}>{location}</Text>
          <View style={styles.cardActivities}>
            {activities.map(activity => (
              <Text key={activity} style={styles.activityText}>{activity}</Text>
            ))}
          </View>
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.cardRating}>
            <Ionicons name="star" size={16} color="gold" /> {rating}
          </Text>
        </View>
      </View>
    </View>
  );
  
  const BottomNavigation = ({ router }) => (
    <View style={styles.bottomNavContainer}>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Browse')}>
        <Ionicons name="earth-outline" size={24} color="white" />
        <Text style={styles.navLabel1}>Browse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Visa/Front/index1')}>
        <Ionicons name="document-text-outline" size={24} color="black" />
        <Text style={styles.navLabel}>Visa</Text>
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
    marginTop: 40,
    flex: 1,
    backgroundColor: '#E2E2E2',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  cardLocation: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 5,
  },
  cardActivities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activityText: {
    fontSize: 12,
    color: '#5DAE69',
    marginRight: 5,
  },
  cardActions: {
    alignItems: 'center',
  },
  cardRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 5,
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#18BA83',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#DADADA',
    borderWidth: 1,
    marginBottom:-22,
    marginHorizontal:-22,
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
  activeNavItem: {
    backgroundColor: '#5DAE69',
    padding: 10,
    borderRadius: 20,
  },
  activeNavLabel: {
    color: '#FFFFFF',
  }
});
