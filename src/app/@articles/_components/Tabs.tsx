"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, MouseEventHandler } from "react";

type Props = {
  q?: string;
}

export default function Tabs({ q }: Props) {
  const [tap, setTap] = useState<string[]>([]);
  const [foucs, setFocus] = useState<HTMLButtonElement>();
  const router = useRouter();

  useEffect(() => {
    console.log(foucs)
    if(q){
      if(tap.length === 0){
        setTap([q]);
      } else {
        setTap([...tap, q]);
      }
    }
    console.log(tap);
  }, [q]);

  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    if(focus){

    } else {
      setFocus(e.currentTarget)
    }
    // setFocus((prev) => {
    //   prev?.classList.remove('bg-black');
    //   e.currentTarget.classList.remove('bg-white');
    //   prev?.classList.add('bg-white');
    //   e.currentTarget.classList.add('bg-black');
    //   return e.currentTarget;
    // });
  }

  return (
    <div className="flex pl-4">
      {tap.map(v => 
      <button
        className="px-6 text-gray-700 bg-white rounded-t-lg"
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
