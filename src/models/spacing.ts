export const spacingList = [
  "0",
  "05",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "8",
  "10",
  "12",
  "16",
  "20",
  "24",
  "31",
] as const;

export type Spacing = (typeof spacingList)[number];
