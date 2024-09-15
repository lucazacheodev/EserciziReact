import { useEffect, useState } from "react";

//creo componente lista
function ComponenteLista() {

    const [search, setSearch] = useState<string>("");

    useEffect(() => {

        console.log("Creo Componente Lista");
        return () => {
            console.log("Distruggo Componente Lista")
        }

    }, []);

    useEffect(() => {
        console.log("Search text: ", search)
    }, [search]);

    const nomi = ["Mario", "Luigi", "Peach", "Toad", "Yoshi", "Bowser", "Dry Bowser", "Baby Mario"];
    return (
        <>
            <p>Componente Lista</p>
            <input type="text" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />

            <ul>
                {nomi.filter(nome => nome.toLowerCase().includes(search)).map((nome, index) => <li key={index}>{nome}</li>)}
            </ul>
        </>
    )
}

// per poter importare il componente devo prima exportarlo
export default ComponenteLista;