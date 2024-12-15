import { NearbyStorage } from "@/storage/nearby-storage";
import { colors } from "@/styles/colors";
import { IconTicket } from "@tabler/icons-react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { s } from "./styles";

export type Coupon = {
  id: string;
  code: string;
};

export function Coupons({ }) {
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  useEffect(() => {
    const fetchCoupons = async () => {
      const data = await NearbyStorage.get()
      setCoupons(data)
    }

    fetchCoupons()
  }, []);

  return (
    <View style={s.container}>
      <Text style={s.title}>Cupons Resgatados</Text>
      <View style={s.containerCoupons}>
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
    </View >
  );
}
