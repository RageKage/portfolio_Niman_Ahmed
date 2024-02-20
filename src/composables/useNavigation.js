export function useNavigation() {
  const navLinks = {
    home: {
      name: "Home",
      path: "/",
    },

    projects: {
      name: "Projects",
      path: "/projects",
    },

    resume: {
      name: "Resume",
      path: "/resume",
    },
  };

  return {
    navLinks,
  };
}
