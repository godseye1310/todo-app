// app/page.js
"use client";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { useTodoContext } from "@/context/todoContext";
import Link from "next/link";

export default function Home() {
	const { todos } = useTodoContext();
	return (
		<main className=" flex flex-col items-center gap-5">
			<h1>TODO-APP</h1>
			{/* <button type="button">Add Todo</button> */}

			<Link href="/completed-tasks">Completed Tasks</Link>

			<TodoForm />
			<TodoList todos={todos.filter((todo) => !todo.completed)} />
		</main>
	);
}
