import { Button } from "@/components/button"
import React from "react"
import { View } from "react-native"
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

// apenas para visualização
const COUPONS: Coupons[] = [
  { id: "1", code: "FMZ2024" },
  { id: "2", code: "BLK2124" },
  { id: "3", code: "DEZ2024" },
  { id: "4", code: "EAT1242" }
]

export function Details({ data }: Props) {
  return (
    <View style={s.container} >
      <Header name={data.name} description={data.description} />
      <Ticket coupons={data.coupons} />
      <Regulations rules={data.rules} />
      <Info address={data.address} phone={data.phone} />
      <Coupons coupons={COUPONS} />
    </View>
  )
}
