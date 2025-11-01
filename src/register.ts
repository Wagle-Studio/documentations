import { Course, Lesson, Register } from "./core/types";

const lessons: Lesson[] = [
  {
    id: 1,
    index: 1,
    paths: ["apache", "00_introduction.mdx"],
    label: "Introduction",
    slug: "introduction",
    course_id: 1,
  },
  {
    id: 2,
    index: 2,
    paths: ["apache", "01_htpasswd.mdx"],
    label: "Sécurité htpasswd",
    slug: "htpasswd",
    course_id: 1,
  },
  {
    id: 3,
    index: 1,
    paths: ["docker", "00_decouverte_docker.mdx"],
    label: "Découverte",
    slug: "decouverte_docker",
    course_id: 2,
  },
  {
    id: 4,
    index: 2,
    paths: ["docker", "01_dockerfile.mdx"],
    label: "Dockerfile",
    slug: "dockerfile",
    course_id: 2,
  },
  {
    id: 5,
    index: 3,
    paths: ["docker", "02_docker_compose.mdx"],
    label: "Docker Compose",
    slug: "docker_compose",
    course_id: 2,
  },
  {
    id: 6,
    index: 1,
    paths: ["git", "00_introduction.mdx"],
    label: "Introduction",
    slug: "introduction",
    course_id: 3,
  },
  {
    id: 7,
    index: 2,
    paths: ["git", "01_installation.mdx"],
    label: "Installation",
    slug: "installation",
    course_id: 3,
  },
];

const courses: Course[] = [
  {
    id: 1,
    index: 1,
    label: "Apache",
    slug: "apache",
  },
  {
    id: 2,
    index: 2,
    label: "Docker",
    slug: "docker",
  },
  {
    id: 3,
    index: 3,
    label: "Git",
    slug: "git",
  },
];

const register: Register = { courses, lessons };

export default register;
