import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { s } from "./styles";

type Props = {
  coupons: number
}
export function Ticket({ coupons }: Props) {

  return (
    <View style={s.container}>
      <IconTicket color={colors.red.base} width={24} height={24} />
      <Text style={s.coupon}>{coupons}</Text>
      <Text style={s.text}>cupons disponíveis</Text>
    </View >
  )
}