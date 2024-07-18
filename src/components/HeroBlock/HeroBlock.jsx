import React from 'react';
import s from './HeroBlock.module.css';
import arrowR from '../../images/arrowRight.svg';

const HeroBlock = () => {
  return (
    <section className={s.section}>
      <div
        style={{
          maxWidth: '630px',
          width: '100%',
          paddingBottom: '150px',
          paddingLeft: '20px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            position: 'relative',
            paddingBottom: '10px',
          }}
        >
          <h1 className={s.title}>
            Ремонт <span className={s.styledTitle}>ТЕНТА</span>
          </h1>{' '}
          <svg
            height="20"
            width="100%"
            style={{ position: 'absolute', bottom: 0, left: 0 }}
          >
            <line
              x1="10"
              y1="15"
              x2="calc(100% - 10px)"
              y2="15"
              stroke="black"
              strokeWidth="0.1"
            />
            <circle cx="10" cy="15" r="0.5" fill="black" />
            <circle cx="calc(100% - 10px)" cy="15" r="0.5" fill="black" />
          </svg>
        </div>

        <h2 className={s.subTitle}>
          ВСЕГДА:
          <span className={s.styledSubTitle}>
            {' '}
            качественно, без очереди, круглосуточно.
          </span>
        </h2>
        <div className={s.linkWrapper}>
          <a
            href="tel:+380501589860"
            className={`${s.link} ${s.btn} ${s.btnWhite} ${s.btnAnimate}`}
          >
            Позвонить
            <img src={arrowR} width={19} height={19} alt="arrowR logo" />
          </a>
          <a
            href="#secondaryBlock"
            className={`${s.link} ${s.btn} ${s.btnWhite} ${s.btnAnimate}`}
          >
            гео-локация
            <img src={arrowR} width={19} height={19} alt="arrowR logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
