# Pokémon App

Questa applicazione React permette di visualizzare una lista di Pokémon e di accedere ai dettagli di ogni Pokémon cliccando sul suo nome. Utilizza l'API gratuita di [PokeAPI](https://pokeapi.co/) per ottenere i dati dei Pokémon e visualizzarli in una griglia a 3 colonne.

## Funzionalità

- Visualizzazione della lista di Pokémon (20 Pokémon alla volta)
- Possibilità di caricare altri 20 Pokémon tramite un pulsante "Carica Altri"
- Visualizzazione dei dettagli di ciascun Pokémon (abilità, mosse, statistiche, ecc.)

## API

Le seguenti API di PokeAPI sono utilizzate per ottenere le informazioni sui Pokémon:

- Lista Pokémon: [https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon)
- Dettagli Pokémon: [https://pokeapi.co/api/v2/pokemon/{ID}](https://pokeapi.co/api/v2/pokemon/{ID})

## Struttura dell'Applicazione

### 1. Chiamata API Iniziale

Viene fatta una chiamata API iniziale per ottenere i primi 20 Pokémon, utilizzando l'API fornita da PokeAPI. Utilizziamo `useEffect` per eseguire la chiamata API quando il componente viene montato:

```ts
useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}, []);
```

La risposta viene tipizzata utilizzando TypeScript. Creiamo una cartella `types` con il file `pokedex.ts`, dove tipizziamo la risposta dell'API.

```ts
interface Pokedex {
  next: string;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}
```

### 2. Stato dell'Applicazione

Due stati vengono creati:

- `listaPokemon`: un array che contiene i Pokémon attualmente caricati.
- `url`: l'URL per la prossima chiamata API.

```ts
const [listaPokemon, setListaPokemon] = useState<Pokemon[]>([]);
const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon");
```

La chiamata viene tipizzata e i risultati vengono memorizzati nello stato.

```ts
useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data: Pokedex) => {
      setUrl(data.next);
      setListaPokemon(data.results);
    });
}, []);
```

### 3. Visualizzazione della Lista Pokémon

La lista dei Pokémon viene visualizzata in una griglia con 3 colonne. Ogni Pokémon viene mostrato con il suo nome e un'immagine.

```ts
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
```

### 4. Visualizzazione dei Dettagli Pokémon

Al clic su un Pokémon, viene eseguita una chiamata API per ottenere i dettagli del Pokémon. I dati vengono visualizzati in una sezione dedicata.

```ts
function getDettaglio(urlDettaglio: string) {
  fetch(urlDettaglio)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
```

La risposta viene tipizzata utilizzando TypeScript nel file `pokedex.ts`.

```ts
export interface PokemonDetail {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Form[];
  game_indices: Index[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Mfe[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

export interface Ability2 {
  name: string;
  url: string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Form {
  name: string;
  url: string;
}

export interface Index {
  game_index: number;
  version: Version;
}

export interface Version {
  name: string;
  url: string;
}

export interface Mfe {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

export interface Move {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
  other: Other;
  versions: Versions;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
  showdown: Showdown;
}

export interface DreamWorld {
  front_default: string;
  front_female: any;
}

export interface Home {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Showdown {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": GenerationVi;
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow: Yellow;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Yellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface GenerationIii {
  emerald: Emerald;
  "firered-leafgreen": FireredLeafgreen;
  "ruby-sapphire": RubySapphire;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIv {
  "diamond-pearl": DiamondPearl;
  "heartgold-soulsilver": HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface DiamondPearl {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface HeartgoldSoulsilver {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface Platinum {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface GenerationV {
  "black-white": BlackWhite;
}

export interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface Animated {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface GenerationVi {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire;
  "x-y": XY;
}

export interface OmegarubyAlphasapphire {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface XY {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface GenerationVii {
  icons: Icons;
  "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface Icons {
  front_default: string;
  front_female: any;
}

export interface UltraSunUltraMoon {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface GenerationViii {
  icons: Icons2;
}

export interface Icons2 {
  front_default: string;
  front_female: any;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}
```

Viene creato lo stato per i dettagli del pokemon

```ts
const [dettaglioPokemon, setDettaglioPokemon] = useState<PokemonDetail>();
```

La chiamata viene tipizzata e i risultati vengono memorizzati nello stato.

```ts
function getDettaglio(urlDettaglio: string) {
  fetch(urlDettaglio)
    .then((res) => res.json())
    .then((data: PokemonDetail) => {
      setDettaglioPokemon(data);
    });
}
```

I dettagli includono il nome, il tipo, le statistiche, l'altezza e il peso del Pokémon. Se nessun Pokémon è stato selezionato, viene visualizzato un messaggio di avviso.

```ts
<div>
  {dettaglioPokemon ? (
    <div>
      <h2>{dettaglioPokemon.name}</h2>
      <h4>Tipo</h4>
      <div>{dettaglioPokemon.types.map((type) => type.type.name)}</div>
      <h4>Caratteristiche</h4>
      <p>Peso: {dettaglioPokemon.weight}</p>
      <p>Altezza: {dettaglioPokemon.height}</p>
      <h4>Statistiche</h4>
      <div>
        {dettaglioPokemon.stats.map((stat) => (
          <p>
            {stat.stat.name}: {stat.base_stat}
          </p>
        ))}
      </div>
    </div>
  ) : (
    <p>Premere su un Pokémon per visualizzare il dettaglio.</p>
  )}
</div>
```

### 5. Carica Altri Pokémon

Un pulsante "Carica Altri" consente di caricare i successivi 20 Pokémon dalla lista.

```ts
<button onClick={caricaAltri}>Carica altri 20 Pokémon</button>;

function caricaAltri() {
  fetch(url)
    .then((res) => res.json())
    .then((data: Pokedex) => {
      setUrl(data.next);
      setListaPokemon([...listaPokemon, ...data.results]);
    });
}
```

## 6. Refactoring

Viene creata una cartella `components` e all'interno il componente `ListaPokemon.tsx`.
Viene creata all'interno del file la funzione

```ts
function ListaPokemon(){
return()
}
export default ListaPokemon;
```

Viene copiato nel `return()` di `ListaPokemon()` il JSX direttamente dal `return()` della funzione `function App()` del file `App.tsx`

```ts
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
```

Vengono aggiunti alla funzione `ListaPokemon()` i parametri mancanti

```ts
function ListaPokemon({ listaPokemon, caricaAltri, getDettaglio }) {
  return `TSX inserito precedentemente`;
}
```

`ListaPokemon` per il map, `caricaAltri` per onClick del button, `getDettaglio` per onClick del div.

Viene creata la `ListaPokemonProps`

```ts
interface ListaPokemonProps {
  listaPokemon: Pokemon[];
  caricaAltri: () => void;
  getDettaglio: (url: string) => void;
}
```

Vengono tipizzati i parametri passati alla funzione `ListaPokemon()` perchè hanno type implicito `Any`

```ts
function ListaPokemon({
  listaPokemon,
  caricaAltri,
  getDettaglio,
}: ListaPokemonProps) {
  return `TSX inserito precedentemente`;
}
```

Viene eseguito lo stesso procedimento per il div di `DettaglioPokemon`
Viene creato nella cartella `components` il file `Dettaglipokemon.tsx`, di seguito il file completo con tutti i passaggi già eseguiti:

```ts
interface DettagliPokemonProps {
  dettaglioPokemon: PokemonDetail | undefined;
}

function DettagliPokemon({ dettaglioPokemon }: DettagliPokemonProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 3,
        backgroundColor: "#d9f9ff",
      }}
    >
      <h4>Dettaglio Pokémon</h4>
      {dettaglioPokemon ? (
        <div>
          <h2>{dettaglioPokemon.name}</h2>
          <hr />
          <h4>Tipo</h4>
          <div style={{ display: "flex" }}>
            {dettaglioPokemon.types.map((type) => (
              <div
                style={{ display: "flex", flex: 1, justifyContent: "center" }}
              >
                <p>{type.type.name}</p>
              </div>
            ))}
          </div>
          <hr />
          <h4>Caratteristiche</h4>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
              <p>Peso {dettaglioPokemon.weight}</p>
            </div>
            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
              <p>Altezza {dettaglioPokemon.height}</p>
            </div>
          </div>
          <hr />
          <h4>Statistiche</h4>
          <div style={{ display: "flex" }}>
            {dettaglioPokemon.stats.map((stat) => (
              <div
                style={{ display: "flex", flex: 1, justifyContent: "center" }}
              >
                <p>
                  {stat.stat.name}: {stat.base_stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Premere su un Pokémon per visualizzare il dettaglio.</p>
      )}
    </div>
  );
}
export default DettagliPokemon;
```

Per concludere viene modificat il `return()` della funzione `function App()` del file `App.tsx` rimuovendo tutti i TSX che abbiamo precedentemente copiato nei file `Dettaglipokemon.tsx` e `ListaPokemon.tsx`, richiamando i componenti appena creati e passando i giusti parametri:

```ts
return (
  <>
    <div style={{ display: "flex" }}>
      <ListaPokemon
        listaPokemon={listaPokemon}
        caricaAltri={caricaAltri}
        getDettaglio={getDettaglio}
      />
      <DettagliPokemon dettaglioPokemon={dettaglioPokemon} />
    </div>
  </>
);
```

## TODO

- Rimuovere lo stile inline per pulire il codice.
- Migliorare lo stile grafico per rendere l'interfaccia più accattivante e user-friendly.

## Tecnologie Utilizzate

- React
- TypeScript
- PokeAPI

## Installazione

1. Clona il repository.
2. Esegui il comando `npm install` per installare le dipendenze.
3. Esegui `npm run dev` per avviare l'applicazione in modalità di sviluppo.
