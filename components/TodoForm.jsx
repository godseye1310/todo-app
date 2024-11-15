// components/TodoForm.js
"use client";

import { useTodoContext } from "@/context/todoContext";
import { useState } from "react";

const TodoForm = () => {
	const [text, setText] = useState("");
	const { addTodo } = useTodoContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text.trim()) return;
		addTodo(text);
		setText("");
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
