"use client";

import { useEffect, useState } from "react";
import { Disaster } from "@/types/disaster.types";
import { DisasterCard } from "@/components/DisasterCard";
import { api } from "@/lib/api";

export default function DisastersPage() {
  const [disasters, setDisasters] = useState<Disaster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDisasters() {
      try {
        const { data } = await api.get('/disasters');
        setDisasters(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchDisasters();
  }, []);

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">All Disasters</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {disasters.map((disaster) => (
          <DisasterCard key={disaster.id} disaster={disaster} />
        ))}
      </div>
    </main>
  );
}
