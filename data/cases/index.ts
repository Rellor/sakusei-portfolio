export type Case = {
  slug: string;
  title: string;
  category: string;
  description: string;
  src: string;
};

import { techflowCase } from "./techflow-bv-detailed";
import { kapsalonPrestigeCase } from "./kapsalon-prestige-detailed";
import { tattooStudioInkCase } from "./tattoo-studio-ink-detailed";
import { lindenItCase } from "./linden-it-detailed";

export const detailedCases = {
  techflow: techflowCase,
  kapsalonPrestige: kapsalonPrestigeCase,
  tattooStudioInk: tattooStudioInkCase,
  lindenIt: lindenItCase,
};
