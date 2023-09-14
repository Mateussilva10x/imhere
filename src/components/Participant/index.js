import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant({ name, onRemove }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
