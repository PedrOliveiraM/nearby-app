import { colors } from '@/styles/colors'
import { IconMapPin, IconPhone } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'
import { s } from './styles'

type Props = {
  address: string,
  phone: string
}
export function Info({ phone, address }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Informações</Text>
      <View style={s.infoContainer}>
        <IconMapPin color={colors.gray[400]} />
        <Text style={s.text}>{address}</Text>
      </View>
      <View style={s.infoContainer}>
        <IconPhone color={colors.gray[400]} />
        <Text style={s.text}>{phone}</Text>
      </View>
    </View>
  )
}