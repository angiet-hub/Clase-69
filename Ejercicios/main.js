// Card
//     Crear un componente Card que renderice un elemento article y que pueda contener componentes dentro suyo
//     Crear un componente CardTitle que renderice un elemento h3 y que pueda contener texto dentro suyo
//     Crear un componente CardDescription que renderice un elemento p y que pueda contener texto dentro suyo
//     Crear un componente CardActions que renderice un elemento div y que pueda contener componentes dentro suyo. 
//     Dicho div debe contener la propiedad display: flex
//     Crear un componente CardAction que renderice un elemento button y que pueda contener texto dentro suyo

const root = document.getElementById('root')

const Card = ({ children }) => {
    return <article>{children}</article>
}

const CardTitle = ({texto}) => {
    return <h3>{texto}</h3>
}
const CardDescription = ({texto}) => {
    return <p>{texto}</p>
}

const CardActions = ({ children }) => {
    return <div style = {{display: 'flex'}}>{children}</div>
}

const CardAction = ({texto}) => {
    return <button>{texto}</button>
}

// Crear un componente PuntajeItem que tome un prop tipo con los valores lleno o vacio y muestre un ícono de una estrella 
// llena o vacía según el caso
// Crear un componente Puntaje que tome un prop puntaje que sea del 1 al 5 y renderice 5 estrellas, siendo valor de 
// score la cantidad de PuntajeItem con tipo lleno, mientras las restantes son tipo vacio, por ejemplo: ★★★✩✩
// Pueden usar íconos de FontAwesome o emojis
// EXTRA:
//     Si usan íconos, permitir cambiar el color de las estrellas
//     Permitir que PuntajeItem pueda tener otra ícono (corazón por ejemplo) y pueda ser configurado mediante un prop
//     Permitir que Puntaje muestre un texto con el puntaje, por ejemplo: ★★★✩✩ 2 de 5 estrellas. Se puede ocultar 
//     el elemento usando una clase de CSS con la propiedad display: none

const PuntajeItem = ({tipo}) => {
    const claseIcono = tipo === 'lleno' ? 'fas' : 'far'
    return <i className = {`${claseIcono} fa-star`} ></i>
}

const Puntaje = ({puntaje}) => {
    return ( 
        <div>
            {Array(puntaje).fill(<PuntajeItem tipo = 'lleno' />)}
            {Array(5 - puntaje).fill(<PuntajeItem tipo = 'vacio' />)}
        </div>
    )
}

// Layout
// Header
//     Crear un componente Header que renderice un elemento header y que pueda contener componente dentro suyo

const Header = ({children}) => {
    return <Header>{children}</Header>
}

// NavMenu
//     Crear un componente Nav que renderice un elemento nav y un elemento ul dentro del nav, el componente debe 
//poder contener elementos dentro suyo
//     El elemento ul debe tener el estilo display: flex y list-style: none
//     El componente NavMenu debe aceptar la prop direction con los valores "row" o "column", siendo "row" el valor
// por defecto, y cambiar el valor de la propiedad flex-direction del elemento ul en consecuencia

const NavMenu = ({children, direction = 'row'}) => {
    return (
        <div>
            <nav>
                <ul style = {{
                    display: 'flex',
                    listStyle: 'none',
                    flexDirection: direction
                    }}>{children}
                </ul>
            </nav>
        </div>
    )
}

// NavItem
//     Crear un componente MenuItem que renderice un componente li con un componente a, el componente debe poder
// contener elementos dentro suyo
//     El elemento li debe tener el estilo display: flex
//     Debe aceptar la prop path que corresponde al atributo href del componente a

const MenuItem = ({children, path}) => {
    return (
        <div>
            <li style = {{display: 'flex'}}>
                <a href = {path}>{children}</a>
            </li>    
        </div>
    )
}

// Main
//     Crear un componente Main que renderice un componente main y que pueda contener componente dentro suyo

const Main = ({children}) => {
    return <main>{children}</main>
}

// Footer
//     Crear un componente Footer que renderice un componente footer y que pueda contener componente dentro suyo

const Footer = ({children}) => {
    return <footer>{children}</footer>
}

// Renderizado condicional y Listas de componentes
// UserGreeting
//     Crear un componente UserGreeting que acepte una prop user (que es un string). Si user tiene algún valor, 
//debe renderizar un componente p que diga Welcome ${user} y un componente a que diga Logout, en cambio si user no 
//tiene ningún valor, debe mostrar dos componentes a, uno que diga Login y otro Register. Separar luego ambas 
//opciones en dos componentes distintos: GuestUserMessage (para cuando user no tiene ningún valor) y 
//LoggedUserMessage,

const UserGreeting = ({user}) => {
    return (
        <div>
            {user !== '' ? <LoggedUserMessage user = {user}/> : <GuestUserMessage />}
        </div>
    )
}

const GuestUserMessage = () => {
    return (
        <div>
            <a href= '#'>Login</a>
            <a href= '#'>Register</a>
        </div>
    )
}

const LoggedUserMessage = ({user}) => {
    return (
        <div>
            <p>Welcome {user}</p>
            <a href= '#'>Logout</a>
        </div>
    )
}

// List
//     Crear un componente List que acepte una prop items que sea un array de strings, y renderice un componente ul 
//con componentes li por cada string de items. Si items está vacío o no está definido, se debe mostrar un componente 
//p que diga Sorry, this list is empty

const arrayItems = ['kiwi','manzana','pera','banana','naranja']
const arrayVacio = []

const List = ({items}) => {
    const lista = items.map((item) => <li>{item}</li>)
 
    return (
        <div>
            { lista.length === 0 ? <p>Sorry, this list is empty</p> : <ul>{lista}</ul> } 
            {/* { lista.length > 0 && <ul>{lista}</ul>} */}
        </div>
    )
}

// Field
//     Crear un componente PasswordField que acepte una prop status que es un string con los valores posibles: 
//"default", "error", "valid". El componente Field debe renderizar un label que diga "Password" y un input de 
//tipo password. Si status tiene el valor "valid", debe mostrar el input con un borde de color verde. Si tiene 
//el valor "error", debe mostrar el input con un borde de color rojo y renderizar debajo del input un componente 
//small en color rojo que diga: "Invalid password, please try again"

const estilos = {
    default: '1px solid yellow',
    valid: '1px solid green',
    error: '1px solid red'
}

const PasswordField = ({status = 'default'}) => {
    return status === 'error' ? (
        <div>
            <Field status = {status}>
                <small style = {{color: 'red'}}>Invalid password, please try again</small>
            </Field>
        </div> ) : 
        <Field status = {status}></Field>
}

const Field = ({status}) => {
    return (
        <div>
            <label>Password</label>
            <input style = {{ border: estilos[status]}} type = 'password'></input>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Card>
                <CardTitle>Soy una card</CardTitle>
                <CardDescription>Soy la descripcion de la card</CardDescription>
                <CardActions>
                    <CardAction>Soy una card action</CardAction>
                    <CardAction>Soy una card action</CardAction>
                    <CardAction>Soy una card action</CardAction>
                </CardActions>
            </Card>
            <Puntaje puntaje = {3}></Puntaje>
            <UserGreeting user = 'Sabrina'></UserGreeting>
            <UserGreeting user = ''></UserGreeting>
            <List items = {arrayItems}></List>
            <List items = {arrayVacio}></List>
            <PasswordField></PasswordField>
            <PasswordField status = 'error'></PasswordField>
            <PasswordField status = 'valid'></PasswordField>
            <Header>
                <NavMenu>
                    <MenuItem path='/home'>Home</MenuItem>
                    <MenuItem path='/home'>About Us</MenuItem>
                    <MenuItem path='/home'>Contact</MenuItem>
                </NavMenu>
            </Header>
            <Main>
                Hola Mundo
            </Main>
            <Footer>® 2020 - All rights reserved</Footer>
        </div>
    )
}
// Crear un layout usando los componentes anteriores, de la siguiente forma:
// <Header>
//   <NavMenu>
//     <NavItem path='/home'>Home</NavItem>
//     <NavItem path='/about-us'>About Us</NavItem>
//     <NavItem path='/contact'>Contact</NavItem>
//   </Menu>
// </Header>
// <Main>
//   Hola mundo
// </Main>
// <Footer>® 2020 - All rights reserved</Footer>
ReactDOM.render(<App />, root)