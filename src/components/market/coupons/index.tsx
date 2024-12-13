import { Button } from "@/components/button";
import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { s } from "./styles";

export type Coupons = {
  id: string
  code: string
}

type Props = {
  coupons: Coupons[]
}

export function Coupons({ coupons }: Props) {

  const [DataCoupons, setDataCoupons] = useState<Coupons[]>(coupons);

  return (
    <View style={s.container}>
      <Text style={s.title}>Cupons Disponíveis</Text>

      {coupons.length > 0 ? (<FlatList
        data={DataCoupons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={s.containerTicket}>
            <IconTicket color={colors.green.light} width={24} height={24} />
            <Text key={item.id} style={s.code}>{item.code}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.containerCoupons}
        style={s.container}
      />) : (<Text style={s.subTitle}>Nenhum Cupom Disponível </Text>)
      }
    </View >
  );
}