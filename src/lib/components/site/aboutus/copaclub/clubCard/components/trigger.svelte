<script>
	import { Drawer } from 'vaul-svelte';
	import { Heading } from '$components/ui/heading';
	import { OutlineInfo, OutlineLocationOn } from '$icons';
</script>

<Drawer.Trigger class="bg-backgound-paper shadow-md h-full w-full">
	<span class="block w-full aspect-[4_/_2] bg-grey-100"></span>
	<span class="text-primary-dark flex justify-between items-center py-tiny px-minimal">
		<span class="flex">
			<OutlineLocationOn class="size-6" />
			<Heading variant="h4" tag="h4" class="text-left">
				<slot />
			</Heading>
		</span>
		<OutlineInfo class="size-6 text-primary-light" />
	</span>
</Drawer.Trigger>
