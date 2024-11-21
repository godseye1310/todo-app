"use client";

import TodoList from "@/components/TodoList";
import { useTodoContext } from "@/context/todoContext";
import Link from "next/link";

const CompletedPage = () => {
	const { todos } = useTodoContext();

	// fetch the list of completed todos from the database

	return (
		<div className="flex flex-col items-center gap-5">
			<Link href="/">Home</Link>
			<h1>Completed Tasks</h1>
			<TodoList todos={todos.filter((todo) => todo.completed)} />
		</div>
	);
};

export default CompletedPage;
