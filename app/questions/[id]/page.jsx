"use client"; // Needed for useRouter and client-side navigation

import { useRouter } from "next/navigation";
import { use } from "react";

export default function QuestionPage({ params }) {
  // Unwrap params safely
  const unwrappedParams = use(params);
  const id = Number(unwrappedParams.id);

  const router = useRouter();

  // All 8 questions
  const validQuestions = {
    1: { title: "What is React?", content: "React is a JS library for building UIs." },
    2: { title: "What is Next.js?", content: "Next.js is a React framework for SSR and routing." },
    3: { title: "What is JavaScript?", content: "JavaScript is a programming language for web development." },
    4: { title: "What is HTML?", content: "HTML is the standard markup language for web pages." },
    5: { title: "What is CSS?", content: "CSS is used to style HTML elements on a page." },
    6: { title: "What is Node.js?", content: "Node.js is a JS runtime for server-side programming." },
    7: { title: "What is Express?", content: "Express is a web framework for Node.js applications." },
    8: { title: "What is MongoDB?", content: "MongoDB is a NoSQL database for storing JSON-like data." },
  };

  const question = validQuestions[id];

  if (!question) return <p className="text-center mt-20 text-xl">Question not found!</p>;

  // Next question ID (loop back to 1 after 8)
  const nextId = id >= 8 ? 1 : id + 1;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{question.title}</h1>
      <p className="text-lg md:text-xl mb-8">{question.content}</p>

      <button
        onClick={() => router.push(`/questions/${nextId}`)}
        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-medium hover:opacity-80 transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
}
