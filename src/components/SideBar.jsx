import { useState } from 'react';

export default function Sidebar(){
  const [open, setOpen] = useState(false);
  return (
    <div className="card p-4 relative">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-gradient-to-br from-[#3f3f3f] to-[#1f1f1f] overflow-hidden">
          <img src="/assets/images/my-avatar.png" alt="Avatar" className="w-20 h-20 object-cover" />
        </div>
        <div>
          <h1 className="text-lg font-medium">Richard hanrick</h1>
          <p className="badge">Web developer</p>
        </div>
        <button onClick={()=>setOpen(v=>!v)} className="absolute -top-3 -right-3 px-3 py-2 rounded-lg bg-[#232323] text-orangeYellow text-xs">
          {open ? 'Hide Contacts' : 'Show Contacts'}
        </button>
      </div>

      {open && (
        <div className="mt-6 space-y-4 text-sm">
          <div className="h-px bg-jet" />
          <ul className="grid gap-4">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 grid place-items-center rounded-md bg-[#2a2a2a] text-orangeYellow">@</span>
              <div>
                <p className="text-gray-400 text-xs uppercase">Email</p>
                <a className="text-white" href="mailto:richard@example.com">richard@example.com</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 grid place-items-center rounded-md bg-[#2a2a2a] text-orangeYellow">📱</span>
              <div>
                <p className="text-gray-400 text-xs uppercase">Phone</p>
                <a className="text-white" href="tel:+12133522795">+1 (213) 352-2795</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 grid place-items-center rounded-md bg-[#2a2a2a] text-orangeYellow">📍</span>
              <div>
                <p className="text-gray-400 text-xs uppercase">Location</p>
                <p>Sacramento, California, USA</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}