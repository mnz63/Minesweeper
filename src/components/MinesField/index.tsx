import React from 'react'
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { params } from '../../commom/utils/params'

type Props = {
  mined?: boolean
  opened?: boolean
  exploded?: boolean
  nearMines?: number
  flagged?: boolean
  onOpen?: () => void
  onSelect?: () => void
}
export const MinesField = React.memo(
  ({
    mined,
    nearMines,
    opened,
    exploded,
    flagged,
    onOpen,
    onSelect,
  }: Props) => {
    let color
    let borderColor

    if (nearMines > 0) {
      if (nearMines === 1) {
        color = '#00ccff'
        borderColor = '#008cff'
      } else if (nearMines == 2) {
        color = '#fdfd66'
        borderColor = '#92923b'
      } else if (nearMines >= 2 && nearMines < 6) {
        color = '#F9060A'
        borderColor = '#970003'
      } else if (nearMines >= 6) {
        color = '#f26e21'
        borderColor = '#994718'
      }
    } else {
      color = '#ffffff4b'
      borderColor = '#423174'
    }

    return (
      <TouchableWithoutFeedback
        onPress={onOpen}
        onLongPress={onSelect}
      >
        <View
          style={{
            width: params.blockSize,
            height: params.blockSize,
            backgroundColor: exploded
              ? 'red'
              : opened && !flagged
              ? color
              : flagged
              ? '#F8CB2E'
              : '#AAC9EF',
            borderRadius: params.borderRadius,
            borderColor: '#8bb5e9',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: !opened && !flagged ? params.borderSize : 0,
          }}
        >
          {!mined && opened && nearMines > 0 && (
            <Text
              style={{
                color: '#00000060',
                fontFamily: 'Cherry',
                fontSize: params.fontSize,
              }}
            >
              {nearMines}
            </Text>
          )}
          {mined && opened && (
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={require('../../../assets/img/bomb.png')}
              alt="image"
            />
          )}
          {flagged && !opened && (
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require('../../../assets/img/flag.png')}
              alt="image"
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    )
  },
)
