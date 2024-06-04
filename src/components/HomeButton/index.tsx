import { TouchableOpacity } from "react-native";

import { Text } from "@gluestack-ui/themed";
import DificultySelectModal from "../DificultySelectModal";
import { useState } from "react";
import { params } from "../../commom/utils/params";

type Props = {
  onPress?: () => void;
  label?: string;
  background?: string;
  type?: string;
};

export default function HomeButton({
  background,
  label,
  onPress,
  type,
}: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dificulty, setDificulty] = useState(0.1);

  const onSelectDificulty = (dificulty) => {
    params.dificultLevel = dificulty;
    setDificulty(dificulty);
  };

  return (
    <>
      {type === "DIFICULTY" ? (
        <>
          <TouchableOpacity
            style={{
              width: "100%",
              height: 65,
              borderRadius: 20,
              backgroundColor:
                dificulty === 0.1
                  ? "#319D76"
                  : dificulty === 0.2
                  ? "#DAD100"
                  : "#9D0000",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setIsOpenModal(true)}
            activeOpacity={0.7}
          >
            <Text
              color={"#FFF"}
              fontFamily="Cherry"
              fontSize={24}
              lineHeight={30}
            >
              {label}
            </Text>
          </TouchableOpacity>
          <DificultySelectModal
            isOpen={isOpenModal}
            onCloseModal={() => setIsOpenModal(false)}
            onSelectDificulty={onSelectDificulty}
          />
        </>
      ) : (
        <TouchableOpacity
          style={{
            width: "100%",
            height: 65,
            borderRadius: 20,
            backgroundColor: background,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onPress}
          activeOpacity={0.7}
        >
          <Text
            color={"#FFF"}
            fontFamily="Cherry"
            fontSize={24}
            lineHeight={30}
          >
            {label}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}
