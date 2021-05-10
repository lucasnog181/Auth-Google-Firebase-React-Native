import React,
{
    createContext,
    ReactNode,
    useEffect,
    useState

} from "react";

import * as Google from 'expo-google-app-auth';
import AsyncStorage from "@react-native-async-storage/async-storage";




interface User extends Google.GoogleUser {
    id?: string | undefined;
    name?: string | undefined;
    givenName?: string | undefined;
    familyName?: string | undefined;
    photoUrl?: string | undefined;
    email?: string | undefined;

}


interface AuthContextData {
    signed: boolean,
    user: User | null,
    loading: boolean,
    signin: () => {},
    logout: () => void

}


type AuthContextProviderData = {
    children: ReactNode;
};




const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({ children }: AuthContextProviderData) {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);


    async function signin() {

        try {
            setLoading(true);

            const result = await Google.logInAsync({
                androidClientId: '89465767090-n1b0h5ecoonbouho7i75mjf3rksjt2kd.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                setUser(result.user);

                await AsyncStorage.setItem('@Auth:user', JSON.stringify(result.user))

            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };

        }

    }


    function logout() {

        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }



    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@Auth:user');

            if (storageUser) {
                setUser(JSON.parse(storageUser))

            } else if (!storageUser) {
                setLoading(false);
            }
        }

        loadStorageData()
    }, [])



    return <AuthContext.Provider value={{
        signed: !!user,
        user,
        loading,
        signin,
        logout

    }}>{children}</AuthContext.Provider>;
}

export default AuthContext;


