import { Button } from "@/components/button";
import { colors } from "@/styles/colors";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { ImageBackground, View } from "react-native";
import { s } from "./styles";

type Props = {
  uri: string
}

export function Cover({ uri }: Props) {
  return (
    <ImageBackground style={s.container} source={{ uri }}>
      <View style={s.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <IconArrowLeft color={colors.gray[100]} />
        </Button>
      </View>
    </ImageBackground >
  )
}