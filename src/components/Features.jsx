import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "../utils/animations"

const Features = () => {
  useGSAP(() => {
    animateWithGsap("#features_title", { y: 0, opacity: 1 })
  }, [])
  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 pl-24">
            <h2 className="text-5xl">iPhone</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
