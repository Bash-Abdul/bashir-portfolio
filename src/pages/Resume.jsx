export default function Resume(){
    const edu = [
      { title: 'University school of the arts', span: '2007 — 2008', text: 'Nemo enims ipsam voluptatem...'},
      { title: 'New york academy of art', span: '2006 — 2007', text: 'Ratione voluptatem sequi nesciunt...'},
      { title: 'High school of art and design', span: '2002 — 2004', text: 'Duis aute irure dolor...'},
    ];
    const exp = [
      { title: 'Creative director', span: '2015 — Present', text: 'Nemo enim ipsam voluptatem...'},
      { title: 'Art director', span: '2013 — 2015', text: 'Blanditiis praesentium voluptum...'},
      { title: 'Web designer', span: '2010 — 2013', text: 'Quos dolores et quas molestias...'},
    ];
  
    const Block = ({title, items}) => (
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 grid place-items-center rounded-lg bg-[#2a2a2a] text-orangeYellow">📘</div>
          <h3 className="h3">{title}</h3>
        </div>
        <ol className="space-y-6 ml-6 border-l border-jet">
          {items.map((it,i)=> (
            <li key={i} className="pl-6 relative">
              <span className="absolute -left-[9px] top-2 w-2 h-2 rounded-full bg-orangeYellow shadow-[0_0_0_4px_#3A3A3A]" />
              <h4 className="font-medium">{it.title}</h4>
              <span className="text-vegasGold text-sm">{it.span}</span>
              <p className="text-sm text-gray-300 mt-1">{it.text}</p>
            </li>
          ))}
        </ol>
      </section>
    );
  
    const skills = [
      { name: 'Web design', val: 80 },
      { name: 'Graphic design', val: 70 },
      { name: 'Branding', val: 90 },
      { name: 'WordPress', val: 50 },
    ];
  
    return (
      <article className="space-y-10">
        <h2 className="h2">Resume</h2>
        <Block title="Education" items={edu} />
        <Block title="Experience" items={exp} />
        <section>
          <h3 className="h3 mb-4">My skills</h3>
          <ul className="card p-5 space-y-4">
            {skills.map(s => (
              <li key={s.name}>
                <div className="flex items-center justify-between mb-1">
                  <h5 className="text-sm">{s.name}</h5>
                  <span className="text-sm text-gray-300">{s.val}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-jet overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orangeYellow to-[#e6b85a]" style={{width: `${s.val}%`}} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    );
  }