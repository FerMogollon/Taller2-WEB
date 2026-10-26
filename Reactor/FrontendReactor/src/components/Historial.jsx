const PISTA = {
  mas_alta: "Era más alta",
  mas_baja: "Era más baja",
  estabilizado: "Estabilizado",
};

export default function Historial({ historial }) {
  return (
    <section className="historial">
      <h2>Registro de intentos</h2>

      {historial.length === 0 ? (
        <p className="vacio">Aún no has probado ninguna temperatura.</p>
      ) : (
        <ol className="lista" reversed>
          {[...historial].reverse().map((intento, i) => (
            <li key={historial.length - i} className={`fila ${intento.resultado}`}>
              <span className="fila-temp">{intento.temperatura}°</span>
              <span className="fila-pista">{PISTA[intento.resultado]}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
