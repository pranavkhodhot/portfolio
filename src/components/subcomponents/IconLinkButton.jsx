import React from 'react';
import { motion } from 'framer-motion';

const IconLinkButton = ({
  iconName,
  link,
  size = 60,
  bgColor = "#f0f0f0",
  hoverColor = "#e0e0e0"
}) => {
  const iconPath = `/icons/${iconName}.svg`;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, backgroundColor: hoverColor }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: 12,
        backgroundColor: bgColor,
        textDecoration: 'none',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'background-color 0.2s ease-in-out',
        cursor: 'pointer'
      }}
    >
      <img
        src={iconPath}
        alt={`${iconName} icon`}
        style={{ width: size * 0.5, height: size * 0.5 }}
      />
    </motion.a>
  );
};

export default IconLinkButton;
