import { View, Text } from "react-native";
import styles from "../styles/Styles";

const FlatCard = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image source={{ uri: `${item.photos[0]}` }} />
      </View>
      <Text>{item.title}</Text>
    </View>
  );
};

export default FlatCard;
