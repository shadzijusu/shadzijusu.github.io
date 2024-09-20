import { Canvas } from "@react-three/fiber";
import { Button } from "../ui/button";
import { StarsScene } from "../scenes/stars";

export default function Hero() {
  return (
    <div
      className="mb-16 bg-[#25202F] flex flex-row items-center justify-center h-[100vh] relative"
      id="home"
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarsScene />
      </Canvas>

      <div className="container mx-auto absolute">
        <div className="text-white flex flex-col md:gap-4">
          <h3 className="text-lg md:text-4xl text-[#8643DC] font-bold -mt-16">
            WELCOME
          </h3>
          <h1 className="font-semibold text-4xl md:text-[67px] md:leading-[68px]">
            I'm Selma <br />
            Hadžijusufović
          </h1>
          <p className="font-light text-lg">FRONTEND DEVELOPER</p>

          <Button className="w-fit bg-[#8643DC] rounded-3xl border-[#8643DC] p-6 mt-16 text-lg">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
