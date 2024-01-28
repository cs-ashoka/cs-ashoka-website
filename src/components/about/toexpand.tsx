"use client";
import { useState } from 'react';

interface expandProps {
  title: React.ReactNode;
  content: React.ReactNode;
  className: string; 
}

const Expand: React.FC<expandProps> = ({ title, content, className }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={className}>
      <h2 onClick={toggleExpanded}>{title}</h2>
      {expanded && <p>{content}</p>}
    </div>
  );
};

export default Expand;

