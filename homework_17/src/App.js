import{useEffect , useState}from "react";
import './App.css';

const API="https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [data ,setData]=useState([]);
  const fetchPokemon = async() =>{
  const data=[];
   for(let i = 1; i <= 21; i++){
    const url =`${API}${i}`;
    data.push(await fetch(url).then((res) =>res.json()));
      }
    const pokemons = data.map((item)=>{
      return{
        name:item.name,
        image:item.sprites['front_default'],
        id:item.id
      }
    })
    setData(pokemons);
  };

  useEffect(()=>{
    fetchPokemon();
  },[])

   return ( 
    <div className="App">
      <div className="container">
        <h1>Pokemon Api</h1>

        <div className="grid">
          {data.map((item)=>{
           return(
            <div key={item.id} className="item">
              <img src={item.image} alt="" />
              <p className="name">{item.name}</p>
              </div>
           )
           })}

        </div>
      </div>
    </div>
  );
}

export default App;
