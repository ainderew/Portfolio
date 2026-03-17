import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import type { MotionValue } from 'framer-motion';

const vertexShader = `
  uniform float uDistortion;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float wave = sin(pos.x * 8.0 + uTime * 0.6) * cos(pos.y * 6.0 + uTime * 0.4);
    pos.z += wave * uDistortion * 0.15;
    pos.z += sin(pos.x * 12.0 + pos.y * 10.0 + uTime * 0.3) * uDistortion * 0.03;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uDistortion;
  uniform float uColorMix;
  uniform vec3 uAccentColor;
  uniform vec2 uUvScale;
  uniform vec2 uUvOffset;
  varying vec2 vUv;

  void main() {
    vec2 baseUv = vUv * uUvScale + uUvOffset;
    vec2 uv = baseUv;
    uv.x += sin(baseUv.y * 8.0) * uDistortion * 0.012;
    uv.y += cos(baseUv.x * 6.0) * uDistortion * 0.012;

    vec4 color = texture2D(uTexture, uv);
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    vec3 duotone = vec3(gray) * uAccentColor * 1.8;
    vec3 finalColor = mix(duotone, color.rgb, uColorMix);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

interface ImageSceneProps {
  distortion: MotionValue<number>;
  colorMix: MotionValue<number>;
}

interface BackgroundSceneProps {
  scrollProgress: MotionValue<number>;
}

function ImagePlane({ distortion, colorMix }: ImageSceneProps) {
  const { viewport } = useThree();
  const texture = useTexture('/assets/me3.jpg');
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  }, [texture]);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uDistortion: { value: 1 },
      uTime: { value: 0 },
      uColorMix: { value: 0 },
      uAccentColor: { value: new THREE.Color('#DE682C') },
      uUvScale: { value: new THREE.Vector2(1, 1) },
      uUvOffset: { value: new THREE.Vector2(0, 0) },
    }),
    [texture],
  );

  useFrame((state) => {
    const mat = materialRef.current;
    if (!mat) return;

    mat.uniforms.uTime.value = state.clock.elapsedTime;
    mat.uniforms.uDistortion.value = distortion.get();
    mat.uniforms.uColorMix.value = colorMix.get();

    // Cover UV calculation
    const img = texture.image as HTMLImageElement | undefined;
    if (img) {
      const imageAspect = img.width / img.height;
      const containerAspect = state.viewport.width / state.viewport.height;

      if (imageAspect > containerAspect) {
        const scale = containerAspect / imageAspect;
        mat.uniforms.uUvScale.value.set(scale, 1);
        mat.uniforms.uUvOffset.value.set((1 - scale) / 2, 0);
      } else {
        const scale = imageAspect / containerAspect;
        mat.uniforms.uUvScale.value.set(1, scale);
        mat.uniforms.uUvOffset.value.set(0, (1 - scale) / 2);
      }
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 40]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function FloatingShapes({ scrollProgress }: BackgroundSceneProps) {
  const icoRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const scroll = scrollProgress.get();

    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.15;
      icoRef.current.rotation.y = t * 0.2;
      icoRef.current.position.y = 1.5 + Math.sin(t * 0.3) * 0.3 + scroll * 1.5;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.1;
      torusRef.current.rotation.z = t * 0.15;
      torusRef.current.position.y =
        -1 + Math.cos(t * 0.25) * 0.4 - scroll * 0.8;
    }
    if (octRef.current) {
      octRef.current.rotation.y = t * 0.2;
      octRef.current.rotation.z = t * 0.1;
      octRef.current.position.x = 3.5 + Math.sin(t * 0.2) * 0.2;
    }
  });

  return (
    <>
      <mesh ref={icoRef} position={[-3, 1.5, -2]}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshBasicMaterial
          color="#DE682C"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
      <mesh ref={torusRef} position={[2.5, -1, -3]}>
        <torusGeometry args={[0.5, 0.2, 8, 16]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>
      <mesh ref={octRef} position={[3.5, 2.5, -4]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial
          color="#DE682C"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </>
  );
}

export function ImageScene({ distortion, colorMix }: ImageSceneProps) {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ImagePlane distortion={distortion} colorMix={colorMix} />
    </Canvas>
  );
}

export function BackgroundScene({ scrollProgress }: BackgroundSceneProps) {
  return (
    <Canvas
      gl={{ alpha: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <FloatingShapes scrollProgress={scrollProgress} />
    </Canvas>
  );
}
