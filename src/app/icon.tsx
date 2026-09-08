import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            backgroundColor: '#020617', // slate-950
            borderRadius: '8px',
            border: '2px solid #0ea5e9', // sky-500
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              color: '#38bdf8', // sky-400
              fontSize: 26,
              fontWeight: 800,
              fontFamily: 'monospace',
            }}
          >
            CT
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}