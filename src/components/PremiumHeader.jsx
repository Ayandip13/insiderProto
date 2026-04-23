import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Search, Bell } from 'lucide-react-native';
// import Animated, { 
//   useSharedValue, 
//   useAnimatedStyle, 
//   withTiming, 
//   withRepeat, 
//   withSequence, 
//   withDelay 
// } from 'react-native-reanimated';
// import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const Doodle = ({ style, emoji = "✨" }) => {
  return (
    <View style={[styles.doodle, style, { opacity: 0.3 }]}>
      <Text style={{ fontSize: 32 }}>{emoji}</Text>
    </View>
  );
};

export default function PremiumHeader({ theme }) {
  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      {/* Background Doodles */}
      <Doodle style={{ top: 20, left: 20 }} emoji={theme.doodle} />
      <Doodle style={{ top: 60, right: 30 }} emoji={theme.doodle} />
      <Doodle style={{ bottom: 10, left: width / 1.5 }} emoji={theme.doodle} />

      <View style={styles.topRow}>
        <View>
          <Text style={styles.appName}>Bookmart</Text>
          <Text style={styles.tagline}>Buy. Sell. Discover Books.</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Bell size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#666" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search for books, authors..." 
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 65,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
  },
  doodle: {
    position: 'absolute',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  appName: {
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600',
    marginTop: -2,
  },
  iconBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingHorizontal: 18,
    height: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#111',
    fontWeight: '500',
  }
});


