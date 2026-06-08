import type { Memorial } from '../../types';

export function MemorialCard({ memorial }: { memorial: Memorial }) {
  return (
    <div className="modern-card-hover p-5">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-travel-200 to-travel-400 flex items-center justify-center shrink-0">
          <span className="text-travel-900 font-display font-bold text-xl">
            {memorial.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-ink-900 font-bold text-base">{memorial.name}</h3>
          <p className="text-travel-700 text-sm font-medium">{memorial.years}</p>
          <p className="text-ink-500 text-xs mt-0.5">{memorial.community}</p>
        </div>
      </div>
      <p className="text-ink-700 text-sm mt-3 leading-relaxed">{memorial.tribute}</p>
      {memorial.familyMessage && (
        <p className="mt-3 text-ink-600 text-sm italic border-l-2 border-travel-200 pl-3">
          "{memorial.familyMessage}"
        </p>
      )}
    </div>
  );
}
