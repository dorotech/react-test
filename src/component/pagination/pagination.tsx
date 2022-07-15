const Pagination = ({ pages: number = 169 }) => {
  return (
    <div className="flex items-center">
      <button className="flex items-center justify-center rounded-full bg-yellow-50 w-10 h-10 mx-1 my-5 p-3">
        First
      </button>
      <button className="flex items-center justify-center rounded-l-full bg-yellow-50 bg-opacity-50 w-10 h-10 my-5 p-3">
        1
      </button>
      <button className="flex items-center justify-center bg-yellow-50 w-10 h-10 my-5 p-3">
        2
      </button>
      <button className="flex items-center justify-center bg-yellow-50 bg-opacity-50 w-10 h-10 my-5 p-3">
        3
      </button>
      <button className="flex items-center justify-center bg-yellow-50 bg-opacity-50 w-10 h-10 my-5 p-3">
        ...
      </button>
      <button className="flex items-center justify-center rounded-r-full bg-yellow-50 bg-opacity-50 w-10 h-10 my-5 p-3">
        169
      </button>
      <button className="flex items-center justify-center rounded-full bg-yellow-50 w-10 h-10 mx-1 my-5 p-3">
        last
      </button>
    </div>
  );
};

export default Pagination;
