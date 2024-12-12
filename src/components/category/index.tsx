import { colors } from "@/styles/colors";
import { categoriesIcons } from "@/utils/categories-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { s } from "./styles";

type Props = PressableProps & {
  name: string
  iconId: string,
  isSelected?: boolean
}

export function Category({ iconId, name, isSelected = false, ...rest }: Props) {
  const Icon = categoriesIcons[iconId]

  return (
    <Pressable style={[s.container, isSelected && s.containerSelected]} {...rest}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 500]} />
      <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
    </Pressable>)
}