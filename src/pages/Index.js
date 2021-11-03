import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Об этом сайте</Link></h2>
          <p>
            Адаптивное, статически генерируемое приложение, написанное на современном Javascript.
          </p>
        </div>
      </header>
      <p> Добро пожаловать на мой сайт. Пожалуйста, не стесняйтесь прочитать дальше <Link to="/about">обо мне</Link>,
        или вы можете ознакомиться с моими {' '}
        <Link to="/resume">резюме</Link> и {' '}
        <Link to="/projects">проектами</Link>, {' '}
        посмотреть <Link to="/stats">статистику на сайте</Link>, {' '}
        или <Link to="/contact">связаться</Link> со мной.
      </p>
    </article>
  </Main>
);

export default Index;
