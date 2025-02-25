"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, MouseEventHandler } from "react";

type Props = {
  q?: string;
}

export default function Tabs({ q }: Props) {
  const [tap, setTap] = useState<string[]>([]);
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

  const onClose = (target: string): MouseEventHandler<HTMLButtonElement> => e => {
    const c = tap.filter(v => v !== target);
    if(target === q && c.length > 0) {
      if(tap.at(-1) === target){
        router.push(`/?q=${tap.at(-2)}`);
      } else {
        router.push(`/?q=${tap[tap.findIndex(v => v === target)+1]}`);
      }
    } else if (c.length < 1) {
      router.push('/');
    }
    setTap((prev: string[]) => {
      return c;
    });
  }

  return (
    <div className="flex pl-4">
      {tap.map(v =>
      <div className="relative" key={v}>
        <button
          onClick={onClick}
          className={"peer max-w-20 px-6 pt-1 text-gray-700 rounded-t-lg border-b-2 border-transparent transition-colors truncate" + (v === q ? " bg-black" : " bg-gray-300 hover:border-gray-700 hover:bg-gray-500")
          }//TODO!!!!!!!!!!!
          //max-width 작업
        >
          {v}
        </button>
        <button
          onClick={onClose(v)}
          className="p-2 absolute bg-red-500 rounded-lg right-0 top-0 transition-all opacity-0 hover:-top-2 hover:opacity-100 peer-hover:-top-2 peer-hover:opacity-100"></button>
      </div>
      )}
    </div>
  )
}
