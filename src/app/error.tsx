"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: "var(--space-4)", textAlign: "center" }}>
      <h1>Une erreur est survenue</h1>
      <p>{error.message || "Quelque chose s&apos;est mal passé."}</p>
      <div style={{ display: "flex", gap: "var(--space-2)" }}>
        <Link href="/">Retour à l&apos;accueil</Link>
      </div>
    </main>
  );
}
