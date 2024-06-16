"use client";
import React from "react";

type ClientType = {
	serverAct: () => void;
};

const ClientComponent = (p: ClientType) => {
	console.log(p);
	return (
		<>
			<div>ClientComponent</div>
			<button
				className="bg-slate-400 text-white p-4 my-2 rounded-lg"
				onClick={() => p.serverAct()}>
				Client Button but running on server
			</button>
		</>
	);
};

export default ClientComponent;
