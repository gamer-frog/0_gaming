
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
  { id: "camille", name: "Camille", title: "The Steel Shadow", role: "Top", difficulty: 4, tier: "A", winRate: 50.6, pickRate: 3.9, banRate: 2.0, counters: ["Teemo", "Jayce", "Quinn"], synergies: ["Ornn", "Zac"], buildCore: ["Trinity Force", "Sundered Sky", "Death's Dance"], skillOrder: "Q>E>W", imgSlug: "Camille" },
  { id: "gwen", name: "Gwen", title: "The Seamstress", role: "Top", difficulty: 3, tier: "A", winRate: 51.0, pickRate: 4.0, banRate: 1.4, counters: ["Malphite", "Darius", "Sett"], synergies: ["Lulu", "Yuumi"], buildCore: ["Nashor's Tooth", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Gwen" },
  { id: "jax", name: "Jax", title: "Grandmaster at Arms", role: "Top", difficulty: 3, tier: "B", winRate: 50.2, pickRate: 4.5, banRate: 1.0, counters: ["Teemo", "Vayne", "Quinn"], synergies: ["Lulu", "Yuumi"], buildCore: ["Trinity Force", "Sundered Sky", "Sterak's Gage"], skillOrder: "Q>W>E", imgSlug: "Jax" },
  { id: "jayce", name: "Jayce", title: "The Defender of Tomorrow", role: "Top", difficulty: 4, tier: "A", winRate: 50.8, pickRate: 3.2, banRate: 0.8, counters: ["Malphite", "Poppy", "Renekton"], synergies: ["Orianna", "Syndra"], buildCore: ["Eclipse", "Serylda's Grudge", "Edge of Night"], skillOrder: "Q>E>W", imgSlug: "Jayce" },
  { id: "ornn", name: "Ornn", title: "The Fire below the Mountain", role: "Top", difficulty: 2, tier: "B", winRate: 49.6, pickRate: 2.8, banRate: 0.4, counters: ["Vayne", "Gwen", "Fiora"], synergies: ["Camille", "Renekton"], buildCore: ["Iceborn Gauntlet", "Sunfire Aegis", "Abyssal Mask"], skillOrder: "W>Q>E", imgSlug: "Ornn" },
  { id: "poppy", name: "Poppy", title: "Keeper of the Hammer", role: "Top", difficulty: 2, tier: "B", winRate: 50.0, pickRate: 2.1, banRate: 0.3, counters: ["Teemo", "Vayne", "Kayle"], synergies: ["Lulu", "Janna"], buildCore: ["Iceborn Gauntlet", "Sunfire Aegis", "Knight's Vow"], skillOrder: "E>Q>W", imgSlug: "Poppy" },

  // ===== JUNGLE =====
  { id: "lee-sin", name: "Lee Sin", title: "El Monje Ciego", role: "Jungle", difficulty: 5, tier: "A", winRate: 48.9, pickRate: 7.5, banRate: 2.1, counters: ["Lillia", "Nunu", "Zac"], synergies: ["Thresh", "Braum"], buildCore: ["Eclipse", "Sundered Sky", "Death's Dance"], skillOrder: "Q>W>E", imgSlug: "LeeSin" },
  { id: "viego", name: "Viego", title: "El Rey Ruinado", role: "Jungle", difficulty: 4, tier: "S", winRate: 52.5, pickRate: 8.2, banRate: 12.5, counters: ["Poppy", "Lillia", "Nunu"], synergies: ["Ahri", "Syndra"], buildCore: ["Eclipse", "Sundered Sky", "Chempunk Chainsword"], skillOrder: "Q>W>E", imgSlug: "Viego" },
  { id: "evelynn", name: "Evelynn", title: "La Viuda Agreste", role: "Jungle", difficulty: 4, tier: "A", winRate: 50.2, pickRate: 5.1, banRate: 3.8, counters: ["Lee Sin", "Nidalee", "Trundle"], synergies: ["Morgana", "Lux"], buildCore: ["Hextech Rocketbelt", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>E>W", imgSlug: "Evelynn" },
  { id: "lillia", name: "Lillia", title: "La Cenicienta Bromeliacea", role: "Jungle", difficulty: 3, tier: "B", winRate: 49.1, pickRate: 3.8, banRate: 0.9, counters: ["Lee Sin", "Nunu", "Kha'Zix"], synergies: ["Gragas", "Lulu"], buildCore: ["Liandry's Anguish", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Lillia" },
  { id: "master-yi", name: "Master Yi", title: "El Estudiante de Wuju", role: "Jungle", difficulty: 2, tier: "B", winRate: 50.5, pickRate: 5.5, banRate: 1.2, counters: ["Warwick", "Lillia", "Nunu"], synergies: ["Yuumi", "Lulu"], buildCore: ["Guinsoo's Rageblade", "Kraken Slayer", "Wit's End"], skillOrder: "Q>W>E", imgSlug: "MasterYi" },
  { id: "reksai", name: "Rek'Sai", title: "El Vacio Abismo", role: "Jungle", difficulty: 4, tier: "A", winRate: 51.8, pickRate: 4.2, banRate: 2.5, counters: ["Nunu", "Zac", "Lee Sin"], synergies: ["Taliyah", "Gangplank"], buildCore: ["Stridebreaker", "Sundered Sky", "Death's Dance"], skillOrder: "Q>W>E", imgSlug: "RekSai" },
  { id: "vi", name: "Vi", title: "La Agente de Piltover", role: "Jungle", difficulty: 2, tier: "A", winRate: 51.0, pickRate: 4.8, banRate: 1.5, counters: ["Zac", "Nunu", "Lillia"], synergies: ["Jinx", "Caitlyn"], buildCore: ["Eclipse", "Sundered Sky", "Black Cleaver"], skillOrder: "Q>E>W", imgSlug: "Vi" },
  { id: "xin-zhao", name: "Xin Zhao", title: "El Senescal de Demacia", role: "Jungle", difficulty: 2, tier: "B", winRate: 50.1, pickRate: 3.2, banRate: 0.6, counters: ["Lillia", "Nunu", "Jax"], synergies: ["Leona", "Wukong"], buildCore: ["Eclipse", "Sundered Sky", "Sterak's Gage"], skillOrder: "Q>W>E", imgSlug: "XinZhao" },
  { id: "kha-zix", name: "Kha'Zix", title: "The Voidreaver", role: "Jungle", difficulty: 4, tier: "A", winRate: 50.9, pickRate: 4.0, banRate: 1.8, counters: ["Lee Sin", "Nunu", "Rek'Sai"], synergies: ["Ahri", "Zed"], buildCore: ["Youmuu's Ghostblade", "Edge of Night", "Serylda's Grudge"], skillOrder: "Q>W>E", imgSlug: "Khazix" },
  { id: "nunu", name: "Nunu", title: "The Yeti Rider", role: "Jungle", difficulty: 1, tier: "B", winRate: 50.3, pickRate: 3.5, banRate: 0.7, counters: ["Warwick", "Shyvana", "Volibear"], synergies: ["Ashe", "Caitlyn"], buildCore: ["Sunfire Aegis", "Abyssal Mask", "Knight's Vow"], skillOrder: "Q>W>E", imgSlug: "Nunu" },
  { id: "warwick", name: "Warwick", title: "The Uncaged Wrath of Zaun", role: "Jungle", difficulty: 1, tier: "B", winRate: 51.0, pickRate: 4.2, banRate: 1.0, counters: ["Nunu", "Lillia", "Zac"], synergies: ["Jinx", "Caitlyn"], buildCore: ["Stridebreaker", "Sundered Sky", "Wit's End"], skillOrder: "Q>W>E", imgSlug: "Warwick" },
  { id: "zac", name: "Zac", title: "The Secret Weapon", role: "Jungle", difficulty: 3, tier: "A", winRate: 51.2, pickRate: 3.0, banRate: 1.5, counters: ["Lee Sin", "Nunu", "Elise"], synergies: ["Orianna", "Syndra", "Ahri"], buildCore: ["Sunfire Aegis", "Abyssal Mask", "Knight's Vow"], skillOrder: "Q>W>E", imgSlug: "Zac" },

  // ===== MID =====
  { id: "ahri", name: "Ahri", title: "La Zorra de Nueve Colas", role: "Mid", difficulty: 3, tier: "A", winRate: 51.3, pickRate: 6.8, banRate: 2.2, counters: ["Syndra", "Annie", "Malzahar"], synergies: ["Yasuo", "Yone"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Ahri" },
  { id: "akali", name: "Akali", title: "La Asesina de la Fenix", role: "Mid", difficulty: 5, tier: "A", winRate: 49.5, pickRate: 4.2, banRate: 1.8, counters: ["Malzahar", "Annie", "Diana"], synergies: ["Kennen", "Yasuo"], buildCore: ["Hextech Rocketbelt", "Rabadon's Deathcap", "Lich Bane"], skillOrder: "Q>E>W", imgSlug: "Akali" },
  { id: "anivia", name: "Anivia", title: "La Cigüeña Criofenix", role: "Mid", difficulty: 4, tier: "B", winRate: 51.2, pickRate: 2.1, banRate: 0.3, counters: ["Katarina", "Zed", "Yasuo"], synergies: ["Braum", "Ashe"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Seraph's Embrace"], skillOrder: "Q>E>W", imgSlug: "Anivia" },
  { id: "katarina", name: "Katarina", title: "La Sin Cuchilla", role: "Mid", difficulty: 5, tier: "A", winRate: 50.0, pickRate: 4.5, banRate: 1.9, counters: ["Malzahar", "Annie", "Diana"], synergies: ["Viego", "Talon"], buildCore: ["Hextech Rocketbelt", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>E>W", imgSlug: "Katarina" },
  { id: "orianna", name: "Orianna", title: "La Dama de Relojes", role: "Mid", difficulty: 4, tier: "S", winRate: 52.3, pickRate: 5.5, banRate: 2.8, counters: ["Zed", "Katarina", "Fizz"], synergies: ["Wukong", "Malphite", "Jarvan IV"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Seraph's Embrace"], skillOrder: "Q>W>E", imgSlug: "Orianna" },
  { id: "syndra", name: "Syndra", title: "La Soberana Oscura", role: "Mid", difficulty: 4, tier: "S", winRate: 52.8, pickRate: 5.1, banRate: 4.2, counters: ["Zed", "Talon", "Katarina"], synergies: ["Amumu", "Malphite"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Syndra" },
  { id: "yasuo", name: "Yasuo", title: "El Desafinado", role: "Mid", difficulty: 5, tier: "B", winRate: 48.5, pickRate: 6.2, banRate: 5.1, counters: ["Annie", "Malzahar", "Poppy"], synergies: ["Ahri", "Yone", "Gragas"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>E>W", imgSlug: "Yasuo" },
  { id: "zed", name: "Zed", title: "El Maestro de Sombras", role: "Mid", difficulty: 5, tier: "A", winRate: 49.8, pickRate: 5.8, banRate: 3.5, counters: ["Malzahar", "Annie", "Lissandra"], synergies: ["Talon", "Viego"], buildCore: ["Youmuu's Ghostblade", "Edge of Night", "Serylda's Grudge"], skillOrder: "Q>E>W", imgSlug: "Zed" },
  { id: "annie", name: "Annie", title: "The Dark Child", role: "Mid", difficulty: 1, tier: "B", winRate: 51.0, pickRate: 2.5, banRate: 0.2, counters: ["Zed", "Yasuo", "Katarina"], synergies: ["Amumu", "Malphite"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Annie" },
  { id: "diana", name: "Diana", title: "Scorn of the Moon", role: "Mid", difficulty: 3, tier: "A", winRate: 51.5, pickRate: 3.8, banRate: 1.5, counters: ["Malzahar", "Annie", "Lissandra"], synergies: ["Rek'Sai", "Vi"], buildCore: ["Nashor's Tooth", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Diana" },
  { id: "fizz", name: "Fizz", title: "The Tidal Trickster", role: "Mid", difficulty: 4, tier: "B", winRate: 50.2, pickRate: 3.5, banRate: 1.2, counters: ["Malzahar", "Annie", "Lissandra"], synergies: ["Nunu", "Zac"], buildCore: ["Hextech Rocketbelt", "Rabadon's Deathcap", "Lich Bane"], skillOrder: "Q>W>E", imgSlug: "Fizz" },
  { id: "malzahar", name: "Malzahar", title: "The Prophet of the Void", role: "Mid", difficulty: 2, tier: "A", winRate: 52.0, pickRate: 4.0, banRate: 3.0, counters: ["Zed", "Katarina", "Yasuo"], synergies: ["Amumu", "Wukong"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Malzahar" },
  { id: "talon", name: "Talon", title: "The Blade's Shadow", role: "Mid", difficulty: 4, tier: "A", winRate: 50.5, pickRate: 3.0, banRate: 1.0, counters: ["Malzahar", "Annie", "Lissandra"], synergies: ["Zed", "Viego"], buildCore: ["Youmuu's Ghostblade", "Edge of Night", "Serylda's Grudge"], skillOrder: "Q>W>E", imgSlug: "Talon" },
  { id: "vex", name: "Vex", title: "The Gloomist", role: "Mid", difficulty: 3, tier: "B", winRate: 50.1, pickRate: 2.8, banRate: 0.9, counters: ["Zed", "Yasuo", "Katarina"], synergies: ["Malphite", "Wukong"], buildCore: ["Luden's Companion", "Rabadon's Deathcap", "Void Staff"], skillOrder: "Q>W>E", imgSlug: "Vex" },

  // ===== ADC =====
  { id: "caitlyn", name: "Caitlyn", title: "La Sheriff de Piltover", role: "ADC", difficulty: 2, tier: "S", winRate: 52.0, pickRate: 8.5, banRate: 5.8, counters: ["Lucian", "Draven", "Samira"], synergies: ["Morgana", "Lulu"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>E>W", imgSlug: "Caitlyn" },
  { id: "draven", name: "Draven", title: "El Gladiador", role: "ADC", difficulty: 4, tier: "A", winRate: 50.5, pickRate: 4.2, banRate: 2.1, counters: ["Vayne", "Ashe", "Caitlyn"], synergies: ["Leona", "Thresh", "Naut"], buildCore: ["Bloodthirster", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>W>E", imgSlug: "Draven" },
  { id: "jhin", name: "Jhin", title: "El Virtuoso", role: "ADC", difficulty: 3, tier: "A", winRate: 50.8, pickRate: 6.5, banRate: 2.5, counters: ["Lucian", "Samira", "Vayne"], synergies: ["Morgana", "Thresh"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Serpent's Fang"], skillOrder: "Q>W>E", imgSlug: "Jhin" },
  { id: "jinx", name: "Jinx", title: "La Pequena Criminal Arcana", role: "ADC", difficulty: 2, tier: "S", winRate: 51.5, pickRate: 9.2, banRate: 6.1, counters: ["Draven", "Samira", "Lucian"], synergies: ["Janna", "Thresh"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>W>E", imgSlug: "Jinx" },
  { id: "kaisa", name: "Kai'Sa", title: "La Hija del Vacio", role: "ADC", difficulty: 4, tier: "A", winRate: 50.2, pickRate: 7.8, banRate: 2.8, counters: ["Draven", "Lucian", "Varus"], synergies: ["Rakan", "Braum"], buildCore: ["Kraken Slayer", "Guinsoo's Rageblade", "Lord Dominik's Regards"], skillOrder: "Q>E>W", imgSlug: "Kaisa" },
  { id: "lucian", name: "Lucian", title: "El Purificador", role: "ADC", difficulty: 3, tier: "A", winRate: 50.0, pickRate: 5.8, banRate: 1.2, counters: ["Vayne", "Ashe", "Jinx"], synergies: ["Nami", "Thresh"], buildCore: ["Eclipse", "Sundered Sky", "Serylda's Grudge"], skillOrder: "Q>E>W", imgSlug: "Lucian" },
  { id: "vayne", name: "Vayne", title: "La Cazadora Nocturna", role: "ADC", difficulty: 5, tier: "B", winRate: 49.8, pickRate: 3.5, banRate: 1.5, counters: ["Draven", "Caitlyn", "Ashe"], synergies: ["Lulu", "Yuumi", "Braum"], buildCore: ["Kraken Slayer", "Guinsoo's Rageblade", "Wit's End"], skillOrder: "Q>W>E", imgSlug: "Vayne" },
  { id: "ashe", name: "Ashe", title: "The Frost Archer", role: "ADC", difficulty: 2, tier: "A", winRate: 51.2, pickRate: 5.5, banRate: 1.0, counters: ["Draven", "Lucian", "Caitlyn"], synergies: ["Morgana", "Nautilus", "Leona"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>W>E", imgSlug: "Ashe" },
  { id: "samira", name: "Samira", title: "The Desert Rose", role: "ADC", difficulty: 4, tier: "A", winRate: 50.8, pickRate: 6.0, banRate: 3.5, counters: ["Jinx", "Caitlyn", "Ashe"], synergies: ["Thresh", "Leona", "Nautilus"], buildCore: ["Immortal Shieldbow", "Infinity Edge", "Lord Dominik's Regards"], skillOrder: "Q>E>W", imgSlug: "Samira" },
  { id: "varus", name: "Varus", title: "The Arrow of Retribution", role: "ADC", difficulty: 3, tier: "A", winRate: 51.0, pickRate: 4.8, banRate: 1.2, counters: ["Draven", "Lucian", "Vayne"], synergies: ["Morgana", "Thresh", "Nautilus"], buildCore: ["Eclipse", "Serylda's Grudge", "Lord Dominik's Regards"], skillOrder: "Q>W>E", imgSlug: "Varus" },
  { id: "ezreal", name: "Ezreal", title: "The Prodigal Explorer", role: "ADC", difficulty: 4, tier: "B", winRate: 49.5, pickRate: 5.2, banRate: 0.8, counters: ["Draven", "Caitlyn", "Lucian"], synergies: ["Yuumi", "Morgana", "Lulu"], buildCore: ["Eclipse", "Serylda's Grudge", "Lord Dominik's Regards"], skillOrder: "Q>W>E", imgSlug: "Ezreal" },

  // ===== SUPPORT =====
  { id: "leona", name: "Leona", title: "La Radiante del Amanecer", role: "Support", difficulty: 2, tier: "A", winRate: 50.8, pickRate: 5.5, banRate: 1.8, counters: ["Morgana", "Janna", "Zyra"], synergies: ["Caitlyn", "Jinx", "Varus"], buildCore: ["Locket of the Iron Solari", "Knight's Vow", "Redemption"], skillOrder: "E>Q>W", imgSlug: "Leona" },
  { id: "lulu", name: "Lulu", title: "La Hada Bruja", role: "Support", difficulty: 3, tier: "S", winRate: 52.5, pickRate: 6.2, banRate: 3.5, counters: ["Leona", "Nautilus", "Pyke"], synergies: ["Vayne", "Kai'Sa", "Jinx"], buildCore: ["Redemption", "Ardent Censer", "Staff of Flowing Water"], skillOrder: "E>W>Q", imgSlug: "Lulu" },
  { id: "morgana", name: "Morgana", title: "La Cautiva Condenada", role: "Support", difficulty: 2, tier: "A", winRate: 51.0, pickRate: 7.1, banRate: 2.2, counters: ["Leona", "Thresh", "Nautilus"], synergies: ["Caitlyn", "Ashe", "Jinx"], buildCore: ["Redemption", "Ardent Censer", "Staff of Flowing Water"], skillOrder: "Q>W>E", imgSlug: "Morgana" },
  { id: "nautilus", name: "Nautilus", title: "El Titán de las Profundidades", role: "Support", difficulty: 2, tier: "A", winRate: 50.5, pickRate: 4.8, banRate: 1.5, counters: ["Morgana", "Janna", "Lux"], synergies: ["Caitlyn", "Ashe", "Jinx"], buildCore: ["Locket of the Iron Solari", "Knight's Vow", "Redemption"], skillOrder: "Q>E>W", imgSlug: "Nautilus" },
  { id: "thresh", name: "Thresh", title: "El Guardapuertas", role: "Support", difficulty: 4, tier: "S", winRate: 51.8, pickRate: 8.8, banRate: 4.5, counters: ["Morgana", "Janna", "Soraka"], synergies: ["Caitlyn", "Lucian", "Draven"], buildCore: ["Locket of the Iron Solari", "Redemption", "Mikael's Blessing"], skillOrder: "Q>W>E", imgSlug: "Thresh" },
  { id: "yuumi", name: "Yuumi", title: "El Libro Magico", role: "Support", difficulty: 1, tier: "B", winRate: 49.5, pickRate: 3.2, banRate: 1.2, counters: ["Leona", "Nautilus", "Blitzcrank"], synergies: ["Vayne", "Master Yi", "Kai'Sa"], buildCore: ["Ardent Censer", "Staff of Flowing Water", "Redemption"], skillOrder: "Q>E>W", imgSlug: "Yuumi" },
  { id: "janna", name: "Janna", title: "The Storm's Fury", role: "Support", difficulty: 3, tier: "A", winRate: 51.5, pickRate: 5.0, banRate: 1.0, counters: ["Leona", "Nautilus", "Blitzcrank"], synergies: ["Jinx", "Kog'Maw", "Vayne"], buildCore: ["Moonstone Renewer", "Ardent Censer", "Staff of Flowing Water"], skillOrder: "E>W>Q", imgSlug: "Janna" },
  { id: "nami", name: "Nami", title: "The Tidecaller", role: "Support", difficulty: 3, tier: "A", winRate: 51.2, pickRate: 5.5, banRate: 1.2, counters: ["Leona", "Nautilus", "Pyke"], synergies: ["Lucian", "Jhin", "Ashe"], buildCore: ["Moonstone Renewer", "Ardent Censer", "Staff of Flowing Water"], skillOrder: "W>Q>E", imgSlug: "Nami" },
  { id: "rakan", name: "Rakan", title: "The Charmer", role: "Support", difficulty: 4, tier: "A", winRate: 50.5, pickRate: 3.5, banRate: 0.5, counters: ["Morgana", "Nautilus", "Alistar"], synergies: ["Kai'Sa", "Xayah", "Vayne"], buildCore: ["Moonstone Renewer", "Redemption", "Mikael's Blessing"], skillOrder: "E>W>Q", imgSlug: "Rakan" },
  { id: "soraka", name: "Soraka", title: "The Starchild", role: "Support", difficulty: 1, tier: "B", winRate: 50.8, pickRate: 4.0, banRate: 0.3, counters: ["Thresh", "Blitzcrank", "Pyke"], synergies: ["Kog'Maw", "Jinx", "Vayne"], buildCore: ["Moonstone Renewer", "Ardent Censer", "Staff of Flowing Water"], skillOrder: "W>E>Q", imgSlug: "Soraka" },
  { id: "pyke", name: "Pyke", title: "The Bloodharbor Ripper", role: "Support", difficulty: 4, tier: "B", winRate: 49.8, pickRate: 3.8, banRate: 2.0, counters: ["Morgana", "Janna", "Lulu"], synergies: ["Draven", "Lucian", "Jhin"], buildCore: ["Youmuu's Ghostblade", "Edge of Night", "Serylda's Grudge"], skillOrder: "Q>E>W", imgSlug: "Pyke" },
  { id: "braum", name: "Braum", title: "The Heart of the Freljord", role: "Support", difficulty: 2, tier: "B", winRate: 50.2, pickRate: 3.0, banRate: 0.4, counters: ["Morgana", "Zyra", "Lux"], synergies: ["Caitlyn", "Jinx", "Varus"], buildCore: ["Locket of the Iron Solari", "Knight's Vow", "Redemption"], skillOrder: "E>Q>W", imgSlug: "Braum" },
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

export function getChampionImg(imgSlug: string): string {
  return `https://ddragon.leagueoflegends.com/cdn/15.1.1/img/champion/${imgSlug}.png`;
}
