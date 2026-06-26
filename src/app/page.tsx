'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Swords, Trophy, TrendingUp, Lightbulb,
  Search, ChevronDown, ChevronRight, Star, Zap, Eye, Brain, Target, BookOpen
} from 'lucide-react';

// Data
import { champions, getChampionsByRole, searchChampions, type ChampionDB } from '@/data/champions-db';
import { eloGuides, type EloRank } from '@/data/elo-guides';
import { tips, getTipsByCategory, type TipCategory, type TipDifficulty } from '@/data/tips-data';
import { currentMeta } from '@/data/meta-report';

// ============================================================
// TIER COLORS
// ============================================================
const tierColors: Record<string, string> = {
  S: 'from-amber-500 to-yellow-400 text-black',
  A: 'from-emerald-500 to-green-400 text-black',
  B: 'from-blue-500 to-cyan-400 text-white',
  C: 'from-slate-400 to-slate-500 text-white',
  D: 'from-red-500 to-red-700 text-white',
};

const tierBg: Record<string, string> = {
  S: 'bg-amber-500/10 border-amber-500/30',
  A: 'bg-emerald-500/10 border-emerald-500/30',
  B: 'bg-blue-500/10 border-blue-500/30',
  C: 'bg-slate-500/10 border-slate-500/30',
  D: 'bg-red-500/10 border-red-500/30',
};

const roles = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'] as const;
const tipCategories: { key: TipCategory; label: string; icon: React.ReactNode }[] = [
  { key: 'fundamental', label: 'Fundamental', icon: <BookOpen className="w-4 h-4" /> },
  { key: 'micro', label: 'Micro', icon: <Target className="w-4 h-4" /> },
  { key: 'macro', label: 'Macro', icon: <Eye className="w-4 h-4" /> },
  { key: 'mental', label: 'Mentalidad', icon: <Brain className="w-4 h-4" /> },
  { key: 'draft', label: 'Draft', icon: <Zap className="w-4 h-4" /> },
];

const tabs = [
  { id: 'guides', label: 'Guias de Elo', icon: <Shield className="w-5 h-5" /> },
  { id: 'champions', label: 'Campeones', icon: <Swords className="w-5 h-5" /> },
  { id: 'tierlist', label: 'Tier List', icon: <Trophy className="w-5 h-5" /> },
  { id: 'meta', label: 'Meta Report', icon: <TrendingUp className="w-5 h-5" /> },
  { id: 'tips', label: 'Tips', icon: <Lightbulb className="w-5 h-5" /> },
];

// ============================================================
// ELO GUIDES TAB
// ============================================================
function EloGuidesTab() {
  const [selectedRank, setSelectedRank] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'micro' | 'macro' | 'mentalidad' | 'draft'>('micro');

  const ranks = eloGuides.map(g => g.rank);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="lol-title text-3xl sm:text-4xl text-lol-gold mb-3">Guias por Rango</h1>
        <p className="text-lol-muted max-w-2xl mx-auto">Tips específicos para cada rango. Desde los basics de Iron hasta la maestría de Challenger. Seleccioná tu rango actual o el que querés alcanzar.</p>
      </div>

      {/* Rank selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {ranks.map(rank => {
          const guide = eloGuides.find(g => g.rank === rank)!;
          const isActive = selectedRank === rank;
          return (
            <motion.button
              key={rank}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedRank(isActive ? null : rank)}
              className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer text-left ${
                isActive
                  ? 'border-lol-gold bg-lol-gold/10 shadow-[0_0_20px_rgba(200,170,110,0.15)]'
                  : 'border-lol-gold-dark/20 bg-lol-card hover:border-lol-gold/40'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4" style={{ color: guide.color }} />
                <span className="lol-label text-sm font-bold" style={{ color: guide.color }}>{rank}</span>
              </div>
              <div className="flex gap-1 mt-2">
                {['micro', 'macro', 'mentalidad', 'draft'].map(s => (
                  <div key={s} className="h-1 flex-1 rounded-full" style={{ backgroundColor: isActive ? guide.color : 'rgba(200,170,110,0.15)' }} />
                ))}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Guide content */}
      <AnimatePresence mode="wait">
        {selectedRank && (
          <motion.div
            key={selectedRank}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {(() => {
              const guide = eloGuides.find(g => g.rank === selectedRank)!;
              const sections: { key: typeof activeSection; label: string; icon: React.ReactNode; data: string[] }[] = [
                { key: 'micro', label: 'MICRO', icon: <Target className="w-4 h-4" />, data: guide.micro },
                { key: 'macro', label: 'MACRO', icon: <Eye className="w-4 h-4" />, data: guide.macro },
                { key: 'mentalidad', label: 'MENTALIDAD', icon: <Brain className="w-4 h-4" />, data: guide.mentalidad },
                { key: 'draft', label: 'DRAFT', icon: <Zap className="w-4 h-4" />, data: guide.draft },
              ];
              return (
                <div className="rounded-2xl border border-lol-gold-dark/20 bg-lol-card overflow-hidden">
                  <div className="p-5 border-b border-lol-gold-dark/15" style={{ backgroundColor: guide.color + '15' }}>
                    <h2 className="lol-title text-2xl" style={{ color: guide.color }}>
                      {selectedRank} — Guia Completa
                    </h2>
                  </div>
                  {/* Section tabs */}
                  <div className="flex border-b border-lol-gold-dark/15">
                    {sections.map(s => (
                      <button
                        key={s.key}
                        onClick={() => setActiveSection(s.key)}
                        className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all border-b-2 ${
                          activeSection === s.key
                            ? 'border-lol-gold text-lol-gold'
                            : 'border-transparent text-lol-muted hover:text-lol-text'
                        }`}
                      >
                        {s.icon}
                        {s.label}
                      </button>
                    ))}
                  </div>
                  {/* Tips */}
                  <div className="p-5 space-y-4">
                    {sections.find(s => s.key === activeSection)!.data.map((tip, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex gap-3 p-4 rounded-xl bg-lol-bg/50 border border-lol-gold-dark/10"
                      >
                        <div className="w-6 h-6 rounded-full bg-lol-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-lol-gold">{i + 1}</span>
                        </div>
                        <p className="text-sm text-lol-text leading-relaxed">{tip}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedRank && (
        <div className="text-center py-12 text-lol-dim">
          <Shield className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>Seleccioná un rango para ver la guía completa</p>
        </div>
      )}
    </div>
  );
}

// ============================================================
// CHAMPIONS DATABASE TAB
// ============================================================
function ChampionsTab() {
  const [search, setSearch] = useState('');
  const [selectedChamp, setSelectedChamp] = useState<ChampionDB | null>(null);

  const filtered = useMemo(() => search ? searchChampions(search) : champions, [search]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="lol-title text-3xl sm:text-4xl text-lol-gold mb-3">Base de Campeones</h1>
        <p className="text-lol-muted max-w-2xl mx-auto">{champions.length} campeones con stats, builds, counters y sinergias curadas para el meta actual.</p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-lol-dim" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar campeón, rol..."
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-lol-card border border-lol-gold-dark/20 text-lol-text placeholder:text-lol-dim outline-none focus:border-lol-gold/50 transition-colors"
        />
      </div>

      {/* Champion grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map(champ => (
          <motion.div
            key={champ.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedChamp(selectedChamp?.id === champ.id ? null : champ)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              selectedChamp?.id === champ.id
                ? 'border-lol-gold bg-lol-gold/10'
                : `${tierBg[champ.tier]} hover:border-lol-gold/40`
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-bold text-lol-text text-lg">{champ.name}</h3>
                <p className="text-xs text-lol-dim">{champ.title}</p>
              </div>
              <div className={`px-2.5 py-1 rounded-lg bg-gradient-to-br font-bold text-xs ${tierColors[champ.tier]}`}>
                {champ.tier}
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-lol-muted">
              <span className="px-2 py-0.5 rounded bg-lol-bg/50 border border-lol-gold-dark/10">{champ.role}</span>
              <span>WR: <span className={champ.winRate >= 51 ? 'text-lol-green' : 'text-lol-text'}>{champ.winRate}%</span></span>
              <span>PR: {champ.pickRate}%</span>
              <span className="ml-auto">{'★'.repeat(champ.difficulty)}{'☆'.repeat(5 - champ.difficulty)}</span>
            </div>

            {/* Expanded details */}
            <AnimatePresence>
              {selectedChamp?.id === champ.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 pt-3 border-t border-lol-gold-dark/15 space-y-3">
                    <div>
                      <p className="text-xs text-lol-dim mb-1">BUILD CORE</p>
                      <div className="flex flex-wrap gap-1.5">
                        {champ.buildCore.map(item => (
                          <span key={item} className="px-2 py-0.5 rounded bg-lol-gold/10 text-lol-gold text-xs">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-lol-dim mb-1">SKILL ORDER</p>
                      <span className="px-2 py-0.5 rounded bg-lol-bg/50 text-lol-text text-xs border border-lol-gold-dark/10">{champ.skillOrder}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-lol-dim mb-1">COUNTERS</p>
                        <div className="flex flex-wrap gap-1">
                          {champ.counters.map(c => (
                            <span key={c} className="px-1.5 py-0.5 rounded text-xs bg-red-500/10 text-lol-danger border border-red-500/20">{c}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-lol-dim mb-1">SINERGIAS</p>
                        <div className="flex flex-wrap gap-1">
                          {champ.synergies.map(s => (
                            <span key={s} className="px-1.5 py-0.5 rounded text-xs bg-emerald-500/10 text-lol-green border border-emerald-500/20">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// TIER LIST TAB
// ============================================================
function TierListTab() {
  const [activeRole, setActiveRole] = useState<string>('Top');

  const roleChampions = useMemo(() => getChampionsByRole(activeRole as ChampionDB['role']), [activeRole]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="lol-title text-3xl sm:text-4xl text-lol-gold mb-3">Tier List</h1>
        <p className="text-lol-muted max-w-2xl mx-auto">Patch {currentMeta.patch} — Campeones clasificados por rol y tier. Actualizado cada patch.</p>
      </div>

      {/* Role tabs */}
      <div className="flex justify-center gap-2 flex-wrap">
        {roles.map(role => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeRole === role
                ? 'bg-lol-gold text-lol-bg'
                : 'bg-lol-card text-lol-muted hover:text-lol-text border border-lol-gold-dark/15'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Tier sections */}
      {(['S', 'A', 'B', 'C'] as const).map(tier => {
        const tierChamps = roleChampions.filter(c => c.tier === tier);
        if (tierChamps.length === 0) return null;
        return (
          <div key={tier} className={`rounded-2xl border-2 p-5 ${tierBg[tier]}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center font-black text-2xl ${tierColors[tier]}`}>
                {tier}
              </div>
              <div>
                <h3 className="font-bold text-lol-text text-lg">Tier {tier}</h3>
                <p className="text-xs text-lol-muted">{tierChamps.length} campeones en {activeRole}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {tierChamps.map(champ => (
                <div
                  key={champ.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-lol-bg/40 border border-lol-gold-dark/10"
                >
                  <div>
                    <p className="font-semibold text-lol-text text-sm">{champ.name}</p>
                    <p className="text-[11px] text-lol-dim">{champ.title}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-mono font-bold ${champ.winRate >= 51 ? 'text-lol-green' : 'text-lol-text'}`}>{champ.winRate}%</p>
                    <p className="text-[10px] text-lol-dim">PR {champ.pickRate}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// META REPORT TAB
// ============================================================
function MetaReportTab() {
  const m = currentMeta;
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="lol-title text-3xl sm:text-4xl text-lol-gold mb-3">Meta Report</h1>
        <p className="text-lol-muted">Patch {m.patch} — {m.date}</p>
      </div>

      {/* Summary */}
      <div className="p-6 rounded-2xl bg-lol-card border border-lol-gold-dark/20">
        <h2 className="lol-label text-lol-gold text-sm mb-3">RESUMEN DEL PATCH</h2>
        <p className="text-lol-text leading-relaxed">{m.summary}</p>
      </div>

      {/* Hot Topics */}
      <div className="p-6 rounded-2xl bg-lol-card border border-lol-gold-dark/20">
        <h2 className="lol-label text-lol-gold text-sm mb-4">HOT TOPICS</h2>
        <div className="space-y-2">
          {m.hotTopics.map((topic, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-lol-bg/40">
              <div className="w-6 h-6 rounded-full bg-lol-warning/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-lol-warning">!</span>
              </div>
              <p className="text-sm text-lol-text leading-relaxed">{topic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Champions Up / Down */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-lol-card border border-emerald-500/20">
          <h2 className="lol-label text-lol-green text-sm mb-4">CAMPEONES QUE SUBIERON</h2>
          <div className="space-y-3">
            {m.championsUp.map(c => (
              <div key={c.name} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center font-black text-sm ${tierColors[c.tier]}`}>{c.tier}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-lol-text text-sm">{c.name} <span className="text-lol-dim">· {c.role}</span></p>
                  <p className="text-xs text-lol-dim truncate">{c.change}</p>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${c.status === 'buffed' ? 'bg-emerald-500/20 text-lol-green' : c.status === 'new' ? 'bg-blue-500/20 text-blue-400' : 'bg-lol-gold/20 text-lol-gold'}`}>
                  {c.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-lol-card border border-red-500/20">
          <h2 className="lol-label text-lol-danger text-sm mb-4">CAMPEONES QUE BAJARON</h2>
          <div className="space-y-3">
            {m.championsDown.map(c => (
              <div key={c.name} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center font-black text-sm ${tierColors[c.tier]}`}>{c.tier}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-lol-text text-sm">{c.name} <span className="text-lol-dim">· {c.role}</span></p>
                  <p className="text-xs text-lol-dim truncate">{c.change}</p>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${c.status === 'nerfed' ? 'bg-red-500/20 text-lol-danger' : 'bg-lol-gold/20 text-lol-gold'}`}>
                  {c.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Items & Runes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-lol-card border border-lol-gold-dark/20">
          <h2 className="lol-label text-lol-gold text-sm mb-4">ITEMS CLAVE</h2>
          <div className="space-y-2">
            {m.keyItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-lol-bg/40">
                <ChevronRight className="w-4 h-4 text-lol-gold shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-lol-text">{item.name}</p>
                  <p className="text-xs text-lol-dim">{item.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-lol-card border border-lol-gold-dark/20">
          <h2 className="lol-label text-lol-gold text-sm mb-4">RUNAS CLAVE</h2>
          <div className="space-y-2">
            {m.keyRunes.map((rune, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-lol-bg/40">
                <ChevronRight className="w-4 h-4 text-lol-gold shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-lol-text">{rune.name}</p>
                  <p className="text-xs text-lol-dim">{rune.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TIPS TAB (filterable)
// ============================================================
function TipsTab() {
  const [activeCategory, setActiveCategory] = useState<TipCategory | 'all'>('all');
  const [maxDiff, setMaxDiff] = useState<number>(5);

  const filtered = useMemo(() => {
    let result = activeCategory === 'all' ? tips : getTipsByCategory(activeCategory);
    return result.filter(t => t.difficulty <= maxDiff);
  }, [activeCategory, maxDiff]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="lol-title text-3xl sm:text-4xl text-lol-gold mb-3">Tips Filtrables</h1>
        <p className="text-lol-muted max-w-2xl mx-auto">{tips.length} tips curados. Filtra por categoría y dificultad.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
            activeCategory === 'all' ? 'bg-lol-gold text-lol-bg' : 'bg-lol-card text-lol-muted border border-lol-gold-dark/15'
          }`}
        >
          Todos ({tips.length})
        </button>
        {tipCategories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat.key ? 'bg-lol-gold text-lol-bg' : 'bg-lol-card text-lol-muted border border-lol-gold-dark/15'
            }`}
          >
            {cat.icon}
            {cat.label} ({getTipsByCategory(cat.key).length})
          </button>
        ))}
      </div>

      {/* Difficulty filter */}
      <div className="flex items-center justify-center gap-3">
        <span className="text-xs text-lol-dim">Dificultad max:</span>
        {[1, 2, 3, 4, 5].map(d => (
          <button
            key={d}
            onClick={() => setMaxDiff(d)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              maxDiff >= d ? 'bg-lol-gold text-lol-bg' : 'bg-lol-card text-lol-dim border border-lol-gold-dark/15'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Tips grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map(tip => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-lol-card border border-lol-gold-dark/15 hover:border-lol-gold/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lol-text text-sm">{tip.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-lol-gold/10 text-lol-gold border border-lol-gold-dark/10">{tip.category}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-lol-bg/50 text-lol-dim border border-lol-gold-dark/10">{'★'.repeat(tip.difficulty)}</span>
              </div>
            </div>
            <p className="text-xs text-lol-muted leading-relaxed">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function Home() {
  const [activeTab, setActiveTab] = useState('guides');

  return (
    <div className="min-h-screen bg-lol-bg text-lol-text">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-lol-gold-dark/15" style={{ background: 'rgba(10,14,26,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lol-gold to-lol-gold-dark flex items-center justify-center">
              <Swords className="w-4 h-4 text-lol-bg" />
            </div>
            <div>
              <h1 className="lol-label text-lol-gold text-sm leading-tight">LOL PRO GUIDE</h1>
              <p className="text-[10px] text-lol-dim">Patch {currentMeta.patch}</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-lol-gold/15 text-lol-gold'
                    : 'text-lol-muted hover:text-lol-text'
                }`}
              >
                {tab.icon}
                <span className="hidden md:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-lol-gold-dark/15 flex" style={{ background: 'rgba(10,14,26,0.97)', backdropFilter: 'blur(12px)' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-all cursor-pointer ${
              activeTab === tab.id ? 'text-lol-gold' : 'text-lol-dim'
            }`}
          >
            {tab.icon}
            <span className="text-[9px]">{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-6 pb-24 sm:pb-6">
        <AnimatePresence mode="wait">
          {activeTab === 'guides' && <EloGuidesTab key="guides" />}
          {activeTab === 'champions' && <ChampionsTab key="champions" />}
          {activeTab === 'tierlist' && <TierListTab key="tierlist" />}
          {activeTab === 'meta' && <MetaReportTab key="meta" />}
          {activeTab === 'tips' && <TipsTab key="tips" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-lol-gold-dark/10 py-4 text-center text-[10px] text-lol-dim">
        LOL PRO GUIDE &copy; 2026 — Datos curados, no API externa. Patch {currentMeta.patch}
      </footer>
    </div>
  );
}