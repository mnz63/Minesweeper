import React from 'react'
import {
  Image,
  ImageBackground,
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
      color = '#997257'
      borderColor = '#584130'
    }

    const flagURI = 'https://i.ibb.co/yVKFYtd/flag.png'

    return (
      <TouchableWithoutFeedback
        onPress={onOpen}
        onLongPress={onSelect}
      >
        {!opened ? (
          <ImageBackground
            source={require('../../../assets/img/grass.png')}
            resizeMode={'cover'}
            width={params.blockSize}
            height={params.blockSize}
            style={{
              width: params.blockSize,
              height: params.blockSize,
              backgroundColor: exploded
                ? 'red'
                : opened
                ? color
                : '#ffffffbe',
              borderBottomColor:
                opened && nearMines > 0 ? borderColor : '#000',
              borderRadius: params.borderRadius,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            borderRadius={params.borderRadius}
          >
            {flagged && !opened && (
              <Image
                width={18}
                height={18}
                source={{
                  uri: flagURI,
                }}
                alt="image"
              />
            )}
          </ImageBackground>
        ) : (
          <View
            style={{
              width: params.blockSize,
              height: params.blockSize,
              backgroundColor: exploded
                ? 'red'
                : opened
                ? color
                : '#3b3b3bbd',
              borderBottomWidth: !opened
                ? 0
                : !exploded
                ? params.borderSize
                : 0,
              borderBottomColor:
                opened && nearMines > 0 ? borderColor : '#7e5d45',
              borderRadius: params.borderRadius,
              alignItems: 'center',
              justifyContent: 'center',
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
          </View>
        )}
      </TouchableWithoutFeedback>
    )
  },
)
