import { sortBy } from "../utils/jsUtils";

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "nodejs"
  | "mongodb"
  | "favorite"
  | "opensource"
  | "product"
  | "design"
  | "i18n"
  | "versioning"
  | "large"
  | "meta"
  | "personal"
  | "templates"
  | "portfolio"
  | "nextjs"
  | "vanilla"
  | "typescript"
  | "ai"
  | "game"
  | "optica"
  | "clone";

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

export const Tags: { [type in TagType]: Tag } = {
  html: {
    label: "HTML",
    description: "",
    color: "#f06529",
  },
  css: {
    label: "CSS",
    description: "",
    color: "#2965f1",
  },
  javascript: {
    label: "JavaScript",
    description: "",
    color: "#f0db4f",
  },
  vanilla: {
    label: "Vanilla",
    description: "",
    color: "#f0db4f",
  },
  react: {
    label: "React.js",
    description: "",
    color: "#61dafb",
  },
  nextjs: {
    label: "Next.js",
    description: "",
    color: "#000000",
  },
  typescript: {
    label: "TypeScript",
    description: "",
    color: "#007acc",
  },
  nodejs: {
    label: "Node.js",
    description: "",
    color: "#026e00",
  },

  mongodb: {
    label: "MongoDB",
    description: "",
    color: "#13aa52",
  },

  favorite: {
    label: "Favorite",
    description: "",
    color: "#f06529",
  },
  opensource: {
    label: "Open-Source",
    description: "",
    color: "#39ca30",
  },

  product: {
    label: "Product",
    description: "",
    color: "#dfd545",
  },

  design: {
    label: "Design",
    description: "",
    color: "#a44fb7",
  },

  i18n: {
    label: "I18n",
    description: "",
    color: "#127f82",
  },

  versioning: {
    label: "Versioning",
    description: "",
    color: "#fe6829",
  },

  large: {
    label: "Large",
    description: "",
    color: "#8c2f00",
  },

  meta: {
    label: "Meta",
    description: "",
    color: "#4267b2",
  },

  personal: {
    label: "Personal",
    description: "",
    color: "#14cfc3",
  },

  templates: {
    label: "Templates",
    description: "",
    color: "#ffcfc3",
  },
  portfolio: {
    label: "portfolio",
    description: "",
    color: "#ff4400",
  },

  clone: {
    label: "Clone",
    description: "",
    color: "#004400",
  },

  ai: {
    label: "AI",
    description: "",
    color: "#007acc",
  },
  game: {
    label: "Game",
    description: "",
    color: "#555555",
  },
  optica: {
    label: "Optica",
    description: "",
    color: "#ffff",
  }
};

const Users: User[] = [
  {
    title: "yourtitle",
    description: "Description goes here!!",
    preview: require("./showcase/YouTube-Clone.jpg"), // Require("./showcase/your_image.png"),
    website: "https://jiitopticachapter.com",
    source: "https://github.com/jiitopticachapter",
    tags: ["optica"],

  },

];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes("favorite"));
  return result;
}

export const sortedUsers = sortUsers();
