import React from 'react'
import './App.css';

// const task = (value) => {
//   <li>{value}</li>
// }
const tarefas = ['Acordar', 'Mexer nos gatos', 'Dar bom dia para os habitantes da casa,', 'Tomar café', 'Estudar'];

// function App() {
//   return (
//     <value/>
//   )
// }
const App = () => <div className="tarefas"><ul>{ tarefas.map(tarefa => <li>{tarefa}</li>) } </ul></div>;

export default App;
