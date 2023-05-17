import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import styles from "../styles/Styles";
import FlatCard from "../components/FlatCard";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );

        setData(response.data);
        // console.log(data);
        console.log("Made the call");
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator size="large" color="#F9585D" style={styles.loader} />
  ) : (
    <View style={styles.container}>
      <Text>Hello</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => {
          // <FlatCard item={item} />;
          <Text>ici</Text>;
        }}
      />
    </View>
  );
}
