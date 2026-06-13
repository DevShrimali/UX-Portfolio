"use client";
import Link from "next/link";
import Magnetic from "./Magnetic";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "dark";
  external?: boolean;
  magnetic?: boolean;
  arrow?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid: "bg-accent text-paper hover:bg-ink",
  dark: "bg-ink text-paper hover:bg-accent",
  outline: "border border-ink/20 text-ink hover:border-accent hover:text-accent",
};

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
  magnetic = false,
  arrow = false,
  onClick,
}: ButtonProps) {
  const className = `group inline-flex items-center gap-3 px-7 py-4 rounded-full text-[12px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 active:scale-95 ${VARIANTS[variant]}`;

  const content = (
    <>
      {children}
      {arrow && (
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:translate-x-1 transition-transform duration-200"
        >
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  const link = external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      {content}
    </a>
  ) : href.startsWith("#") ? (
    <a href={href} className={className} onClick={onClick}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className} onClick={onClick}>
      {content}
    </Link>
  );

  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
