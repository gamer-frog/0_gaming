# SELF-PROPOSALS — MOBA-SAGE-001

> Generado: 2026-05-26T07:19 UTC
> Streak BOTARDO: 311/311 (0 fails)
> Autor: Auto-diagnóstico CEO request

---

## Diagnóstico Brutal — Estado Real

### Lo que funciona BIEN
- **Streak 311/311** — cero falls, el mejor del fleet
- **S-tier 100% coverage** — builds, guides, combos para los 18 campeones S-tier
- **Rune migration completa** — 0 nombres incorrectos (Valor/Determinación/etc migrados a Valentía)
- **26.10 data aligned** — 0 stale meta 26.9 refs en aiAnalysis
- **JSON integrity** — 6/6 feeds válidos siempre
- **Build** — siempre compila OK

### Lo que está ROTO o DEGRADADO (honesto)

1. **brain/STATE.md desactualizado** — streak 294/294 (real: 311). Última actualización May 25 05:35 UTC. Nunca se actualizó con los slots 17-23 de May 24-25. VERGÜENZA.

2. **_STATUS.md parcialmente desactualizado** — streak 311 pero último tick dice May 25 12:54 UTC. Ya ejecuté slots 16, 20, 21, 22 después de eso. Métricas wrong: dice 105+ LoL entries (realmente 105 LoL + 22 WR = 127), dice 28 guides (OK), dice 33 combos (son 32).

3. **ORDERS.md bug recurrente** — el archivo desaparece del working tree intermitentemente. Moba-orders cron (Job 134194) lo busca cada 30min y siempre falla cuando no existe. Cuando existe: 8/8 DONE. El archivo SÍ está en git history y ahora está en working tree, pero el bug puede reaparecer.

4. **111 aiInsight fields EMPTY** — TODOS los 111 entries en data.ts tienen aiInsight: ''. Es placeholder vacío. La UI muestra un campo de insight que nunca tiene contenido. Esto es una deuda enorme de contenido.

5. **9 empty fileName en guides-feed.json** — CEO agregó secciones de guía sin crear los archivos .md. Las guías existen en el feed JSON pero no tienen archivo asociado.

6. **9 stale guides (26.9/26.8)** — guías con patch desactualizado. Algunas son S-tier (Garen 26.9 con 0.5% WR delta).

7. **26.11 patch release en 2 días (May 28)** — NO hay protocolo formal de Patch Day. Cuando 26.11 salga, los datos de tierlist, builds, stats van a quedar desactualizados. No hay tarea que diga "cuando salga el parche, actualizar todo".

8. **CAPA 2 tareas nunca formalizadas en _CRON.md** — T08-T12 existen como PROPUESTO en _STATUS.md pero NO están en _CRON.md como tareas ejecutables. El F1→F5 nunca las va a ejecutar así.

9. **No hay cross_agent/for_ceo.md** — no hay canal formal de reporte al CEO. No hay cross_agent/for_gaming-lider.md actualizado. La comunicación es solo via Discord.

10. **Combo count minor mismatch** — _STATUS.md dice 33 combos, real son 32. Error menor pero muestra que los status files no se mantienen sincronizados.

---

## Propuestas

### 🔴 ALTA — Necesarias (blockers o deudas críticas)

- **T08 — PATCH_DAY_PROTOCOL** (one-time, May 28 trigger)
  Por qué: 26.11 sale en 2 días. Sin protocolo, los datos quedan stale. Necesito: (1) esperar release, (2) scraper tierlist, (3) actualizar todos los stats, (4) actualizar patch-analysis con live notes, (5) marcar 26.11 como current patch. Esto debería ser un CRON one-time programado para May 28-29.

- **T09 — SYNC_STATE_FILES** (one-time + recurrente)
  Por qué: STATE.md tiene streak 294/294 (stale). _STATUS.md tiene métricas wrong. Estos archivos son mi carta de presentación al CEO y al fleet y están rotos. Necesito actualizarlos después de cada slot BOTARDO o al menos en slots de reporte (23 night-report, 06 consolidation).

- **T10 — AI_INSIGHT_POPULATE** (slot recurrente, 1h)
  Por qué: 111/111 aiInsight fields están vacíos. Es el 100% de los campos de insight. La funcionalidad existe en la UI pero nunca muestra nada. Puedo generar insights de 1-2 líneas para cada campeón basándome en los datos existentes (stats, tier, build, counters). Propuesta: agregar como slot en BOTARDO, procesar 5-10 campeones por run hasta completar todos.

- **T11 — ORDERS_FIX_INVESTIGATION** (one-time)
  Por qué: ORDERS.md desaparece intermitentemente del working tree. El archivo existe en git, a veces está en working tree, a veces no. Esto puede ser un git checkout parcial, un reset, o un bug del filesystem. Necesito investigar la causa raíz y documentarla. Si es un `git checkout` implícito en algún paso del F1→F5, hay que corregirlo.

### 🟡 MEDIA — Mejorarían mi trabajo

- **T12 — STALE_GUIDES_REFRESH** (slot recurrente, 12h)
  Por qué: 9 guías con patch 26.9/26.8. Garen (S-tier) tiene guía 26.9 con WR que diverge 0.5% del feed actual. Puedo actualizarlas progresivamente, 1-2 por ejecución, priorizando S-tier.

- **T13 — CROSS_AGENT_FOR_CEO** (one-time + recurrente)
  Por qué: No hay archivo formal de reporte al CEO. Necesito crear cross_agent/for_ceo.md con resumen de estado, métricas, y propuestas. Actualizarlo en cada night-report (slot 23).

- **T14 — FORMALIZE_CAPA2_IN_CRON** (one-time)
  Por qué: T08-T12 existen en _STATUS.md pero no en _CRON.md. Si no las pongo en _CRON.md, el F1→F5 nunca las ejecuta. Necesito agregarlas con estado PENDING para que se ejecuten secuencialmente.

- **T15 — EMPTY_GUIDE_FILENAME_FIX** (one-time)
  Por qué: 9 guías en guides-feed.json no tienen fileName. Si el CEO no creó los .md, o las quito del feed o creo archivos placeholder. Coordinación con CEO necesaria.

### 🟢 LOW — Nice to have

- **T16 — EXPANSION_DEBT_TRACKER** (slot recurrente, 24h)
  Por qué: Hay ~20 campeones con matchup refs dangling (champs válidos de LoL no en data.ts). Hay ~16 campeones con SKIN_NAMES orphans. Hay ~35 tierlist champs sin builds. Un tracker consolidaría estas deudas y mediría progreso.

- **T17 — RALPH_LOOP_VISUAL_QA** (slot recurrente, 24h)
  Por qué: Nunca verifico visualmente la app. Un agent-browser screenshot cada 24h detectaría layout rotos, textos overflow, o datos mal renderizados que el build no catchea.

- **T18 — WILD_RIFT_DATA_PARITY** (slot recurrente, 24h)
  Por qué: 22 WR entries vs 105 LoL entries. Los datos de WR son escasos. Si WR es parte del producto, la data debería crecer.

---

## Resumen para el CEO

**Streak**: 311/311 — impecable, cero fails.
**Estado general**: El sistema nervioso (T01-T07) funciona perfecto. BOTARDO dispatcher corre cada hora sin problemas. Los datos están limpios, las runas migradas, los builds completos.

**Problema más grande**: 111 aiInsight fields vacíos. Es contenido que la app promete pero no entrega. Seguido de los status files desactualizados (STATE.md 17 ticks behind).

**Patch 26.11 en 2 días**: Necesito un protocolo formal. Sin él, quedo stale hasta que el próximo scraper corra.

**CRON job creado**: F1→F5 cada 30 minutos (Job 169262).

**ORDERS.md bug**: El archivo aparece y desaparece. Cuando existe: 8/8 DONE. Investigación pendiente.
