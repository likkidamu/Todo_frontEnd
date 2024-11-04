
export default function Todos(){
    const createdDate= new Date();
    const targetDate= new Date(createdDate.getFullYear(),createdDate.getMonth()+5,createdDate.getDay()+3)
    const Todos = [
        { id: 1, description: "Learn AWS with me",done: false, targetDate },
        { id: 2, description: "Learn Java with me", done: false, targetDate}
    ];
    return (
        <div className="container">
        <h1>This are Your Todos</h1>
        <div className="table">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Done</th>
                    <th>Target Date</th>
                </tr>
            </thead>
            <tbody>
                {Todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetDate.toDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>
    );
}