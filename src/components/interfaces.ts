export interface ITodo{
    title: string,
    id: number,
    completed: boolean
}

export type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove(id: number): void
}

export interface ToDoFormProps {
    onAdd(title: string): void
}