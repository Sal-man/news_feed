// SkeletonLoader.tsx
import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-description"></div>
    </div>
  );
};

export default SkeletonLoader;
