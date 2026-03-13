import { ButtonLink } from "@/ui";

export default function NotFound() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: "var(--space-4)", textAlign: "center" }}>
      <h1>404 — Page introuvable</h1>
      <p>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
      <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
    </main>
  );
}
