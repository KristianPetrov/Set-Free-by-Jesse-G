'use client';

type Props = {
  as?: 'a' | 'button';
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export default function GangsterPinkButton({ as = 'a', href = '#', children, className = '' }: Props) {
  if (as === 'button') {
    return (
      <button className={`gangster-pink-btn ${className}`}>{children}</button>
    );
  }
  return (
    <a href={href} className={`gangster-pink-btn ${className}`}>{children}</a>
  );
}


