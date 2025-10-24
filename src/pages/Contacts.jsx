import { useEffect, useRef, useState } from 'react';

export default function Contact(){
  const [valid, setValid] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const f = formRef.current;
    const handler = () => setValid(f.checkValidity());
    f.addEventListener('input', handler);
    handler();
    return () => f.removeEventListener('input', handler);
  }, []);

  return (
    <article>
      <h2 className="h2 mb-6">Contact</h2>

      <div className="rounded-2xl border border-jet overflow-hidden mb-8">
        <iframe className="w-full h-64 grayscale invert" src="https://maps.google.com/maps?q=sacramento&t=&z=13&ie=UTF8&iwloc=&output=embed" />
      </div>

      <form ref={formRef} className="space-y-6 max-w-2xl">
        <div className="grid md:grid-cols-2 gap-4">
          <input required name="name" placeholder="Name" className="form-input" />
          <input required type="email" name="email" placeholder="Email" className="form-input" />
        </div>
        <input required name="subject" placeholder="Subject" className="form-input" />
        <textarea required name="message" placeholder="Message" className="form-input min-h-[120px]" />
        <button disabled={!valid} className={`btn ${!valid ? 'opacity-60 cursor-not-allowed' : ''}`}>Send Message</button>
      </form>
    </article>
  );
}