<script lang="ts">
	import { OutlineClose } from '$lib/components/icons';
	import { Button } from '$lib/components/ui/button';
	import { flyAndScale } from '$lib/utils';
	import { Dialog } from 'bits-ui';
	import { fade } from 'svelte/transition';
</script>

<Dialog.Root>
	<Dialog.Trigger tabindex={-1}>
		<slot name="trigger" />
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="fixed inset-0 z-50 bg-primary-ultradark/80"
		/>
		<Dialog.Content
			transition={flyAndScale}
			class="fixed inset-0 z-50 shadow-xl bg-backgound-lightblue/10 overflow-hidden"
		>
			<slot name="video" />
			<Dialog.Close class="absolute right-roomy top-roomy" tabindex={-1}>
				<Button variant="invert" class="rounded-full px-3">
					<OutlineClose class="size-6"></OutlineClose>
					<span class="sr-only">Cerrar</span>
				</Button>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
