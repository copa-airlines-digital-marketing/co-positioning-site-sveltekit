import type { HTMLAttributes } from "svelte/elements";
import Heading from "./heading.svelte";
import { tv, type VariantProps } from "tailwind-variants";

const headingVariants = tv({
  base: 'font-sans font-bold text-primary',
  variants: {
    variant: {
      h1: '',
      h2: '',
      h3: 'text-lg leading-6 font-bold lg:text-xl lg:leading-8',
      h4: '',
      displayBig: 'text-4xl tracking-tight sm:text-6xl sm:tracking-tighter md:text-7xl',
      displayNormal: 'text-3xl tracking-tight sm:text-4xl sm:tracking-tighter lg:text-5xl',
      displaySmall: 'font-normal text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-tight lg:-tracking-widest text-grey-700',
      displayTiny: 'font-normal text-lg lg:text-xl text-grey-700'
    },
  },
  defaultVariants: {
    variant: 'h1'
  }
})

type Variant = VariantProps<typeof headingVariants>["variant"];
type Tag = keyof Pick<HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

type Props = HTMLAttributes<HTMLHeadElement> & {
	variant?: Variant;
  tag?: Tag
};

export {
  Heading,
  headingVariants,

  type Props,
  //
  type Props as HeadingProps,
}