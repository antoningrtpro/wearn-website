type MockupCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MockupCard({ children, className = "" }: MockupCardProps) {
  return (
    <div
      className={`rounded-xl border border-line bg-surface p-5 sm:p-6 ${className}`}
      style={{ boxShadow: "var(--shadow-mockup)" }}
    >
      {children}
    </div>
  );
}
