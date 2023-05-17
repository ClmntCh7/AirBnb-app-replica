import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { fill } from "lodash";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    height: "100%",
    paddingHorizontal: 10,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  logo: {
    resizeMode: "contain",
    height: 100,
  },

  screenTitle: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  formContainer: {
    paddingHorizontal: 20,
  },

  button: {
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: "#F9585D",
    borderRadius: 30,
    width: 150,
    marginVertical: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#FFB4BA",
    borderBottomWidth: 2,
    marginTop: 20,
    flex: 1,
  },

  input: {
    flex: 1,
  },

  inputErrorFocucs: {
    backgroundColor: "#FFB4BA",
    borderWidth: 1,
    borderColor: "#F9585D",
  },

  fontSize12: {
    fontSize: 11,
  },

  description: {
    borderWidth: 2,
    borderColor: "#FFB4BA",
    height: 100,
    textAlignVertical: "top",
    paddingHorizontal: 8,
    marginTop: 30,
  },
  buttonContainer: {
    alignItems: "center",
    height: "100%",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },

  //   HOME SCREEN

  logoTitleContainer: {
    alignContent: "center",
  },

  logoTitle: {
    resizeMode: "contain",
    height: 30,
    width: 30,
    flex: 1,
  },

  loader: {
    flex: 1,
  },
  cardContainer: {
    height: 100,
    width: 100,
    borderBottomColor: "#f0ff",
    borderWidth: 1,
  },
});

export default styles;
