import { addItemTwo } from "../actions/addItem";
import ClientComponent from "./clientComponent";

const ServerComponentWithAction = () => {
	const handleFormData = (fd: FormData) => {
		console.log(fd.get("name"));
		console.log("This code is running on server");
	};
	return (
		<>
			<div>serverComponentWithAction</div>
			<ClientComponent serverAct={addItemTwo} />
			<form action={handleFormData}>
				<input type="text" name="name" />
				<button type="submit">Add New</button>
			</form>
		</>
	);
};

export default ServerComponentWithAction;
