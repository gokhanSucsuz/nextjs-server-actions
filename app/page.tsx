"use client";
import { addItem } from "./actions/addItem";
import { useState } from "react";
import ServerComponentWithAction from "./components/serverComponentWithAction";

export default function Home() {
	const [itemData, setItemData] = useState<{
		age: number;
		name: string;
		surname: string;
	}>({
		age: 0,
		name: "",
		surname: ""
	});
	const handleClick = async () => {
		itemData.age < 18 && alert("Age can't be less than 18!");
		const res = await addItem({
			age: itemData.age,
			name: itemData.name,
			surname: itemData.surname
		});
		console.log(res);
		console.log("this code is running on client");
	};

	return (
		<main className="flex min-h-screen flex-col items-center gap-5 p-24 bg-slate-600">
			<div>
				<ServerComponentWithAction />
			</div>
			<div className="flex flex-col">
				<label>Name</label>
				<input
					value={itemData.name}
					type="text"
					onChange={(e) => {
						setItemData({ ...itemData, name: e.target.value });
					}}
				/>
			</div>
			<div className="flex flex-col">
				<label>Surname</label>
				<input
					value={itemData.surname}
					type="text"
					onChange={(e) => {
						setItemData({
							...itemData,
							surname: e.target.value
						});
					}}
				/>
			</div>
			<div className="flex flex-col">
				<label>Age</label>
				<input
					value={itemData.age}
					type="text"
					onChange={(e) => {
						setItemData({
							...itemData,
							age: Number(e.target.value)
						});
					}}
				/>
			</div>
			<button
				onClick={handleClick}
				className="bg-blue-500 p-3 text-white rounded-xl">
				Add Item
			</button>

			{JSON.stringify(itemData)}
		</main>
	);
}
