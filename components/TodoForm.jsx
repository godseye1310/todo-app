//

import { useState } from "react";

const TodoForm = () => {
	const [text, setText] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch("/api/add-todo", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ text }),
		});
		setText(""); // Clear form
		window.location.reload(); // Refresh the page to see new todos
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Add a new todo"
			/>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default TodoForm;
