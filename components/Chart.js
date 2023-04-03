// Component imports
import TableBodyRow from "./table/TableBodyRow";
import TableHeadRow from "./table/TableHeadRow";

// Pokemon type data import
import pokemonTypes from "../lib/PokemonTypeData";

function Chart() {
  return (
    <div className='overflow-auto relative h-[100svh]'>
      <table className='border-collapse table-fixed w-max md:m-auto'>
        <thead>
          <TableHeadRow data={pokemonTypes} />
        </thead>
        <tbody>
          {pokemonTypes.map((type) => {
            return (
              <TableBodyRow
                key={type.name}
                typeName={type.name}
                typeIcon={type.icon}
                values={type.values}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Chart;
