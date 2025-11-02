import { Course, Lesson, Register } from "./core/types";

const lessons: Lesson[] = [
  {
    id: 1,
    paths: ["apache", "00_introduction.mdx"],
    label: "Introduction",
    slug: "introduction",
    course_id: 1,
  },
  {
    id: 2,
    paths: ["apache", "01_htpasswd.mdx"],
    label: "Sécurité htpasswd",
    slug: "htpasswd",
    course_id: 1,
  },
  {
    id: 3,
    paths: ["docker", "00_decouverte_docker.mdx"],
    label: "Découverte",
    slug: "decouverte_docker",
    course_id: 2,
  },
  {
    id: 4,
    paths: ["docker", "01_dockerfile.mdx"],
    label: "Dockerfile",
    slug: "dockerfile",
    course_id: 2,
  },
  {
    id: 5,
    paths: ["docker", "02_docker_compose.mdx"],
    label: "Docker Compose",
    slug: "docker_compose",
    course_id: 2,
  },
  {
    id: 6,
    paths: ["git", "00_introduction.mdx"],
    label: "Introduction",
    slug: "introduction",
    course_id: 3,
  },
  {
    id: 7,
    paths: ["git", "01_installation.mdx"],
    label: "Installation",
    slug: "installation",
    course_id: 3,
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
