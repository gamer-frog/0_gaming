# ORDERS — MOBA SAGE Analytics Pipeline

> Creado: 2026-05-05 | Boot Session
> Ejecutar: Uno por uno, marcar con [x] al completar, agregar nota del commit

---

## ORDEN 001 — Sync tier list feed con data.ts
**Prioridad**: P0 | **Riesgo**: Medio
**Estado**: [x] DONE (2026-05-25 01:34 UTC — verificado: 11/11 discrepancies ya resueltas)

El `tierlist-feed.json` (v10) tiene datos actualizados al 2026-04-30 pero `data.ts` sigue con datos del 26.8 para muchos campeones. Discrepancias detectadas:
- Darius: data.ts = A (50.5%), feed = B (49.8%) — demoted
- Lee Sin: data.ts = A (49.5%), feed = B (49.2%) — demoted
- Thresh: data.ts = A (51.3%), feed = B (50.1%) — demoted
- Yasuo: data.ts = A (49.8%), feed = B (49.3%) — demoted
- Soraka: data.ts = S (52.0%), feed = no aparece en S
- Zyra: data.ts = S (51.8%), feed = no aparece en S
- Veigar: data.ts = S (52.5%), feed = no aparece en S
- Aurelion Sol: data.ts = S (52.6%), feed = S (52.1%) — OK
- Katarina: feed = A (53.0%), data.ts = no aparece en array principal
- Nasus: feed = S rising (52.4%), data.ts = no aparece
- Karthus: feed = S (53.7%), data.ts = no aparece

**Accion**: Actualizar data.ts para alinear con tierlist-feed.json. NO eliminar campeones existentes — solo actualizar tier/WR/PR/BR. Agregar campeones faltantes que esten en feed S/A.

---

## ORDEN 002 — Expandir combos-data.ts
**Prioridad**: P1 | **Riesgo**: Bajo
**Estado**: [x] DONE (2026-05-25 02:34 UTC — verificado: 30 pro comps existentes, 8/8 arquetipos requeridos cubiertos)

Solo hay 5 pro comps. El tab Combos muestra estas entries y se ve vacio. Agregar al menos 10 comps mas cubriendo:
- Protect the Hypercarry (KogMaw + Lulu + Janna)
- ARAM Poke Comp
- Dive Comp (Camille + Jarvan + Diana)
- Wombo Combo (Amumu + MF + Galio)
- Pick/Burst (Zed + Talon + Pyke)
- Double AD (Jinx + Varus con engage support)
- AP Burst (Syndra + LeBlanc + Viego)
- Tank AoE (Malphite + Wukong + Kennen)

**Accion**: Agregar 10+ entries a `proComps` en `src/data/combos-data.ts`.

---

## ORDEN 003 — Expandir champion-data.ts (skill names + skins)
**Prioridad**: P2 | **Riesgo**: Bajo
**Estado**: [x] DONE (2026-05-25 03:34 UTC — +2 SKILL_NAMES: Kha'Zix, Renata Glasc. +27 SKIN_NAMES: Ezreal, Zed, Vayne, Morgana, Jhin, Vi, Orianna, Akali, Ekko, LeBlanc, Annie, Viktor, Azir, Ziggs, Fizz, Talon, Malzahar, Twisted Fate, Lucian, Varus, Draven, Miss Fortune, Aphelios, Riven, Renekton, Irelia, Volibear. Total: 68 skills, 66 skins)

Faltan muchos campeones en SKILL_NAMES (solo ~50 de 160+). Agregar skill names para los campeones S/A tier que faltan:
- Katarina, Nasus, Karthus, Taliyah, Fiora, Camille, Viego, Nami, Kha'Zix, Volibear, Mordekaiser, Sett, Yone, Samira, Aphelios, Renekton, Twisted Fate, Morgana, Jhin, Draven, Varus, Miss Fortune, Malzahar, Annie, Syndra, Kassadin, Lux, Ziggs, Xerath, Fizz, Talon, Corki, Kennen, Renata Glasc

Tambien expandir SKIN_NAMES con mas campeones S/A.

**Accion**: Agregar ~30+ entries a SKILL_NAMES en `src/data/champion-data.ts`.

---

## ORDEN 004 — Actualizar patches-feed.json con contexto reciente
**Prioridad**: P1 | **Riesgo**: Bajo
**Estado**: [x] DONE (2026-05-25T05:35 UTC — metaShift agregado a entry 26.9 en patches-feed.json: 9 rising, 6 falling, 7 keyNarratives, datos de tierlist-feed v16 verificados)

El patches-feed.json tiene buena data de 26.9 pero falta contexto de meta changes recientes que aparecen en tierlist-feed.json (rising/falling). Crear un patch entry resumen o actualizar el entry 26.9 con la data de rising/falling.

Rising: Nasus, Fiora, Vex, Camille, Taliyah, Nami, Zeri, Smolder, Viktor
Falling: Briar, Ambessa, Mordekaiser, Kha'Zix, Yasuo, Pyke

**Accion**: Agregar seccion "metaShift" al entry 26.9 con rising/falling de tierlist-feed.

---

## ORDEN 005 — Verificar y arreglar ITEM_DESCRIPTIONS
**Prioridad**: P2 | **Riesgo**: Medio
**Estado**: [x] DONE (2026-05-25T07:35 UTC — 20 items agregados: 6 boots, 3 support, 4 bruiser/tank, 4 ADC, 3 Season 2/26.10. Total 47→67 entries. Todos items en builds S/A cubiertos. Build OK)

ITEM_DESCRIPTIONS se expandio en session anterior de 14 a 40+ entries pero necesita verificacion contra items Season 2. Verificar que todos los items mencionados en builds de campeones S/A tengan descripcion. Items clave a verificar:
- Statikk Shiv (reworked on-hit en 26.9)
- Doran's Bow (nuevo)
- Doran's Helm (nuevo)
- Gluttonous Greaves (nuevo)
- Dawnstone
- Dusk and Dawn (reworked)
- Deathfire Touch context

**Accion**: Leer ITEM_DESCRIPTIONS en helpers.ts o donde viva, verificar y agregar las que falten.

---

## ORDEN 006 — Agregar metaBuilds data para campeones S-tier faltantes
**Prioridad**: P2 | **Riesgo**: Bajo
**Estado**: [x] DONE (2026-05-25T06:34 UTC — 9 S-tier builds agregados: Riven, Smolder, Rek'Sai, Rammus, Fizz, Bel'Veth, Diana, Vladimir, Ashe. Total 24→33. 18/18 S-tier coverage 100%. Build OK)

public/meta-builds.json debe tener builds para todos los S-tier. Verificar que esten: Zaahen, Karthus, Nasus, Jinx, Ahri, Nocturne, Ornn, Briar, Aurelion Sol, Nilah.

**Accion**: Leer meta-builds.json, verificar completitud, agregar los que falten.

---

## ORDEN 007 — Mejorar activity-feed.json con novedades recientes
**Prioridad**: P3 | **Riesgo**: Bajo
**Estado**: [x] DONE (2026-05-25T06:34 UTC — 8 nuevas entries Mayo 2026: 26.11 PBE, CAPA 1 complete, S-tier rising/falling, 26.10 live, i18n cleanup, runes migration, ORDEN 006. v2.0→2.1, 33→41 entries. Highlights actualizados. Build OK)

El activity feed necesita contenido fresco post-26.9. Agregar eventos recientes:
- Zaahen release y dominancia en meta
- Deathfire Touch return
- Season 2 Pandemonium launch
- Tier shifts (Nasus rising, Briar falling)
- Pro scene updates si hay

**Accion**: Leer activity-feed.json, agregar 5+ entries recientes con fechas abril-mayo 2026.

---

## ORDEN 008 — Agregar guides para campeones rising S/A
**Prioridad**: P3 | **Riesgo**: Bajo
**Estado**: [x] DONE (2026-05-25 16:34 UTC — Nasus/Karthus ya tenían guía 26.10. Taliyah actualizada 26.9→26.10 (jungle S→mid B, DFT nerf). Fiora agregada a guides-feed.json + guía actualizada 26.10. 27→28 guías total.)

Verificar data/guides/ — necesita guias para:
- Nasus (S-tier rising)
- Taliyah (A-tier rising, buff 26.9)
- Karthus (S-tier jungle)
- Fiora (A-tier rising, Conqueror buffs)

**Accion**: Crear mini-guias en data/guides/ para estos campeones o verificar que las existentes esten actualizadas.

---

## LOG
(Se actualiza despues de cada orden ejecutada)
