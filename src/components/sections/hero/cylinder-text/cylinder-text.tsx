"use client";

import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  BackSide,
  CanvasTexture,
  FrontSide,
  Group,
  LinearFilter,
  LinearMipmapLinearFilter,
  SRGBColorSpace
} from "three";
import Text from "@/components/ui/typography";

// "- THE FAMILIAR, REIMAGINED - THE FAMILIAR, REIMAGINED ";

const LABEL = "- THOUGHTFUL JUDGEMENT, SPARKING CURIOSITY ";
const CHARACTERS = Array.from(LABEL);

const FONT_SIZE_MULTIPLIER = 1.4;
const ROTATION_SECONDS = 18;
const TILT_DEG = -6;
const RADIUS_SCALE = 0.8;
const MAX_DELTA = 0.1;
const GLYPH_PADDING = 1.3;
const RASTER_SCALE = 3;

const FIT_MARGIN = 1.05;

type Metrics = {
  fontSizePx: number;
  fontFamily: string;
  fontWeight: string;
  color: string;
  backColor: string;
};

function cssColorToHex(cssColor: string): string {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = cssColor;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

function useGlyphTextures(
  fontSizePx: number,
  fontFamily: string,
  fontWeight: string
) {
  return useMemo(() => {
    const measureCanvas = document.createElement("canvas");
    const measureCtx = measureCanvas.getContext("2d")!;
    measureCtx.font = `${fontWeight} ${fontSizePx}px ${fontFamily}`;

    const cache = new Map<string, { texture: CanvasTexture; aspect: number }>();

    for (const character of new Set(CHARACTERS)) {
      const glyphWidthPx =
        measureCtx.measureText(character).width || fontSizePx * 0.6;
      const glyphHeightPx = fontSizePx * GLYPH_PADDING;
      const paddedWidthPx = glyphWidthPx * GLYPH_PADDING;

      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(paddedWidthPx * RASTER_SCALE);
      canvas.height = Math.ceil(glyphHeightPx * RASTER_SCALE);

      const ctx = canvas.getContext("2d")!;
      ctx.scale(RASTER_SCALE, RASTER_SCALE);
      ctx.font = `${fontWeight} ${fontSizePx}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(character, paddedWidthPx / 2, glyphHeightPx / 2);

      const texture = new CanvasTexture(canvas);
      texture.colorSpace = SRGBColorSpace;
      texture.magFilter = LinearFilter;
      texture.minFilter = LinearMipmapLinearFilter;
      texture.generateMipmaps = true;
      texture.needsUpdate = true;

      cache.set(character, {
        texture,
        aspect: paddedWidthPx / glyphHeightPx
      });
    }

    return cache;
  }, [fontSizePx, fontFamily, fontWeight]);
}

function Cylinder({
  fontSizePx,
  fontFamily,
  fontWeight,
  color,
  backColor
}: Metrics) {
  const groupRef = useRef<Group>(null);
  const { viewport, size, gl } = useThree();

  const pxToUnit = viewport.width / size.width;

  const glyphTextures = useGlyphTextures(fontSizePx, fontFamily, fontWeight);

  useEffect(() => {
    const maxAnisotropy = gl.capabilities.getMaxAnisotropy();
    glyphTextures.forEach(({ texture }) => {
      texture.anisotropy = maxAnisotropy;
      texture.needsUpdate = true;
    });

    return () => {
      glyphTextures.forEach(({ texture }) => texture.dispose());
    };
  }, [glyphTextures, gl]);

  const { radius, angleStep, planeHeight, fitScale } = useMemo(() => {
    const angleStep = (Math.PI * 2) / CHARACTERS.length;

    let maxAspect = 0;
    glyphTextures.forEach(({ aspect }) => {
      if (aspect > maxAspect) maxAspect = aspect;
    });

    const planeHeight = fontSizePx * GLYPH_PADDING * pxToUnit;
    const glyphWidth = planeHeight * maxAspect;
    const radius =
      (glyphWidth / (2 * Math.tan(Math.PI / CHARACTERS.length))) * RADIUS_SCALE;

    const boundingExtent = radius + glyphWidth / 2;
    const availableWidth = viewport.width * FIT_MARGIN;
    const fitScale = availableWidth / (boundingExtent * 2);

    return { radius, angleStep, planeHeight, fitScale };
  }, [glyphTextures, fontSizePx, pxToUnit, viewport.width]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const dt = Math.min(delta, MAX_DELTA);
    groupRef.current.rotation.y -= (dt * Math.PI * 2) / ROTATION_SECONDS;
  });

  return (
    <group
      ref={groupRef}
      scale={fitScale}
      rotation={[(TILT_DEG * Math.PI) / 180, 0, 0]}
    >
      {CHARACTERS.map((character, index) => {
        const glyph = glyphTextures.get(character);
        if (!glyph) return null;

        const theta = index * angleStep;
        const scaledPlaneHeight = planeHeight * FONT_SIZE_MULTIPLIER;
        const planeWidth = scaledPlaneHeight * glyph.aspect;

        return (
          <group
            key={`${character}-${index}`}
            position={[Math.sin(theta) * radius, 0, Math.cos(theta) * radius]}
            rotation={[0, theta, 0]}
          >
            <mesh>
              <planeGeometry args={[planeWidth, scaledPlaneHeight]} />
              <meshBasicMaterial
                map={glyph.texture}
                color={color}
                side={FrontSide}
                transparent
                depthWrite={false}
              />
            </mesh>
            <mesh>
              <planeGeometry args={[planeWidth, scaledPlaneHeight]} />
              <meshBasicMaterial
                map={glyph.texture}
                color={backColor}
                side={BackSide}
                transparent
                depthWrite={false}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function CylinderText({ className }: { className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);
  const mutedProbeRef = useRef<HTMLSpanElement>(null);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const probe = probeRef.current;
    const mutedProbe = mutedProbeRef.current;
    const wrapper = wrapperRef.current;
    if (!probe || !mutedProbe || !wrapper) return;

    const measure = () => {
      const computed = getComputedStyle(probe);
      const mutedComputed = getComputedStyle(mutedProbe);
      setMetrics({
        fontSizePx: parseFloat(computed.fontSize),
        fontFamily: computed.fontFamily,
        fontWeight: computed.fontWeight,
        color: cssColorToHex(computed.color),
        backColor: cssColorToHex(mutedComputed.color)
      });
    };

    measure();
    document.fonts?.ready.then(measure);

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(measure);
    });
    resizeObserver.observe(wrapper);

    return () => resizeObserver.disconnect();
  }, []);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    intersectionObserver.observe(wrapper);
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative h-full w-full ${className ?? ""}`}
    >
      <Text as="span" variant="display" className="sr-only">
        {LABEL}
      </Text>

      <span
        ref={probeRef}
        aria-hidden="true"
        className="sr-only text-display-mobile md:text-display-tablet lg:text-display-desktop"
      />

      <span
        ref={mutedProbeRef}
        aria-hidden="true"
        className="sr-only text-muted-foreground"
      />

      <div
        aria-hidden="true"
        className="h-full w-full"
        style={{ pointerEvents: "none" }}
      >
        {metrics && (
          <Canvas
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true }}
            camera={{ position: [0, 0, 5], fov: 35 }}
            frameloop={isVisible ? "always" : "never"}
            style={{ pointerEvents: "none" }}
          >
            <Suspense fallback={null}>
              <Cylinder {...metrics} />
            </Suspense>
          </Canvas>
        )}
      </div>
    </div>
  );
}
