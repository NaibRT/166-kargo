import React from 'react';
const Burger = ({ open, setOpen }) => {
    return (
      <div open={open} onClick={() => setOpen(!open)}>
      <img src={'/assets/icons/list.svg'} />
                      
      </div>
    );
  };
  
  export default Burger;
  