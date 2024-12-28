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

const LoginScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log('Login Data:', data);
  };

  return (
    <ScrollView className="bg-white flex-1">
      <View className="mt-20 mb-16">
        <Text className="text-center text-4xl font-semibold text-[#4CAF50]">
          Login
        </Text>
        <Text className="text-center font-medium my-2 text-black">
          Welcome back to OCR App!
        </Text>
      </View>

      <View className="mx-5">
        <View>
          <Text className="text-black font-medium mb-2">Email</Text>
          <Controller
            control={control}
            name="email"
            rules={{required: 'Email is required'}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
                placeholder="Email your email"
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
          <Text className="text-black font-medium  mb-2">Password</Text>
          <Controller
            control={control}
            name="password"
            rules={{required: 'Password is required'}}
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
          className="mb-4"
          onPress={() => navigation.navigate('ForgotPassScreen')}>
          <Text className="text-green-500 text-right">Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-green-500 py-3 rounded-full"
          onPress={handleSubmit(onSubmit)}>
          <Text className="text-white text-center font-semibold">Login</Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-between mx-3 mt-10">
          <View className="w-1/3 h-[.5px] bg-gray-400"></View>
          <View>
            <Text className="text-black px-2 text-xs">or sign in with</Text>
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
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text className="text-green-500 font-semibold"> Register now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="pb-40"></View>
    </ScrollView>
  );
};

export {LoginScreen};
