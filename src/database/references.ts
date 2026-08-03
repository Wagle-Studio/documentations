import { Reference } from "@/core/types";

const references: Reference[] = [
  {
    id: 1,
    label: "PHP - Syntaxe de base",
    url: "https://www.php.net/manual/fr/language.oop5.basic.php",
  },
  {
    id: 2,
    label: "PHP - Mots réservés",
    url: "https://www.php.net/manual/fr/reserved.php",
  },
  {
    id: 3,
    label: "PHP - Propriétés",
    url: "https://www.php.net/manual/fr/language.oop5.properties.php",
  },
  {
    id: 4,
    label: "PHP - Constantes",
    url: "https://www.php.net/manual/fr/language.oop5.constants.php",
  },
  {
    id: 5,
    label: "PHP - Auto-chargement de classes",
    url: "https://www.php.net/manual/fr/language.oop5.autoload.php",
  },
  {
    id: 6,
    label: "PHP - Constructeurs et destructeurs",
    url: "https://www.php.net/manual/fr/language.oop5.decon.php",
  },
  {
    id: 7,
    label: "PHP - Visibilité",
    url: "https://www.php.net/manual/fr/language.oop5.visibility.php",
  },
  {
    id: 8,
    label: "PHP - Héritage",
    url: "https://www.php.net/manual/fr/language.oop5.inheritance.php",
  },
  {
    id: 9,
    label: "PHP - Statique",
    url: "https://www.php.net/manual/fr/language.oop5.static.php",
  },
  {
    id: 10,
    label: "PHP - Abstraction de classes",
    url: "https://www.php.net/manual/fr/language.oop5.abstract.php",
  },
  {
    id: 11,
    label: "PHP - Interfaces",
    url: "https://www.php.net/manual/fr/language.oop5.interfaces.php",
  },
  {
    id: 12,
    label: "PHP - Traits",
    url: "https://www.php.net/manual/fr/language.oop5.traits.php",
  },
  {
    id: 13,
    label: "Git - Documentation officielle",
    url: "https://git-scm.com/docs",
  },
  {
    id: 14,
    label: "Git - Installer Git",
    url: "https://git-scm.com/install",
  },
  {
    id: 15,
    label: "Git - Démarrer avec Git",
    url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
  },
  {
    id: 16,
    label: "Git - Démarrer avec un répertoire Git",
    url: "https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository",
  },
  {
    id: 17,
    label: "Docker - Les volumes",
    url: "https://docs.docker.com/engine/storage/volumes/",
  },
  {
    id: 18,
    label: "Docker - Les images",
    url: "https://docs.docker.com/engine/reference/commandline/pull/",
  },
  {
    id: 19,
    label: "Docker - Documentation officielle",
    url: "https://docs.docker.com",
  },
  {
    id: 20,
    label: "Microsoft - Installer WSL",
    url: "https://learn.microsoft.com/fr-fr/windows/wsl/install",
  },
  {
    id: 21,
    label: "Docker - Dockerfile",
    url: "https://docs.docker.com/reference/dockerfile/",
  },
  {
    id: 22,
    label: "Docker - Docker Hub",
    url: "https://hub.docker.com/",
  },
  {
    id: 23,
    label: "Docker - Docker Compose",
    url: "https://docs.docker.com/compose/",
  },
  {
    id: 24,
    label: "Apache - Virtual Hosts",
    url: "https://httpd.apache.org/docs/2.2/fr/vhosts/examples.html",
  },
  {
    id: 25,
    label: "Ubuntu - Installer et configurer Apache",
    url: "https://doc.ubuntu-fr.org/apache2",
  },
  {
    id: 26,
    label: "Apache - htpasswd",
    url: "https://httpd.apache.org/docs/2.4/fr/programs/htpasswd.html",
  },
  {
    id: 27,
    label: "API REST - 6 règles des API REST",
    url: "https://appmaster.io/fr/blog/les-six-regles-du-repos-apis",
  },
  {
    id: 28,
    label: "Wikipedia - REST",
    url: "https://fr.wikipedia.org/wiki/Representational_state_transfer",
  },
  {
    id: 29,
    label: "Article - Comprendre les API REST",
    url: "https://blog.stephane-robert.info/docs/developper/api-rest/",
  },
  {
    id: 30,
    label: "MDN - ETag header",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag",
  },
  {
    id: 31,
    label: "Article - Headers",
    url: "https://http.dev/headers",
  },
  {
    id: 32,
    label: "Symfony - Composant HttpKernel",
    url: "https://symfony.com/doc/current/components/http_kernel.html",
  },
  {
    id: 33,
    label: "Symfony - Événements du framework",
    url: "https://symfony.com/doc/current/reference/events.html",
  },
  {
    id: 34,
    label: "Symfony - Conteneur de services",
    url: "https://symfony.com/doc/current/service_container.html",
  },
  {
    id: 35,
    label: "Symfony - EventDispatcher",
    url: "https://symfony.com/doc/current/event_dispatcher.html",
  },
  {
    id: 36,
    label: "Symfony - Doctrine et les bases de données",
    url: "https://symfony.com/doc/current/doctrine.html",
  },
  {
    id: 37,
    label: "Doctrine - Documentation ORM",
    url: "https://www.doctrine-project.org/projects/doctrine-orm/en/current/index.html",
  },
  {
    id: 38,
    label: "Symfony - Sécurité",
    url: "https://symfony.com/doc/current/security.html",
  },
  {
    id: 39,
    label: "Symfony - Les voters",
    url: "https://symfony.com/doc/current/security/voters.html",
  },
  {
    id: 40,
    label: "Symfony - Messenger",
    url: "https://symfony.com/doc/current/messenger.html",
  },
  {
    id: 41,
    label: "Symfony - Sessions",
    url: "https://symfony.com/doc/current/session.html",
  },
  {
    id: 42,
    label: "Symfony - Firewalls stateless et authentification",
    url: "https://symfony.com/doc/current/security.html#stateless-firewalls",
  },
  {
    id: 43,
    label: "Symfony - Hachage des mots de passe",
    url: "https://symfony.com/doc/current/security/passwords.html",
  },
  {
    id: 44,
    label: "Symfony - Limiter les tentatives de connexion",
    url: "https://symfony.com/doc/current/security.html#limiting-login-attempts",
  },
  {
    id: 45,
    label: "Symfony - Authenticators personnalisés",
    url: "https://symfony.com/doc/current/security/custom_authenticator.html",
  },
  {
    id: 46,
    label: "Symfony - Événements de sécurité",
    url: "https://symfony.com/doc/current/security.html#security-events",
  },
  {
    id: 47,
    label: "Symfony - Remember Me",
    url: "https://symfony.com/doc/current/security/remember_me.html",
  },
  {
    id: 48,
    label: "Symfony - Login Link",
    url: "https://symfony.com/doc/current/security/login_link.html",
  },
  {
    id: 49,
    label: "Symfony - Protection CSRF",
    url: "https://symfony.com/doc/current/security/csrf.html",
  },
  {
    id: 50,
    label: "LexikJWTAuthenticationBundle - Documentation",
    url: "https://github.com/lexik/LexikJWTAuthenticationBundle",
  },
  {
    id: 51,
    label: "RFC 7519 - JSON Web Token",
    url: "https://datatracker.ietf.org/doc/html/rfc7519",
  },
  {
    id: 52,
    label: "OpenID Connect - Documentation",
    url: "https://openid.net/developers/how-connect-works/",
  },
  {
    id: 53,
    label: "Symfony - Créer un bundle réutilisable",
    url: "https://symfony.com/doc/current/bundles.html",
  },
  {
    id: 54,
    label: "Symfony - Configuration d'un bundle",
    url: "https://symfony.com/doc/current/bundles/configuration.html",
  },
  {
    id: 55,
    label: "Symfony - Compiler Pass",
    url: "https://symfony.com/doc/current/service_container/compiler_passes.html",
  },
  {
    id: 56,
    label: "Symfony - Utiliser Symfony Flex",
    url: "https://symfony.com/doc/current/setup/flex.html",
  },
  {
    id: 57,
    label: "Symfony - L'outil en ligne de commande",
    url: "https://symfony.com/download",
  },
  {
    id: 58,
    label: "Symfony - Maker Bundle",
    url: "https://symfony.com/bundles/SymfonyMakerBundle/current/index.html",
  },
  {
    id: 59,
    label: "Symfony - Le Profiler",
    url: "https://symfony.com/doc/current/profiler.html",
  },
  {
    id: 60,
    label: "API Platform - Documentation",
    url: "https://api-platform.com/docs/",
  },
  {
    id: 61,
    label: "EasyAdmin - Documentation",
    url: "https://symfony.com/bundles/EasyAdminBundle/current/index.html",
  },
  {
    id: 62,
    label: "VichUploaderBundle - Documentation",
    url: "https://github.com/dustin10/VichUploaderBundle",
  },
  {
    id: 63,
    label: "Symfony - Les composants",
    url: "https://symfony.com/components",
  },
  {
    id: 64,
    label: "Symfony - Le composant Console",
    url: "https://symfony.com/doc/current/components/console.html",
  },
  {
    id: 65,
    label: "Symfony - Le composant Serializer",
    url: "https://symfony.com/doc/current/components/serializer.html",
  },
  {
    id: 66,
    label: "Symfony - Le composant Workflow",
    url: "https://symfony.com/doc/current/workflow.html",
  },
  {
    id: 67,
    label: "Symfony - Le composant HttpClient",
    url: "https://symfony.com/doc/current/http_client.html",
  },
  {
    id: 68,
    label: "Symfony - Le composant Lock",
    url: "https://symfony.com/doc/current/components/lock.html",
  },
  {
    id: 69,
    label: "Symfony - Verrouiller des ressources",
    url: "https://symfony.com/doc/current/lock.html",
  },
];

export default references;
