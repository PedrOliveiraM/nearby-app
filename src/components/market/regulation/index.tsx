import { Text, View } from "react-native";
import { s } from "./styles";
type Props = {
  rules: {
    id: string;
    description: string;
  }[]
}

export function Regulations({ rules }: Props) {
  return (

    <View style={s.container}>
      <Text style={s.title}>Regulamento</Text>
      <View style={s.containerRules}>
        {rules.map((item) => (
          <View key={item.id} style={s.ruleItem}>
            <View style={s.bullet} />
            <Text style={s.description}>{item.description}</Text>
          </View>
        ))}
      </View>
    </View>

  )
}