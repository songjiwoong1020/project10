"use client";
import { useParams } from "next/navigation";

export default function keyword({ params }: any) {
  const _params = useParams();
  console.log("Current keywords:", _params.keywords);
  return <div>{params}dsdsdsd</div>
}