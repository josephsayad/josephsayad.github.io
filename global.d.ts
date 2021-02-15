/**
 * @fileoverview Contains generic TypeScript types that may be frequently used
 * throughout one to many TSX files in the project.
 */

type Nullable<T> = T | null;

type DeviceDetail = {
  type: string;
  windowWidth: Nullable<number>;
};

type NavOption = {
  option: string;
  link: string;
};
