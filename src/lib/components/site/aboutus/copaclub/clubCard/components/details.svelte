<script>
	import { Button } from '$components/ui/button';
	import { OutlineClose } from '$icons';
	import { Drawer } from 'vaul-svelte';
</script>

<Drawer.Portal>
	<Drawer.Overlay class="fixed inset-0 bg-primary-ultradark/60 z-50" />
	<Drawer.Content class="fixed inset-x-0 bottom-0 bg-backgound-paper z-50">
		<div class="h-1.5 mx-auto w-24 bg-grey-300 my-2"></div>
		<div class="container mx-auto mt-tiny mb-roomy">
			<Drawer.Close class="block ml-auto">
				<Button variant="transparent" size="slim">
					<OutlineClose class="size-4" />
					<span class="sr-only">Cerrar Gaveta</span>
				</Button>
			</Drawer.Close>
			<slot />
		</div>
	</Drawer.Content>
</Drawer.Portal>
