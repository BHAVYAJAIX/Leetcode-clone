const mongoose = require("mongoose");
const Problem = require("../models/problems");
const Testcase = require("../models/testcases");
mongoose.connect("mongodb://localhost:27017/leetcode");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "easy",
    acceptance: "50%",
    question:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    inputeg: "nums = [2,7,11,15], target = 9",
    outputeg: "[0,1]",
  },
  {
    id: 2,
    title: "3Sum",
    difficulty: "medium",
    acceptance: "30%",
    question:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    inputeg: "nums = [-1, 0, 1, 2, -1, -4]",
    outputeg: "[[-1, -1, 2], [-1, 0, 1]]",
  },
  {
    id: 3,
    title: "4Sum",
    difficulty: "medium",
    acceptance: "20%",
    question:
      "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that a != b != c != d and nums[a] + nums[b] + nums[c] + nums[d] == target. You may return the answer in any order.",
    inputeg: "nums = [1, 0, -1, 0, -2, 2], target = 0",
    outputeg: "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]",
  },
  {
    id: 4,
    title: "Triangle Count",
    difficulty: "hard",
    acceptance: "10%",
    question:
      "Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.",
    inputeg: "nums = [2, 2, 3, 4]",
    outputeg: "3",
  },
  {
    id: 5,
    title: "Sliding Window Maximum",
    difficulty: "hard",
    acceptance: "5%",
    question:
      "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.",
    inputeg: "nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3",
    outputeg: "[3, 3, 5, 5, 6, 7]",
  },
  {
    id: 6,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    acceptance: "40%",
    question:
      "Given a string s, find the length of the longest substring without repeating characters.",
    inputeg: "s = 'abcabcbb'",
    outputeg: "3",
  },
  {
    id: 7,
    title: "Longest Palindromic Substring",
    difficulty: "medium",
    acceptance: "30%",
    question:
      "Given a string s, return the longest palindromic substring in s.",
    inputeg: "s = 'babad'",
    outputeg: "'bab'",
  },
  {
    id: 8,
    title: "Container With Most Water",
    difficulty: "medium",
    acceptance: "20%",
    question:
      "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    inputeg: "[1, 8, 6, 2, 5, 4, 8, 3, 7]",
    outputeg: "49",
  },
  {
    id: 9,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "easy",
    acceptance: "50%",
    question:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    inputeg: "[7, 1, 5, 3, 6, 4]",
    outputeg: "5",
  },
  {
    id: 10,
    title: "Valid Parentheses",
    difficulty: "easy",
    acceptance: "40%",
    question:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:",
    inputeg: "'()[]{}'",
    outputeg: "true",
  },
];

const testCases = [
  {
    id: 1,
    input: "[[2, 7, 11, 15], 9]",
    output: "[0, 1]",
  },
  {
    id: 2,
    input: "[[-1, 0, 1, 2, -1, -4]]",
    output: "[[-1, -1, 2], [-1, 0, 1]]",
  },
  {
    id: 3,
    input: "[[1, 0, -1, 0, -2, 2], 0]",
    output: "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]",
  },
  {
    id: 4,
    input: "[[2, 2, 3, 4]]",
    output: "3",
  },
  {
    id: 5,
    input: "[[1, 3, -1, -3, 5, 3, 6, 7], 3]",
    output: "[3, 3, 5, 5, 6, 7]",
  },
  {
    id: 6,
    input: '["abcabcbb"]',
    output: "3",
  },
  {
    id: 7,
    input: '["babad"]',
    output: '"bab"',
  },
  {
    id: 8,
    input: "[1, 8, 6, 2, 5, 4, 8, 3, 7]",
    output: "49",
  },
  {
    id: 9,
    input: "[7, 1, 5, 3, 6, 4]",
    output: "5",
  },
  {
    id: 10,
    input: '["()[]{}"]',
    output: "true",
  },
];

const seedDB = async () => {
  for (let i = 0; i < 10; i++) {
    const prob = new Problem(problems[i]);
    const test = new Testcase(testCases[i]);
    await test.save();
    prob.testcases.push(test);
    await prob.save();
  }
};

seedDB();
