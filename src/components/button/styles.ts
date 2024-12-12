import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.gray[100],
    justifyContent: 'center',
    backgroundColor: colors.green.base,
    gap: 14,
  },
  title: {
    fontSize: 16,
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
  },
})
