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
    router.push(`/?q=${e.currentTarget.innerText}`);
  }

  return (
    <div className="flex pl-4">
      {tap.map(v =>
      <button
        key={v}
        className={"px-6 text-gray-700 rounded-t-lg" + (v === q ? " bg-black" : " bg-gray-300")}
        onClick={onClick}
      >
        {v}
      </button>
      )}
      {/* <button className="px-6 text-gray-700 border-2 border-black border-transparent bg-black rounded-t-lg">
        뉴스
      </button>
      <button className="py-2 text-gray-700 border-b-2 border-transparent hover:border-blue-500">
        경제지표
      </button> */}
    </div>
  )
}
