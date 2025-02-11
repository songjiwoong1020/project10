import SearchTab from "./_components/SearchTab";

export default function Articles() {
  return (
    <>
      {/* <SearchTab/> */}
      <section className="mt-4 w-full max-w-4xl min-h-[600px] rounded-lg flex flex-col">
        {/* 상단 영역: 탭 & 검색창 */}
        <div className="flex items-end justify-between">
          {/* 탭 메뉴 */}
          <div className="flex space-x-4 pl-4">
            <button className="px-6 text-gray-700 border-2 border-black border-transparent bg-black rounded-t-lg">
              뉴스
            </button>
            <button className="py-2 text-gray-700 border-b-2 border-transparent hover:border-blue-500">
              경제지표
            </button>
          </div>
          {/* 검색창 */}
          <div className="relative pb-4">
            <input
              type="text"
              placeholder="검색..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {/* 콘텐츠 영역 */}
        <div className="flex-1 p-6 border-t-8 border-black bg-white rounded-lg">
        {/* 여기에 동적인 콘텐츠 삽입 */}
        </div>
      </section>
    </>
  );
}