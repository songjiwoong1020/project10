"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, MouseEventHandler } from "react";

type Props = {
  q?: string;
}

export default function Tabs({ q }: Props) {
  const [tap, setTap] = useState<string[]>([]);
  const [focus, setFocus] = useState<HTMLButtonElement>();
  const router = useRouter();

  useEffect(() => {
    if(q){
      if(tap.length === 0){
        setTap([q]);
      } else {
        if(!tap.includes(q)){
          setTap([...tap, q]);
        }
      }
    }
  }, [q]);

  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    if(e.currentTarget.innerText !== q){
      router.push(`/?q=${e.currentTarget.innerText}`);
    }
  }

  return (
    <div className="flex pl-4">
      {tap.map(v =>
      <button
        key={v}
        className={"px-6 pt-1 text-gray-700 rounded-t-lg border-b-2 border-transparent transition-colors" + (v === q ? " bg-black" : " bg-gray-300 hover:border-gray-700 hover:bg-gray-500")
        }
        onClick={onClick}
      >
        {v}
      </button>
      )}
    </div>
  )
}
