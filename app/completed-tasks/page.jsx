import TodoList from "@/components/TodoList";

const CompletedTaskpage = () => {
	return (
		<div>
			<h1>Completed Tasks</h1>
			<TodoList todos={todos.filter((todo) => todo.completed)} />
		</div>
	);
};

export default CompletedTaskpage;
