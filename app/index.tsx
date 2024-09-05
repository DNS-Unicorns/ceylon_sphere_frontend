import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import {  }

export default function Index() {

  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
      }}
    >

      <Image source={require('../assets/images/Logo/CEYLON_SPHERE.png')} style={styles.image} />

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {router.push('/_sitemap')}}
      >
        <Text style={styles.continueText}>Get Started</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
  },
  button:{
    backgroundColor: '#18BA83',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 100,
  },
  continueText:{
    color: '#fff',
    fontSize: 20,
    // fontWeight: 'bold',
  },
})
