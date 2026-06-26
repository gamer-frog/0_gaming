// ============================================================
// MOBA SAGE — Helper Functions
// ============================================================

let _ddVersion = '16.9.1'; // Auto-synced with Data Dragon API — v1.9.2 stable
export function updateDdVersion(v: string) { _ddVersion = v; }
export function getDdVersion() { return _ddVersion; }

export const CHAMPION_NAME_MAP: Record<string, string> = {
  'Wukong': 'MonkeyKing',
  'Nunu': 'Nunu',
  'Nunu & Willump': 'Nunu',
  'Fiddlesticks': 'FiddleSticks',
  "Bel'Veth": 'Belveth',
  "K'Sante": 'KSante',
  'Aurelion Sol': 'AurelionSol',
  'Cho\'Gath': 'Chogath',
  'Kha\'Zix': 'Khazix',
  'Rek\'Sai': 'RekSai',
  'Vel\'Koz': 'Velkoz',
  'LeBlanc': 'Leblanc',
  'Miss Fortune': 'MissFortune',
  'Twitch': 'Twitch',
  'Twisted Fate': 'TwistedFate',
  'Lee Sin': 'LeeSin',
  'Master Yi': 'MasterYi',
  'Xin Zhao': 'XinZhao',
  'Jarvan IV': 'JarvanIV',
  'Aatrox': 'Aatrox',
  'Zaahen': 'Zaahen',
  'Ambessa': 'Ambessa',
  'Smolder': 'Smolder',
  'Vex': 'Vex',
  'Aurora': 'Aurora',
  'Hwei': 'Hwei',
  'Naafiri': 'Naafiri',
  'Ksante': 'KSante',
  'Renata': 'Renata',
  'Rell': 'Rell',
  'Yuumi': 'Yuumi',
  'Senna': 'Senna',
  'Gwen': 'Gwen',
  'Nilah': 'Nilah',
};

export function getChampionImageUrl(name: string): string {
  const mapped = CHAMPION_NAME_MAP[name];
  if (mapped) {
    return `https://ddragon.leagueoflegends.com/cdn/${_ddVersion}/img/champion/${mapped}.png`;
  }
  const normalized = name
    .replace(/'/g, '')
    .replace(/ /g, '')
    .replace(/\./g, '')
    .replace(/&/g, '');
  return `https://ddragon.leagueoflegends.com/cdn/${_ddVersion}/img/champion/${normalized}.png`;
}

export function getChampionSplashUrl(name: string, skinNum = 0): string {
  const mapped = CHAMPION_NAME_MAP[name];
  const key = mapped || name.replace(/['\s.]/g, '');
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_${skinNum}.jpg`;
}

export const ITEM_NAME_MAP: Record<string, string> = {
  // Miticas
  'Filo de la Noche': '6672', 'Eclipse': '6692',
  'Pozo de la Noche': '6695', 'Roca del Eclipse': '6693', 'Poder de Kraken Slayer': '6673',
  'La Séptima': '6671', 'El Colector': '6676',
  'Filo Divino': '6696', 'Mandato Imperial': '6632',
  'Stridebreaker': '6631', 'Pisotón Brutal': '6631', 'Experimental Hexplate': '6664', 'Placa Hexagonal Experimental': '6664',
  "Jak'Sho": '6665', "Jak'Sho, el Proteico": '6665', 'JakSho': '6665',
  // Luchador / Tanque
  'Hidra Titánica': '3748', 'Hidra': '3748', 'Fuerza de la Trinidad': '3078',
  'Fuerza de Trinidad': '3078', 'Guja Botadora': '3153',
  'Sed de Sangre': '6333', 'Resistencia Divina': '3065',
  // ADC / Crit
  'Filo Infinito': '3031', 'Infinito': '3031', 'Colmillo Infinito': '3031',
  'Huracán de Runaan': '3085', 'Frenesí de Runaan': '3085',
  'Bailarín Espectral': '3124', 'Botas de Berserker': '3006',
  // AP / Mago
  'Sombrero de Rabadón': '3089', 'Reloj de Zhonya': '3157', 'Reloj de Arena de Zhonya': '3157',
  'Llamarada Sombría': '6653', 'Llamasomo': '6653',
  'Morellonomicon': '3165', 'Cetro de Rylai': '3116',
  'Cetro de Cristal de Rylai': '3116',
  'Botas del Vacío': '3020', 'Hielo Eterno': '6662',
  // Support
  'Redención': '3107', 'Convergencia de Zeke': '3194',
  'Medallón de los Solari de Hierro': '3190', 'Medallón de los Solari': '3190', 'Medallón': '3190',
  'Mikael': '3222',
  // Botas
  'Botas de Mercurio': '3111', 'Botas de Movilidad': '3009',
  'Botas de Celeridad': '3158', 'Botas de CD': '3158', 'Botas de Placas': '3047',
  // Otros
  'Centro de Gravedad': '3163',
  'Última Piedad': '3036', 'Muramana': '3004',
  'Ángel Guardián': '3026',
  'El Protegido': '3193', 'Llamarada de Pecado': '6698',
  // Season 2 — Pandemonium (26.9)
  "Doran's Bow": '1086', "Doran's Helm": '1120',
  'Gluttonous Greaves': '3008',
  'Trailblazer': '3002',
  'Opportunity': '6701',
  'Dusk and Dawn': '2510',
  'Statikk Shiv': '3087',
  'Dawnstone': '4011',
  'Duskblade of Draktharr': '6691',
  'Immortal Shieldbow': '6673',
  'Immortal Path': '6673',
  // Additional Season 2 items
  'Eclipse (Mythic)': '6692',
  'Black Cleaver': '3071',
  'Frozen Heart': '3110',
  'Randuin Omen': '3143',
  'Force of Nature': '4401',
  'Dead Man Plate': '3742',
  'Spirit Visage': '3065',
  'Abyssal Mask': '3001',
  'Cosmic Drive': '4629',
  'Rabadon Deathcap': '3089',
  'Void Staff': '3135',
  'Luden Companion': '3475',
  'Malignance': '4645',
  'Stormsurge': '4646',
};

export function getItemIconUrl(itemName: string): string | null {
  const id = ITEM_NAME_MAP[itemName];
  if (id) return `https://ddragon.leagueoflegends.com/cdn/${_ddVersion}/img/item/${id}.png`;
  return null;
}

export function parseBuildItems(itemsStr: string): string[] {
  return itemsStr.split(/[→\n]/).map(s => s.replace(/[→,]/g, '').trim()).filter(Boolean);
}

// ============================================================
// Rune Icon Helper
// ============================================================

const RUNE_ICON_MAP: Record<string, string> = {
  // Precision Keystones
  'Pies Veloces': 'Precision/FleetFootwork/FleetFootwork.png',
  'Conquistador': 'Precision/Conqueror/Conqueror.png',
  'Lethal Tempo': 'Precision/LethalTempo/LethalTempoTemp.png',
  'Agarre del No Muerto': 'Precision/Conqueror/Conqueror.png',
  'Press the Attack': 'Precision/PressTheAttack/PressTheAttack.png',
  // Sorcery Keystones
  'Cometa Arcano': 'Sorcery/ArcaneComet/ArcaneComet.png',
  'Invocar Aery': 'Sorcery/SummonAery/SummonAery.png',
  'Phase Rush': 'Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png',
  'Impulso de Fase': 'Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png',
  'Deathfire Touch': 'Sorcery/DeathfireTouch/DEATHFIRE_TOUCH_KEYSTONE.png',
  'Toque de Fuego Mortal': 'Sorcery/DeathfireTouch/DEATHFIRE_TOUCH_KEYSTONE.png',
  'Stormraider': 'Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png',
  'Invocador de la Tormenta': 'Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png',
  'Axiom Arcanist': 'Sorcery/NullifyingOrb/Axiom_Arcanist.png',
  // Domination Keystones
  'Electrocutar': 'Domination/Electrocute/Electrocute.png',
  'Cosecha Oscura': 'Domination/DarkHarvest/DarkHarvest.png',
  'Sabor a Sangre': 'Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png',
  // Resolve Keystones
  'Guardián': 'Resolve/Guardian/Guardian.png',
  'Demolir': 'Resolve/Demolish/Demolish.png',
  'Fuente de Vida': 'Resolve/FontOfLife/FontOfLife.png',
  'Conmoción': 'Resolve/VeteranAftershock/VeteranAftershock.png',
  'Agarre del Indefenso': 'Resolve/GraspOfTheUndying/GraspOfTheUndying.png',
  // Inspiration Keystones
  'Calzado Mágico': 'Inspiration/MagicalFootwear/MagicalFootwear.png',
  'Viento Favorable': 'Inspiration/GlacialAugment/GlacialAugment.png',
  'Aumento Glacial': 'Inspiration/GlacialAugment/GlacialAugment.png',
  'First Strike': 'Inspiration/FirstStrike/FirstStrike.png',
  // Runas secundarias comunes
  'Segunda Vida': 'Resolve/SecondWind/SecondWind.png',
  'Presencia de Campeón': 'Precision/PresenceOfMind/PresenceOfMind.png',
  'Sobrecrecimiento': 'Resolve/Overgrowth/Overgrowth.png',
  'Revitalizar': 'Resolve/Revitalize/Revitalize.png',
  'Debilidad': 'Sorcery/AbsoluteFocus/AbsoluteFocus.png',
  'Golpe de Gracia': 'Precision/CoupDeGrace/CoupDeGrace.png',
  'Blindaje Óseo': 'Resolve/BonePlating/BonePlating.png',
  'Inquebrantable': 'Sorcery/Unflinching/Unflinching.png',
  'Golpe Bajo': 'Domination/CheapShot/CheapShot.png',
  'Colección de Ojos': 'Domination/SixthSense/SixthSense.png',
  'Cazador Definitivo': 'Domination/UltimateHunter/UltimateHunter.png',
  'Cazador Implacable': 'Domination/RelentlessHunter/RelentlessHunter.png',
  'Banda de Maná': 'Sorcery/ManaflowBand/ManaflowBand.png',
  'Quemadura': 'Sorcery/Scorch/Scorch.png',
  'Triunfo': 'Precision/Triumph.png',
  'Leyenda: Diligencia': 'Precision/LegendAlacrity/LegendAlacrity.png',
  'Leyenda: Linaje': 'Precision/LegendBloodline/LegendBloodline.png',
  'Leyenda: Tenacidad': 'Precision/LegendHaste/LegendHaste.png',
  'Celeridad': 'Sorcery/Celerity/CelerityTemp.png',
  'Trascendencia': 'Sorcery/Transcendence/Transcendence.png',
  'Foco Absoluto': 'Sorcery/AbsoluteFocus/AbsoluteFocus.png',
  'Caminar sobre Aguas': 'Sorcery/Waterwalking/Waterwalking.png',
  'Tormenta Creciente': 'Sorcery/GatheringStorm/GatheringStorm.png',
  'Golpe de Impacto': 'Domination/SuddenImpact/SuddenImpact.png',
  'Entregas de Galletas': 'Inspiration/BiscuitDelivery/BiscuitDelivery.png',
  'Tónica de Distorsión Temporal': 'Inspiration/TimeWarpTonic/TimeWarpTonic.png',
  'Perspicacia Cósmica': 'Inspiration/CosmicInsight/CosmicInsight.png',
  'Velocidad de Acercamiento': 'Inspiration/ApproachVelocity/ApproachVelocity.png',
  'Maestro de Todo': 'Inspiration/JackOfAllTrades/JackofAllTrades2.png',
  'Golpe Fulminante': 'Domination/HailOfBlades/HailOfBlades.png',
  'Condicionamiento': 'Resolve/Conditioning/Conditioning.png',
  'Golpe de Escudo': 'Resolve/MirrorShell/MirrorShell.png',
  'Último Recurso': 'Precision/LastStand/LastStand.png',
  'Recorte': 'Precision/CutDown/CutDown.png',
  'Cobertura Profunda': 'Domination/DeepWard/DeepWard.png',
};

const RUNE_COLOR_MAP: Record<string, string> = {
  'Precisión': '#c8aa6e',
  'Brujería': '#1b998b',
  'Sorcery': '#1b998b',
  'Dominación': '#d44444',
  'Domination': '#d44444',
  'Valentía': '#f9c74f',
  'Resolve': '#f9c74f',
  'Inspiración': '#e8e8e8',
  'Inspiration': '#e8e8e8',
  'Precision': '#c8aa6e',
};

export function getRuneIconUrl(runeName: string): { url: string; color: string } | null {
  for (const [key, path] of Object.entries(RUNE_ICON_MAP)) {
    if (runeName.includes(key)) {
      return {
        url: `https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${path}`,
        color: RUNE_COLOR_MAP[Object.keys(RUNE_COLOR_MAP).find(k => runeName.includes(k)) || 'Precisión'] || '#c8aa6e',
      };
    }
  }
  // Check for path name in rune
  for (const [path, color] of Object.entries(RUNE_COLOR_MAP)) {
    if (runeName.includes(path)) {
      return { url: '', color };
    }
  }
  return null;
}

export function getBuildExternalUrl(champName: string): { ugg: string; mobalytics: string; opgg: string } {
  const safe = champName.toLowerCase().replace(/ /g, '').replace(/'/g, '');
  return {
    ugg: `https://u.gg/lol/champions/${safe}/build`,
    mobalytics: `https://www.mobalytics.com/lol/champions/${safe}`,
    opgg: `https://www.op.gg/champions/${safe}`,
  };
}
