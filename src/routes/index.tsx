import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';

import authContext from '../Provider/authContext'

import AppRoutes from '../routes/App.routes'
import AuthRoutes from '../routes/Auth.routes'

const routes: React.FC = () => {

    const { signed } = useContext(authContext)


    return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default routes;