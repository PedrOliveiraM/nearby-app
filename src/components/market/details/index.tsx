import React from "react"
import { ScrollView, View } from "react-native"
import { Coupon, Coupons } from "../coupons"
import { Header } from "../header/header"
import { Info } from "../info"
import { Regulations } from "../regulation"
import { Ticket } from "../ticket"
import { s } from "./styles"


export type PropsDetails = {
  name: string,
  description: string,
  address: string,
  phone: string,
  coupons: number,
  rules: {
    id: string,
    description: string,
  }[]
}

type Props = {
  data: PropsDetails
  coupons: Coupon[];
}

export function Details({ data, coupons }: Props) {

  return (
    <ScrollView>
      <View style={s.container} >
        <Header name={data.name} description={data.description} />
        <Ticket coupons={data.coupons} />
        <Regulations rules={data.rules} />
        <Info address={data.address} phone={data.phone} />
        <Coupons coupons={coupons} />
      </View>
    </ScrollView>
  )
}
