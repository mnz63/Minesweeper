import {
  Button,
  ButtonText,
  HStack,
  Image,
  Text,
  View,
} from '@gluestack-ui/themed'
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { Stopwatch } from 'react-native-stopwatch-timer'

type Props = {
  flagsAmount?: number
  onResetGame?: () => void
  resetStopwatch?: boolean
  isStopwatchStart?: boolean
}

export default function Header({
  flagsAmount,
  onResetGame,
  resetStopwatch,
  isStopwatchStart,
}: Readonly<Props>) {
  const flagURI = 'https://i.ibb.co/w786Cjq/flag.png'
  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

  return (
    <View
      h={'$32'}
      justifyContent="center"
      w={'100%'}
      mb={20}
      mt={20}
    >
      <HStack justifyContent={'space-evenly'}>
        <View
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          bgColor="#1F1D47"
          borderRadius={'$2xl'}
          w={'$40'}
          h={58}
        >
          <Image
            w={'$11'}
            h={'$10'}
            source={{
              uri: flagURI,
            }}
            alt="image"
          />
          <Text
            color={'#fff'}
            fontFamily="Cherry"
            fontSize={24}
            lineHeight={30}
          >
            = {flagsAmount || 0}
          </Text>
        </View>
        <View
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          bgColor="#1F1D47"
          borderRadius={'$2xl'}
          h={58}
          px={10}
          gap={10}
        >
          <Stopwatch
            laps={false}
            start={isStopwatchStart}
            reset={resetStopwatch}
            options={{
              text: {
                fontSize: 20,
                color: '#FFF',
                marginLeft: 7,
                fontFamily: 'Cherry',
              },
            }}
          />
          <Image
            w={'$12'}
            h={'$16'}
            source={require('../../../assets/img/bomb.png')}
            alt="image"
          />
        </View>
      </HStack>
      <View
        w={'100%'}
        alignItems="center"
        flexDirection="row"
        mt={10}
        justifyContent="space-around"
        px={10}
      >
        <Button
          variant="outline"
          borderColor={'#48319D'}
          $active-bgColor="#4000b83d"
          borderRadius={'$xl'}
          onPress={onResetGame}
          w={'45%'}
          h={50}
        >
          <ButtonText
            color={'#FFF'}
            fontSize={18}
            fontFamily="Cherry"
          >
            Reiniciar
          </ButtonText>
        </Button>
        <Button
          variant="outline"
          borderColor={'#48319D'}
          $active-bgColor="#4000b83d"
          borderRadius={'$xl'}
          onPress={() => navigate('HOMESCREEN')}
          w={'48%'}
          h={50}
        >
          <ButtonText
            color={'#FFF'}
            fontSize={18}
            fontFamily="Cherry"
          >
            Voltar ao menu
          </ButtonText>
        </Button>
      </View>
    </View>
  )
}
