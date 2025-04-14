import { Card, Flex, Text } from '@sanity/ui'
import { useCallback } from 'react'
import { set, unset } from 'sanity'
import { iconMap } from '../../client/app/lib/iconMap'
import React from 'react'


const icons = Object.keys(iconMap)

export default function IconPicker({ value, onChange }: any) {
  const handleClick = useCallback(
    (iconName: string) => {
      if (value === iconName) {
        onChange(unset())
      } else {
        onChange(set(iconName))
      }
    },
    [value, onChange]
  )

  return (
    <Flex wrap="wrap" gap={3}>
      {icons.map((name) => (
        <Card
          key={name}
          padding={3}
          radius={2}
          shadow={value === name ? 2 : 1}
          tone={value === name ? 'primary' : 'default'}
          onClick={() => handleClick(name)}
          style={{ cursor: 'pointer', textAlign: 'center' }}
        >
          {iconMap[name]}
          <Text size={1}>{name}</Text>
        </Card>
      ))}
    </Flex>
  )
}
