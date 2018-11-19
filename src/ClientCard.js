import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
const ClientCard = ({ theme, title , children}) => {
  const themeColor = {
    green: {
      titleBg: '#EDF7E1',
      border: '#66A14F'
    },
    red: {
      titleBg: '#FFD6D1',
      border: '#C11F2D'
    },
    blue: {
      titleBg: '#D9F2FD',
      border: '#2494CE'
    },
    yellow: {
      titleBg: '#F3F5CC',
      border: '#A5BB37'
    },
    grey: {
      titleBg: '#F1F5F7',
      border: '#61C794'
    },
    purple: {
      titleBg: '#FFE0F8',
      border: '#8D63B7'
    }
  };
  const color = themeColor[theme] || themeColor.blue;

  return (
    <div style={{ marginBottom: '60px' }}>
      <div
        style={{
          backgroundColor: color.titleBg,
          padding: '12px 15px 6px 15px',
          fontSize: '22px',
          borderBottom: `6px solid ${color.border}`
        }}
      >
        {title}{' '}
        <span style={{ verticalAlign: 'middle', float: 'right' }}>
          <FaChevronRight />
        </span>
      </div>
      <div
        style={{
          padding: '22px',
          border: '1px solid #D5DDE1',
          borderBottomRightRadius: '6px',
          borderBottomLeftRadius: '6px'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ClientCard;
