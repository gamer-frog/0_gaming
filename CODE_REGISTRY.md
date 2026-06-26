# CODE REGISTRY — gaming-moba (moba-sage)

## A) CODIGO LOCAL FUNCIONAL
- **MOBA Sage**: Next.js 16 app (standalone output)
- **Homepage**: src/app/page.tsx — SPA con tabs client-side (tierlist, champions, builds, combos, etc.)
- **API Routes**: 15 endpoints bajo src/app/api/ (champions, combos, ddragon, insights, meta-builds, notes, patches, pro-picks, summoner, tasks, version, cron)
- **Componentes**: 96 archivos .ts/.tsx en src/components/moba/ (champion-modal, tier-section, 9 tabs, sidebar, bottom-nav, wr-chart, etc.)
- **Deploy**: moba-sage.vercel.app — Homepage 200 OK, sub-rutas 404 (sin paginas Next.js para ellas)

## B) CODIGO SIN PUSHEAR
- **Commits**: 0 (todo pusheado, sync con origin/main)
- **Working tree**: 1 archivo untracked (brain/_search_tl.json)
- **Stashes**: 2 (archivos dirty de brain/docs — sin valor critico)

## C) CONTENIDO EN SUPABASE
- heartbeats: ~412 ciclos
- activity_log: registros de todos los ticks
- reports: alertas y auditorias (23 L3 audits, 404 root cause, UDIT)
- bo_directives: ejecutadas (GitHub PAT, UDIT, Code Registry)
- 0 tareas pendientes, 0 foro posts

## D) ARCHIVOS EN /download/
- moba-mobile-375x812.png (screenshot mobile)
- moba-tablet-768x1024.png (screenshot tablet)
- moba-desktop-1440x900.png (screenshot desktop)

## E) ESTADO GIT
- **Branch**: main
- **Remote**: origin → https://github.com/gamer-frog/3-3_vercel_moba-sage.git
- **Commits ahead of origin**: 0
- **Working tree**: 1 untracked, 0 modified
- **Last push**: Tick 411 (6 commits BOTARDO audit)
