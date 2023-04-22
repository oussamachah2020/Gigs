type serviceType = {
  id: string;
  image: string;
  caption: string;
}[];

export const services = [
  {
    id: "1",
    image: require("../assets/icons/jobSeeker.png"),
    caption:
      "Search for the job in different catgories, choose the one that category and place that suits you",
  },
  {
    id: "2",
    image: require("../assets/icons/cv.png"),
    caption:
      "Build a profesional resume, that attracts recruters for better oppertunities.",
  },
  {
    id: "3",
    image: require("../assets/icons/chat.png"),
    caption:
      "Stay in touch with recruters, to know from them and have more chancs.",
  },
];
