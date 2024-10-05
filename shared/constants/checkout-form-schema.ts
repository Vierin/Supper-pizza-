import { z } from 'zod';

export const checkoutFormSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: 'First Name must have at least 2 chars' }),
	lastName: z
		.string()
		.min(2, { message: 'Last Name must have at least 2 chars' }),
	email: z.string().email({ message: 'Invalid email' }),
	phone: z.string().min(10, { message: 'Enter correct phone number' }),
	address: z.string().min(5, { message: 'Enter correct address' }),
	comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
