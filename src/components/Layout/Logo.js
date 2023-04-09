function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-6 h-6 text-green-500"
    >
      <rect
        x="2"
        y="2"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        fill="currentColor"
        d="M18.707 4.293a1 1 0 0 0-1.414 0L9 12.586 5.707 9.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l9-9a1 1 0 0 0 0-1.414z"
      />
    </svg>
  );
}

export default Logo;
