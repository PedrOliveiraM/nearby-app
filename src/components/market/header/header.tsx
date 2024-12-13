import { Text, View } from 'react-native'
import { Coupons } from '../ticket'
import { s } from './styles'

type Props = {
  name: string
  description: string
}
export function Header({ name, description }: Props) {
  return (
    <View style={s.container} >
      <Text style={s.name}>{name}</Text>
      <Text style={s.description}>{description}</Text>
    </View>
  )
}