import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
const money = (value) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);

export function BudgetExperiment() {
  const [quantity, setQuantity] = useState(1);
  const [paid, setPaid] = useState(0);
  const total = quantity * 180000 + 30000;
  return (
    <div className="budget-experiment" id="probar-presupuesto">
      <div className="experiment-intro">
        <h4>¿Y si el presupuesto cambia?</h4>
        <p>
          Probá un ejemplo: sumá una unidad y registrá una seña. El saldo se
          calcula a partir de los mismos datos.
        </p>
        <p className="experiment-provenance">
          Interacción de este portfolio, con datos ficticios. No guarda
          información ni procesa cobros.
        </p>
      </div>
      <div className="budget-paper">
        <div className="budget-item">
          <span>
            Mueble de recepción · ejemplo
            <small>{money(180000)} por unidad</small>
          </span>
          <div className="quantity-control">
            <button
              type="button"
              aria-label="Quitar una unidad del ejemplo"
              disabled={quantity === 1}
              onClick={() => setQuantity((q) => q - 1)}
            >
              <Minus size={17} />
            </button>
            <output aria-label="Cantidad de unidades">{quantity}</output>
            <button
              type="button"
              aria-label="Agregar una unidad al ejemplo"
              disabled={quantity === 5}
              onClick={() => setQuantity((q) => q + 1)}
            >
              <Plus size={17} />
            </button>
          </div>
        </div>
        <div className="budget-installation">
          <span>Instalación</span>
          <span>{money(30000)}</span>
        </div>
        <div className="budget-journey">
          <div>
            <span>Presupuesto</span>
            <strong>{money(total)}</strong>
          </div>
          <ArrowRight size={20} aria-hidden="true" />
          <div>
            <span>Seña registrada</span>
            <strong>{money(paid)}</strong>
          </div>
          <ArrowRight size={20} aria-hidden="true" />
          <div className="budget-balance">
            <span>{total >= paid ? "Falta cobrar" : "Saldo a favor"}</span>
            <output aria-live="polite">{money(Math.abs(total - paid))}</output>
          </div>
        </div>
        <button
          className="deposit-toggle"
          type="button"
          aria-pressed={paid > 0}
          onClick={() =>
            setPaid((value) => (value > 0 ? 0 : Math.round(total * 0.4)))
          }
        >
          {paid > 0 ? "Quitar seña del ejemplo" : "Registrar seña del 40 %"}
        </button>
      </div>
    </div>
  );
}

const days = [
  { name: "Lunes", short: "Lun", hours: 8 },
  { name: "Martes", short: "Mar", hours: 7.5 },
  { name: "Miércoles", short: "Mié", hours: 9 },
  { name: "Jueves", short: "Jue", hours: 8 },
  { name: "Viernes", short: "Vie", hours: 6 },
];
export function TimeExperiment() {
  const [day, setDay] = useState(2);
  const total = days.reduce((sum, item) => sum + item.hours, 0);
  const before = days.slice(0, day).reduce((sum, item) => sum + item.hours, 0);
  const middle = ((before + days[day].hours / 2) / total) * 480 + 10;
  return (
    <div className="time-experiment" id="explorar-jornadas">
      <div className="experiment-intro">
        <h4>De una jornada al ritmo de la semana.</h4>
        <p>
          Elegí un día para recorrer sus horas. El resumen conserva la relación
          con cada registro.
        </p>
        <p className="experiment-provenance">
          Interacción de este portfolio con jornadas ficticias; no es una cuenta
          de JornadApp.
        </p>
      </div>
      <div className="week-instrument">
        <div className="week-reading">
          <div>
            <span>Semana de ejemplo</span>
            <strong>{total.toLocaleString("es-AR")} h</strong>
          </div>
          <output aria-live="polite">
            <span>{days[day].name}</span>
            <strong>{days[day].hours.toLocaleString("es-AR")} h</strong>
          </output>
        </div>
        <div
          className="week-bars"
          role="group"
          aria-label="Explorar jornadas de ejemplo"
        >
          {days.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={day === index}
              aria-label={`${item.name}, ${item.hours.toLocaleString("es-AR")} horas`}
              onClick={() => setDay(index)}
            >
              <span
                className="hour-column"
                style={{ height: `${item.hours * 13}px` }}
              />
              <span>{item.short}</span>
            </button>
          ))}
        </div>
        <svg className="week-rhythm" viewBox="0 0 500 60" aria-hidden="true">
          {days.map((item, index) => {
            const start =
              (days
                .slice(0, index)
                .reduce((sum, record) => sum + record.hours, 0) /
                total) *
                480 +
              10;
            const end = start + (item.hours / total) * 480;
            return (
              <line
                key={item.name}
                x1={start + 3}
                x2={end - 3}
                y1="38"
                y2="38"
                stroke={day === index ? "#d4b6ff" : "#64517b"}
                strokeWidth={day === index ? 9 : 3}
                strokeLinecap="round"
              />
            );
          })}
          <g
            className="rhythm-cursor"
            style={{ transform: `translateX(${middle}px)` }}
          >
            <path
              d="M-6 8 0 15 6 8"
              fill="none"
              stroke="#e6d0ff"
              strokeWidth="2"
            />
            <line
              x1="0"
              x2="0"
              y1="17"
              y2="29"
              stroke="#e6d0ff"
              strokeWidth="2"
            />
          </g>
        </svg>
        <p>
          {days[day].name}: {days[day].hours.toLocaleString("es-AR")} h dentro
          de una semana de {total.toLocaleString("es-AR")} h.
        </p>
      </div>
    </div>
  );
}
