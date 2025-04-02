"use client";
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDemo({ status, message }) {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (status === "OK") {
      setVisible(true);
      setFadeOut(false);

      const fadeTimer = setTimeout(() => setFadeOut(true), 2000); // Start fade-out after 2s
      const hideTimer = setTimeout(() => setVisible(false), 3000); // Hide after 3s

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [status]);

  if (!visible) return null;

  return (
    <Alert
      className={`bg-green-400 border-0 text-white transition-opacity transform duration-1000 ease-in-out ${
        fadeOut ? "opacity-0 scale-98" : "opacity-100 scale-100"
      }`}
    >
      <Terminal className="h-4 w-4" />
      <AlertTitle> Welcome!</AlertTitle>
      <AlertDescription> {message ?? ""}.</AlertDescription>
    </Alert>
  );
}
