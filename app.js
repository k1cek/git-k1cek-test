const data = { // tablica złożona z obiektów
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      sex: "male",
    }
  ]
}

const Item = ({ user2 }) => ( // NAWIASY OKRĄGŁE!!! WYSWIETLAMY ZAWARTOSC, przekazuje user2 do Item 
  <div className="userInfo">
    <h1>{user2.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>Wiek użytkownika: <strong>{user2.age}</strong></p>
    <p>Płeć użytkownika: {user2.sex}</p>
  </div>
)
class ListItems extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleUsersFilter = this.handleUsersFilter.bind(this);
  // }
  state = {
    select: "all",
  }


  handleUsersFilter = (option) => { // funkcja NIE strzałkowa, ponieważ bindem juz przekazalismy thisa. (oczywiscie strzałkowa tez zadziała ;)
    this.setState({
      select: option
    })


  }

  usersList = () => {
    let users = this.props.data.users; // do zmiennej users przypisze nową tablice do metody map
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user2={user} key={user.id} />) // MAP zwraca nowa tablice, przeiteruje cała tablice
      case "female":
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item user2={user} key={user.id} />)
      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item user2={user} key={user.id} />)
      default:
        return "coś się zepsuło"

    }
  }

  render() {

    return (
      <div>
        {/* przyciskami zmieniam stan, sposob 1 na thisa, stworzenie anonim funkcji strzałkowej*/}
        {/* funkcja strzałkowa, która wywołuje kolejną funkcję, zwraca handleUsersFIlter, funkcja nie tworzy wlasnego thisa, dziedziczy go  */}
        <button onClick={() => this.handleUsersFilter("all")}>Wszyscy</button>

        {/* THIS drugi jest do BINDA! aby nie stracic */}
        <button onClick={this.handleUsersFilter.bind(this, "female")}>Kobiety</button>
        <button onClick={() => this.handleUsersFilter("male")}>Mężczyźni</button>
        {this.usersList()}
      </div>
    )
  }
}

// do zmiennej data przekazalismy OBIEKT const data (na samej górze)

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
