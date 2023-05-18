import axios from "axios";
import { useEffect } from "react";
import { View, Text } from "react-native";

const RoomScreen = ({ item }) => {
  console.log(item);
  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await axios.get(
          //   `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${id}`
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/58ff73cc1765a9979391c532`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getRoom();
  }, []);
  return (
    <View>
      <Text>RoomScreen</Text>
    </View>
  );
};

export default RoomScreen;
