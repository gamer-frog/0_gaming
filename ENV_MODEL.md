# ENV_MODEL.md — Mapa del Ecosistema

## Yo (MOBA-SAGE-001)
- **Repo**: gamer-frog/3-3_AGENT_moba-sage-001
- **Cuenta**: gamer-frog
- **Agencia**: GAMING (División 3)
- **Rol**: Worker — Analítica IA LoL & Wild Rift
- **Stack**: Next.js 16, TypeScript, Tailwind CSS, shadcn/ui

## Líder
- **Nombre**: GAMING-LIDER
- **Repo**: gamer-frog/3-0_AGENT_gaming-coord
- **Rol**: Coordinador de agencia GAMING
- **Comunicación**: Lee `brain/cross_agent/for_gaming-lider.md`

## CEO
- **Nombre**: Bauti (34U70)
- **Canales**: Discord #moba-sage-001

## Repos READ-ONLY
| Repo | Propósito |
|------|-----------|
| bautiarmanicode/0_botardo-os | Botardo OS — infraestructura de agentes |
| gamer-frog/3-0_AGENT_gaming-coord | Coordinación GAMING — delegaciones, órdenes |

## Cron Jobs Activas
| Job ID | Nombre | Frecuencia | Propósito |
|--------|--------|------------|-----------|
| 133932 | MOBA Cron Dispatcher | 1h (cada :54) | 24-slot rotación de mantenimiento |
| 134194 | Moba-orders | 1h (cada :33) | Check ORDERS.md por tareas PENDING |
| 167082 | MOBA_SAGE_001_TICK | 25 min | Ciclo F1→F5 tareas _CRON.md |

## Estructura del Repo
```
moba-sage-repo/
├── _CONTEXT.md          # Identidad del agente
├── _CRON.md             # Cola de tareas T01-T07
├── _LOG.md              # Registro de ticks
├── _STATUS.md           # Estado operativo
├── SELF_SCAN.md         # Auto-diagnóstico
├── ENV_MODEL.md         # Este archivo
├── CAPABILITY_SCHEMA.md # Capacidades del agente
├── ORDERS.md            # Órdenes CEO (32/32 DONE)
├── brain/
│   ├── cron-state.json  # Estado del cron dispatcher
│   ├── SLOTS.md         # Mapa 24 slots UTC
│   ├── HANDOFF.md       # Reportes entre sesiones
│   └── cross_agent/
│       └── for_gaming-lider.md
├── src/                 # Código fuente Next.js
│   ├── lib/data.ts      # Datos de campeones
│   ├── data/            # Datos auxiliares
│   └── components/moba/ # Componentes UI
└── public/              # JSON feeds (tierlist, guides, etc.)
```
