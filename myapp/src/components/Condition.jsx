import React from 'react'
import Welcome from './welcome';
import Exit from './Exit';

export default function Condition() {
  const res=true;
  return res?<h1>result is true</h1> : <h1>result is false</h1>;
}
