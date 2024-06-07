import { headers } from "next/headers";

export default function Page() {
	const headersList = headers();
	console.log("From page", headersList);

	return <h1>Home page</h1>;
}
