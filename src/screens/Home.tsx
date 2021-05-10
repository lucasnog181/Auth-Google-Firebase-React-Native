import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../Provider/authContext';


const Home: React.FC = () => {

    const { signin } = useContext(AuthContext)

    function login() {
        signin()
    }


    return (
        <SafeAreaView>
            <Text>Login</Text>
            <Button title="Login with Google" onPress={login} />
        </SafeAreaView>
    );
}

export default Home;