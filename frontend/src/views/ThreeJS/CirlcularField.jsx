import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CircularParticles = ({ count = 1000, radius = 3 }) => {
  const pointsRef = useRef(null);
  const particlesRef = useRef([]);

  // Initialize particles in circular formation
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    particlesRef.current = [];

    for (let i = 0; i < count; i++) {
      // Random angle and radius variation
      const angle = Math.random() * Math.PI * 2;
      const r = radius * (0.8 + Math.random() * 0.2); // Slight radius variation

      // Position in circular formation
      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = Math.sin(angle) * r;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5; // Slight Z variation

      // Store particle properties for animation
      particlesRef.current.push({
        angle,
        speed: Math.random() * 0.002 + 0.001,
        radius: r,
      });

      // Color variation
      colors[i * 3] = 0.4 + Math.random() * 0.6; // R
      colors[i * 3 + 1] = 0.4 + Math.random() * 0.6; // G
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B (more blue)
    }

    return { positions, colors };
  }, [count, radius]);

  // Animation loop
  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array;

      particlesRef.current.forEach((particle, i) => {
        // Update angle
        particle.angle += particle.speed;

        // Calculate new position
        positions[i * 3] = Math.cos(particle.angle) * particle.radius;
        positions[i * 3 + 1] = Math.sin(particle.angle) * particle.radius;
      });

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // GSAP animations for pulsating effect
  useGSAP(() => {
    gsap.to(pointsRef.current.scale, {
      x: 1.1,
      y: 1.1,
      z: 1.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(pointsRef.current.material, {
      size: 0.08,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors}>
      <PointMaterial
        size={0.05}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.9}
        alphaTest={0.01}
      />
    </Points>
  );
};

export default CircularParticles;
