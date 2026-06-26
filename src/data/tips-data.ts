
export type TipCategory = "fundamental" | "micro" | "macro" | "mental" | "draft";
export type TipDifficulty = 1 | 2 | 3 | 4 | 5;

export interface Tip {
  id: string;
  title: string;
  description: string;
  category: TipCategory;
  difficulty: TipDifficulty;
  rank: string; // "all" or specific rank
}

export const tips: Tip[] = [
  // FUNDAMENTAL
  { id: "f1", title: "Last Hitting es tu prioridad #1", description: "Cada minion que matas te da 21g. Si matas 10 mas que tu oponente, son 210g de ventaja en 10 minutos = 1 kill de diferencia. Practica en la tool de practica 5 minutos antes de cada sesión.", category: "fundamental", difficulty: 1, rank: "all" },
  { id: "f2", title: "Mira el minimapa cada 5 segundos", description: "Esto no es opcional. Es un habito que te salva la vida. Cuenta mentalmente 1-2-3-4-5 y mira. Si ves un punto rojo acercándose, retírate. Gratis.", category: "fundamental", difficulty: 1, rank: "all" },
  { id: "f3", title: "No mueras innecesariamente", description: "Una muerte no solo te da 300g al enemigo, sino que pierdes farm, experiencia y presión de mapa. Vivir > matar en la mayoría de situaciones.", category: "fundamental", difficulty: 1, rank: "all" },
  { id: "f4", title: "Lleva siempre wards al volver a lane", description: "Compra wards verdes cada vez que vuelves a base. Si tienes gold extra, compra un pink. La visión es el recurso más subestimado del juego.", category: "fundamental", difficulty: 1, rank: "Iron-Bronze" },
  { id: "f5", title: "Conoce los timings de tus objetivos", description: "Dragon spawnea a 5:00 y respawn cada 5 min. Baron a 20:00 cada 6 min. Herald a 14:00. Planifica tu jogo alrededor de estos timers.", category: "fundamental", difficulty: 2, rank: "Silver-Gold" },
  { id: "f6", title: "Entiende el gold efficiency", description: "No gastes gold en items que no necesitas. Un componente de 1000g que mejora tu power spike vale más que un item completo de 3000g que no usas.", category: "fundamental", difficulty: 2, rank: "Gold-Platinum" },
  { id: "f7", title: "Aprende los breakpoints de tu campeón", description: "Sabe exactamente a qué nivel y con qué items tu campeón alcanza cada power spike. Juega agresivo EN esos momentos y pasivo fuera de ellos.", category: "fundamental", difficulty: 3, rank: "Platinum-Diamond" },

  // MICRO
  { id: "m1", title: "Short Trading: hit & run", description: "Da un auto + habilidad y retrocede antes de que el enemigo responda. Esto te da damage 'gratis' mientras minimizas el daño recibido. Practica el rango de tu campeón.", category: "micro", difficulty: 2, rank: "Bronze-Silver" },
  { id: "m2", title: "Animation Canceling", description: "Después de un auto-attack, puedes moverte o usar una habilidad ANTES de que termine la animación. Esto te deja más tiempo para reposicionarte.", category: "micro", difficulty: 3, rank: "Silver-Platinum" },
  { id: "m3", title: "Kitear: atacar mientras retrocedes", description: "Como ADC, NUNCA te quedes quieto en una teamfight. Ataca > movete hacia atrás > ataca de nuevo. Esto te mantiene vivo mientras haces daño.", category: "micro", difficulty: 3, rank: "Silver-Gold" },
  { id: "m4", title: "Aprende a sidestep skillshots", description: "No te muevas en línea recta cuando un enemigo te apunta. Cambia dirección aleatoriamente. Los skillshots se predicen, no se trackingean.", category: "micro", difficulty: 2, rank: "all" },
  { id: "m5", title: "Weaving: autos entre habilidades", description: "En teamfights, no uses todas tus habilidades de golpe. Alterna: habilidad > auto > habilidad > auto. Esto maximiza tu DPS significativamente.", category: "micro", difficulty: 4, rank: "Platinum-Master" },
  { id: "m6", title: "Buffer de habilidades durante CC", description: "Si estás a punto de recibir un stun, puedes iniciar el cast de tu habilidad ANTES del CC y esta sale cuando termina. Practica el timing.", category: "micro", difficulty: 5, rank: "Diamond-Challenger" },

  // MACRO
  { id: "ma1", title: "Después de teamfight ganada: OBJETIVOS", description: "NO vayas a farmear después de ganar una teamfight. Toma torre, dragon, inhib o baron. Cada segundo que pasa sin tomar objetivos es tiempo que el enemigo se recupera.", category: "macro", difficulty: 1, rank: "Bronze-Gold" },
  { id: "ma2", title: "Split Pushing 101", description: "Empuja un lado del mapa mientras tu equipo presiona el otro. Esto fuerza al enemigo a dividirse. Funciona mejor con campeones con escape o dueling fuerte.", category: "macro", difficulty: 3, rank: "Silver-Platinum" },
  { id: "ma3", title: "Shove and Roam", description: "Empuja tu oleada rápidamente antes de roam a otra lane. Mientras el enemigo pierde farm limpiando, tú creas ventajas en otra lane.", category: "macro", difficulty: 3, rank: "Gold-Platinum" },
  { id: "ma4", title: "Vision Control Proactivo", description: "No wardes REACTIVAMENTE (porque el enemigo ya esta ahí). Wardes PROACTIVAMENTE (para ver cuando viene). Coloca wards ANTES de que necesites la información.", category: "macro", difficulty: 2, rank: "Silver-Diamond" },
  { id: "ma5", title: "Conoce el 'Pressure Map'", description: "Entiende qué partes del mapa tu equipo controla. Si controlas bot + dragon, el enemigo no puede hacer baron sin que tu equipo lo sepa.", category: "macro", difficulty: 4, rank: "Emerald-Master" },
  { id: "ma6", title: "Baiting de Objetivos", description: "Empieza baron sin intención de tomarlo. Cuando el enemigo viene, tu equipo los embosca. O toma dragon rapidamente mientras el enemigo responde a la falsa presión de baron.", category: "macro", difficulty: 4, rank: "Platinum-Challenger" },

  // MENTAL
  { id: "me1", title: "Mutea inmediatamente a jugadores tóxicos", description: "Usa /mute all o mutea individualmente al primer signo de toxicidad. Los jugadores tóxicos no van a mejorar su actitud y solo te van a distraer.", category: "mental", difficulty: 1, rank: "all" },
  { id: "me2", title: "La regla del 3: si perdiste 3 seguidos, PARA", description: "Tres derrotas seguidas = tilt garantizado. Tomate un break de 30 minutos mínimo. Tu MMR no baja por no jugar, pero tu winrate sí sube al evitar juegos tilt.", category: "mental", difficulty: 1, rank: "all" },
  { id: "me3", title: "Enfócate en mejorar, no en ganar", description: "La 'mentalidad de escalera': cada juego preguntate 'que puedo mejorar?' en vez de 'por que mis teammates son malos?'. La mejora personal sube tu MMR a largo plazo.", category: "mental", difficulty: 2, rank: "Silver-Gold" },
  { id: "me4", title: "No juegues ranked cansado o enojado", description: "Tu toma de decisiones se deteriora significativamente cuando no estás en tu mejor estado mental. Juega normals o descansa.", category: "mental", difficulty: 1, rank: "all" },
  { id: "me5", title: "Desarrolla una rutina pre-game", description: "Antes de cada ranked: respira profundo, revisa tu pool, ten agua cerca. Ritual = enfoque. Los deportistas profesionales no entran a la cancha sin calentar.", category: "mental", difficulty: 2, rank: "Gold-Diamond" },

  // DRAFT
  { id: "d1", title: "No first pick tu main si tiene counters comunes", description: "Si tu main es Yasuo y tiene 5 counters populares, NO lo first pickees. Swappea roles o elige un pick seguro primero.", category: "draft", difficulty: 1, rank: "Bronze-Silver" },
  { id: "d2", title: "Balancea tu team: AD, AP, Tank, Support util", description: "Un equipo con todo damage fisico se counter con una Rabadon. Necesitas al menos una fuente de cada tipo de daño.", category: "draft", difficulty: 2, rank: "Silver-Gold" },
  { id: "d3", title: "Elige lo que SABES, no lo que es META", description: "Un campeon que dominas al 100% en Gold vale más que un S-tier que nunca jugaste. La consistencia > el pick teórico.", category: "draft", difficulty: 1, rank: "Iron-Platinum" },
  { id: "d4", title: "Adapta tu build al draft enemigo", description: "Si el enemigo tiene 3 AD, compra Randuin/Guardian Angel. Si tienen mucho CC, compra QSS/Cleanse. El draft define tu build.", category: "draft", difficulty: 2, rank: "Gold-Platinum" },
  { id: "d5", title: "Draft para tu WIN CONDITION", description: "Si tu equipo escala mejor, elige para sobrevivir early. Si tu equipo es early game, pick para snowball. No mezclas estrategias.", category: "draft", difficulty: 3, rank: "Platinum-Challenger" },
  { id: "d6", title: "Flex picks = ventaja de información", description: "Si puedes jugar un campeon en 2+ roles, el enemigo no sabe a donde vas hasta que cargas. Esto te da ventaja en draft.", category: "draft", difficulty: 4, rank: "Emerald-Challenger" },
];

export function getTipsByCategory(category: TipCategory): Tip[] {
  return tips.filter(t => t.category === category);
}

export function getTipsByDifficulty(diff: TipDifficulty): Tip[] {
  return tips.filter(t => t.difficulty <= diff);
}

export function getTipsForRank(rank: string): Tip[] {
  return tips.filter(t => t.rank === "all" || t.rank.includes(rank));
}
