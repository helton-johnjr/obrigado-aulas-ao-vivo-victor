import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

const LINKS = [
  'https://wa.me/5548988006506?text=Ol%C3%A1%2C%20quero%20participar%20das%20lives%20semanais%20do%20Victor%20Dalton',
  'https://wa.me/5548991334921?text=Ol%C3%A1%2C%20quero%20participar%20das%20lives%20semanais%20do%20Victor%20Dalton',
];

export default async function handler(req, res) {
  let i;
  try {
    i = (await redis.incr('wa_rr')) % 2;
  } catch {
    i = Math.random() < 0.5 ? 0 : 1;
  }
  res.setHeader('Cache-Control', 'no-store');
  res.writeHead(302, { Location: LINKS[i] });
  res.end();
}
