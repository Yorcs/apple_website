import { Html } from "@react-three/drei"
import LoaderModel from "./LoaderModel"
const Loader = () => {
  return (
    <Html>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="h-[10vw] w-[10vw] rounded-full">
          <LoaderModel />
        </div>
      </div>
    </Html>
  )
}

export default Loader
