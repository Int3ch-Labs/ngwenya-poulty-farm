export default function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Ngwenyama Poultry Farm emblem"
    >
      <circle cx="60" cy="60" r="58" fill="var(--color-navy-900)" stroke="var(--color-gold-500)" strokeWidth="2" />
      <circle cx="60" cy="60" r="49" fill="none" stroke="var(--color-gold-500)" strokeWidth="1" opacity="0.6" />
      <path
        d="M60 34c3.5 0 6 3 8 6.5 2.6-1.8 6-2.6 9-1.4-1 2.6-3 4.7-5.4 6 2.8 1.6 4.9 4.3 5.4 7.6-3 .6-6-.2-8.3-2 .3 3-.7 6-3 8.2 4.5 1.6 8 5 9.7 9.4-8 2.4-12.6 8.7-14.4 15.6-.4-6.6-3-12.7-8-16.9-5 4.2-7.6 10.3-8 16.9-1.8-6.9-6.4-13.2-14.4-15.6 1.7-4.4 5.2-7.8 9.7-9.4-2.3-2.2-3.3-5.2-3-8.2-2.3 1.8-5.3 2.6-8.3 2 .5-3.3 2.6-6 5.4-7.6-2.4-1.3-4.4-3.4-5.4-6 3-1.2 6.4-.4 9 1.4 2-3.5 4.5-6.5 8-6.5Z"
        fill="var(--color-gold-500)"
      />
      <circle cx="60" cy="47" r="2.6" fill="var(--color-navy-900)" />
      <path
        d="M32 88c6-6 14-9 28-9s22 3 28 9"
        stroke="var(--color-gold-300)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}
