import { Course, Lesson, Register } from "./core/types";

const lessons: Lesson[] = [
  {
    id: 1,
    paths: ["apache", "apache_commandes_utiles.mdx"],
    label: "Commandes utiles",
    slug: "apache_commandes_utiles",
    course_id: 1,
    description:
      "Commandes principales pour administrer et configurer le serveur Apache.",
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 2,
    paths: ["apache", "installer_apache.mdx"],
    label: "Installer Apache",
    slug: "installer_apache",
    course_id: 1,
    description:
      "Procédure d’installation et de vérification d’Apache sur Ubuntu.",
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 3,
    paths: ["apache", "virtual_host.mdx"],
    label: "Virtual Host",
    slug: "virtual_host",
    course_id: 1,
    description:
      "Guide sur la création et la gestion des Virtual Hosts dans Apache.",
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 4,
    paths: ["apache", "htpasswd.mdx"],
    label: "Restriction .htpasswd",
    slug: "htpasswd",
    course_id: 1,
    description:
      "Mise en place d’une authentification basique avec un fichier .htpasswd.",
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 5,
    paths: ["docker", "docker_commandes_utiles.mdx"],
    label: "Commandes utiles",
    slug: "docker_commandes_utiles",
    course_id: 2,
    description:
      "Commandes principales pour administrer Docker et Docker Compose.",
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 6,
    paths: ["docker", "les_images.mdx"],
    label: "Les images",
    slug: "les_images",
    course_id: 2,
    description:
      "Principes et usages des images Docker.",
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 7,
    paths: ["docker", "volumes.mdx"],
    label: "Les volumes",
    slug: "volumes",
    course_id: 2,
    description: "Persistance et partage des données avec les volumes Docker.",
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 8,
    paths: ["docker", "docker_file.mdx"],
    label: "Dockerfile",
    slug: "docker_file",
    course_id: 2,
    description: "Création d’un Dockerfile pas à pas.",
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 9,
    paths: ["docker", "docker_compose.mdx"],
    label: "Docker Compose",
    slug: "docker_compose",
    course_id: 2,
    description:
      "Orchestration de plusieurs services avec Docker Compose.",
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
];

const courses: Course[] = [
  {
    id: 1,
    label: "Apache",
    slug: "apache",
    emoji: "/emoji/feather.png",
  },
  {
    id: 2,
    label: "Docker",
    slug: "docker",
    emoji: "/emoji/whale.png",
  },
  {
    id: 3,
    label: "Git",
    slug: "git",
    emoji: "/emoji/octopus.png",
  },
];

const register: Register = { courses, lessons };

export default register;
