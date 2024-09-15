import { useEffect, useState } from "react";
import "./App.css";
import { Pokedex, Pokemon, PokemonDetail } from "./types/pokedex";
import ListaPokemon from "./components/ListaPokemon";
import DettagliPokemon from "./components/DettagliPokemon";

function App() {
  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon");
  const [listaPokemon, setListaPokemon] = useState<Pokemon[]>([]);
  const [dettaglioPokemon, setDettaglioPokemon] = useState<PokemonDetail>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Pokedex) => {
        setUrl(data.next);
        setListaPokemon(data.results);
      });
  }, []);

  function getDettaglio(urlDettaglio: string) {
    fetch(urlDettaglio).then(res => res.json()).then((data:PokemonDetail) => {
      console.log("dettaglio pokemon", data);   
      setDettaglioPokemon(data);   
    })
  }

  function caricaAltri() {
    fetch(url).then(res => res.json()).then((data: Pokedex) => {
      console.log(data);
      setUrl(data.next);
      setListaPokemon([...listaPokemon, ...data.results]);
    })
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <ListaPokemon 
        listaPokemon= {listaPokemon} 
        caricaAltri={caricaAltri} 
        getDettaglio={getDettaglio}
        />
        
        <DettagliPokemon
        dettaglioPokemon={dettaglioPokemon}
        />
      </div>
    </>
  );
}
export default App;
