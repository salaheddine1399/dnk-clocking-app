"use client";
// pages/login.tsx

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Importing ShadCN UI components
import { Input } from "@/components/ui/input";
import { Checkbox } from "@radix-ui/react-checkbox";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [devBypass, setDevBypass] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = () => {
    // Simulate login logic
    if (devBypass || (email === "dev@example.com" && password === "password")) {
      router.push("/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-900">
          Login
        </h1>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <div className="flex items-center">
            <Checkbox
              checked={devBypass}
              onChange={() => setDevBypass(!devBypass)}
              className="w-10 h-10 mr-2"
            />
            <span className="text-gray-700">Dev Bypass</span>
          </div>
          <Button
            onClick={handleLogin}
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
