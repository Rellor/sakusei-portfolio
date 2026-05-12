export type Case = {
  slug: string;
  title: string;
  category: string;
  description: string;
  src: string;
};

import { techflowCase } from "./techflow-bv-detailed";

export const detailedCases = {
  techflow: techflowCase,
  // kapsalonPrestige: kapsalonPrestigeCase,
};
