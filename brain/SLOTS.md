# CRON SLOTS — MOBA SAGE Dispatcher v1.0

> Sistema: 1 cron cada 1 hora (sandbox) con dispatcher horario
> Cron ID: 133932 | Freq: 1h | Timezone: UTC
> BsAs = UTC - 3

---

## Protocolo de Ejecucion (Fault-Tolerant)

```
1. LEER brain/cron-state.json
2. DETERMINAR hora UTC actual → obtener slot correspondiente
3. VERIFICAR estado del tick anterior:
   - Si lastStatus == "OK" → ejecutar slot actual
   - Si lastStatus == "FAIL" y consecutiveFails < 3 → RETRY
   - Si consecutiveFails >= 3 → SKIP, ejecutar slot actual + WARNING
4. EJECUTAR tarea del slot
5. npm run build
6. EVALUAR resultado → actualizar cron-state.json
7. REPORTAR
```

## Mapa de 24 Slots (UTC)

### TIER 1 — Criticas
| Slot | BsAs | taskCode | Tarea |
|------|------|----------|-------|
| 00 | 21:00 | tierlist-check | Tierlist Check |
| 02 | 23:00 | data-sync | Data Sync |
| 06 | 03:00 | patch-watch | Patch Watch |
| 12 | 09:00 | health-check | Health Check Deep |

### TIER 2 — Mejoras de datos
| Slot | BsAs | taskCode | Tarea |
|------|------|----------|-------|
| 03 | 00:00 | meta-builds | Meta Builds Verify |
| 07 | 04:00 | guides | Guide Creation |
| 09 | 06:00 | champion-data | Champion Data |
| 13 | 10:00 | ai-analysis | Deep Analysis |
| 15 | 12:00 | combos | Combo Review |
| 17 | 14:00 | i18n-quality | i18n + Quality |

### TIER 3 — Mantenimiento
| Slot | BsAs | taskCode | Tarea |
|------|------|----------|-------|
| 01 | 22:00 | health-lite | Health Lite |
| 04 | 01:00 | tierlist-search | Tierlist Web Search |
| 05 | 02:00 | meta-builds-refresh | Builds Refresh |
| 08 | 05:00 | skin-names | Skin Names Expansion |
| 10 | 07:00 | broken-things | BrokenThings Audit |
| 11 | 08:00 | matchup-analysis | Matchup Analysis |
| 14 | 11:00 | wr-deltas | WR Delta Check |
| 16 | 13:00 | runes-check | Runes Verification |
| 18 | 15:00 | recovery | Recovery Check |
| 19 | 16:00 | consistency | Cross-File Consistency |

### TIER 4 — Reportes
| Slot | BsAs | taskCode | Tarea |
|------|------|----------|-------|
| 20 | 17:00 | tierlist-evening | Tierlist Evening Check |
| 21 | 18:00 | health-evening | Health Evening |
| 22 | 19:00 | deep-audit | Deep Audit |
| 23 | 20:00 | night-report | Night Report |
