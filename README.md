# Obrigado – Aulas ao Vivo

Página estática (sem WordPress) — cópia fiel para hospedar no Vercel.

## Estrutura
```
index.html
assets/css/style.css     CSS da página
assets/js/main.js        JS (Elementor + plugins)
assets/js/jquery.min.js
assets/img/              favicons
```

## Testar localmente
Abra o `index.html` no navegador (clique duplo) ou rode:
```
open index.html
```

## Subir no GitHub
```
cd obrigado-aulas-ao-vivo
git init
git add .
git commit -m "Página obrigado aulas ao vivo"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

## Deploy no Vercel
1. Acesse https://vercel.com → **Add New → Project**
2. Importe o repositório do GitHub
3. Framework Preset: **Other** (site estático puro, sem build)
4. **Deploy** — o Vercel serve o `index.html` automaticamente

Não precisa de `vercel.json` nem comando de build.

## Observações
- O botão envia para o WhatsApp `556193822119` e o rastreamento usa o
  Google Tag Manager `GTM-TS485LPB` (configuração original). Para direcionar os
  contatos/dados para você, troque esses dois valores no `index.html`.
