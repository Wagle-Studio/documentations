import { ListCourses } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

export default function HomePage() {
  const courses = RegisterManager.getCourses().data;

  return (
    <div className="page--homepage homepage">
      <h1>Documentations</h1>
      <div className="homepage__welcome">
        <p>
          Bienvenue dans mon recueil de documentations techniques dédié à
          l'univers du développement web.
        </p>
        <p>
          Vous trouverez ici une collection de documents illustrant et
          détaillant divers principes, concepts et bonnes pratiques que j'ai
          rassemblés comme référence personnelle et ressource pédagogique.
        </p>
        <p>
          Les documents de ce recueil sont principalement issus de mes
          interventions en tant que formateur en développement et conception
          web.
        </p>
        <p>
          Je vous invite à consulter les dates de publication et de modification
          de chaque document, et à vous référer aux documentations officielles
          pour les informations les plus récentes.
        </p>
      </div>
      <ListCourses courses={courses} />
    </div>
  );
}
