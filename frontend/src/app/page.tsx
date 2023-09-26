"use client";

import { useAuth } from "./context/authContext";

export default function Home() {
  const { user } = useAuth();

  console.log(user);

  return (
    <main>
      {user ? (
        <h1 className="text-white">Hello, {user.name}!</h1>
      ) : (
        <h1 className="text-white"> guest!</h1>
      )}
    </main>
  );
}
