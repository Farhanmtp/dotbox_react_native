import React from 'react';
import { 
    View, 
    Text,
    ScrollView,
    ActivityIndicator
} from 'react-native';

import styles from './foryouproducts.style';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import ProductCard from '../../common/cards/nearby/ProductCard';
import useFetch from '../../../hooks/useFetch';

const ForYouProducts = () => {
    const router = useRouter();

    const consumerKey = 'YOUR_CONSUMER_KEY';
    const consumerSecret = 'YOUR_CONSUMER_SECRET';
    const auth = btoa(`${consumerKey}:${consumerSecret}`);
    const { data: products, isLoading, error } = useFetch("https://dotbox.pk/wp-json/wc/v3/products", auth);

    const handleNavigate = (id) => {
        router.push(`/product-details/${id}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: "bold" }}>For You</Text>
            </View>

            {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <ScrollView contentContainerStyle={{ paddingVertical: SIZES.medium,gap: SIZES.small, flex: 1 }}>
                    {products?.map((item) => (
                        <ProductCard 
                            item={item}
                            key={`product-${item?.id?.toString()}`}
                            handleNavigate={() => handleNavigate(item.id)}
                        />
                    ))}
                </ScrollView>
            )}
        </View>
    );
}

export default ForYouProducts;
