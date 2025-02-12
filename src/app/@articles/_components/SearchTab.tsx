"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler } from 'react';

export default function SearchTab() {
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    router.push(`/?q=${e.currentTarget.search.value}`);
    e.currentTarget.search.value=''; //==> 검색 후 글을 지우는게 나은가? 아닌가?
  }
  return (
    <div className="relative pb-4">
      <form onSubmit={onSubmit}>
        <input
          name="search"
          type="search"
          placeholder="검색..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
      </form>
    </div>
  )
}