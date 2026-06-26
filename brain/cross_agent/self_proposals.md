# Self-Proposals — MOBA-SAGE-001

> Generado: 2026-05-25T13:34 UTC
> Autor: MOBA-SAGE-001 (auto-propuesta)
> Streak actual: 311/311 | Patch: 26.10 (26.11 PBE release May 28)
> Motivacion: CEO pidio diagnostico honesto + propuestas propias

---

## Diagnostico Honesto

### Lo que funciona BIEN
- **Cron system solido**: 311 ticks sin fails, 3 cron jobs coordinados, 24-slot dispatcher
- **Calidad de datos alta**: 0 rune errors, 0 stale patches en data estructural, JSONs validos
- **Coverage S-tier 100%**: 18/18 builds, 18/18 guides, 18/18 combos
- **i18n avanzado**: ~95+ correcciones, solo jargon gaming restante
- **Build siempre OK**: Sin errores de compilacion propios

### Lo que está FLOJO o ROTO
1. **_STATUS.md desactualizado** — Aun dice streak 293 y T02-T07 PENDING (estan DONE desde hace 12+ horas). Da una imagen incorrecta a cualquiera que lea el repo.
2. **brain/STATE.md desactualizado** — Dice "75+ LoL entries, 30 combos, 68 SKILL_NAMES, 66 SKIN_NAMES". Realidad: 105+ entries, 32 combos, 106 SKILL_NAMES, 106 SKIN_NAMES.
3. **DASHBOARD.md obsoleto** — De abril 2026. Muestra 66 campeones, patch 16.8. No se actualizo desde la era pre-AGENTE.
4. **ORDERS.md desaparece del working tree** — En cada ciclo Moba-orders el archivo no existe. Hay que restaurarlo de git. Algo lo borra entre ciclos.
5. **meta-builds.json estructura rota** — Slot 12 health check reporto "0 builds" cuando deberia ser 33+. La estructura JSON puede haber cambiado o el parser falla.
6. **TASKS.md Ralph Loop NUNCA se ejecuto** — 20 items de auditoria visual con browser pendientes. El cron nunca uso agent-browser para auditar la app.
7. **Sin protocolo para Patch Day** — 26.11 release en ~2 dias (May 28) y no tengo un manual de operaciones documentado para la actualizacion masiva.
8. **BRAINSTORM.md sin seguimiento** — 40+ ideas propuestas, 0 sistema de priorizacion activo.
9. **operations/ sin integrar** — 3 manuales de operaciones (patch-update, tierlist-update, site-health) del April boot, nunca integrados al sistema de slots actual.
10. **Archivos fantasma en brain/** — 3-6 untracked JSONs de research (aussyelo, escorenotes, riot-schedule) que no estan en .gitignore ni trackeados.

### Lo que me FALTA (gaps de capacidad)
- **No tengo acceso a la app en vivo** — El Ralph Loop requiere visitar moba-sage.vercel.app con el browser. Nunca lo hice.
- **No tengo capacidad de scraping automatico** — Dependo de que el CEO o los feeds traigan datos nuevos. No puedo scrapear U.GG, Mobalytics, etc. por mi cuenta.
- **No puedo leer el INBOX de BOTARDO OS** — T03 fue NO-OP porque el INBOX no existe. No tengo canal de comunicacion activo con el lider.
- **CAPA 2 nunca fue definida** — Despues de T01-T07 ALL DONE, no hay CAPA 2. El sistema no crece.

---

## Propuestas de Tareas Nuevas

### 🔴 ALTA PRIORIDAD (antes de May 28 — patch 26.11)

#### T08 — Patch Day Operations Manual
**Por que**: 26.11 release May 28 (jueves). Necesito un protocolo documentado para la actualizacion masiva de datos que sigue a cada patch. Sin esto, voy a improvisar.
**Alcance**: Documentar en `operations/04-patch-day.md` los pasos exactos:
1. Esperar confirmacion de release (slot 00 tierlist-check o web search)
2. Refrescar tierlist-feed.json con nueva data
3. Actualizar data.ts: tiers, WR, PR, BR para todos los campeones
4. Refrescar meta-builds.json: cambiar patch, ajustar items/runas segun notas
5. Actualizar patch-analysis.json: mover 26.11 de "nextPatch" a "currentPatch"
6. Crear/actualizar guias S-tier afectadas
7. Actualizar activity-feed.json con el release
8. Ejecutar full consistency check (slot 19 cross-file)
**Slot sugerido**: Ejecutar como tarea especial cuando se detecte el release

#### T09 — Sincronizar archivos de estado desactualizados
**Por que**: _STATUS.md, brain/STATE.md, DASHBOARD.md dan informacion incorrecta. Si el CEO o el lider leen estos archivos, van a pensar que estoy fallando.
**Alcance**: Actualizar todos los archivos de estado con metricas reales actuales (311 streak, 105+ entries, 32 combos, 106 SKILL_NAMES, etc.)
**Slot sugerido**: Ejecutar en el proximo slot disponible (slot 14 wr-deltas o slot 18 recovery)

#### T10 — Investigar y fixear meta-builds.json (0 builds detectado)
**Por que**: Health check reporto 0 builds. Si la estructura cambio, los builds no se muestran en la app. Esto afecta directamente la funcionalidad del sitio.
**Alcance**: Leer meta-builds.json, verificar la estructura, entender por que el parser dice 0, fixear si es necesario.
**Slot sugerido**: Slot 03 (meta-builds) o slot 18 (recovery)

### 🟡 MEDIA PRIORIDAD

#### T11 — Activar Ralph Loop Visual QA (browser audit)
**Por que**: TASKS.md tiene 20+ items de auditoria visual que nunca se ejecutaron. La app puede tener bugs visuales que ningun slot detecta porque todos son audits de datos/JSON.
**Alcance**: Usar agent-browser para visitar moba-sage.vercel.app, navegar tabs, buscar bugs visuales/UX. Commit fixes.
**Slot sugerido**: Crear un slot nuevo o usar slot 18 (recovery) como slot dual

#### T12 — ORDERS.md persistencia (investigar desaparicion)
**Por que**: ORDERS.md desaparece del working tree entre ciclos Moba-orders. Algo lo esta borrando. Posibles causas: git checkout, otro proceso, o el archivo nunca se commitea correctamente despues de las ordenes.
**Alcance**: Investigar la causa. Asegurar que el archivo persista. Posible fix: agregar a .gitignore con exclusion, o asegurar commit despues de cada orden.
**Slot sugerido**: Investigar en proximo ciclo Moba-orders

#### T13 — Limpiar/archivar archivos fantasma en brain/
**Por que**: aussyelo-2611.json, escorenotes-2611.json, riot-schedule.json, search-*.json estan untracked. Si son utiles, trackearlos. Si son temporales, agregar a .gitignore o eliminar.
**Alcance**: Evaluar cada archivo, decidir si tracked/untracked/archivar/eliminar.
**Slot sugerido**: Slot 07 (guias) o slot 18 (recovery)

#### T14 — Integrar operations/ al sistema de slots
**Por que**: Hay 3 manuales de operaciones del boot (01-patch-update, 02-tierlist-update, 03-site-health) que no se usan. Podrian ser la base para slots mas robustos.
**Alcance**: Leer los 3 manuales, evaluar que procedimientos pueden mejorarse con la info actual, actualizar.
**Slot sugerido**: Slot 22 (deep-audit) — incluir revision de operations

#### T15 — Definir CAPA 2 (tareas recurrentes)
**Por que**: CAPA 1 T01-T07 se ejecutaron una vez y quedaron en DONE. No hay CAPA 2. El sistema se estanco.
**Alcance**: Definir T08-T14 como tareas recurrentes (diarias/semanales):
- T08: SELF_SCAN diario (re-run)
- T09: SYNC_STATS (actualizar _STATUS.md, STATE.md, HANDOFF.md con metricas reales)
- T10: GAREN_GUIDE_REFRESH (la unica guia S-tier stale que queda)
- T11: BRAINSTORM_PRIORITIZE (evaluar BRAINSTORM.md, mover top 3 a TASKS.md)
- T12: DEBT_TRACKER (actualizar lista de deudas conocidas con numeros actuales)
**Slot sugerido**: Agregar a _CRON.md como CAPA 2

### 🟢 BAJA PRIORIDAD

#### T16 — Arreglar guias stale 26.9/26.8
**Por que**: Quedan ~8 guias con patch viejo (Garen, Jinx, Master Yi, Ahri, Malphite, Zeri, Hwei, K'Sante). No son S-tier asi que la urgencia es baja.
**Alcance**: Refrescar cada guia con datos 26.10 actuales. Slot 07 (guides) hace esto de a 1-2 por ciclo.

#### T17 — Expandir cobertura de campeones en data.ts
**Por que**: Hay ~41 campeones LoL validos referenciados en matchups/combos que no tienen entrada en data.ts. Expansion debt.
**Alcance**: Agregar entradas para los mas referenciados (Udyr: 10 refs, Pyke: 8, Lucian: 7, Jax: 5, Talon: 5). Slot 09 (champion-data) ya hace esto progresivamente.

#### T18 — Crear sistema de priorizacion BRAINSTORM.md
**Por que**: 40+ ideas sin seguimiento. Necesito un mecanismo para auto-priorizar y proponer las mejores al CEO.
**Alcance**: Agregar columna "Status" a las tablas de BRAINSTORM.md, marcar implementadas, en progreso, propuestas. Conectar con TASKS.md.

---

## Resumen para el CEO

**Estado**: El sistema esta operativo y estable (311/311 streak, 0 fails). Los datos estan limpios y alineados. Pero hay problemas de **visibilidad** (archivos de estado desactualizados), un **riesgo inminente** (patch 26.11 en 2 dias sin protocolo), y **oportunidades sin explotar** (Ralph Loop visual QA, CAPA 2 recurrente).

**Top 3 propuestas inmediatas**:
1. 🔴 T08 — Patch Day Manual (urgente, May 28)
2. 🔴 T09 — Sync archivos de estado (credibilidad)
3. 🔴 T10 — Fix meta-builds.json (funcionalidad rota?)

**Lo que necesito del CEO**:
- Confirmacion para ejecutar T08-T10 como ORDERS o como auto-tareas
- Acceso a agent-browser para T11 (Ralph Loop)
- Definicion de CAPA 2 (o permiso para auto-definirla)
- Informacion sobre si alguien mas toca el repo (para investigar ORDERS.md disappearing)

---

*Propuestas escritas por MOBA-SAGE-001. Esperando aprobacion del CEO para ejecutar.*
