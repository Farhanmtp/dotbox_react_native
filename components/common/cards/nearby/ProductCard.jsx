import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './productcard.style';

const ProductCard = ({ item, handleCardPress }) => {
    return (
        <TouchableOpacity
          style={styles.container}
          onPress={() => handleCardPress(item)}
        >
          <TouchableOpacity
            style={styles.logoContainer}
          >
            <Image
              source={{uri: item?.images[0]?.src}}
              resizeMode='cover'
              style={styles.logoImage}
            />
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <Text style={styles.Name} numberOfLines={2}>{item?.name}</Text>
            <Text style={styles.price}>Rs {item?.price}</Text>
          </View>
          
        </TouchableOpacity>
    );
};

export default ProductCard;
