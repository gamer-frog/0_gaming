
export type EloRank = "Iron" | "Bronze" | "Silver" | "Gold" | "Platinum" | "Emerald" | "Diamond" | "Master" | "Grandmaster" | "Challenger";

export interface EloGuide {
  rank: EloRank;
  icon: string;
  color: string;
  micro: string[];
  macro: string[];
  mentalidad: string[];
  draft: string[];
}

export const eloGuides: EloGuide[] = [
  {
    rank: "Iron",
    icon: "shield",
    color: "#5C544B",
    micro: [
      "Practica last hitting en tools de practica. Un creep muerto = 21g de diferencia acumulativa enorme.",
      "Aprende los rango de ataque de tu campeon. Quedarte demasiado cerca de la torre por un minion es un error comun.",
      "No uses habilidades para last hitear a menos que sea necesario. Guarda mana para trades o escapes.",
      "Aprende a hacer animation canceling basico: atacar, moverse, atacar de nuevo entre cada auto-attack."
    ],
    macro: [
      "No ignores los minimapas. Mira cada 5 segundos. Ver un punto rojo puede salvar tu vida.",
      "Los objetivos importan mas que las kills. Una torre destruida es oro para todo tu equipo.",
      "Warding basico: siempre lleva al menos un ward verde al volver a lane.",
      "Cuando tu equipo pelea, ve a ayudar. No te quedes farmeando si hay una teamfight cerca."
    ],
    mentalidad: [
      "El tilt es tu peor enemigo. Si perdiste 2 ganks seguidos, juega pasivo. No intentes 'recuperar' forzando.",
      "Mutea a jugadores toxicos inmediatamente. /mute all al inicio si estas en ranked.",
      "Cada juego es una oportunidad de aprender. No importa si tu equipo feedea — enfocate en TU juego.",
      "No juegues ranked si estas cansado, enojado o distraido. Tu winrate te lo agradecera."
    ],
    draft: [
      "Elige campeones que conozcas bien. Un campeon que dominas en Iron vale mas que un meta pick que no sabes jugar.",
      "No elijas sin ver que elige el enemigo. Espera los picks clave antes de lockear.",
      "Balancea tu equipo: necesitas tanque, damage fisico, damage magico y un soporte util.",
      "Los bans en Iron deben apuntar a campeones que te dan problemas, no a lo que sea 'op'."
    ]
  },
  {
    rank: "Bronze",
    icon: "shield",
    color: "#6B4226",
    micro: [
      "Aprende a tradear: da un auto + habilidad y retrocede antes de que el enemigo responda. Esto se llama 'short trade'.",
      "Practica el concepto de 'freezing' la oleada cerca de tu torre. Esto te da seguridad y deniega farm al enemigo.",
      "Usa tus habilidades para harass al enemigo cuando va por un last hit. Ese es el momento en que esta mas vulnerable.",
      "Aprende a kitear: atacar, moverte hacia atras, atacar de nuevo. Esencial para ADCs y campeones rango."
    ],
    macro: [
      "Aprende cuando hacer dragon vs heraldo. Dragon es para escalado, heraldo es para presionar.",
      "El tracking del jungla enemigo es clave: si ves su path de ganks, puedes contra-gankear o avisar a tu team.",
      "Teleport es una herramienta de macro: usalo para rotar a otras lanes o defender torres, no solo para volver a lane.",
      "Despues de una teamfight ganada, NO vayas a farmear. Toma torre, dragon o inhibidor."
    ],
    mentalidad: [
      "La 'mentalidad de escalera' sube tu winrate: enfocate en mejorar 1 aspecto por juego, no en ganar.",
      "Analiza tus replays. La mayoria de los errores en Bronze son basics: posicion, overextending, no mirar mapa.",
      "Si estas en losing streak de 3+, tomate un break de 30 minutos. El tilt acumulado destruye winrate.",
      "Celebra los juegos bien jugados aunque pierdas. Si jugaste bien, tu MMR sube aunque el LP baje."
    ],
    draft: [
      "Aprende 2-3 campeones por rol. No necesitas un pool enorme, necesitas dominar los que juegas.",
      "El pick order importa: elige tu campeon fuerte temprano o espera para counterpick si estas ultimo.",
      "Presta atencion a los sinergias de team comp. Wombo combo = Yasuo + Malphite + Orianna.",
      "No first pick tu main si sabes que tiene counters fuertes comunes. Swappea roles si es necesario."
    ]
  },
  {
    rank: "Silver",
    icon: "shield",
    color: "#7B8B9B",
    micro: [
      "Perfecciona el combo de tu campeon principal. Un combo fluido gana trades que un combo torpe pierde.",
      "Aprende wave management: slow push, fast push, freeze, bounce. Cada uno tiene su momento.",
      "Practica el 'level 2 cheese': si llegas a lvl 2 antes que tu oponente, agresivo inmediatamente.",
      "Conoce los powerspikes de tu campeon (lvl 3, 6, item completos) y juega agresivo en esos momentos."
    ],
    macro: [
      "Aprende a split pushear: empuja un lado del mapa mientras tu equipo presiona el otro. Esto divide al enemigo.",
      "El vision control es la diferencia entre Silver y Gold. Compra pink wards, no solo greens.",
      "Aprende a hacer 'rotate' despues de tomar una torre: ve a otra lane a presionar con tu ventaja.",
      "Tracking de summoners: anota mentalmente cuando el enemigo usa Flash/Heal. Tienes una ventana de 5 min."
    ],
    mentalidad: [
      "Deja de culpar a tu equipo. En el 90% de los juegos, hay algo que podias haber hecho mejor.",
      "El concepto de 'carga mental': tu es el lider de tu lane. Si ves una oportunidad, pingea y toma la iniciativa.",
      "No te importe el LP. Importa tu MMR. Si juegas mejor, el LP sube solo a largo plazo.",
      "Estudia a un pro que juegue tu campeon. Mira sus runes, build, pathing y decision-making."
    ],
    draft: [
      "Tu pool deberia ser 3-5 campeones por rol principal. Calidad > cantidad.",
      "Aprende counterpicks basicos: que elige contra tu main y que puedes elegir contra los problems.",
      "El soporte define la dinamica del lane: engage vs peel vs poke. Elige segun tu ADC.",
      "Bans inteligentes: ban lo que tu equipo no puede manejar, no lo que es 'op' en abstracto."
    ]
  },
  {
    rank: "Gold",
    icon: "shield",
    color: "#C8AA6E",
    micro: [
      "Perfecciona el animation canceling avanzado: auto > move > habilidad > auto. Cada frame cuenta en trades.",
      "Aprende a 'sidestep' habilidades skillshots predictivas. No te muevas en linea recta cuando el enemigo te apunta.",
      "Zoning: usa tu presencia para evitar que el enemigo farmee sin necesidad de hacer daño.",
      "Conoce los timings de respawn: blue = 5 min, dragon = 5 min, heraldo = 6 min. Planifica alrededor de ellos."
    ],
    macro: [
      "Objetivo prioritario post-lane phase: Nexus Towers > Inhib > Baron > Dragon > Outer Towers.",
      "Aprende a hacer 'baiting' de objetivos: empieza baron, fuerza teamfight, o simplemente toma dragon rapido.",
      "El vision coverage debe ser proactivo, no reactivo. Wardia antes de que necesites ver, no despues.",
      "Rotaciones de jungla predictivas: si el jungla enemigo gankoe top, el dragon/bot esta libre. Aprovecha."
    ],
    mentalidad: [
      "El 'growth mindset': cada derrota tiene una leccion especifica. Identificala y corrígela.",
      "Aprende a identificar patrones en tus derrotas. Si mueres mucho a ganks, mejora tu posicion.",
      "La consistencia > los juegos brillantes. 10 juegos solidos > 1 juego 20/0.",
      "Desarrolla una rutina pre-game: revisa cooldowns, elige con calma, ten una playlist. Mentalidad de atleta."
    ],
    draft: [
      "Adapta tu draft al enemigo: si eligen 3 AD, elige armor. Si eligen CC pesado, elige Cleanse/QSS.",
      "Comprende los archetypes de team comp: engage, poke, split push, pick, protect the ADC.",
      "Tu segundo pick deberia complementar tu primero. No elijas 2 campeones que necesitan recursos.",
      "En Gold, el soporte deberia saber 5+ campeones y adaptar al ADC y la team comp enemiga."
    ]
  },
  {
    rank: "Platinum",
    icon: "shield",
    color: "#5BA7CF",
    micro: [
      "Trading patterns: aprende a forzar trades cuando el enemigo usa habilidad para last hitear (cooldown window).",
      "Aprende a 'shove and roam': empuja rapido tu oleada antes de roamear. El enemigo pierde farm mientras tu ayudas.",
      "Kiting perfecto: entre cada auto-attack, muevete en la direccion optima. No te quedes parado.",
      "Champion-specific mechanics: wall jumps (Jarvan), E flash combos, buffer de habilidades durante CC."
    ],
    macro: [
      "Aprende a jugar alrededor de baron y elder dragon. Estos objetivos deciden juegos en Plat+.",
      "El split push inteligente: conoce cuando tu campeon puede 1v1 y cuando necesitas escapar.",
      "Vision denial: no solo warda, tambien borra wards enemigos. Pink wards y Oracle Lens son esenciales.",
      "Macro de inhibidores: tomar un inhib > tomar baron. Presionar con inhib down > farmear."
    ],
    mentalidad: [
      "En Plat, todos saben mechanics. La diferencia es el decision-making y la consistencia.",
      "Analiza tus muertes: ¿fue un error de posicion, un trade mal calculado, o un gank inevitable?",
      "No jugues 'para no perder'. Juega 'para ganar'. La diferencia es sutil pero enorme en resultados.",
      "Acepta que algunos juegos son imposibles. 30% de los juegos se ganan/pierden en draft. Enfocate en el 70%."
    ],
    draft: [
      "El draft es el 40% del juego en Plat. Aprende power picks, counter picks y team comp synergy.",
      "Ban phase: elimina los campeones que rompen tu estrategia, no los que son 'annoying'.",
      "Flex picks: si puedes jugar tu campeon en 2 roles, tienes ventaja de informacion en draft.",
      "El soporte en Plat debe ser un 'shotcaller' secundario: llama objetivos y rotaciones."
    ]
  },
  {
    rank: "Emerald",
    icon: "shield",
    color: "#00D4AA",
    micro: [
      "Frame-perfect combos: conoce los frame data de tus habilidades y las del enemigo para ganar trades.",
      "Aprende a 'weave' auto-attacks entre habilidades para maximizar DPS en teamfights.",
      "Minion wave manipulation avanzada: crear slow pushes para all-in, o fast push para roam + recall.",
      "Conoce exactamente cuantos autos necesitas para matar un campeon en cada etapa del juego."
    ],
    macro: [
      "La economia del mapa: cada segundo que pasa sin tomar un objetivo es un segundo que el enemigo se recupera.",
      "Aprende a 'tempo': saber la diferencia entre jugar rapido (cuando estas adelante) y lento (cuando atras).",
      "Vision control total: el mapa deberia estar wardado en los 3 quadrants. Tu equipo deberia ver cada rotacion.",
      "End-game decision making: cuendo forzar, cuendo esperar, cuendo split push, cuendo group."
    ],
    mentalidad: [
      "En Emerald, la diferencia entre subir a Diamante y quedarse es la consistencia en decision-making.",
      "Desarrolla 'game sense': la habilidad de saber que va a pasar antes de que pase.",
      "No te autocastigues por cada error. Analiza, corrige, sigue. El perfeccionismo destruye progreso.",
      "Estudia patch notes: cada cambio de patch mueve el meta. Ser el primero en adaptarse = ventaja."
    ],
    draft: [
      "Draft para win condition: si tu equipo es early game, forza antes de 25 min. Si es late, escala.",
      "Counter-drafting avanzado: no solo counters individuales, sino counters de team comp completa.",
      "Trade picks: si necesitas un campeon specifico, asegurate de que tu equipo pueda compensar.",
      "El pick mas importante es el que cierra el draft. Tu ultimo pick deberia ser el mejor counter disponible."
    ]
  },
  {
    rank: "Diamond",
    icon: "shield",
    color: "#5B6EE1",
    micro: [
      "Trading perfecto en cada matchup: conoce los frame windows, los cooldowns, y los damage numbers.",
      "Aprende a 'bait' summoners: forzar al enemigo a usar Flash/Heal con amenazas creibles.",
      "Positioning en teamfights: como ADC, nunca estas en el frente. Como engage, nunca estas en la backline.",
      "Conoce los breakpoints de items: a que nivel de oro tu campeon alcanza power spikes especificos."
    ],
    macro: [
      "El concepto de 'pressure map': que partes del mapa tu equipo controla y como explotar esa ventaja.",
      "Aprende a 'play around' el spawn de los objetivos mas importantes del momento.",
      "El macro de supression: mantener al enemigo en su base mientras tu equipo farme el mapa entero.",
      "Vision como arma: usar wards no solo para ver, sino para engañar al enemigo sobre tu posicion."
    ],
    mentalidad: [
      "En Diamante, todos tienen mechanics y game sense. La diferencia es la ejecucion bajo presion.",
      "Aprende a 'reset' mentalmente entre juegos. Cada juego es nuevo, no dejes que el anterior te afecte.",
      "La comunicacion con tu equipo es clave. Usa pings inteligentes, no spam.",
      "Identifica tu 'ceil': que te impide subir? Es mechanics? Decision-making? Draft? Trabajo individual en eso."
    ],
    draft: [
      "El draft en Diamante es un juego de ajedrez. Cada pick y ban tiene una razon estrategica.",
      "Aprende a 'flex' tu draft: no reveles tu estrategia hasta el ultimo momento.",
      "Counter-jungling en draft: si eligen un jungla early, elige uno que escala para invertir la presion.",
      "El soporte Diamante dicta el lane phase. Elige engage/poke/peel segun la win condition del equipo."
    ]
  },
  {
    rank: "Master",
    icon: "crown",
    color: "#E84057",
    micro: [
      "Optimizacion maxima: cada auto-attack, cada paso, cada frame cuenta. No hay margen para errores.",
      "Adapta tu playstyle al matchup en tiempo real. Si tu estrategia no funciona, cambia mid-game.",
      "Conoce los limites exactos de tu campeon: cuantos autos aguantas, cuantos puedes hacer antes de morir.",
      "Aprende a 'sidestep' con proposito: moverte para evitar skillshots MIENTRAS haces tu combo ofensivo."
    ],
    macro: [
      "El concepto de 'win more': cuando estas adelante, usa tu ventaja para amplificarla. No 'juegues safe'.",
      "Aprende a identificar el 'breakpoint' del juego: el momento exacto donde tu ventaja se convierte en win asegurado.",
      "Vision war total: tu equipo deberia tener mas vision que el enemigo en todo momento.",
      "End-game perfecto: saber exactamente cuando forzar nexus, cuando defender, y cuando baron es la jugada correcta."
    ],
    mentalidad: [
      "En Master, juegas contra los mejores. Cada juego es una clase maestra.",
      "La adaptabilidad es tu mayor fortaleza. Si tu estrategia no funciona, cambia instantaneamente.",
      "Desarrolla 'read': la habilidad de predecir lo que el enemigo va a hacer basandose en patrones.",
      "El burnout es real. Si no estas disfrutando, descansa. La motivacion es tu mayor recurso."
    ],
    draft: [
      "Master-level draft: cada pick tiene 2-3 razones estrategicas. No hay picks 'porque si'.",
      "Aprende a draft para YOUR team, no contra el enemigo primero. Tu win condition > su counter.",
      "El soporte Master es el 'coach' del draft: sugiere picks, identifica debilidades, coordina bans.",
      "Innovation en draft: los mejores jugadores crean nuevas team comps que el meta no ha descubierto."
    ]
  },
  {
    rank: "Grandmaster",
    icon: "crown",
    color: "#F0C646",
    micro: [
      "Perfect execution: tu mechanics deberian ser inconscientes. Tu cerebro esta en macro, tus manos en micro.",
      "Adapta tu build en tiempo real basandote en el estado del juego. No hay 'build fija'.",
      "Conoce los matchups al nivel de 'si el enemigo hace X, yo respondo con Y' en cada situacion.",
      "Aprende a 'outplay' consistentemente, no con lucky plays sino con conocimiento profundo del juego."
    ],
    macro: [
      "El juego de Grandmaster es sobre control del mapa. Donde esta cada enemigo, que pueden ver, que no pueden.",
      "Aprende a 'close out' juegos: la habilidad de convertir una ventaja en una victoria sin dar chances.",
      "La economia del juego: cada decision tiene un costo de oportunidad. Elige la que maximiza win probability.",
      "El concepto de 'inevitability': hacer que tu victoria sea inevitable desde minuto 5, no desde minuto 40."
    ],
    mentalidad: [
      "En Grandmaster, la diferencia es la constancia. Puedes ganar 10 seguidos y perder 5. Manten la disciplina.",
      "Desarrolla un 'sistema' de juego: un proceso para cada situacion que puedas ejecutar sin pensar.",
      "La resiliencia mental es tu mayor skill. Un mal juego no te define. Tu promedio si.",
      "Estudia a oponentes especificos: si juegas contra alguien conocido, prepara una estrategia especifica."
    ],
    draft: [
      "Grandmaster draft: innovacion constante. Crea estrategias que el enemigo no ha visto.",
      "El pick mas 'broken' no siempre es el mejor. Elige lo que tu equipo puede ejecutar mejor.",
      "Flex picking al maximo: si tu pick puede ser 3 roles diferentes, el enemigo no puede preparar.",
      "El draft es el primer teamfight del juego. Gana el draft y tienes 50% del juego ganado."
    ]
  },
  {
    rank: "Challenger",
    icon: "crown",
    color: "#C8AA6E",
    micro: [
      "Tu micro es impecable. No piensas en mechanics — las ejecutas instintivamente.",
      "Cada trade es calculado: sabes exactamente cuanto damage haces, cuanto recibes, y si ganas o pierdes.",
      "La optimizacion de DPS en teamfights es perfecta: posicion, targeting, kiting, abilities, todo sincronizado.",
      "Aprende a crear nuevas tecnicas: si algo no existe, inventalo. Los Challenger definen el meta."
    ],
    macro: [
      "Control total del mapa: sabes donde esta cada enemigo, que pueden ver, y que van a intentar hacer.",
      "El juego es de 1 segundo: un segundo de duda puede costar el juego. Toma decisiones al instante.",
      "Aprende a 'playmaker': crear oportunidades de ganar donde no existen. Forzar errores del enemigo.",
      "La vision es absoluta: tu equipo ve todo, el enemigo no ve nada. Esa es la diferencia."
    ],
    mentalidad: [
      "Challenger es un estado mental, no un rango. Es la creencia de que puedes ganar cada juego.",
      "La humildad es tu mayor fortaleza. Aun en lo mas alto, siempre hay algo que aprender.",
      "Desarrolla 'flow state': la capacidad de jugar en piloto automatico mientras tu cerebro analiza.",
      "Tu legado: los mejores Challenger no solo ganan, enseñan. Comparte conocimiento y sube la competencia."
    ],
    draft: [
      "Challenger draft: arte y ciencia. Cada pick es una declaracion de intencion y una trampa al mismo tiempo.",
      "Inventas team comps. Si algo funciona, lo perfeccionas. Si no, lo descartas rapidamente.",
      "El draft es un micro-juego dentro del juego: reads, bluffs, y contra-strategies.",
      "En Challenger, el draft decide el 60% del juego. El 40% restante es ejecucion perfecta."
    ]
  }
];

export function getGuideByRank(rank: EloRank): EloGuide | undefined {
  return eloGuides.find(g => g.rank === rank);
}
