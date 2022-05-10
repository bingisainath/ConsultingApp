// import { View, Text } from 'react-native'
// import React from 'react'

// const SupportScreen = () => {
//   return (
//     <View>
//       <Text>SupportScreen</Text>
//     </View>
//   )
// }

// export default SupportScreen


import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StatusBar } from 'react-native';

import { Transitioning, Transition } from 'react-native-reanimated';
const transition = (
  <Transition.Together>
    <Transition.Out
      type="fade"
      durationMs={200}
    />
    <Transition.Change />
    <Transition.In
      type="fade"
      durationMs={200}
    />
  </Transition.Together>
);

const colors = [
  {
    bg: '#009387',
    color: '#ffffff',
    category: 'Query regarding Slots',
    subCategories: [
        'Skincare', 
        'Personal care', 
        'Health', 
        'Eye care'
    ],
  },
  {
    bg: '#ffffff',
    color: '#009387',
    category: 'Query Regarding appointments',
    subCategories: [
      'Fruits & Vegetables',
      'Frozen Food',
      'Bakery',
      'Snacks & Desserts',
      'Beverages',
      'Alcoholic beverages',
      'Noodles & Pasta',
      'Rice & Cooking oil',
    ],
  },
  {
    bg: '#009387',
    color: '#ffffff',
    category: 'Query Regarding cancellation',
    subCategories: [
        'Skincare', 
        'Makeup', 
        'Nail care', 
        'Perfume'
    ],
  },
  {
    bg: '#ffffff',
    color: '#009387',
    category: 'Any other query?',
    subCategories: [
      'Toys',
      'Trolleys',
      'LEGO®',
      'Electronics',
      'Puzzles',
      'Costumes',
      'Food',
      'Hygiene & Care',
      "Child's room",
      'Feeding accessories',
    ],
  },
];

export default function SupportScreen() {
  const ref = React.useRef();
  const [selectedColor, setSelectedColor] = React.useState('');
  
  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}>
      <Text style={{fontSize: 26, fontWeight: 'bold', color: 'grey'}}>Frequenty Asked Question </Text>
      {colors.map(({ bg, color, category, subCategories }, index) => {
        return (
          <TouchableOpacity
            key={category}
            activeOpacity={.9}
            onPress={() => {
              ref.current.animateNextTransition();
              setSelectedColor(bg === selectedColor ? '' : bg);
            }}
            style={styles.cardContainer}>
            <View
              style={[styles.card, { backgroundColor: bg }]}>
              <Text style={[styles.category, { color }]}>{category}</Text>
              {selectedColor === bg && (
                <View style={{ marginTop: 20 }}>
                  {subCategories.map((i) => {
                    return (
                      <Text style={[styles.topic, { color }]} key={i}>
                        {i}
                      </Text>
                    );
                  })}
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  cardContainer: {
    flexGrow: 1
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  category: {
    fontSize: 32,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: -2
  },
  topic: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 18 * 1.5
  },
});