import { Header } from './components/header/Header'
import { Table } from './components/table/Table'


function App() {
  const test =()=>{
       fetch('./projects.json')
      .then((res)=> {
        console.log(res.body)
      })
      
    }
    test();
  return (
    <>
      <Header/>
      <Table/>
    </>
  )
}

export default App
