import React from 'react'
import Welcome from './welcome';
import Exit from './Exit';

export default function Condition() {
  const res=false;
  let message;
  if(res){
    message=<h1>Result is true</h1>
  }
  else{
    message=<h2>Result is false</h2>
  }
  return message;
}
