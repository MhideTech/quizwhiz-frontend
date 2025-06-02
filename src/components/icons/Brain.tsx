
import { LucideProps } from "lucide-react";

export const Brain = (props: LucideProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 1 1 0-5z" />
      <path d="M14.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z" />
      <path d="M2.5 11.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 1 1-5 0z" />
      <path d="M21.5 11.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 1 0 5 0z" />
      <path d="M9.5 17a2.5 2.5 0 1 1 0 5 2.5 2.5 0 1 1 0-5z" />
      <path d="M14.5 17a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5z" />
      <path d="M10.5 7v10" />
      <path d="M13.5 7v10" />
      <path d="M5 12h14" />
    </svg>
  );
};
