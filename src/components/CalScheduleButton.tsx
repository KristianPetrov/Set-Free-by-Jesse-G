'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

type CalScheduleButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function CalScheduleButton({ children = 'Schedule with Jesse G', className = '' }: CalScheduleButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'jesseg' });
      cal('ui', {
        theme: 'dark',
        styles: {
          branding: { brandColor: '#ff1493' },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="jesseg"
      data-cal-link="jesse-gonzalez-pl3s24/secret"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}


