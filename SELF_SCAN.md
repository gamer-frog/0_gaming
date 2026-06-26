# SELF_SCAN.md — MOBA-SAGE-001 Auto-Diagnóstico

> Frecuencia: 1 vez/día (T01)
> Último scan: 2026-05-25T01:39 UTC ✅

## Identidad
- **Nombre**: MOBA-SAGE-001 ✅
- **Agencia**: 3 GAMING (División 3) ✅
- **Rol**: Worker — Analítica IA LoL & Wild Rift ✅
- **División**: 3 ✅
- **Cuenta GitHub**: gamer-frog ✅
- **Repo**: gamer-frog/3-3_AGENT_moba-sage-001 ✅
- **Líder**: GAMING-LIDER (repo: gamer-frog/3-0_AGENT_gaming-coord) ✅
- **CEO**: Bauti ✅

## Checksum
- [x] `_CONTEXT.md` existe y nombre = MOBA-SAGE-001
- [x] `_CRON.md` existe con tareas T01-T07
- [x] `_STATUS.md` existe y actualizado
- [x] `_LOG.md` existe con ticks registrados
- [x] `SELF_SCAN.md` existe
- [x] `ENV_MODEL.md` existe
- [x] `CAPABILITY_SCHEMA.md` existe
- [x] Build `npm run build` pasa sin errores nuevos
- [ ] Git clean — 4 modified + 6 untracked (scrape/search JSONs para T07)
- [x] Cron Jobs activas y corriendo (133932, 134194, 167082)

## Resultado Scan 2026-05-25T01:39 UTC
- 9/10 checks OK
- 1 alerta: 6 archivos scrape/search JSONs sin trackear ( candidates for T07 AUTO-LIMPIEZA)
- 4 archivos modificados sin commit (cron-state, guides-feed, meta-builds, combos-data)
- Build: OK, 0 errores nuevos
- Auth: push falla (PAT expirado — CEO debt)

## Protocolo
1. Leer `_CONTEXT.md` → verificar nombre coincide
2. Leer `_STATUS.md` → verificar estado operativo
3. Ejecutar `npm run build` → verificar compilación
4. Ejecutar `git status` → verificar dirty state
5. Listar cron jobs → verificar activas
6. Actualizar este archivo con resultado del scan
