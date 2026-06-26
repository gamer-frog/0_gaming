
export interface MetaChampion {
  name: string;
  role: string;
  status: "buffed" | "nerfed" | "new" | "stable";
  change: string;
  tier: string;
}

export interface MetaReport {
  patch: string;
  date: string;
  summary: string;
  hotTopics: string[];
  championsUp: MetaChampion[];
  championsDown: MetaChampion[];
  keyItems: { name: string; change: string }[];
  keyRunes: { name: string; change: string }[];
}

export const currentMeta: MetaReport = {
  patch: "26.12",
  date: "Junio 2026",
  summary: "El patch 26.12 trajo cambios significativos a items de Fighter yMage. Los campeones de control mágico como Orianna y Syndra dominan el mid lane, mientras que los carry de ADC como Caitlyn y Jinx mantienen su presencia en bot lane. En la jungle, Viego sigue siendo el rey con un win rate superior al 52%.",
  hotTopics: [
    "Eclipse nerfeado 5% de daño a campeones — impacta a Lee Sin, Viego, Vi",
    "Rabadon Deathcap buff — mages late game más fuertes que nunca",
    "Nuevo rune en la rama de Precisión: 'Último esfuerzo' — buff a campeones de snowball",
    "Caitlyn ban rate subió a 5.8% — sigue siendo el ADC más dominante del meta",
    "Viego ban rate al 12.5% — el jungla más prohibido del juego"
  ],
  championsUp: [
    { name: "Orianna", role: "Mid", status: "buffed", change: "Ratio de AP de Command: Protect aumentado de 60% a 70%. La bola hace más daño en teamfights.", tier: "S" },
    { name: "Syndra", role: "Mid", status: "stable", change: "El meta mágico favorece su burst. Con Rabadon buff, su late game es devastador.", tier: "S" },
    { name: "Fiora", role: "Top", status: "buffed", change: "Riposte duration aumentado en 0.15s. Más fácil de stunnear habilidades clave.", tier: "S" },
    { name: "Viego", role: "Jungle", status: "stable", change: "Sigue dominando a pesar de nerfs a Eclipse. Su reset en teamfights es insano.", tier: "S" },
    { name: "Caitlyn", role: "ADC", status: "stable", change: "Headshot ratio buff en nivel temprano. Domina el lane phase con rango superior.", tier: "S" },
    { name: "Lulu", role: "Support", status: "buffed", change: "Wild Growth (R) cooldown reducido de 110s a 100s. Más uptime en protecciones.", tier: "S" }
  ],
  championsDown: [
    { name: "Yasuo", role: "Mid", status: "nerfed", change: "Steel Tempest (Q) damage reducido 10% a nivel temprano. Mucho más debil en lane phase.", tier: "B" },
    { name: "Zed", role: "Mid", status: "nerfed", change: "Living Shadow (W) cooldown aumentado. Menos movilidad para presionar y escapar.", tier: "A" },
    { name: "Katarina", role: "Mid", status: "nerfed", change: "Death Lotus (R) channel time aumentado en 0.2s. Más tiempo para interrumpirla.", tier: "A" },
    { name: "Master Yi", role: "Jungle", status: "stable", change: "No cambios directos, pero el meta de control mágico lo hace menos viable en teamfights.", tier: "B" },
    { name: "Yuumi", role: "Support", status: "nerfed", change: "Bop and Strike (Q) heal reducido. Menos sustain en lane phase.", tier: "B" }
  ],
  keyItems: [
    { name: "Luden Companion", change: "Buff 8% de ratio mágico. Ahora es el item core de todos los mages." },
    { name: "Eclipse", change: "Nerf 5% damage a campeones. Sigue fuerte pero menos dominante en duelos." },
    { name: "Rabadon Deathcap", change: "Buff 5% de ratio AP. Mages late game son monstruos." },
    { name: "Sundered Sky", change: "Stable. Sigue siendo el item de Fighter más consistente." },
    { name: "Serylda Grudge", change: "Buff 3% de armor penetration. Mejor opción vs tanques." }
  ],
  keyRunes: [
    { name: "Conquistador", change: "Nerf leve: 2% menos AD a stacks completos. Sigue siendo el keystone de Fighter top." },
    { name: "Electrocute", change: "Stable. Dominante en assassins y mages burst." },
    { name: "Flecha Rápida", change: "Buff: 3% más attack speed. Mejora para ADCs que necesitan más AS temprano." },
    { name: "Último Esfuerzo (nuevo)", change: "Nuevo en Precisión: al bajar debajo del 30% HP, ganas 10% de daño y 15% de tenacidad por 4s." }
  ]
};
