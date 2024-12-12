import { IconMapPin, IconProps, IconQrcode, IconTicket } from "@tabler/icons-react-native"

type StepProps = {
  title: string,
  description: string
  icon: React.ComponentType<IconProps>
}

export const stepList: StepProps[] = [
  {
    title: 'Encontre estabelecimentos',
    description: 'Veja locais perto de você que são parceiros Nearby',
    icon: IconMapPin
  },
  {
    title: 'Ative o cupom com QR Code',
    description: 'Escaneie o código no estabelecimento para usar o benefício',
    icon: IconQrcode
  },
  {
    title: 'Garanta vantagens perto de você',
    description: 'Ative cupons onde estiver, em diferentes tipos de estabelecimento ',
    icon: IconTicket
  }
]