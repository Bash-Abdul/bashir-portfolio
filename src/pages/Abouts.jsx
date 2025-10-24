import { useState } from 'react';
import Modal from '../components/Modal';
import TESTIMONIALS from '../data/testimonials';

export default function About(){
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <article className="space-y-8">
      <header>
        <h2 className="h2">About me</h2>
      </header>

      <section className="prose prose-invert max-w-none text-gray-300">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy
          turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly and also attractive. I add a personal touch
          to your product and keep it easy to use.
        </p>
      </section>

      <section>
        <h3 className="h3 mb-4">What I'm doing</h3>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[{
            icon:'/assets/images/icon-design.svg', title:'Web design', text:'Modern, high-quality design.'
          },{
            icon:'/assets/images/icon-dev.svg', title:'Web development', text:'High-quality development.'
          },{
            icon:'/assets/images/icon-app.svg', title:'Mobile apps', text:'iOS and Android applications.'
          },{
            icon:'/assets/images/icon-photo.svg', title:'Photography', text:'High-quality photography.'
          }].map((s)=> (
            <li key={s.title} className="card p-5 flex items-start gap-4">
              <img src={s.icon} alt="" className="w-10 h-10" />
              <div>
                <h4 className="h4">{s.title}</h4>
                <p className="text-sm text-gray-300">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="h3 mb-3">Testimonials</h3>
        <ul className="flex gap-4 overflow-x-auto scrollbar pb-4">
          {TESTIMONIALS.map((t, idx) => (
            <li key={idx}>
              <button
                className="card w-[320px] p-5 text-left hover:scale-[1.01] transition"
                onClick={()=>{ setActive(t); setOpen(true); }}
              >
                <div className="relative">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-xl absolute -top-8 left-4" />
                </div>
                <div className="mt-6">
                  <h4 className="h4">{t.name}</h4>
                  <p className="text-sm line-clamp-3 text-gray-300">{t.text}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
        <Modal open={open} onClose={()=>setOpen(false)} title={active?.name} date={active?.date} img={active?.avatar}>
          {active?.text}
        </Modal>
      </section>

      <section>
        <h3 className="h3 mb-3">Clients</h3>
        <ul className="flex gap-10 overflow-x-auto scrollbar py-4">
          {[1,2,3,4,5,6].map(i => (
            <li key={i} className="min-w-[180px]">
              <img src={`/assets/images/logo-${i}-color.png`} alt="client logo" className="w-full grayscale hover:grayscale-0 transition" />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}