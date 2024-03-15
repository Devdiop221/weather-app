import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const location = require("@assets/location.png");

const Tag: React.FC = () => {
  return (
    <View style={styles.contentCard}>
      <View>
        <Text style={styles.title}>Votre lieu de résidence</Text>
        <Text style={styles.text}>
          Recherche à partir de votre position actuelle.
        </Text>
        <View style={styles.thumb}>
          <Image style={styles.img} source={location} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

export default Tag;
