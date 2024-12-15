import React, { useState } from "react"
import { ScrollView, View } from "react-native"
import { Coupons } from "../coupons"
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
}

export function Details({ data }: Props) {
  const [Data, setData] = useState(data);
  return (
    <ScrollView>
      <View style={s.container} >
        <Header name={Data.name} description={Data.description} />
        <Ticket coupons={Data.coupons} />
        <Regulations rules={Data.rules} />
        <Info address={Data.address} phone={Data.phone} />
        <Coupons />
      </View>
    </ScrollView>
  )
}
