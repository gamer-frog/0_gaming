# MOBA SAGE

Analytics con IA para League of Legends y Wild Rift. Tierlist, builds, guias y combos actualizados por cron automático con datos de 8 fuentes.

## Stack

| Tecnología | Versión |
|---|---|
| Next.js | 16.1.1 |
| React | 19 |
| Tailwind CSS | 4 |
| TypeScript | 5 |

## Datos en Vivo

| Métrica | Valor |
|---|---|
| Tierlist | v16 — 92 campeones LoL (18S / 44A / 23B / 7C) + 7 WR |
| Patch actual | 26.10 — Season 2 Pandemonium |
| Próximo patch | 26.11 PBE |
| Meta builds | 24 campeones |
| Guias | 27 (18/18 S-tier = 100% cobertura) |
| Pro combos | 30 team comps |
| Campeones (data) | 71 en champion-data.ts |
| Componentes | 58 archivos .tsx/.ts |

## Fuentes

U.GG · Mobalytics · Blitz.gg · METAsrc · Reddit r/leagueoflegends · Skill Capped · metabot.gg · DTGre

## Cron System

24 slots rotativos (00–23) ejecutados cada hora. Streak actual: **293/293 OK** (0 fails).

| Tipo | Intervalo | Descripción |
|---|---|---|
| Hourly dispatcher | 1h | 24 slots rotativos (health, sync, i18n, audit, guides...) |
| F1→F5 cycle | 25min | Cola de tareas T01–T07 (self-scan, readme, cleanup...) |
| Moba-orders | 1h | Órdenes manuales desde brain/ORDERS.md |

## Estructura

```
src/
├── app/           # Rutas Next.js (API, layout, pages)
├── components/    # 58 componentes UI
├── data/          # Datos estáticos (champion-data, combos, coaching)
├── hooks/         # Custom React hooks
└── lib/           # data.ts (129 entries LoL + WR)
public/
├── tierlist-feed.json   # Tierlist v16
├── meta-builds.json     # Builds optimizadas
├── guides-feed.json     # 27 guias
├── patch-analysis.json  # Análisis de patch
├── patches-feed.json    # Feed de parches
└── activity-feed.json   # Feed de actividad
brain/
├── HANDOFF.md     # Reporte nocturno + handoff
├── SLOTS.md       # Definición de 24 slots
├── STATE.md       # Estado general del repo
└── cron-state.json # Estado del cron dispatcher
```

## Reglas del Repo

- **Solo escribir** en `gamer-frog/3-3_vercel_moba-sage`
- **Nunca** `git add -A`, `git pull --rebase`, `git push -f`
- `git add` específico siempre
- 1 tarea por ciclo F1→F5
- `npm run build` obligatorio después de cambios en código
- SILENCIO si no hay nada que hacer
