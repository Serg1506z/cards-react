import './App.css'
import Card from './Card'

function App() {
  return <div className='App'>
    <Card
      title={'Card title'}
      text={"Some quick example text to build on the card title and make up the bulk of the card's content"}
      btn={'Go somewhere'}
    > <img src={'...'} className="card-img-top" alt="" /> </Card>
    <Card
      title={'Card title'}
      text={"Some quick example text to build on the card title and make up the bulk of the card's content"}
      btn={'Go somewhere'}
    > </Card>

  </div>

}

export default App
