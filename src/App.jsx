import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';
function App() {
  const [list, setList] = useState([]);
  const addItem = (value) => {
    setList((prevList) => [...prevList, value]);
  }
  const deleteItem = (item) => {
    const newList = list.filter((value) => value !== item);
    setList(newList);
  }
  const deleteAll = () => {
    setList([]);
  }
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(list));
  }, [list])

  return (
    <div className="App">
      <h1 className='heading'>TODO List</h1>
      <Input addItem={addItem} />
      <List list={list} deleteItem={deleteItem} deleteAll={deleteAll} />
    </div>
  );
}

export default App;
