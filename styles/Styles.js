import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { fill } from "lodash";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    height: "100%",
    paddingHorizontal: 10,
  },

  whiteBackGround: {
    backgroundColor: "white",
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

  logoTitle: {
    resizeMode: "contain",
    height: 30,
    width: 30,
  },

  loader: {
    flex: 1,
  },

  cardContainer: {
    height: 260,
    width: "100%",
    borderBottomColor: "#BCBCBC",
    borderBottomWidth: 1,
    marginBottom: 20,
  },

  cardPictContainer: {
    height: 180,
    width: "100%",
    position: "relative",
  },

  flatPict: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },

  priceContainer: {
    position: "absolute",
    height: 40,
    width: 80,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    bottom: 5,
  },
  price: {
    color: "white",
    textAlignVertical: "center",
    flex: 1,
  },

  cardDetailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDetailsWrapper: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  ownerPictContainer: {
    width: "30%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  ownerPict: {
    resizeMode: "cover",
    borderRadius: 50,
    height: 65,
    width: 65,
  },
  ratesContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  scoreContainer: {
    flexDirection: "row",
  },
  // rates: {},

  // reviews: { borderColor: "#f0ff", borderWidth: 2 },
});

export default styles;
