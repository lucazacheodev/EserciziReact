import { Pokemon } from "../types/pokedex";

interface ListaPokemonProps {
    listaPokemon: Pokemon[]; 
    caricaAltri: () => void; 
    getDettaglio: (url: string) => void; 
  }

// Creo funzione ListaPokemon 
// function ListaPokemon(){return()}
// Incollo nel return ciò che ho tagliato da App.tsx
// Passo i parametri mancanti
// function ListaPokemon({ listaPokemon, caricaAltri, getDettaglio }){return()}
// ListaPokemon per il map, caricaAltri per onClick del button, getDettaglio per onClick del div 
// L'IDE mi segnala che questi 3 parametri hanno type implicito Any
// Creo le props interface ListaPokemonProps dove specifico il tipo dei parametri
// Tipizzo i parametri  function ListaPokemon({ listaPokemon, caricaAltri, getDettaglio } : ListaPokemonProps ){}
// Ora posso richiamare il componente ListaPokemon nell'App.tsx

function ListaPokemon({ listaPokemon, caricaAltri, getDettaglio } : ListaPokemonProps ) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          backgroundColor: "#ffca91",
          borderRight: "1px solid #CCC",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        {listaPokemon.map((pokemon, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #FFF",
              cursor: "pointer",
            }}
            onClick={() => getDettaglio(pokemon.url)}
          >
            <img
              width={100}
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                (index + 1) +
                ".png"
              }
            />
            <span>{pokemon.name}</span>
          </div>
        ))}
        <button onClick={caricaAltri}>Carica altri 20 pokemon</button>
      </div>
    );
  }
  export default ListaPokemon;