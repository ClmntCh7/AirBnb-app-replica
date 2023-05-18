import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Rates = ({ ratingValue }) => {
  const rates = [];
  for (let i = 0; i <= 5; i++) {
    if (i < ratingValue) {
      rates.push(
        <Ionicons key={i} name="star-sharp" size={20} color="#FFB100" />
      );
    } else if (i > ratingValue) {
      rates.push(
        <Ionicons key={i} name="star-sharp" size={20} color="#BBBBBB" />
      );
    }
  }
  return <>{rates}</>;
};

export default Rates;
