import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { s } from './styles';

type Props = TouchableOpacityProps & {
  text: string
}

export function Button({ text, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={s.button}>
      {text}
    </TouchableOpacity>
  )
}