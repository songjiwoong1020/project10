'use client'

type Props = {
  q?: string;
  data: any;
}

type elemnt = {
  elements: {type: string, name: string, elements: object[]}
}

export default function Contents({ q, data }: Props) {
  const { item } = data?.rss?.channel;
  const filteredItem = item.filter(v => !q || v.title._cdata.includes(q)).map(v => ({
    title: v.title._cdata,
    author: v.author._cdata,
    pubDate: v.pubDate._cdata,
    link: v.link._cdata
  }));
  return (
    <ul>
      {filteredItem.map((item) => (
        <li key={item.link}>{item.title}</li>
      ))}
      {/* {posts} */}
    </ul>
  )
}