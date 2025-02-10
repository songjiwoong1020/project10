'use client';

import { useEffect, useState } from "react";

export default function temp() {
  const [value, setValue] = useState(1);
  useEffect(()=>{
    console.log(123);
  });
  // const func = ()=>{
  //   setValue(value+1);
  // }
  return (
    <>
      <button onClick={()=>{setValue(value+1)}}>{value}</button>
      <div className="text-red-500">temp page</div>
    </>
  )
}