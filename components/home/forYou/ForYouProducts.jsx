import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text,
    ScrollView,
    ActivityIndicator,
    Button,
} from 'react-native';

import styles from './foryouproducts.style';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import ProductCard from '../../common/cards/nearby/ProductCard';
import useFetch from '../../../hooks/useFetch';

const ForYouProducts = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loadingMore, setLoadingMore] = useState(false);
    const productsPerPage = 10;

    const url = `https://dotbox.pk/wp-json/wc/v3/products?per_page=${productsPerPage}&page=${currentPage}`;
    const { data: fetchedProducts, isLoading, error, refetch } = useFetch(url);

    useEffect(() => {
        if (!isLoading && !error) {
            if (currentPage === 1) {
                setProducts(fetchedProducts);
            } else {
                setProducts(prevProducts => [...prevProducts, ...fetchedProducts]);
            }
            setLoadingMore(false);
        }
    }, [fetchedProducts, isLoading, error]);

    const handleNavigate = (id) => {
        router.push(`/product-details/${id}`);
    };

    const handleLoadMore = () => {
        if (!loadingMore && !isLoading && fetchedProducts.length > 0) {
            setLoadingMore(true);
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold' }}>For You</Text>
            </View>

            {isLoading && currentPage === 1 ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong: {error.message}</Text>
            ) : (
                <ScrollView contentContainerStyle={{ paddingVertical: SIZES.medium, gap: SIZES.xSmall }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {products.map(item => (
                            <>
                            <ProductCard 
                                key={`product-${item?.id?.toString()}`}
                                item={item}
                                handleNavigate={() => handleNavigate(item.id)}
                            />
                            <Text>{JSON.stringify(item)}</Text>
                            </>
                        ))}
                    </View>
                    {loadingMore && <ActivityIndicator size="large" color={COLORS.primary} />}
                    {!loadingMore && fetchedProducts.length >= productsPerPage && (
                        <View style={{ marginVertical: SIZES.medium, alignItems: 'center' }}>
                            <Button 
                                title="Load More" 
                                onPress={handleLoadMore} 
                                disabled={loadingMore || isLoading} 
                            />
                        </View>
                    )}
                </ScrollView>
            )}
        </View>
    );
};

export default ForYouProducts;
