export type Case = {
  slug: string;
  title: string;
  category: string;
  description: string;
  src: string;
};

import { lindenItCase } from "./linden-it-detailed";
import { paperstraightCase } from "./paperstraight-detailed";
import { santaniCase } from "./santani-detailed";
import { thimoDerksCase } from "./thimo-derks-detailed";
import { kapsalonPrestigeCase } from "./test/kapsalon-prestige-detailed";

export const detailedCases = {
  lindenIt: lindenItCase,
  paperstraight: paperstraightCase,
  santani: santaniCase,
  thimoDerks: thimoDerksCase,
  kapsalonPrestige: kapsalonPrestigeCase,
};
