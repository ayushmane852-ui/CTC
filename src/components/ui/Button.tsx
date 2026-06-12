import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-gold text-black hover:bg-gold-dark shadow-lg shadow-gold/20 hover:shadow-gold/40",
  outline:
    "border-2 border-gold text-gold hover:bg-gold hover:text-black",
  ghost: "text-gold hover:bg-gold/10 border border-gold/30",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold uppercase tracking-wider text-sm transition-all duration-300 rounded-sm";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
