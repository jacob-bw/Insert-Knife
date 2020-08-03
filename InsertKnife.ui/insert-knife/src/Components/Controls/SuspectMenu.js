import React from 'react';

class SuspectMenu extends React.Component {
  
  props=this.state;


  getWeaponId = (e) => {
    const weaponMenuId = e.target.id;
    console.log(weaponMenuId);
  }

  
}

export default SuspectMenu;