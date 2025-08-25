import React from "react";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ParticleField from "../ThreeJS/ParticleField";
import CustomGeometryParticles from "../ThreeJS/CustomGeometryParticles";
import HeroComponent from "../features/Home/HeroComponent";
import ServiceComponent from "../features/Home/ServiceComponent";
import TechStackComponent from "../features/Home/TechStackComponent";
import ClientReviews from "../features/Home/ClientReviews";
import Header from "@/components/custom/navbar/Header";

const HeroSection = () => {
  return (
    <>
      <Header />
      <section
        className="relative h-screen w-full overflow-hidden"
        id="home-section"
      >
        <div className="absolute inset-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ParticleField />

            <OrbitControls enableZoom={false} />
            <EffectComposer>
              <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                height={300}
              />
              <Noise opacity={0.02} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
          </Canvas>
        </div>

        <HeroComponent />
      </section>

      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 bottom-0 left-1/2 transform -translate-x-1/2 max-h-screen z-0">
          <Canvas>
            <ambientLight intensity={0.5} />

            <CustomGeometryParticles count={20000} shape="sphere" />

            <OrbitControls autoRotate enableZoom={false} />

            <EffectComposer>
              <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                height={300}
              />
              <Noise opacity={0.02} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
          </Canvas>
        </div>
        <ServiceComponent />
      </section>

      <section className="relative">
        <TechStackComponent />
      </section>

      <section className="mt-2">
        <ClientReviews />
      </section>
    </>
  );
};

export default HeroSection;
