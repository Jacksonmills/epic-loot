import { useEffect, useState } from 'react';
import { createNoise2D } from 'simplex-noise';

export const useSimplexNoise = (
  width: number,
  height: number,
  scale: number = 1
) => {
  const [simplexNoiseSVG, setSimplexNoiseSVG] = useState<string>('');

  useEffect(() => {
    const noise2D = createNoise2D();
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = ctx.createImageData(width, height);

    const range = (size: number) => Array.from({ length: size }, (_, i) => i);

    range(height).forEach((y) => {
      range(width).forEach((x) => {
        const value1 = Math.abs(noise2D(x / scale, y / scale));
        const value2 = Math.abs(noise2D((x * 4) / scale, (y * 4) / scale)) * .8;
        const value = (value1 + value2) * 420;

        const adjustedValue = Math.pow(value, 1);
        const idx = (x + y * width) * 4;
        imgData.data[idx] = adjustedValue;
        imgData.data[idx + 1] = adjustedValue;
        imgData.data[idx + 2] = adjustedValue;
        imgData.data[idx + 3] = 420;
      });
    });

    ctx.putImageData(imgData, 0, 0);

    const svgDataUrl = canvas.toDataURL('image/svg+xml');
    setSimplexNoiseSVG(svgDataUrl);
  }, [width, height, scale]);

  return simplexNoiseSVG;
};