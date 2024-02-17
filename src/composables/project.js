export function useProjects() {
  const projects = [
    {
      id: 1,
      name: "NoteSync - update version coming soon",
      description:
        "Seamless note-taking app. Features: CRUD operations, Firebase sync, Google OAuth, responsive design, and note-sharing.",
      githubLink: "https://github.com/RageKage/NoteSync",
      liveDemoLink: "https://notesyncapp.com/#/",
    },
    {
      id: 2,
      name: "Wisdom Weyn - The Somali Proverbs and Poetry",
      description:
        "Discover a collections of Poetry (Gabay) and proverbs (Maahmaahyo) submitted by users, each enhanced with user-contributed meanings and insights.",

      githubLink: "https://github.com/RageKage/Wisdom_Weyn_V_3_Final",
      liveDemoLink: "https://wisdom-weyn.web.app/",
    },
    {
      id: 4,
      name: "Flag Game ",
      description:
        "How to Play: \nGuess the country flag by their name.\nA wrong guess costs a heart\nA correct guess adds 5 seconds to the timer and can restore a heart (up to 3 max).",
      githubLink: "https://github.com/RageKage/Guessflag",
      liveDemoLink: "https://ragekage.github.io/Guessflag/flagGame.html",
    },
    {
      id: 5,
      name: "More Projects will be added to the list soon..",
      description: "",
      githubLink: "",
      liveDemoLink: "",
    },
  ];

  return {
    projects,
  };
}
