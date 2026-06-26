
export interface ChampionDB {
  id: string;
  name: string;
  title: string;
  role: "Top" | "Jungle" | "Mid" | "ADC" | "Support";
  difficulty: 1 | 2 | 3 | 4 | 5;
  tier: "S" | "A" | "B" | "C" | "D";
  winRate: number;
  pickRate: number;
  banRate: number;
  counters: string[];
  synergies: string[];
  buildCore: string[];
  skillOrder: string;
  imgSlug: string;
}

export const champions: ChampionDB[] = [
  // ===== TOP =====
  { id: "aatrox", name: "Aatrox", title: "La Espada Oscuro", role: "Top", difficulty: 3, tier: "A", winRate: 50.8, pickRate: 6.2, banRate: 3.1, counters: ["Teemo", "Vayne", "Fiora"], synergies: ["Ornn", "Maokai"], buildCore: ["Eclipse", "Sundered Sky", "Sterak's Gage"], skillOrder: "Q>W>E", imgSlug: "Aatrox" },
  { id: "darius", name: "Darius", title: "El Gran General de Noxus", role: "Top", difficulty: 2, tier: "A", winRate: 51.2, pickRate: 5.8, banRate: 4.5, counters: ["Teemo", "Vayne", "Quinn"], synergies: ["Leona", "Draven"], buildCore: ["Stridebreaker", "Sundered Sky", "Death's Dance"], skillOrder: "Q>W>E", imgSlug: "Darius" },
  { id: "fiora", name: "Fiora", title: "La Duelista", role: "Top", difficulty: 4, tier: "S", winRate: 52.1, pickRate: 4.1, banRate: 2.8, counters: ["Pantheon", "Malphite", "Teemo"], synergies: ["Yuumi", "Lulu"], buildCore: ["Trinity Force", "Goredrinker", "Death's Dance"], skillOrder: "Q>E>W", imgSlug: "Fiora" },
  { id: "garen", name: "Garen", title: "El Poder de Demacia", role: "Top", difficulty: 1, tier: "B", winRate: 49.5, pickRate: 4.2, banRate: 0.5, counters: ["Teemo", "Darius", "Mordekaiser"], synergies: ["Yuumi", "Lux"], buildCore: ["Stridebreaker", "Black Cleaver", "Sterak's Gage"], skillOrder: "Q>E>W", imgSlug: "Garen" },
  { id: "kennen", name: "Kennen", title: "La Tormenta Retornante", role: "Top", difficulty: 3, tier: "A", winRate: 51.5, pickRate: 3.8, banRate: 1.2, counters: ["Garen", "Darius", "Sett"], synergies: ["Vladimir", "Mordekaiser"], buildCore: ["Hextech Rocketbelt", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Kennen" },
  { id: "malphite", name: "Malphite", title: "Monolito de Fragmentos", role: "Top", difficulty: 1, tier: "B", winRate: 49.8, pickRate: 3.5, banRate: 0.8, counters: ["Vayne", "Fiora", "Gangplank"], synergies: ["Amumu", "Nunu"], buildCore: ["Iceborn Gauntlet", "Abyssal Mask", "Sunfire Aegis"], skillOrder: "E>Q>W", imgSlug: "Malphite" },
  { id: "renekton", name: "Renekton", title: "El Preceptor de las Arenas", role: "Top", difficulty: 3, tier: "A", winRate: 50.4, pickRate: 5.1, banRate: 1.5, counters: ["Teemo", "Kennen", "Lillia"], synergies: ["Ornn", "Jarvan IV"], buildCore: ["Black Cleaver", "Sundered Sky", "Sterak's Gage"], skillOrder: "Q>W>E", imgSlug: "Renekton" },
  { id: "sett", name: "Sett", title: "El Jefe", role: "Top", difficulty: 2, tier: "A", winRate: 50.9, pickRate: 4.6, banRate: 1.8, counters: ["Teemo", "Darius", "Gwen"], synergies: ["Leona", "Gragas"], buildCore: ["Stridebreaker", "Sundered Sky", "Death's Dance"], skillOrder: "Q>E>W", imgSlug: "Sett" },

  // ===== JUNGLE =====
  { id: "lee-sin", name: "Lee Sin", title: "El Monje Ciego", role: "Jungle", difficulty: 5, tier: "A", winRate: 48.9, pickRate: 7.5, banRate: 2.1, counters: ["Lillia", "Nunu", "Zac"], synergies: ["Thresh", "Braum"], buildCore: ["Eclipse", "Sundered Sky", "Death's Dance"], skillOrder: "Q>W>E", imgSlug: "LeeSin" },
  { id: "viego", name: "Viego", title: "El Rey Ruinado", role: "Jungle", difficulty: 4, tier: "S", winRate: 52.5, pickRate: 8.2, banRate: 12.5, counters: ["Poppy", "Lillia", "Nunu"], synergies: ["Ahri", "Syndra"], buildCore: ["Eclipse", "Sundered Sky", "Chempunk Chainsword"], skillOrder: "Q>W>E", imgSlug: "Viego" },
  { id: "evelynn", name: "Evelynn", title: "La Viuda Agreste", role: "Jungle", difficulty: 4, tier: "A", winRate: 50.2, pickRate: 5.1, banRate: 3.8, counters: ["Lee Sin", "Nidalee", "Trundle"], synergies: ["Morgana", "Lux"], buildCore: ["Hextech Rocketbelt", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>E>W", imgSlug: "Evelynn" },
  { id: "lillia", name: "Lillia", title: "La Cenicienta Bromeliacea", role: "Jungle", difficulty: 3, tier: "B", winRate: 49.1, pickRate: 3.8, banRate: 0.9, counters: ["Lee Sin", "Nunu", "Kha'Zix"], synergies: ["Gragas", "Lulu"], buildCore: ["Liandry's Anguish", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Lillia" },
  { id: "master-yi", name: "Master Yi", title: "El Estudiante de Wuju", role: "Jungle", difficulty: 2, tier: "B", winRate: 50.5, pickRate: 5.5, banRate: 1.2, counters: ["Warwick", "Lillia", "Nunu"], synergies: ["Yuumi", "Lulu"], buildCore: ["Guinsoo's Rageblade", "Kraken Slayer", "Wit's End"], skillOrder: "Q>W>E", imgSlug: "MasterYi" },
  { id: "reksai", name: "Rek'Sai", title: "El Vacio Abismo", role: "Jungle", difficulty: 4, tier: "A", winRate: 51.8, pickRate: 4.2, banRate: 2.5, counters: ["Nunu", "Zac", "Lee Sin"], synergies: ["Taliyah", "Gangplank"], buildCore: ["Stridebreaker", "Sundered Sky", "Death's Dance"], skillOrder: "Q>W>E", imgSlug: "RekSai" },
  { id: "vi", name: "Vi", title: "La Agente de Piltover", role: "Jungle", difficulty: 2, tier: "A", winRate: 51.0, pickRate: 4.8, banRate: 1.5, counters: ["Zac", "Nunu", "Lillia"], synergies: ["Jinx", "Caitlyn"], buildCore: ["Eclipse", "Sundered Sky", "Black Cleaver"], skillOrder: "Q>E>W", imgSlug: "Vi" },
  { id: "xin-zhao", name: "Xin Zhao", title: "El Senescal de Demacia", role: "Jungle", difficulty: 2, tier: "B", winRate: 50.1, pickRate: 3.2, banRate: 0.6, counters: ["Lillia", "Nunu", "Jax"], synergies: ["Leona", "Wukong"], buildCore: ["Eclipse", "Sundered Sky", "Sterak's Gage"], skillOrder: "Q>W>E", imgSlug: "XinZhao" },

  // ===== MID =====
  { id: "ahri", name: "Ahri", title: "La Zorra de Nueve Colas", role: "Mid", difficulty: 3, tier: "A", winRate: 51.3, pickRate: 6.8, banRate: 2.2, counters: ["Syndra", "Annie", "Malzahar"], synergies: ["Yasuo", "Yone"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Ahri" },
  { id: "akali", name: "Akali", title: "La Asesina de la Fenix", role: "Mid", difficulty: 5, tier: "A", winRate: 49.5, pickRate: 4.2, banRate: 1.8, counters: ["Malzahar", "Annie", "Diana"], synergies: ["Kennen", "Yasuo"], buildCore: ["Hextech Rocketbelt", "Rabadon's Deathcap", "Lich Bane"], skillOrder: "Q>E>W", imgSlug: "Akali" },
  { id: "anivia", name: "Anivia", title: "La Cigüeña Criofenix", role: "Mid", difficulty: 4, tier: "B", winRate: 51.2, pickRate: 2.1, banRate: 0.3, counters: ["Katarina", "Zed", "Yasuo"], synergies: ["Braum", "Ashe"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Seraph's Embrace"], skillOrder: "Q>E>W", imgSlug: "Anivia" },
  { id: "katarina", name: "Katarina", title: "La Sin Cuchilla", role: "Mid", difficulty: 5, tier: "A", winRate: 50.0, pickRate: 4.5, banRate: 1.9, counters: ["Malzahar", "Annie", "Diana"], synergies: ["Viego", "Talon"], buildCore: ["Hextech Rocketbelt", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>E>W", imgSlug: "Katarina" },
  { id: "orianna", name: "Orianna", title: "La Dama de Relojes", role: "Mid", difficulty: 4, tier: "S", winRate: 52.3, pickRate: 5.5, banRate: 2.8, counters: ["Zed", "Katarina", "Fizz"], synergies: ["Wukong", "Malphite", "Jarvan IV"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Seraph's Embrace"], skillOrder: "Q>W>E", imgSlug: "Orianna" },
  { id: "syndra", name: "Syndra", title: "La Soberana Oscura", role: "Mid", difficulty: 4, tier: "S", winRate: 52.8, pickRate: 5.1, banRate: 4.2, counters: ["Zed", "Talon", "Katarina"], synergies: ["Amumu", "Malphite"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Syndra" },
  { id: "yasuo", name: "Yasuo", title: "El Desafinado", role: "Mid", difficulty: 5, tier: "B", winRate: 48.5, pickRate: 6.2, banRate: 5.1, counters: ["Annie", "Malzahar", "Poppy"], synergies: ["Ahri", "Yone", "Gragas"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>E>W", imgSlug: "Yasuo" },
  { id: "zed", name: "Zed", title: "El Maestro de Sombras", role: "Mid", difficulty: 5, tier: "A", winRate: 49.8, pickRate: 5.8, banRate: 3.5, counters: ["Malzahar", "Annie", "Lissandra"], synergies: ["Talon", "Viego"], buildCore: ["Youmuu's Ghostblade", "Edge of Night", "Serylda's Grudge"], skillOrder: "Q>E>W", imgSlug: "Zed" },

  // ===== ADC =====
  { id: "caitlyn", name: "Caitlyn", title: "La Sheriff de Piltover", role: "ADC", difficulty: 2, tier: "S", winRate: 52.0, pickRate: 8.5, banRate: 5.8, counters: ["Lucian", "Draven", "Samira"], synergies: ["Morgana", "Lulu"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>E>W", imgSlug: "Caitlyn" },
  { id: "draven", name: "Draven", title: "El Gladiador", role: "ADC", difficulty: 4, tier: "A", winRate: 50.5, pickRate: 4.2, banRate: 2.1, counters: ["Vayne", "Ashe", "Caitlyn"], synergies: ["Leona", "Thresh", "Naut"], buildCore: ["Bloodthirster", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>W>E", imgSlug: "Draven" },
  { id: "jhin", name: "Jhin", title: "El Virtuoso", role: "ADC", difficulty: 3, tier: "A", winRate: 50.8, pickRate: 6.5, banRate: 2.5, counters: ["Lucian", "Samira", "Vayne"], synergies: ["Morgana", "Thresh"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Serpent's Fang"], skillOrder: "Q>W>E", imgSlug: "Jhin" },
  { id: "jinx", name: "Jinx", title: "La Pequena Criminal Arcana", role: "ADC", difficulty: 2, tier: "S", winRate: 51.5, pickRate: 9.2, banRate: 6.1, counters: ["Draven", "Samira", "Lucian"], synergies: ["Janna", "Thresh"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>W>E", imgSlug: "Jinx" },
  { id: "kaisa", name: "Kai'Sa", title: "La Hija del Vacio", role: "ADC", difficulty: 4, tier: "A", winRate: 50.2, pickRate: 7.8, banRate: 2.8, counters: ["Draven", "Lucian", "Varus"], synergies: ["Rakan", "Braum"], buildCore: ["Kraken Slayer", "Guinsoo's Rageblade", "Lord Dominik's Regards"], skillOrder: "Q>E>W", imgSlug: "Kaisa" },
  { id: "lucian", name: "Lucian", title: "El Purificador", role: "ADC", difficulty: 3, tier: "A", winRate: 50.0, pickRate: 5.8, banRate: 1.2, counters: ["Vayne", "Ashe", "Jinx"], synergies: ["Nami", "Thresh"], buildCore: ["Eclipse", "Sundered Sky", "Serylda's Grudge"], skillOrder: "Q>E>W", imgSlug: "Lucian" },
  { id: "vayne", name: "Vayne", title: "La Cazadora Nocturna", role: "ADC", difficulty: 5, tier: "B", winRate: 49.8, pickRate: 3.5, banRate: 1.5, counters: ["Draven", "Caitlyn", "Ashe"], synergies: ["Lulu", "Yuumi", "Braum"], buildCore: ["Kraken Slayer", "Guinsoo's Rageblade", "Wit's End"], skillOrder: "Q>W>E", imgSlug: "Vayne" },

  // ===== SUPPORT =====
  { id: "leona", name: "Leona", title: "La Radiante del Amanecer", role: "Support", difficulty: 2, tier: "A", winRate: 50.8, pickRate: 5.5, banRate: 1.8, counters: ["Morgana", "Janna", "Zyra"], synergies: ["Caitlyn", "Jinx", "Varus"], buildCore: ["Locket of the Iron Solari", "Knight's Vow", "Redemption"], skillOrder: "E>Q>W", imgSlug: "Leona" },
  { id: "lulu", name: "Lulu", title: "La Hada Bruja", role: "Support", difficulty: 3, tier: "S", winRate: 52.5, pickRate: 6.2, banRate: 3.5, counters: ["Leona", "Nautilus", "Pyke"], synergies: ["Vayne", "Kai'Sa", "Jinx"], buildCore: ["Redemption", "Ardent Censer", "Staff of Flowing Water"], skillOrder: "E>W>Q", imgSlug: "Lulu" },
  { id: "morgana", name: "Morgana", title: "La Cautiva Condenada", role: "Support", difficulty: 2, tier: "A", winRate: 51.0, pickRate: 7.1, banRate: 2.2, counters: ["Leona", "Thresh", "Nautilus"], synergies: ["Caitlyn", "Ashe", "Jinx"], buildCore: ["Redemption", "Ardent Censer", "Staff of Flowing Water"], skillOrder: "Q>W>E", imgSlug: "Morgana" },
  { id: "nautilus", name: "Nautilus", title: "El Titán de las Profundidades", role: "Support", difficulty: 2, tier: "A", winRate: 50.5, pickRate: 4.8, banRate: 1.5, counters: ["Morgana", "Janna", "Lux"], synergies: ["Caitlyn", "Ashe", "Jinx"], buildCore: ["Locket of the Iron Solari", "Knight's Vow", "Redemption"], skillOrder: "Q>E>W", imgSlug: "Nautilus" },
  { id: "thresh", name: "Thresh", title: "El Guardapuertas", role: "Support", difficulty: 4, tier: "S", winRate: 51.8, pickRate: 8.8, banRate: 4.5, counters: ["Morgana", "Janna", "Soraka"], synergies: ["Caitlyn", "Lucian", "Draven"], buildCore: ["Locket of the Iron Solari", "Redemption", "Mikael's Blessing"], skillOrder: "Q>W>E", imgSlug: "Thresh" },
  { id: "yuumi", name: "Yuumi", title: "El Libro Magico", role: "Support", difficulty: 1, tier: "B", winRate: 49.5, pickRate: 3.2, banRate: 1.2, counters: ["Leona", "Nautilus", "Blitzcrank"], synergies: ["Vayne", "Master Yi", "Kai'Sa"], buildCore: ["Ardent Censer", "Staff of Flowing Water", "Redemption"], skillOrder: "Q>E>W", imgSlug: "Yuumi" },
];

export function getChampionsByRole(role: ChampionDB["role"]): ChampionDB[] {
  return champions.filter(c => c.role === role).sort((a, b) => {
    const tierOrder = { S: 0, A: 1, B: 2, C: 3, D: 4 };
    return tierOrder[a.tier] - tierOrder[b.tier];
  });
}

export function getChampionByName(name: string): ChampionDB | undefined {
  return champions.find(c => c.name.toLowerCase() === name.toLowerCase());
}

export function searchChampions(query: string): ChampionDB[] {
  const q = query.toLowerCase();
  return champions.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.title.toLowerCase().includes(q) ||
    c.role.toLowerCase().includes(q)
  );
}
