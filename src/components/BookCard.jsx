import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2;

export default function BookCard({ item }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = () => {
    scale.value = withSpring(0.95);
  };

  const onPressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity 
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={styles.card}
      >
        <Image 
          source={{ uri: item.urlToImage }} 
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.condition || "New"}</Text>
        </View>
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <View style={styles.footer}>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: '#f5f5f5',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#333',
    textTransform: 'uppercase',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  author: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  addBtn: {
    backgroundColor: '#1A1A1A',
    width: 28,
    height: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  }
});
