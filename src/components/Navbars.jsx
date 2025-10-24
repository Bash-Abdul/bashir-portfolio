import { NavLink } from 'react-router-dom';

const link = (to, label) => (
  <NavLink
    to={to}
    className={({isActive}) => `px-3 py-4 text-sm ${isActive ? 'text-orangeYellow' : 'text-gray-300 hover:text-gray-200'}`}
  >{label}</NavLink>
);

export default function Navbar(){
  return (
    <ul className="flex justify-center gap-2">
      <li>{link('/about', 'About')}</li>
      <li>{link('/resume', 'Resume')}</li>
      <li>{link('/portfolio', 'Portfolio')}</li>
      <li>{link('/blog', 'Blog')}</li>
      <li>{link('/contact', 'Contact')}</li>
    </ul>
  );
}