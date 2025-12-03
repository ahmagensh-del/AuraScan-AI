"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleScan = () => {
    if (!url.trim()) {
      alert("Please paste a link or upload a photo first.");
      return;
    }
    window.location.href = "/loading?img=" + encodeURIComponent(url);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#070b16] via-[#0d1324] to-[#070b16] flex flex-col items-center justify-center px-6">
      {/* your page content */}
    </div>
  );
}
