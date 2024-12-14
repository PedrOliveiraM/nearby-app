import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { s } from "./styles";

export type Coupon = {
  id: string;
  code: string;
};

type Props = {
  coupons: Coupon[];
};

export function Coupons({ coupons }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Cupons Disponíveis</Text>

      {coupons.length > 0 ? (
        coupons.map((item) => (
          <View key={item.id} style={s.containerTicket}>
            <IconTicket color={colors.green.light} width={24} height={24} />
            <Text style={s.code}>{item.code}</Text>
          </View>))
      ) : (
        <Text style={s.subTitle}>Nenhum Cupom Disponível</Text>
      )}
    </View>
  );
}
