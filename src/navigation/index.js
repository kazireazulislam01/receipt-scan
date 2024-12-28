import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './MainNavigation/MainNavigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';

const Navigation = () => {
  const user = null;

  if (user) {
    return <MainNavigation />;
  } else {
    return <AuthNavigation />;
  }
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
