export default function Emblem({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      className={`mx-auto block h-14 w-14 shrink-0 rounded-full object-contain transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
      alt="Ngwenyama Poultry Farm emblem"
    />
  );
}
