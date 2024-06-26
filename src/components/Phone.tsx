import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

// HTML Attributees to give all the props of div along with internal params
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, dark = false, className, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        className='pointer-events-none z-50 select-none'
        alt='phone image' 
      />
      <div className='absolute -z-10 inset-0'>
        <img 
        className='object-cover' 
        src={imgSrc} 
        alt="overlay phone image"/>
      </div>
    </div>
  );
};

export default Phone;