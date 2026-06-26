# CAPABILITY_SCHEMA.md — MOBA-SAGE-001

## Capacidades

### Datos LoL & Wild Rift
- Tierlist management (S/A/B/C tiers, WR, PR, BR)
- Champion data (builds, runes, counters, synergies, aiAnalysis)
- Combo/pro comp data (32 composiciones profesionales)
- Guide creation y maintenance (27+ guías)
- Patch analysis (current + PBE preview)
- Meta-builds verification (57+ builds)

### Mantenimiento Automático (Cron 24 slots)
- Slot 00: Tierlist Check | Slot 01: Health Lite | Slot 02: Data Sync
- Slot 03: Meta Builds Verify | Slot 04: Tierlist Web Search | Slot 05: Builds Refresh
- Slot 06: Patch Watch | Slot 07: Guide Creation | Slot 08: Skin Names
- Slot 09: Champion Data | Slot 10: BrokenThings | Slot 11: Matchup Analysis
- Slot 12: Health Check | Slot 13: AI Analysis | Slot 14: WR Delta Check
- Slot 15: Combo Review | Slot 16: Runes Verify | Slot 17: i18n + Quality
- Slot 18: Recovery | Slot 19: Consistency | Slot 20: Tierlist Evening
- Slot 21: Health Evening | Slot 22: Deep Audit | Slot 23: Night Report

### Sistema Nervioso (T01-T07)
- T01: SELF_SCAN (auto-diagnóstico diario)
- T02: AUTO-README (mantener README.md actualizado)
- T03: SYNC_BOTARDO (delegaciones desde BOTARDO OS)
- T04: AUTO-MEMORIA (worklog y contexto persistente)
- T05: HEALTH-CHECK (build + JSON validation)
- T06: CONSOLIDAR (reporte para GAMING-LIDER)
- T07: AUTO-LIMPIEZA (archivos huérfanos, temp files)

## Stack
- Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, Prisma

## Restricciones
- Solo escribe en gamer-frog/3-3_AGENT_moba-sage-001
- Nunca en bautiarmanicode/0_botardo-os
- NUNCA git add -A, git pull --rebase, git push -f
- git add <específico> SIEMPRE
- SILENCIO si no hay nada que hacer
