import { ImageResponse } from 'next/og';

export const alt = 'Pedro Brito — Engenharia & Análise de Dados • Dev Web';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#09090b',
          backgroundImage:
            'radial-gradient(circle at 85% 20%, rgba(124, 58, 237, 0.35), transparent 45%), radial-gradient(circle at 15% 85%, rgba(236, 72, 153, 0.22), transparent 45%)',
          padding: '64px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '24px',
            color: '#c4b5fd',
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '9999px',
              backgroundColor: '#8b5cf6',
            }}
          />
          <span>pedrobritol.com.br</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: '68px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Pedro Brito
          </div>
          <div
            style={{
              fontSize: '34px',
              fontWeight: 700,
              color: '#a78bfa',
            }}
          >
            Engenharia & Análise de Dados • Dev Web
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#d4d4d8',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Pipelines ETL em nuvem com AWS, Terraform, Airflow, dbt, Python e SQL, além de Power BI e aplicações web com Next.js.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          {['AWS', 'Airflow', 'dbt', 'Terraform', 'Python', 'SQL', 'Power BI', 'Next.js'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                border: '1px solid rgba(167, 139, 250, 0.35)',
                backgroundColor: 'rgba(139, 92, 246, 0.14)',
                color: '#ede9fe',
                fontSize: '20px',
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
