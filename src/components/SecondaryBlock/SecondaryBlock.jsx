import React from 'react';
import s from './SecondaryBlock.module.css';
import MapButton from 'components/MapButton/MapButton';

const SecondaryBlock = () => {
  return (
    <section className={s.section} id="secondaryBlock">
      <h2 className={s.title}>местонахождение</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '90%',
          margin: '0 auto',
        }}
      >
        <div className={s.mapWrapper}>
          <iframe
            title="google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.5042563541633!2d35.04263217597679!3d48.4660406282379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2e7bfeb39b5%3A0x9860a9b2edf4df14!2z0LLRg9C70LjRhtGPINCm0LXQvdGC0YDQsNC70YzQvdCwLCA3Niwg0JTQvdGW0L_RgNC-LCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1suk!2sua!4v1721062666692!5m2!1suk!2sua"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <MapButton />
      </div>
    </section>
  );
};

export default SecondaryBlock;
