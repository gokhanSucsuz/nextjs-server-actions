"use server";

export async function addItem(item: {
	name: string;
	surname: string;
	age: number;
}): Promise<unknown> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ ...item, id: Math.random().toString() });
		}, 1500);
	});
}
export async function addItemTwo() {
	console.log("running on server");
}
