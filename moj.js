const arrayData = {
    users: [
        {
            id: 1,
            name: "Kasia",
            sex: "female",
            age: 22,

        },
        {
            id: 2,
            name: "Michał",
            sex: "male",
            age: 42,

        },
        {
            id: 3,
            name: "Zosia",
            sex: "female",
            age: 62,

        },
        {
            id: 4,
            name: "Daniel",
            sex: "male",
            age: 12,

        },
        {
            id: 5,
            name: "Ewelina",
            sex: "female",
            age: 27,

        }
    ]
}

const Items = ({ user }) => (
    <div>
        <h1>Informacje o użytkowniku</h1>
        <p>Imię: {user.name}</p>
        <p>Wiek: {user.age}</p>
    </div>
)

class People extends React.Component {
    state = {
        select: "all",
    }

    handleChangeState = (option) => {
        this.setState({
            select: option,
        })
    }

    showUsers = () => {
        let user = this.props.arrayData.users;
        switch (this.state.select) {
            case "all":
                return user.map(user => <Items user={user} key={user.id} />)
            case "female":
                user = user.filter(user => user.sex === "female")
                return user.map(user => <Items user={user} key={user.id} />)
            case "male":
                user = user.filter(user => user.sex === "male")
                return user.map(user => <Items user={user} key={user.id} />)
            default:
                return "Cos poszlo nie tak";
        }
    }

    render() {
        console.log(this.state.select)
        return (
            <>
                <button onClick={this.handleChangeState.bind(this, "all")}>Wszyscy</button>
                <button onClick={this.handleChangeState.bind(this, "female")}>Kobiety</button>
                <button onClick={this.handleChangeState.bind(this, "male")}>Mężczyzni</button>
                {this.showUsers()}
            </>
        )
    }

}

ReactDOM.render(<People arrayData={arrayData} />, document.getElementById('root'))