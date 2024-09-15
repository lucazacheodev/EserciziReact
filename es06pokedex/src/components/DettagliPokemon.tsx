import { PokemonDetail } from "../types/pokedex";

interface DettagliPokemonProps {
    dettaglioPokemon : PokemonDetail | undefined;
}

function DettagliPokemon({dettaglioPokemon}:DettagliPokemonProps){
    return(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 3,
            backgroundColor: "#d9f9ff",
          }}
        >
          <h4>Dettaglio Pokémon</h4>
          {
            dettaglioPokemon ?
            <div>
            <h2>{dettaglioPokemon.name}</h2>
            <hr />
            <h4>Tipo</h4>
            <div style={{ display: 'flex' }}>
              {dettaglioPokemon.types.map(type => (
                <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                  <p>{type.type.name}</p>
                </div>
              ))}
            </div>
            <hr />
            <h4>Caratteristiche</h4>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                <p>Peso {dettaglioPokemon.weight}</p>
              </div>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                <p>Altezza {dettaglioPokemon.height}</p>
              </div>
            </div>
            <hr />
            <h4>Statistiche</h4>
            <div style={{ display: 'flex' }}>
              {dettaglioPokemon.stats.map(stat => (
                <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                  <p>{stat.stat.name}: {stat.base_stat}</p>
                </div>
              ))}
            </div>
          </div> :
              <p>Premere su un Pokémon per visualizzare il dettaglio.</p>
          }
        </div>
    )
}
export default DettagliPokemon;