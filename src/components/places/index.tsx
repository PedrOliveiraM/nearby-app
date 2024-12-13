import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Text, useWindowDimensions, View, } from "react-native";
import { Place, PlaceProps } from "../place";
import { s } from "./styles";

type Props = {
  data: PlaceProps[]
}

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoint = {
    min: 278,
    max: dimensions.height - 128
  }
  return (
    <BottomSheet
      ref={bottomSheetRef}
      style={s.container}
      snapPoints={[snapPoint.min, snapPoint.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        keyExtractor={(item) => item.id}
        data={data}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (<Text style={s.title}>Explore locais perto de você</Text>)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Place data={item} />} />
    </BottomSheet>
  )
}