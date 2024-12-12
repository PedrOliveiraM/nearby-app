import { colors } from '@/styles/colors'
import { IconProps as tablerIconsProps } from '@tabler/icons-react-native'
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { s } from './styles'

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

type IconProps = {
  icon: React.ComponentType<tablerIconsProps>
}

function Icon({ icon: Icon }: IconProps) {
  return < Icon size={24} color={colors.gray[100]} />
}

function Button({ children, style, isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[s.container, style]} disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}
function Title({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>
}

Button.Title = Title
Button.Icon = Icon

export { Button }
