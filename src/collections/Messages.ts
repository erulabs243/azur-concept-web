import type { CollectionConfig } from "payload/types";

export const Messages = {
	slug: "messages",
	admin: {
		useAsTitle: "subject",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			type: "row",
			fields: [
				{
					name: "email",
					type: "text",
				},
				{
					name: "phone",
					type: "text",
				},
			],
		},
		{
			name: "subject",
			type: "text",
			required: true,
		},
		{
			name: "message",
			type: "textarea",
			required: true,
		},
		{
			type: "row",
			fields: [
				{ name: "read", type: "checkbox", defaultValue: false },
				{
					name: "readtAt",
					type: "date",
					admin: {
						date: {
							pickerAppearance: "dayAndTime",
						},
					},
				},
			],
		},
		{
			type: "select",
			name: "messageType",
			hasMany: false,
			required: true,
			admin: {
				isClearable: true,
			},
			options: [
				{
					label: "Career",
					value: "career",
				},
				{
					label: "Help",
					value: "help",
				},
				{
					label: "Work",
					value: "work",
				},
			],
		},
	],
} satisfies CollectionConfig;
