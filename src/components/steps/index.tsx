import { stepList } from '@/constants/steps'
import React from 'react'
import { Text, View } from 'react-native'
import { Step } from '../step'
import { s } from './styles'

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>

      {stepList.map(step => (
        <Step
          key={step.title}
          title={step.title}
          description={step.description}
          icon={step.icon}
        />
      ))}
    </View>
  )
}
