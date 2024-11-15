// components/TodoItem.js
"use client";

import { useTodoContext } from "@/context/todoContext";

const TodoItem = ({ todo }) => {
	const { toggleTodo } = useTodoContext();

	return (
		<li>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => toggleTodo(todo.id)}
			/>
			{todo.text}
		</li>
	);
};

export default TodoItem;
