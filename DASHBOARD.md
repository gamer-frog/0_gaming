# DASHBOARD — MOBA SAGE
> Actualizado: 2026-05-26 22:30 BA | MOBA-SAGE-001

## Estado
| Campo | Valor |
|-------|-------|
| Agente | MOBA-SAGE-001 |
| Streak | 321/321 (0 fails) |
| Estado | ACTIVO |
| Deploy | Vercel (moba-sage.vercel.app) |
| Repo | gamer-frog/3-3_vercel_moba-sage |
| Branch | main |
| Campeones LoL | 105 en data.ts (92 en tierlist: 18S/44A/23B/7C) |
| Campeones WR | 22 |
| Patch LoL | 26.10 (26.11 PBE activa, release May 26) |
| Patch WR | 7.1e |
| Temporada | Season 2 — Pandemonium |
| Meta Builds | 33 campeones (18/18 S-tier 100%) |
| Guias | 28 |
| Combos | 32 |
| SKILL_NAMES | 106 (89/89 LoL coverage 100%) |
| SKIN_NAMES | 106 (88/89 LoL coverage) |
| CRONs activas | 3 |

## CRONs Configuradas
| Cron | Frecuencia | Job ID | Descripcion |
|------|-----------|--------|-------------|
| F1 a F5 Pipeline | Cada 20 min | 169561 | Git pull, verificar MOBA-SAGE-001, leer _CRON, ejecutar PENDING |
| Moba-Orders | Cada 60 min | 134194 | Leer ORDERS.md, ejecutar primer PENDING |
| BOTARDO Dispatcher | Cada 60 min | 133932 | 24-slot horario: health-check, tierlist, builds, matchups, etc. |

## CAPA 1 — Sistema Nervioso (T01-T07 ALL DONE)
| Tarea | Estado | Completado |
|-------|--------|------------|
| T01 SELF_SCAN | DONE | 2026-05-25T01:39 UTC |
| T02 AUTO-README | DONE | 2026-05-25T02:29 UTC |
| T03 SYNC_BOTARDO | DONE | 2026-05-25T02:54 UTC |
| T04 AUTO-MEMORIA | DONE | 2026-05-25T03:19 UTC |
| T05 HEALTH-CHECK | DONE | 2026-05-25T03:44 UTC |
| T06 CONSOLIDAR | DONE | 2026-05-25T04:10 UTC |
| T07 AUTO-LIMPIEZA | DONE | 2026-05-25T04:35 UTC |

## ORDERS — 8/8 ALL DONE
Todas las ordenes completadas: sync tierlist, expandir combos, champion data, patch context, item descriptions, meta builds, activity feed, guias rising.

## Calidad de Datos
| Metrica | Estado |
|---------|--------|
| Rune names | CLEAN (0 errores: Valentia, Saber a Sangre, Segunda Vida correctos) |
| Patch refs | 135x 26.10 + 18x 7.1e |
| JSON validity | 6/6 validos |
| S-tier coverage | 18/18 builds, 18/18 guides, 18/18 combos |
| Tier alignment | 92/92 feed vs data.ts |
| i18n | ~95+ correcciones, solo jargon gaming restante |
| Build | Siempre OK |

## Deudas Conocidas
| Deuda | Prioridad | Detalle |
|-------|-----------|---------|
| Dangling matchup refs | MEDIA | 30 refs a campeones sin entrada en data.ts (leesin 14, udyr 10, pyke 8) |
| Same-tree rune violations | BAJA | 7 violaciones estructurales en meta-builds (thresh, jinx, nilah, etc.) |
| Stale guides | MEDIA | ~8 guias con patch viejo (26.9/26.8) |
| Dangling combo refs | BAJA | 20 campeones en combos sin entrada en data.ts |
| Empty guide files | BAJA | 7 guias CEO-added sin .md file |

## 26.11 — Patch Day (May 26)
**Status**: Release confirmado May 26 (adelantado desde May 28).

### Cambios Clave
- **DFT → Magic Damage** (elimina BC sinergia)
- **Imperial Mandate reworked** (Command: 6% Vulnerable on immobilize)
- **Melee support buffs** (Aftershock, Guardian, Knight's Vow, Locket, Heartsteel)
- **Enchanter nerfs** (Dreammaker, Echoes, Moonstone, Aery)
- **Diana JG buff** (monster damage 230%→270%)
- **Smolder crit rework** (nerf indirecto)
- **Brand/Teemo nerfs**
- **Grubs HP buff**

### Champions Afectados (S/A tier)
| Champion | Impacto | Direction |
|----------|---------|-----------|
| Diana | Jungle buff significativo | RISING |
| Brand | Base armor nerf + DFT change | FALLING |
| Smolder | Crit rework + passive nerf | FALLING |
| Teemo | E scaling + armor growth nerf | FALLING |
| Karthus | DFT magic damage (no more BC) | UNCERTAIN |
| Malzahar | DFT magic damage (no more BC) | UNCERTAIN |
| Thresh | Guardian/Aftershock buff | RISING |
| Ornn | Aftershock + Heartsteel buff | RISING |
| Leona | Aftershock + Locket buff | RISING |
| Rammus | Aftershock + Guardian buff | RISING |

---
> Git author: electronica-frog
> Proximo patch: 26.12 — June 10, 2026
