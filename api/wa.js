import { Redis } from '@upstash/redis';

// Edge runtime: roda na região mais próxima do usuário (São Paulo p/ tráfego BR),
// junto do Redis em São Paulo -> latência mínima.
export const config = { runtime: 'edge' };

const redis = new Redis({
  url: process.env.SP_KV_REST_API_URL || process.env.KV_REST_API_URL,
  token: process.env.SP_KV_REST_API_TOKEN || process.env.KV_REST_API_TOKEN,
});

const LINKS = [
  'https://wa.me/5548988006506?text=Ol%C3%A1%2C%20quero%20participar%20das%20lives%20semanais%20do%20Victor%20Dalton',
  'https://wa.me/5548991334921?text=Ol%C3%A1%2C%20quero%20participar%20das%20lives%20semanais%20do%20Victor%20Dalton',
];

export default async function handler() {
  let i;
  try {
    i = (await redis.incr('wa_rr')) % 2;
  } catch {
    i = Math.random() < 0.5 ? 0 : 1;
  }
  return new Response(null, {
    status: 302,
    headers: { Location: LINKS[i], 'Cache-Control': 'no-store' },
  });
}
