export type Case = {
  slug: string;
  title: string;
  category: string;
  description: string;
  src: string;
};

import { esnCase } from "./esn-detailed";
import { bailaDembowCase } from "./baila-dembow-detailed";
import { carlaFrigoCase } from "./carla-frigo-detailed";
import { lindenItCase } from "./linden-it-detailed";
import { paperstraightCase } from "./paperstraight-detailed";
import { santaniCase } from "./santani-detailed";
import { thimoDerksCase } from "./thimo-derks-detailed";

export const detailedCases = {
  //esn: esnCase,
  bailaDembow: bailaDembowCase,
  carlaFrigo: carlaFrigoCase,
  lindenIt: lindenItCase,
  paperstraight: paperstraightCase,
  santani: santaniCase,
  thimoDerks: thimoDerksCase,
};
