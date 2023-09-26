"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  return children;
};
