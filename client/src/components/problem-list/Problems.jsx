import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Problems = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/problems")
      .then((res) => res.json())
      .then((data) => setProblems(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-around min-h-screen bg-gray-900 text-white">
      <div className="w-full text-left pl-8">
        <h1 className="text-2xl font-bold ml-40 my-9">Problems set</h1>
      </div>
      <div className="grid grid-cols-5 gap-4 w-3/4 p-4 bg-gray-800 rounded-md mb-14">
        <div className="font-semibold ml-2">ID</div>
        <div className="font-semibold col-span-2">Title</div>
        <div className="font-semibold">Difficulty</div>
        <div className="font-semibold">Acceptance</div>
        <hr className="col-span-5 bg-gray-800" />
        {problems.map((problem) => (
          <>
            <div className="ml-2">{problem.id}</div>
            <div className="col-span-2 overflow-hidden overflow-ellipsis whitespace-nowrap mr-10 hover:text-blue-500">
              <Link to={"/problem"}>{problem.title}</Link>
            </div>
            <div>{problem.difficulty}</div>
            <div>{problem.acceptance}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Problems;
