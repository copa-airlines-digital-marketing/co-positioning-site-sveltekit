<script>
	import BookingForm from '$lib/components/ui/booking-form/booking-form.svelte';
	import { Heading } from '$lib/components/ui/heading';
</script>

<div
	id="reserva"
	class="py-roomy container-grid bg-gradient-to-br from-primary-ultradark to-primary"
>
	<div id="bookingform" class="col-start-2">
		<Heading variant="h3" tag="h2" class="text-common-white mb-3">¿A dónde quieres volar?</Heading>
		<BookingForm />
	</div>
</div>
