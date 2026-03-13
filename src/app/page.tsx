import { ListCourses } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";

export default function HomePage() {
  const courses = RegisterManager.getCourses().data;

  return (
    <div className="page--homepage homepage">
      <h1>Documentations</h1>
      <div className="homepage__welcome">
        <p>
          Notes et références techniques sur le développement et la conception
          web.
        </p>
        <p>
          Constituées au fil de mes formations, ces ressources couvrent
          principes, concepts et bonnes pratiques.
        </p>
        <p>
          Les contenus évoluent, référez-vous aux documentations officielles
          pour les informations les plus à jour.
        </p>
      </div>
      <ListCourses courses={courses} />
    </div>
  );
}
