import React from 'react'
import Welcome from './welcome';
import Exit from './Exit';

export default function Condition() {
  const bo=true;
  if(bo){
    return <Welcome/>;
  }
  else {
    return <Exit/>;
  }
}
