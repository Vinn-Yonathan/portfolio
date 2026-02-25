type Project = {
  name: string;
  url: string;
  isFinished: boolean;
  skills: string[];
  description: string;
};

const ProjectList: Project[] = [
  {
    name: "Nutribox",
    url: "https://github.com/Vinn-Yonathan/nutribox",
    isFinished: false,
    skills: [
      "React",
      "Javascript",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
      "REST API",
    ],
    description:
      "A mock e-commerce website for a healthy food business. Through this project, I applied my Laravel and React skill by building a full-stack web application",
  },
  {
    name: "Ma Chung Indoor Navigation",
    url: "http://repository.machung.ac.id/id/eprint/944/1/312110002_Cevin%20Albert%20Yonathan_LapTA.pdf",
    isFinished: true,
    skills: ["Unity", "Immersal SDK", "C#"],
    description:
      "A prototype iOS application designed to help users navigate the Bhakti Persada building at Universitas Ma Chung using Augmented Reality technology. The application enhances wayfinding by providing an immersive navigation experience. The application was developed using Unity Engine and Immersal SDK as my final college project.",
  },
  {
    name: "Smarteens",
    url: "https://play.google.com/store/apps/details?id=com.smarteens.app&hl=en-US",
    isFinished: true,
    skills: ["Kotlin", "Supabase", "Jetpack Compose", "Material Design"],
    description:
      "Developed an Android application focused on teenagers' mental health using Kotlin and Jetpack Compose, with integrated backend services using Supabase.",
  },
  {
    name: "Medication Education Website",
    url: "https://pemusnahanobatrusak.netlify.app/",
    isFinished: true,
    skills: ["React", "Typescript", "Taiwind CSS", "GSAP"],
    description:
      "An educational website designed to inform the public about proper medication management, including safe disposal methods for damaged or expired medicines. This project was developed as part of my lecturer Pengabdian Masyarakat program for a village in Malang.",
  },
  {
    name: "AR UMC",
    url: "https://play.google.com/store/apps/details?id=com.UniversitasMaChung.ARUMC&hl=en-US",
    isFinished: true,
    skills: ["Unity", "Vuforia SDK", "C#"],
    description:
      "An Android application designed to enhance the user experience of Universitas Ma Chung brochure by integrating Augmented Reality technology. The application was developed using Unity Engine and Vuforia SDK, with C# used for application logic and interaction handling.",
  },
];

export default ProjectList;
