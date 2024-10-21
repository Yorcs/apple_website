import { PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`h-full w-full border-2 border-red-500 ${index === 2} ? 'right-[-100%]: ''`}
    >
      {/*Ambient Light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />
    </View>
  )
}

export default ModelView
