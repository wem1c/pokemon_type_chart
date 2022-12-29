import Image from "next/image";

const TableHeadRow = ({ data }) => {
  return (
    <tr>
      <th className="sticky top-0 left-0 z-10">
        <p className="bg-white h-12 py-3">{"D ->"}</p>
      </th>
      {data.map((type) => {
        return (
          <th key={type.name} scope="col" className="sticky top-0 bg-white">
            <Image
              src={type.icon}
              alt={type.name + "-Type Icon"}
              placeholder="blur"
              width={48}
            />
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeadRow;
