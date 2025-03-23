function Position() {
  return (
    <div className="positionsTag bg-yellow-500 my-[32px] h-[720px] w-[720px]">
      <div className="relative bg-gray-200 p-4">
        <div className="static bg-blue-500 text-white p-2">Static Position</div>
      </div>
      <div className="relative bg-gray-200 p-4 h-40 my-[4px]">
        <div className="relative top-5 left-5  bg-red-500 text-white p-2">
          Relative Position
        </div>
      </div>
      <div className="relative bg-gray-200 p-4 h-40 my-[4px]">
        <div className="absolute top-0 left-0 bg-green-500 text-white p-2">
          Absolute Position
        </div>
      </div>
      <div className="fixed bottom-0 right-0 bg-yellow-500 text-white p-2">
        Fixed Position
      </div>
      <div className="h-60 overflow-y-scroll bg-gray-200 p-4 my-[4px]">
        <div className="sticky top-0 bg-purple-500 text-white p-2">
          Sticky Position
        </div>
        <p className="mt-10">Scroll down to see the sticky effect.</p>
        <div className="h-80 bg-gray-400"></div>
      </div>
    </div>
  );
}

export default Position;
