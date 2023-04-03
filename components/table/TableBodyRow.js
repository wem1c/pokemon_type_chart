import Image from "next/image";

const TableBodyRow = ({ typeName, typeIcon, values }) => {
  return (
    <tr>
      <th span='row' className='sticky left-0 bg-white'>
        <Image
          src={typeIcon}
          alt={`${typeName}-Type Icon`}
          placeholder='blur'
          width={48}
          title={typeName.toUpperCase()}
        />
      </th>
      {values.map((value, idx) => {
        if (value === "0.5") {
          return (
            <td key={idx} className='border py-1 px-2 text-center bg-red-300'>
              {value}
            </td>
          );
        }
        if (value === "2") {
          return (
            <td key={idx} className='border py-1 px-2 text-center bg-green-300'>
              {value}
            </td>
          );
        }
        if (value === "0") {
          return (
            <td
              key={idx}
              className='border py-1 px-2 text-center bg-black text-white'
            >
              {value}
            </td>
          );
        }
        return (
          <td key={idx} className='border py-1 px-2 text-center'>
            {value}
          </td>
        );
      })}
    </tr>
  );
};

export default TableBodyRow;
