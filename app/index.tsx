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
    backgroundColor: '#4287f5',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  continueText:{

  },
})
