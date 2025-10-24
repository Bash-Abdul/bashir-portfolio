export default function Modal({ open, onClose, title, date, img, children }){
    if(!open) return null;
    return (
      <div className="fixed inset-0 z-50">
        <div className="absolute inset-0 bg-black/80" onClick={onClose} />
        <div className="relative z-10 max-w-2xl mx-auto mt-20 card p-5">
          <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 grid place-items-center bg-[#2a2a2a] rounded-md">✕</button>
          <div className="flex gap-5">
            {img && (
              <div className="shrink-0 rounded-xl overflow-hidden bg-[#333] p-2">
                <img src={img} alt={title} className="w-20 h-20 object-cover" />
              </div>
            )}
            <div>
              <h4 className="h3">{title}</h4>
              {date && <time className="text-sm text-gray-400">{date}</time>}
              <div className="mt-3 text-sm text-gray-200">{children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }