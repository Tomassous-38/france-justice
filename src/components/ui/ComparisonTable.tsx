import { Check, X, Minus } from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray50: '#F9FAFB',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray400: '#94A3B8',
  gray600: '#475569',
  gray700: '#334155',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
  red: '#CE1126',
  green: '#10B981',
};

interface ComparisonRow {
  criteria: string;
  valueA: string | boolean;
  valueB: string | boolean;
  winner?: 'A' | 'B' | 'equal';
}

interface ComparisonTableProps {
  titleA: string;
  titleB: string;
  rows: ComparisonRow[];
}

export default function ComparisonTable({ titleA, titleB, rows }: ComparisonTableProps) {
  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 mx-auto" style={{ color: colors.green }} />
      ) : (
        <X className="w-5 h-5 mx-auto" style={{ color: colors.red }} />
      );
    }
    return value;
  };

  const getWinnerBadge = (winner?: 'A' | 'B' | 'equal', isA?: boolean) => {
    if (!winner || winner === 'equal') return null;
    if ((winner === 'A' && isA) || (winner === 'B' && !isA)) {
      return (
        <span 
          className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded ml-2"
          style={{ background: `${colors.green}15`, color: colors.green }}
        >
          ✓
        </span>
      );
    }
    return null;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th 
              className="text-left py-4 px-4 font-semibold"
              style={{ background: colors.gray50, color: colors.gray600, borderBottom: `2px solid ${colors.gray200}` }}
            >
              Critère
            </th>
            <th 
              className="text-center py-4 px-4 font-semibold text-white"
              style={{ background: colors.blueDark }}
            >
              {titleA}
            </th>
            <th 
              className="text-center py-4 px-4 font-semibold text-white"
              style={{ background: colors.bluePrimary }}
            >
              {titleB}
            </th>
            <th 
              className="text-center py-4 px-4 font-semibold w-20"
              style={{ background: colors.gray50, color: colors.gray600, borderBottom: `2px solid ${colors.gray200}` }}
            >
              + ?
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr 
              key={index}
              style={{ 
                background: index % 2 === 0 ? colors.white : `${colors.gray50}80`,
                borderBottom: `1px solid ${colors.gray100}`,
              }}
            >
              <td className="py-4 px-4 font-medium" style={{ color: colors.charcoal }}>
                {row.criteria}
              </td>
              <td className="py-4 px-4 text-center" style={{ color: colors.gray700 }}>
                {renderValue(row.valueA)}
                {getWinnerBadge(row.winner, true)}
              </td>
              <td className="py-4 px-4 text-center" style={{ color: colors.gray700 }}>
                {renderValue(row.valueB)}
                {getWinnerBadge(row.winner, false)}
              </td>
              <td className="py-4 px-4 text-center">
                {row.winner === 'A' && (
                  <span 
                    className="inline-block px-2 py-1 text-white text-xs font-medium rounded"
                    style={{ background: colors.blueDark }}
                  >
                    {titleA.split(' ')[0]}
                  </span>
                )}
                {row.winner === 'B' && (
                  <span 
                    className="inline-block px-2 py-1 text-white text-xs font-medium rounded"
                    style={{ background: colors.bluePrimary }}
                  >
                    {titleB.split(' ')[0]}
                  </span>
                )}
                {row.winner === 'equal' && (
                  <Minus className="w-4 h-4 mx-auto" style={{ color: colors.gray400 }} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Pros and Cons component
interface ProConItem {
  text: string;
}

interface ProsConsProps {
  title: string;
  pros: ProConItem[];
  cons: ProConItem[];
}

export function ProsCons({ title, pros, cons }: ProsConsProps) {
  return (
    <div 
      className="rounded-2xl overflow-hidden"
      style={{ background: colors.white, border: `1px solid ${colors.gray200}` }}
    >
      <div 
        className="px-6 py-4"
        style={{ background: colors.gray50, borderBottom: `1px solid ${colors.gray200}` }}
      >
        <h3 className="font-semibold" style={{ color: colors.charcoal }}>{title}</h3>
      </div>
      
      <div className="grid md:grid-cols-2">
        {/* Pros */}
        <div className="p-6" style={{ borderRight: `1px solid ${colors.gray200}` }}>
          <h4 className="flex items-center gap-2 font-semibold mb-4" style={{ color: colors.green }}>
            <Check className="w-5 h-5" />
            Avantages
          </h4>
          <ul className="space-y-3">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-2" style={{ color: colors.gray600 }}>
                <span 
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ background: colors.green }}
                />
                {pro.text}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Cons */}
        <div className="p-6">
          <h4 className="flex items-center gap-2 font-semibold mb-4" style={{ color: colors.red }}>
            <X className="w-5 h-5" />
            Inconvénients
          </h4>
          <ul className="space-y-3">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-2" style={{ color: colors.gray600 }}>
                <span 
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ background: colors.red }}
                />
                {con.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Verdict component (side by side)
interface VerdictOption {
  title: string;
  points: string[];
}

interface VerdictProps {
  optionA: VerdictOption;
  optionB: VerdictOption;
}

export function Verdict({ optionA, optionB }: VerdictProps) {
  return (
    <div className="rounded-2xl p-6 md:p-8" style={{ background: colors.blueLight }}>
      <h3 className="text-center font-bold text-xl mb-6" style={{ color: colors.charcoal }}>
        🎯 Verdict : Quelle forme choisir ?
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg p-6" style={{ background: colors.white }}>
          <h4 className="font-semibold mb-4" style={{ color: colors.charcoal }}>
            Choisissez {optionA.title} si :
          </h4>
          <ul className="space-y-2">
            {optionA.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.green }} />
                {point}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="rounded-lg p-6" style={{ background: colors.white }}>
          <h4 className="font-semibold mb-4" style={{ color: colors.charcoal }}>
            Choisissez {optionB.title} si :
          </h4>
          <ul className="space-y-2">
            {optionB.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm" style={{ color: colors.gray600 }}>
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.green }} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
