import SearchTab from "./_components/SearchTab";
import Tabs from "./_components/Tabs";
import Contents from "./_components/Contents";
import convert from 'xml-js';

type Props = {
  searchParams: { q: string };
}

export default async function Articles({ searchParams }: Props) {//searchParams은 Promise인가?
  const { q } = await searchParams;
  // const data = await fetch('https://www.hankyung.com/feed/all-news', {headers:{'Content-Type': 'xml'}})
  const data = await fetch('https://www.hankyung.com/feed/all-news');
  const xmlData = await data.text();
  const jsonData = convert.xml2js(xmlData, {compact: true});
  return (
    <>
      <section className="mt-4 w-full max-w-4xl min-h-[600px] rounded-lg flex flex-col">
        <div className="flex items-end justify-between">
          <Tabs q={q}/>
          <SearchTab q={q}/>
        </div>
        <div className="flex-1 p-6 bg-white rounded-lg border-t-8 border-black">
          <Contents q={q} data={jsonData}/>
        </div>
      </section>
    </>
  );
}