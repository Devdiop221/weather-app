import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const search = require("../../../assets/search.png");
const notfound = require("../../../assets/notfound.png");

interface Props {
  error: Boolean;
}

const CardStatus: React.FC<Props> = ({ error }) => {
  return (
    <View style={styles.contentCard}>
      <Image
        style={styles.img}
        source={error ? notfound : search}
        resizeMode="contain"
      />
      {error ? (
        <View>
          <Text style={styles.title}>Opps.</Text>
          <Text style={styles.text}>
            Aucun résultat n'a été trouvé pour votre recherche.
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Recherche.</Text>
          <Text style={styles.text}>
            Recherchez le nom de la ville pour obtenir plus de détails.
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardStatus;
