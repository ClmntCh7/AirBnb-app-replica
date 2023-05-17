import { View } from "react-native-web";
import styles from "../styles/Styles";
import { Image, SafeAreaView } from "react-native";
import logo from "../assets/airbnb.png";

const LogoTitle = () => {
  return (
    <SafeAreaView>
      <Image
        style={[styles.logoTitle]}
        source={require("../assets/airbnb.png")}
      />
    </SafeAreaView>
  );
};

export default LogoTitle;
