import Button from "./button.svelte";
import type { Button as ButtonPrimitive } from 'bits-ui'
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: 'max-h-16 px-4 py-3 inline-flex gap-1 border outline-offset-4 active:outline focus-visible:outline disabled:text-grey-500 disabled:cursor-not-allowed transition-colors text-center text-sm font-medium',
  variants: {
    variant: {
      default: 'bg-primary border-primary text-common-white hover:bg-primary-ultradark hover:border-primary-ultradark active:bg-primary active:border-primary active:outline-primary focus-visible:bg-primary-ultradark focus-visible:border-primary focus-visible:outline-primary-ultradark disabled:bg-grey-100 disabled:border-grey-100',
      invert: 'bg-transparent border-common-white text-common-white hover:bg-common-white hover:text-primary-light active:bg-common-white active:text-primary-light active:outline-common-white focus-visible:bg-common-white focus-visible:outline-common-white focus-visible:text-primary-light disabled:bg-transparent disabled:opacity-50 disabled:border-common-white disabled:text-common-white',
      light: 'bg-primary-light border-primary-light outline-none text-common-white hover:bg-primary-ultradark hover:border-primary-ultradark active:bg-primary-light active:border-primary-ultralight focus-visible:bg-primary-ultradark focus-visible:border-primary-ultradark disabled:bg-grey-100 disabled:border-grey-100',
      outline: 'bg-transparent border-primary text-primary hover:bg-primary hover:text-common-white active:bg-primary-ultradark active:border-primary-ultradark active:outline-primary-ultradark active:text-common-white focus-visible:bg-primary focus-visible:border-primary focus-visible:outline-primary-ultradark focus-visible:text-common-white disabled:bg-grey-200 disabled:border-grey-500',
      transparent: 'bg-transparent border-transparent text-primary hover:bg-backgound-lightblue hover:border-backgound-lightblue active:bg-backgound-lightblue active:border-backgound-lightblue active:outline-primary-faded focus-visible:bg-backgound-lightblue focus-visible:border-backgound-lightblue focus-visible:outline-primary-faded disabled:opacity-50 disabled:bg-transparent disabled:border-transparent'
    },
    size: {
      default: '',
      fancyBig: 'gap-2',
      fancySmall: 'gap-2 text-sm',
      giant: 'max-h-20 gap-2 text-2xl border-2 active:outline-2 focus-visible:outline-2',
      large: 'text-base',
      slim: 'text-xs py-2'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
  Button,
  type Props,
  type Events,
  //
  type Props as ButtonProps,
	type Events as ButtonEvents,
  buttonVariants
}