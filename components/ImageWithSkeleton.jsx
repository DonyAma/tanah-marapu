"use client";
import { useState } from "react";

export default function ImageWithSkeleton({ src, alt, className = "", ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative h-full w-full">
      {/* Skeleton shimmer */}
      {!loaded && !error && (
        <div
          className="absolute inset-0 animate-shimmer rounded-none"
          style={{
            background: "linear-gradient(90deg, #e8ddd0 25%, #f0e8dc 50%, #e8ddd0 75%)",
            backgroundSize: "800px 100%",
          }}
        />
      )}
      {/* Gambar asli */}
      {!error ? (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          {...props}
        />
      ) : (
        /* Fallback jika gambar gagal load */
        <div className="absolute inset-0 flex items-center justify-center bg-[#e8ddd0]">
          <span className="text-2xl opacity-40">🏝</span>
        </div>
      )}
    </div>
  );
}