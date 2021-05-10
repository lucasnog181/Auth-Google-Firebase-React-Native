import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView } from 'react-native';

// import { Container } from './styles';

const Splash: React.FC = () => {

    const navigation = useNavigation()

    function next() {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView>
            <Button title="Next" onPress={next} />
        </SafeAreaView>
    );
}

export default Splash;