import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles/Styles";
import { Ionicons } from "@expo/vector-icons";
import Rates from "./Rates";
import { useNavigation } from "@react-navigation/core";

const FlatCard = ({ item }) => {
  const navigation = useNavigation();
  const { photos, user, reviews, ratingValue } = item;
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("RoomScreen", { item });
      }}
    >
      <View style={styles.cardContainer}>
        <View style={styles.cardPictContainer}>
          <Image style={styles.flatPict} source={{ uri: `${photos[0].url}` }} />
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price} €</Text>
          </View>
        </View>
        <View style={styles.cardDetailsContainer}>
          <View style={styles.cardDetailsWrapper}>
            <Text numberOfLines={1} style={styles.title}>
              {item.title}
            </Text>
            <View style={styles.ratesContainer}>
              <View style={styles.scoreContainer}>
                <Rates ratingValue={ratingValue} />
              </View>
              <Text style={styles.reviews}>{reviews} reviews</Text>
            </View>
          </View>
          <View style={styles.ownerPictContainer}>
            <Image
              style={styles.ownerPict}
              source={{ uri: `${user.account.photo.url}` }}
            ></Image>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default FlatCard;
