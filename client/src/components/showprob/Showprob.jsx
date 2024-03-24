import MonacoEditor from "react-monaco-editor";
import { useState } from "react";
const difficultyColors = {
  Easy: "text-green-500",
  Medium: "text-orange-500",
  Hard: "text-red-500",
};

const problem = {
  id: 1,
  title: "Two Sum",
  difficulty: "Easy",
  acceptance: "46.9%",
  description:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  input: "nums = [2,7,11,15], target = 9",
  output: "[0,1]",
  constraints:
    "2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9, Only one valid answer exists.",
};

const ShowProb = () => {
  const [language, setLanguage] = useState("javascript");
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="flex p-4 bg-gray-900 text-white">
      <div className="w-1/2 pr-2">
        <h1 className="text-2xl font-bold">{problem.title}</h1>
        <p className="text-sm mb-4">
          <span className={difficultyColors[problem.difficulty]}>
            {problem.difficulty}
          </span>
          <span className="mx-4">{problem.acceptance} acceptance</span>
        </p>
        <p className="text-lg leading-loose">{problem.description}</p>
        <p className="my-8">
          <strong>Input example:</strong> {problem.input}
        </p>
        <p>
          <strong>Output example:</strong> {problem.output}
        </p>
        <p className="my-8">
          <strong>Constraints:</strong> {problem.constraints}
        </p>
      </div>
      <div className="w-1/2 pl-2">
        <h2 className="text-xl font-bold mb-2">Your Solution:</h2>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="mb-4 bg-gray-800 text-white rounded p-2"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="cpp">C++</option>
        </select>
        <div className="rounded bg-gray-800">
          <MonacoEditor
            width="100%"
            height="500"
            language="javascript"
            theme="vs-dark"
          />
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShowProb;
