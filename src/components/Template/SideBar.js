import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Шахмаев Анвар</h2>
        <p><a href="mailto:michael.l.dangelo@gmail.com">pro100gram.proger@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Обо мне</h2>
      <p>
        Занимаюсь веб-разработкой более 5 лет.<br />
        За это время я поучавствовал в 5 крупных проектах,<br />
        занимался доработкой более 15 проектов,<br />
        а также мной было выполено множество заказов по верстке отдельных страниц.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Узнать больше</Link> : <Link to="/about" className="button">Узнать больше</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Шахмаев А. <Link to="/">pro100gram.proger@gmail.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
