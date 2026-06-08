export type Case = {
  slug: string;
  title: string;
  category: string;
  description: string;
  src: string;
};

import { esnCase } from "./esn-detailed";
import { lindenItCase } from "./linden-it-detailed";
import { paperstraightCase } from "./paperstraight-detailed";
import { santaniCase } from "./santani-detailed";
import { thimoDerksCase } from "./thimo-derks-detailed";
import { kapsalonPrestigeCase } from "./test/kapsalon-prestige-detailed";

export const detailedCases = {
  //esn: esnCase,
  lindenIt: lindenItCase,
  paperstraight: paperstraightCase,
  santani: santaniCase,
  thimoDerks: thimoDerksCase,
  kapsalonPrestige: kapsalonPrestigeCase,
};
