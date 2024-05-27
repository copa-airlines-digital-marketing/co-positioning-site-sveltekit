export { default as Root } from './image.svelte'

export type ImageToolsPicture = {
  sources: Record<string, string>;
  img: {
    src: string;
    w: number;
    h: number;
  };
};

export type ImageToolsPictureWithMediaQuery = Record<string, ImageToolsPicture>
