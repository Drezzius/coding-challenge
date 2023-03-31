export type Location = {
  id: string;
  name: string;
  matchQuality?: number;
  type: "stop" | "start" | "poi" | "suburb" | null;
  disassembledName: string;
  parent: {
    name: string;
  };
};
