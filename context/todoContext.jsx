// context/TodoContext.js
"use client";

import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		setTodos((prev) => [
			...prev,
			{ id: Date.now(), text, completed: false },
		]);
	};

	const toggleTodo = (id) => {
		setTodos((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	return (
		<TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodoContext = () => useContext(TodoContext);
