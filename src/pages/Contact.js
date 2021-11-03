import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michael D'Angelo via email @ michael.l.dangelo@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Контакты</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Вы можете написать мне по электронной почте: pro100gram.proger@gmail.com</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
