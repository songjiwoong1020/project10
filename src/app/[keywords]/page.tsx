// export default function keyword() {
//   console.log("Current keywords:");
//   return <div>dsdsdsd</div>
// }

export default async function Page({
  params,
}: {
  params: Promise<{ keywords: string }>
}) {
  console.log((await params).keywords);
  const test = (await params).keywords
  return <div className="text-blue-500">articles page: {test}</div>
}