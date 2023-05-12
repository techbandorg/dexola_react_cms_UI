'use client';

import Image from 'next/image';
import { CardWrapper, ServiceDescription } from './styles';

const CardHover = ({ title, color }: { title: string; color: string }) => {
  const textArray = [
    'Custom Security Testing',
    'Wallets and Custodian Solutions',
    'Formal Verification',
  ];
  return (
    <CardWrapper>
      <ServiceDescription color={color}>{title}</ServiceDescription>
      <ul>
        {textArray &&
          textArray.length > 0 &&
          textArray.map(el => <li key={el}>{el}</li>)}
      </ul>
    </CardWrapper>
  );
};

export default CardHover;