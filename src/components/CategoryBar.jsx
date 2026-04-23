import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';

export default function CategoryBar({ categories, activeCategory, onSelect, theme }) {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <TouchableOpacity 
            key={cat} 
            onPress={() => onSelect(cat)}
            activeOpacity={0.7}
          >
            <View style={[
              styles.chip, 
              isActive && { backgroundColor: theme.primary, transform: [{ scale: 1.05 }] },
              !isActive && { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee' }
            ]}>
              <Text style={[
                styles.chipText,
                isActive ? { color: '#fff' } : { color: '#666' }
              ]}>
                {cat}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  chipText: {
    fontSize: 15,
    fontWeight: '600',
  }
});
