import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  AppleIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  GoogleIcon,
} from '../../assets/icon';
import {useNavigation} from '@react-navigation/native';
import colors from 'tailwindcss/colors';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log('Sign Up Data:', data);
  };

  return (
    <ScrollView className="bg-white flex-1">
      <View className="mt-20 mb-16">
        <Text className="text-center text-4xl font-semibold text-[#4CAF50]">
          Sign Up
        </Text>
        <Text className="text-center font-medium my-2 text-black">
          Create an account to get started!
        </Text>
      </View>

      <View className="mx-5">
        <View>
          <Text className="text-black font-medium mb-2">Name</Text>
          <Controller
            control={control}
            name="name"
            rules={{required: 'Name is required'}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
                placeholder="Enter your name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && (
            <Text className="text-red-500 mb-2">{errors.name.message}</Text>
          )}
        </View>

        <View>
          <Text className="text-black font-medium mb-2">Email</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && (
            <Text className="text-red-500 mb-2">{errors.email.message}</Text>
          )}
        </View>

        <View>
          <Text className="text-black font-medium mb-2">Phone Number</Text>
          <Controller
            control={control}
            name="phone"
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10-digit phone number',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
                placeholder="Enter your phone number"
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.phone && (
            <Text className="text-red-500 mb-2">{errors.phone.message}</Text>
          )}
        </View>

        <View>
          <Text className="text-black font-medium mb-2">Password</Text>
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View>
                <TextInput
                  className="relative border border-gray-300 rounded-xl px-4 py-3 mb-4"
                  placeholder="Enter your password"
                  secureTextEntry={!passwordVisible}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <TouchableOpacity
                  className="absolute right-3 mt-4"
                  onPress={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? (
                    <EyeOpenIcon
                      width={20}
                      height={20}
                      color={colors.gray[400]}
                    />
                  ) : (
                    <EyeCloseIcon
                      height={20}
                      width={20}
                      color={colors.gray[400]}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
          />
          {errors.password && (
            <Text className="text-red-500 mb-2">{errors.password.message}</Text>
          )}
        </View>

        <TouchableOpacity
          className="bg-green-500 py-3 rounded-full mt-4"
          onPress={handleSubmit(onSubmit)}>
          <Text className="text-white text-center font-semibold">Sign Up</Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-between mx-3 mt-10">
          <View className="w-1/3 h-[.5px] bg-gray-400"></View>
          <View>
            <Text className="text-black px-2 text-xs">or sign up with</Text>
          </View>
          <View className="w-1/3 h-[.5px] bg-gray-400"></View>
        </View>

        <View className="flex-row justify-center items-center gap-3 my-10">
          <View>
            <GoogleIcon height={40} width={40} />
          </View>
          <View className="-top-1 ">
            <AppleIcon height={40} width={40} />
          </View>
        </View>

        <View className="flex-row justify-center items-center mb-5 ">
          <Text className="text-black font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text className="text-green-500 font-semibold"> Login now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export {SignupScreen};
