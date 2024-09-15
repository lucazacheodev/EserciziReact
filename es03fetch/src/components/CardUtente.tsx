interface Props {
  nome: string;
  email: string;
  azienda: string;
}

function CardUtente({ nome, email, azienda }: Props) {
  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: 25,
        backgroundColor: " lightblue",
        color: "black",
        margin: "5px",
        padding: "2px",
      }}
    >
      <h4>Nome: {nome} </h4>
      <i>Email: {email}</i>
      <p>Azienda: {azienda} </p>
    </div>
  );
}
export default CardUtente;
