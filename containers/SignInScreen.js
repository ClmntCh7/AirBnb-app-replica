import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  Alert,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import handleErrorMessageUtils from "../utils/handleErrorMessage";
import styles from "../styles/Styles";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  const [isHide, setIsHide] = useState(true);

  const [formFields, setformFields] = useState({
    email: email,
    password: password,
  });
  const [validationMessage, setvalidationMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorFocus, setErrorFocus] = useState();

  const login = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        { email: email, password: password }
      );
      const { token } = response.data;
      setToken(token);
      Alert.alert("You successfully Sign-in");
    } catch (error) {
      const { status, data } = error.response;
      // console.log(status);
      // handleErrorMessage(data.error, status);

      handleErrorMessageUtils(
        errorMessage,
        setErrorMessage,
        data.error,
        status
      );
    }
  };

  const handleFormSubmit = () => {
    if (email.length === 0 || password.length === 0) {
      setvalidationMessage(`Please fill all fields`);
      setErrorFocus(true);
    } else if (email && password) {
      login();
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={[styles.logoContainer]}>
          <Image
            style={styles.logo}
            source={require("../assets/airbnb-seeklogo.com.png")}
          />
          <Text style={styles.screenTitle}>Sign-in</Text>
        </View>
        <View style={styles.formContainer}>
          <View
            style={
              errorFocus
                ? [styles.inputContainer, styles.inputErrorFocucs]
                : styles.inputContainer
            }
          >
            <TextInput
              style={styles.input}
              name="email"
              placeholder="Email"
              onChangeText={(text) => {
                setErrorMessage("");
                setvalidationMessage("");
                setEmail(text);
              }}
            />
          </View>

          <View>
            <View
              style={
                errorFocus
                  ? [styles.inputContainer, styles.inputErrorFocucs]
                  : styles.inputContainer
              }
            >
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={isHide}
                onChangeText={(text) => {
                  setErrorMessage("");
                  setvalidationMessage("");
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
            <Text style={styles.button}>Sign in</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={[styles.login, styles.fontSize12]}>
              No account ? Register
            </Text>
          </TouchableHighlight>
          {errorMessage && <Text>{errorMessage}</Text>}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
