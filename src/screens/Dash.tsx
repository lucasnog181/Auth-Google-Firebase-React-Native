import React, { useContext } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, } from 'react-native';

import AuthContext from '../Provider/authContext';

// import { Container } from './styles';


const Dash: React.FC = () => {

    const { user, logout } = useContext(AuthContext)

    console.log(user)

    return (
        <SafeAreaView>
            <>
                <Text>Dash</Text>
                <Text>{user?.name}</Text>

                <Image source={{ uri: user?.photoUrl }} style={styles.Image} />


                <Button title="Logout" onPress={logout} />

            </>
        </SafeAreaView>
    );
}

export default Dash;

const styles = StyleSheet.create({
    Image: {
        width: 80,
        height: 80
    }
})