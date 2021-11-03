import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1991-09-17T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Текущий возраст',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Город проживания',
    value: 'Кумертау',
    link:
      'https://www.google.com/maps/place/%D0%9A%D1%83%D0%BC%D0%B5%D1%80%D1%82%D0%B0%D1%83,+%D0%A0%D0%B5%D1%81%D0%BF.+%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD/@52.769085,55.7371192,12z/data=!4m5!3m4!1s0x417d11bb52a09059:0x4687ffa7b692119d!8m2!3d52.7637387!4d55.8115682',
  },
  {
    key: 'pamt',
    label: 'Выполнено проектов',
    value: 12,
  },
  {
    key: 'exp',
    label: 'Опыт в годах',
    value: 7,
  },
];

export default data;
