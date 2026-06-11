"use client";

import { useEffect, useState } from "react";

export default function BackendStatus() {
  const [message, setMessage] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("Backend not connected");
      });
  }, []);

  return (
    <section className="mb-20">
      <div className="bg-slate-900 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">
          Backend Status
        </h2>

        <p className="text-slate-400">
          {message}
        </p>
      </div>
    </section>
  );
}
