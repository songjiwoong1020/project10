"use client";

import { useRouter } from "next/navigation";
import { useRef } from 'react';

export default function SearchTab() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    router.push(`/?q=${inputRef.current?.value}`);
  }
  return (
    <>
      <input className="border-2" ref={inputRef}/>
      <button onClick={onClick} className="border-2">검색</button>
    </>
  )
}