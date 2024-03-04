"use client";
import { ReactNode, useEffect, useState } from "react";

export default function Console(): ReactNode {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.table({
        version: "0.0.1",
      });
    }
  }, [mounted]);

  if (!mounted) return <></>;
}
