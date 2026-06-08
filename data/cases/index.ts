export type Case = {
  slug: string;
  title: string;
  category: string;
  description: string;
  src: string;
};

import { lindenItCase } from "./linden-it-detailed";
import { thimoDerksCase } from "./thimo-derks-detailed";

export const detailedCases = {
  lindenIt: lindenItCase,
  thimoDerks: thimoDerksCase,
};
