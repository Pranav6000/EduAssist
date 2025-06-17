export default function ProfileIcon({ width = 24, height = 24 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ariaLabel="Profile icon"
      role="img"
    >
      <title>Profile Icon</title>
      {/* Head */}
      <circle cx="12" cy="8" r="4" fill="#FFF" />
      {/* Shoulders */}
      <path fill="#FFF" d="M4 20c0-4 8-4 8-4s8 0 8 4v1H4v-1z" />
    </svg>
  );
}
