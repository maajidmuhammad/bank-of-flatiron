
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Form from './components/Form';
import Search from './components/Search';
import { useState } from 'react';



function App() {
  const transaction = [
    {
      date: "22/02/2024",
        description: "Bank",
        category: "savings",
        amount: "Ksh 23,500"
    },
    {
        date: "03/01/2024",
        description: "school fees",
        category: "expenses",
        amount: "Ksh 80,000"
    },
    {
        date: "11/03/2023",
        description: "House",
        category: "Investment",
        amount: "Ksh 1,000,000"

    },
    {
        date: "03/10/2021",
        description: "Electricity",
        category: "expenses",
        amount: "Ksh 33,000"
    }
      ]
      const [data, setData] = useState(transaction)
      const [searchData, setSearchData] = useState("")

      function handleSearch (e){
        setSearchData(e.target.value)}

        const newData = data.filter((transaction) => {
          if(searchData.length > 0)
          {
          return transaction.description.toLowerCase().includes(searchData.toLowerCase())
        } else{
          return true
        }
        })
        
      function handleNewData (formData) {
        setData([...data, formData])
      }


  return (
    <div className='container'>
  
    <Header/>
    <Search searchBar={handleSearch}/>
    <Form handleNewData={handleNewData}/>
    <Table transaction={newData}/>

    
    </div>
  );
}

export default App;
