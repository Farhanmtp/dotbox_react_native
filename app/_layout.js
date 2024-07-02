import { Stack } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const [splashReady, setSplashReady] = useState(false);

    useEffect(() => {
        async function prepareApp() {
            try {
                await SplashScreen.preventAutoHideAsync();
                setSplashReady(true);
            } catch (e) {
                console.warn(e);
            }
        }

        prepareApp();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded && splashReady) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, splashReady]);

    if (!fontsLoaded || !splashReady) return null;

    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;
