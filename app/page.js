import TaskForm from "@/components/TaskForm";
import TodoList from "@/components/TodoList";

export default function Home() {
	return (
		<main className=" min-h-screen max-w-5xl bg-red-400 mx-auto  p-24">
			<div className="flex flex-col items-center gap-5">
				<h1>TODO-APP</h1>
				<button type="button">Add Todo</button>
				<TaskForm />
				<TodoList />
			</div>
		</main>
	);
}
