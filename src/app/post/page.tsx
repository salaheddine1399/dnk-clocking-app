// pages/post.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Importing ShadCN UI components

const PostPage = () => {
  const [result, setResult] = useState<string | null>(null);

  const sendPostRequest = async () => {
    try {
      const response = await fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Apple MacBook Pro 16",
          data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
          },
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setResult("Success: " + result.message);
      } else {
        setResult("Failure: " + result.message);
      }
    } catch (error) {
      setResult("Error: " + (error as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Send Post Request
        </h1>
        <Button
          onClick={sendPostRequest}
          className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Post
        </Button>
        {result && <p className="mt-4 text-center text-gray-700">{result}</p>}
      </div>
    </div>
  );
};

export default PostPage;
