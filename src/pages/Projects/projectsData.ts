import { ONNLINE_STORE_URL } from "../../constants/urls";
import {
  plantStoreHomePageImage,
  plantStoreMultiplePagesImage,
} from "../../assets";

export const projectsData: Record<
  string,
  {
    projectTitleTextColor: string;
    projectTitle: string;
    projectSubTitle: string;
    scope: string;
    highlights: string;
    projectUrl: string;
    projectHomePageImage: string;
    projectLearnings: string;
    projectMultiplePhotosImage: string;
    projectDescription: string;
    projectCaption: string;
  }
> = {
  onlineStore: {
    projectTitle: "Online Plant Store",
    projectTitleTextColor:
      "linear-gradient(to left, rgb(152, 251, 152), rgb(34, 139, 34))",

    projectSubTitle: "A full-stack eCommerce platform for plants.",
    scope: "Full Stack Development",
    highlights:
      "Frontend: React | Backend: .NET Core, AutoMapper, ASP.NET Core Identity | Database: PostgreSQL | Deployment: Docker | Features: User & Admin, API Integration",
    projectUrl: ONNLINE_STORE_URL,
    projectHomePageImage: plantStoreHomePageImage,
    projectDescription:
      "In this project, I took on full-stack development responsibilities, crafting a responsive and user friendly website. For the frontend I used React and on the backend side, I implemented a robust .NET framework, leveraging multiple essential packages such as AutoMapper for object-object mapping, Cloudinary for image management, and ASP.NET Core Identity for secure authentication. The database layer was managed with PostgreSQL, integrated smoothly through Entity Framework Core. For deployment, I used Docker to ensure a consistent and efficient deployment process across environments.\n Additionally, I implemented Stripe for payment processing, ensuring a seamless transaction experience.",
    projectLearnings:
      "This project significantly expanded my knowledge and experience in full-stack development. I gained  practical skills in building a responsive and user friendly website using React, along with Redux for state management and improved my understanding of backend development by implementing a robust .NET framework. \n Working with essential tools like AutoMapper, Cloudinary, and ASP.NET Core Identity, I learned how to effectively manage object-object mapping, image management, and secure authentication. Additionally, I developed my expertise in database management using PostgreSQL and Entity Framework Core, and I became proficient in deploying applications with Docker across multiple environments. Integrating Stripe for payment processing gave me valuable experience in handling transaction workflows. \n Overall, this project gave me a solid understanding of the key technologies involved in full-stack development.",
    projectMultiplePhotosImage: plantStoreMultiplePagesImage,
    // projectCaption - only in work page
    projectCaption:
      "A platform for plant shopping, developed with a full-stack approach.",
  },
};
