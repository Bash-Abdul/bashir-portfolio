export default function Blog(){
    const posts = [1,2,3,4,5,6].map(i => ({
      img: `/assets/images/blog-${i}.jpg`,
      title: ['Design conferences in 2022','Best fonts every designer','Design digest #80','UI interactions of the week','The forgotten art of spacing','Design digest #79'][i-1],
      date: 'Feb 23, 2022',
      cat: 'Design',
    }));
    return (
      <article>
        <h2 className="h2 mb-6">Blog</h2>
        <ul className="grid sm:grid-cols-2 gap-6">
          {posts.map((p, idx) => (
            <li key={idx}>
              <a href="#" className="block card">
                <div className="h-52 rounded-xl overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <span>{p.cat}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                    <time>{p.date}</time>
                  </div>
                  <h3 className="h3 mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-300">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </article>
    );
  }