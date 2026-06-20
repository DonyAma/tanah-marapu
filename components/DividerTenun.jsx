// Divider bermotif tenun ikat — signature element halaman budaya
export default function DividerTenun({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 16"
      preserveAspectRatio="none"
      className={`block h-4 w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern id="ikatpat" width="20" height="16" patternUnits="userSpaceOnUse">
          <rect width="20" height="16" className="fill-pasir dark:fill-[#1a1612]" />
          <path d="M0 8 L10 0 L20 8 L10 16 Z" className="fill-kombu" opacity="0.7" />
          <circle cx="10" cy="8" r="2" className="fill-emas" />
        </pattern>
      </defs>
      <rect width="400" height="16" fill="url(#ikatpat)" />
    </svg>
  );
}