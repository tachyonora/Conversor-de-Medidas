# Conversor de Medidas
Um conversor de diferentes medidas feito em JavaScript e completamente portado para a web.

## Ferramentas utilizadas
- HTML
- CSS
- JavaScript

## Conversões disponíveis
- Metro para pé
- Pé para metro
- Quilômetro para milha
- Milha para quilômetro
- Centímetro para metro
- Quilômetro para metro
- Metro para centímetro
- Metro para quilômetro

## Árvore de desenvolvimento
```bash
├── index.html          -- estrutura do site
├── style.css           -- estilo do site
├── main.js             -- importa as funções para o site
├── utils
│   └── index.js        -- exporta as funções em "modules" para o "main.js"
├── modules
│   ├── im              -- conversões entre medidas de sistemas diferentes
│   │   ├── ft_mt.js
│   │   ├── km_ml.js
│   │   ├── ml_km.js
│   │   └── mt_ft.js
│   └── sm              -- conversões entre medidas de sistema internacional
│       ├── cm_mt.js
│       ├── km_mt.js
│       ├── mt_cm.js
│       └── mt_km.js
└── README.md
```
> _Todos os arquivos inclusos neste repositório até o presente momento se encontram na Segunda Versão_
