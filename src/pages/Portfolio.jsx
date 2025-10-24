import { useMemo, useState } from 'react';
import PROJECTS from '../data/projects';

const CATS = ['all', 'web design', 'applications', 'web development'];

export default function Portfolio(){
  const [cat, setCat] = useState('all');
  const filtered = useMemo(() => cat === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === cat), [cat]);

  return (
    <article>
      <h2 className="h2 mb-6">Portfolio</h2>

      {/* large screen buttons */}
      <ul className="hidden md:flex gap-6 mb-6">
        {CATS.map(c => (
          <li key={c}>
            <button onClick={()=>setCat(c)} className={`text-base ${cat===c ? 'text-orangeYellow' : 'text-gray-300 hover:text-gray-200'}`}>{c.replace(/^./, m=>m.toUpperCase())}</button>
          </li>
        ))}
      </ul>

      {/* small screen select */}
      <div className="md:hidden mb-6">
        <select value={cat} onChange={e=>setCat(e.target.value)} className="w-full bg-eerie2 border border-jet rounded-lg p-3">
          {CATS.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <ul className="grid sm:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <li key={i} className="group">
            <a href="#" className="block">
              <figure className="relative h-52 rounded-xl overflow-hidden">
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="rounded-lg bg-jet text-orangeYellow p-4">👁</div>
                </div>
              </figure>
              <h3 className="mt-3 text-sm font-medium">{p.title}</h3>
              <p className="text-gray-400 text-sm capitalize">{p.category}</p>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}