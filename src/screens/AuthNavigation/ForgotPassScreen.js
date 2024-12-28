import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const ForgotPassScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    console.log('Forgot Password Email:', email);
    alert('Password reset link has been sent to your email!');
  };

  return (
    <View className="bg-white flex-1">
      <View className="mt-20 mb-16">
        <Text className="text-center text-4xl font-semibold text-[#4CAF50]">
          Forgot Password
        </Text>
        <Text className="text-center font-medium my-2 text-black">
          Enter your registered email to reset your password.
        </Text>
      </View>

      <View className="mx-5">
        <View>
          <Text className="text-black font-medium mb-2">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity
          className={`bg-green-500 py-3 rounded-full ${
            !email ? 'opacity-50' : ''
          }`}
          onPress={handleForgotPassword}
          disabled={!email}>
          <Text className="text-white text-center font-semibold">
            Reset Password
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center items-center mt-8">
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text className="text-green-500 font-semibold">Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export {ForgotPassScreen};
