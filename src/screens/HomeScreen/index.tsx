import { SafeAreaView } from 'react-native-safe-area-context'

import { Text, View } from '@gluestack-ui/themed'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { Image } from 'react-native'
import HomeButton from '../../components/HomeButton'

export default function HomeScreen() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  return (
    <SafeAreaView>
      <View h={'100%'} alignItems="center" justifyContent="center">
        <View alignItems="center">
          <Image
            source={require('../../../assets/img/bomb.png')}
            alt="bomb"
            style={{
              width: 73,
              height: 98,
            }}
          />
          <Text
            color="#FFF"
            fontFamily="Cherry"
            fontSize={32}
            lineHeight={32}
            mt={10}
          >
            MINESWEEPER
          </Text>
        </View>
        <View
          w={'$5/6'}
          alignItems="center"
          justifyContent="space-between"
          mt={'$16'}
          gap={20}
        >
          <HomeButton
            label="Jogar"
            background="#48319D"
            onPress={() => navigate('GAMESCREEN')}
          />
          <HomeButton
            label="Dificuldade"
            background="#319D76"
            type="DIFICULTY"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
