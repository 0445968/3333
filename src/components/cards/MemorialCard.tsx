import type { Memorial } from '../../types';

export function MemorialCard({ memorial }: { memorial: Memorial }) {
  return (
    <div className="bg-white rounded-xl border border-sand-200 shadow-sm p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sand-300 to-sand-500 flex items-center justify-center shrink-0">
          <span className="text-white font-display font-bold text-xl">
            {memorial.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-navy-900 font-bold text-base">{memorial.name}</h3>
          <p className="text-sand-600 text-sm">{memorial.years}</p>
          <p className="text-navy-500 text-xs mt-0.5">{memorial.community}</p>
        </div>
      </div>
      <p className="text-navy-600 text-sm mt-3 leading-relaxed">{memorial.tribute}</p>
      {memorial.familyMessage && (
        <p className="mt-3 text-sand-700 text-sm italic border-l-2 border-sand-300 pl-3">
          "{memorial.familyMessage}"
        </p>
      )}
    </div>
  );
}
