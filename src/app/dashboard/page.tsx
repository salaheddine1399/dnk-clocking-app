"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Importing ShadCN UI components

const Dashboard = () => {
  const router = useRouter();

  const goToPostPage = () => {
    router.push("/post");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg p-6 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-900">
          Dashboard
        </h1>
        <Button
          onClick={goToPostPage}
          className="w-full py-3 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          Envoyer
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
