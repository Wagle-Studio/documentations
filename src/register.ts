import { Course, Lesson, Register } from "./core/types";

const lessons: Lesson[] = [
  {
    id: 1,
    paths: ["apache", "commandes_utiles.mdx"],
    label: "Commandes utiles",
    slug: "commandes_utiles",
    course_id: 1,
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 2,
    paths: ["apache", "installer_apache.mdx"],
    label: "Installer Apache",
    slug: "installer_apache",
    course_id: 1,
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 3,
    paths: ["apache", "virtual_host.mdx"],
    label: "Virtual Host",
    slug: "virtual_host",
    course_id: 1,
    created: "2 novembre 2025",
    updated: "2 novembre 2025",
  },
  {
    id: 4,
    paths: ["apache", "htpasswd.mdx"],
    label: "Restiction .htpasswd",
    slug: "htpasswd",
    course_id: 1,
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
];

const register: Register = { courses, lessons };

export default register;
