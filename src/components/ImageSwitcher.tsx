import Image from 'next/image';

type SwitchImage = {
  src: string;
  alt: string;
};

type ImageSwitcherProps = {
  images: SwitchImage[]; // expects exactly two images
  durationMs?: 6000 | 8000 | 9000 | 12000; // total loop duration
  className?: string;
  priority?: boolean;
  reverse?: boolean; // sweep direction
};

export default function ImageSwitcher({
  images,
  durationMs = 9000,
  className = '',
  priority = false,
  reverse = false,
}: ImageSwitcherProps) {
  const [first, second] = images;
  const durationClass =
    durationMs === 6000 ? 'switcher-dur-6000' :
    durationMs === 8000 ? 'switcher-dur-8000' :
    durationMs === 12000 ? 'switcher-dur-12000' : 'switcher-dur-9000';
  const delayClass =
    durationMs === 6000 ? 'switcher-delay-half-6000' :
    durationMs === 8000 ? 'switcher-delay-half-8000' :
    durationMs === 12000 ? 'switcher-delay-half-12000' : 'switcher-delay-half-9000';

  return (
    <div className={`relative ${className}`}>
      {/* Base layer visible by default */}
      <Image
        src={first.src}
        alt={first.alt}
        fill
        priority={priority}
        className="object-contain object-center pointer-events-none select-none"
      />

      {/* Sweeping layer: appears then fades via diagonal mask; cycles continuously */}
      <Image
        src={second.src}
        alt={second.alt}
        fill
        priority={priority}
        className={`object-contain object-center pointer-events-none select-none corner-fade ${reverse ? 'switcher-reverse-long' : 'switcher-cycle-long'} ${durationClass}`}
      />

      {/* First image cycles as well, offset by half to be on top on alternate cycles */}
      <Image
        src={first.src}
        alt={first.alt}
        fill
        aria-hidden
        priority={priority}
        className={`object-contain object-center pointer-events-none select-none corner-fade ${reverse ? 'switcher-reverse-long' : 'switcher-cycle-long'} ${durationClass} ${delayClass}`}
      />
    </div>
  );
}


