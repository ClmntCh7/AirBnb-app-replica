import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import handleErrorMessageUtils from "../utils/handleErrorMessage";
import styles from "../styles/Styles";
import { FontAwesome5 } from "@expo/vector-icons";

function SignUpScreen({ setToken }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setvalidationMessage] = useState("");

  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");
  const [username, setUsername] = useState("");
  const [usernamedValidationMessage, setUsernameValidationMessage] =
    useState("");
  const [description, setDescription] = useState("");
  const [descriptionValidationMessage, setDescriptionValidationMessage] =
    useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValidationMsg, setconfirmPasswordValidationMsg] =
    useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isHide, setIsHide] = useState(true);

  const login = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        {
          email: email,
          username: username,
          description: description,
          password: password,
        }
      );
      const { token } = response.data;
      setToken(token);

      Alert.alert("You successfully Sign-up");
    } catch (error) {
      const { status, data } = error.response;
      // console.log(error.response);
      handleErrorMessageUtils(
        errorMessage,
        setErrorMessage,
        data.error,
        status
      );
    }
  };

  const handleFormSubmit = () => {
    if (!email || !username || !description || !password || !confirmPassword) {
      setvalidationMessage("Please fill all fields");
    } else if (password !== confirmPassword) {
      setvalidationMessage("Passwords are differents");
    }

    if (
      email &&
      username &&
      description &&
      password &&
      password === confirmPassword
    ) {
      login();
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.whiteBackground}>
          <View style={[styles.logoContainer]}>
            <Image
              style={[styles.logo]}
              source={require("../assets/airbnb.png")}
            />
            <Text style={styles.screenTitle}>Sign-up</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                name="email"
                placeholder="Email"
                onChangeText={(text) => {
                  setErrorMessage("");
                  setEmailValidationMessage("");
                  setEmail(text);
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => {
                  setErrorMessage("");
                  setUsernameValidationMessage("");
                  setUsername(text);
                }}
              />
            </View>
            <View style={styles.description}>
              <TextInput
                style={styles.input}
                placeholder="Describe yourself in a few words..."
                onChangeText={(text) => {
                  setErrorMessage("");
                  setDescriptionValidationMessage("");
                  setDescription(text);
                }}
              />
            </View>
            <View style={styles.sensitiveFieldContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={isHide}
                  onChangeText={(text) => {
                    setErrorMessage("");
                    setPasswordValidationMessage("");
                    setPassword(text);
                  }}
                />
                <Pressable
                  hitSlop={20}
                  onPressIn={() => {
                    setIsHide(false);
                  }}
                  onPressOut={() => {
                    setIsHide(true);
                  }}
                >
                  {isHide ? (
                    <FontAwesome5
                      style={styles.eye}
                      name="eye-slash"
                      size={16}
                      color="black"
                    />
                  ) : (
                    <FontAwesome5
                      style={styles.eye}
                      name="eye"
                      size={16}
                      color="black"
                    />
                  )}
                </Pressable>
              </View>
            </View>

            <View style={styles.sensitiveFieldContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  secureTextEntry={isHide}
                  onChangeText={(text) => {
                    setErrorMessage("");
                    setconfirmPasswordValidationMsg("");
                    setConfirmPassword(text);
                  }}
                />
                <Pressable
                  hitSlop={20}
                  onPressIn={() => {
                    setIsHide(false);
                  }}
                  onPressOut={() => {
                    setIsHide(true);
                  }}
                >
                  {isHide ? (
                    <FontAwesome5
                      style={styles.eye}
                      name="eye-slash"
                      size={16}
                      color="black"
                    />
                  ) : (
                    <FontAwesome5
                      style={styles.eye}
                      name="eye"
                      size={16}
                      color="black"
                    />
                  )}
                </Pressable>
              </View>
            </View>
            {validationMessage && (
              <Text style={styles.errorText}>{validationMessage}</Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => {
                handleFormSubmit();
              }}
            >
              <Text style={styles.button}>Sign up</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text style={[styles.login, styles.fontSize12]}>
                Already have an account ? Sign-in
              </Text>
            </TouchableHighlight>
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default SignUpScreen;
