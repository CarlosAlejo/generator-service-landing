import type { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'accent';
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const variants: Record<string, string> = {
    primary: 'bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-900/20',
    outline: 'border-2 border-blue-700 text-blue-700 hover:bg-blue-50',
    accent: 'bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold',
  };

  return (
    <button
      className={`px-8 py-3 rounded-md transition-all duration-300 font-medium active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
