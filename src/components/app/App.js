import './App.css';
import { Component } from 'react';
import Person from '../person/person';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 123, name: 'Alvin', phone: '+7956223544', career: 'IT', email: '33453@gmail.com', meeting: '23.06 - 13:00' },
        { id: 223, name: 'Mark', phone: '+79454363843', career: 'Cook', email: '2323ssss@gmail.com', meeting: '12.03 - 18:00' },
        { id: 4, name: 'John', phone: '+79112346576', career: 'Driver', email: '111lll@gmail.com', meeting: '' },
        { id: 54, name: 'Dude', phone: '+79223456576', career: 'Actor', email: 'eeefddfff@gmail.com', meeting: '' },
      ]
    }
  }

  onValueChange = (id, value) => {
    this.setState(({ data }) => {
      const item = data.find(item => item.id === id)
      const newItem = { ...item, meeting: value }
      const index = data.indexOf(item)
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)]
      return {
        data: newData
      }
    })
  }

  render() {
    const { data } = this.state
    const personList = data.map(item => {
      return <Person {...item} key={item.id} onValueChange={(id, value) => this.onValueChange(id, value)} />
    })

    return (
      <div className="App">
        <table className='responsive-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone </th>
              <th>Career</th>
              <th>Email</th>
              <th>Meeting</th>
            </tr>
          </thead>
          <tbody>
            {personList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
