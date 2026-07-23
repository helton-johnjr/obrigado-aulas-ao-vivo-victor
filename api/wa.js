// Edge runtime: roda na região mais próxima do usuário (São Paulo p/ tráfego BR).
export const config = { runtime: 'edge' };

const LINK = 'https://wa.me/554796815309?text=Ol%C3%A1%2C%20quero%20participar%20das%20lives%20semanais%20de%20pr%C3%A1tica%20cont%C3%A1bil';

export default function handler() {
  return new Response(null, {
    status: 302,
    headers: { Location: LINK, 'Cache-Control': 'no-store' },
  });
}
