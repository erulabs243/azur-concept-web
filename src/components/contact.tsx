"use client";

import { useFormState, useFormStatus } from "react-dom";
import { LucideMail, Phone, SendIcon, TextIcon, User } from "lucide-react";
import type { ZodIssue } from "zod";
import clsx from "clsx";

import contactAction from "@/actions/message";
import type { MessageType } from "@/schemas/message";

// TODO manage initial form state
const initialState: MessageType = {
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
};

// TODO display old values if error

export default function ContactForm() {
	const [state, formAction] = useFormState(contactAction, { errors: [] });
	const { pending } = useFormStatus();

	const nameErrors = findErrors("name", state?.errors);
	const emailErrors = findErrors("email", state?.errors);
	const phoneErrors = findErrors("phone", state?.errors);
	const subjectErrors = findErrors("subject", state?.errors);
	const messageErrors = findErrors("message", state?.errors);

	return (
		<form action={formAction} className="space-y-4">
			<div className="form-control w-full">
				<div className="label">
					<label htmlFor="name" className="label-text">
						Name
					</label>
				</div>
				<div
					className={clsx(
						"input input-bordered rounded-box flex items-center gap-2",
						nameErrors && "input-error",
					)}
				>
					<User className="size-4" />
					<input
						type="text"
						name="name"
						className="grow"
						placeholder="Full name"
						required
					/>
				</div>
				<ErrorMessages errors={nameErrors} />
			</div>

			<div className="flex flex-col lg:flex-row gap-4">
				<div className="form-control w-full grow">
					<div className="label">
						<label htmlFor="email" className="label-text">
							E-mail address
						</label>
					</div>
					<div
						className={clsx(
							"input input-bordered rounded-box flex items-center gap-2",
							emailErrors && "input-error",
						)}
					>
						<LucideMail className="size-4 text-neutral-700" />
						<input
							type="email"
							name="email"
							className="grow"
							placeholder="Email address"
						/>
					</div>
					<ErrorMessages errors={emailErrors} />
				</div>

				<div className="form-control w-full grow">
					<div className="label">
						<label htmlFor="phone" className="label-text">
							Phone number
						</label>
					</div>
					<div
						className={clsx(
							"input input-bordered rounded-box flex items-center gap-2",
							phoneErrors && "input-error",
						)}
					>
						<Phone className="size-4 text-neutral-700" />
						<input
							type="tel"
							name="phone"
							className="grow"
							placeholder="+243xxxxxxxxxxx"
							required
						/>
					</div>
					<ErrorMessages errors={phoneErrors} />
				</div>
			</div>

			<div className="form-control w-full">
				<div className="label">
					<label htmlFor="subject" className="label-text">
						Subject
					</label>
				</div>
				<div
					className={clsx(
						"input input-bordered rounded-box flex items-center gap-2",
						subjectErrors && "input-error",
					)}
				>
					<TextIcon className="size-4 text-neutral-700" />
					<input
						type="text"
						name="subject"
						className="grow"
						placeholder="Sujet"
						required
					/>
				</div>
				<ErrorMessages errors={subjectErrors} />
			</div>

			<div className="form-control w-full">
				<div className="label">
					<label htmlFor="message" className="label-text">
						Message
					</label>
				</div>
				<textarea
					name="message"
					className={clsx(
						"textarea textarea-bordered h-48",
						messageErrors && "textarea-error",
					)}
					required
				/>
				<ErrorMessages errors={messageErrors} />
			</div>

			<button
				type="submit"
				className="btn-primary btn rounded-box"
				disabled={pending}
			>
				Send a message <SendIcon className="size-4" />
			</button>
		</form>
	);
}

const findErrors = (fieldName: string, errors?: ZodIssue[]) => {
	if (!errors) return null;

	return errors
		.filter((item) => item.path.includes(fieldName))
		.map((item) => item.message);
};

const ErrorMessages = ({ errors }: { errors: string[] | null }) => {
	if (!errors) return null;
	if (errors.length === 0) return null;

	const text = errors.join(", ");

	return (
		<div className="label">
			<span className="label-text text-error">{text}</span>
		</div>
	);
};
