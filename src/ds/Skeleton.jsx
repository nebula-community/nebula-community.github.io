import React from 'react';
export function Skeleton({ width = '100%', height = 16, radius, style }) {
  return <span className="nb-skeleton" aria-hidden="true" style={{ width, height, borderRadius: radius, ...style }} />;
}
