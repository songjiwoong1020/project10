import SearchTab from "./_components/SearchTab";
import Tabs from "./_components/Tabs";

type Props = {
  searchParams: { q: string };
}

export default async function Articles({ searchParams }: Props) {//searchParams은 Promise인가?
  const { q } = await searchParams;
  return (
    <>
      <section className="mt-4 w-full max-w-4xl min-h-[600px] rounded-lg flex flex-col">
        <div className="flex items-end justify-between">
          <Tabs q={q}/>
          <SearchTab/>
        </div>
        <div className="flex-1 p-6 border-t-8 border-black bg-white rounded-lg">
        {q}에 대한 내용
        </div>
      </section>
    </>
  );
}