export type HowItWorksStep = {
  number: number;
  title: string;
  description: string;
};

export const HOW_IT_WORKS_DATA: {
  homeowners: HowItWorksStep[];
  professionals: HowItWorksStep[];
} = {
  homeowners: [
    {
      number: 1,
      title: "Describe your project",
      description:
        "Tell us what you need. From small fixes to large renovations, we'll find the right pros.",
    },
    {
      number: 2,
      title: "Compare free quotes",
      description:
        "Receive multiple quotes within minutes. Check reviews, ratings, and previous work history.",
    },
    {
      number: 3,
      title: "Hire the best pro",
      description:
        "Pick the expert that fits your budget and timeline. Secure payment through our platform.",
    },
  ],
  professionals: [
    {
      number: 1,
      title: "Create your profile",
      description:
        "Showcase your expertise, upload certifications, and highlight your past successful projects.",
    },
    {
      number: 2,
      title: "Set your service area",
      description:
        "Choose your location and categories. Get notified when homeowners in your area need help.",
    },
    {
      number: 3,
      title: "Start earning",
      description:
        "Send quotes to active leads and grow your business with a steady stream of local work.",
    },
  ],
};
