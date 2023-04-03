import Image from "next/image";
import Link from "next/link";

const TableHeadRow = ({ data }) => {
  return (
    <tr>
      <th className='sticky top-0 left-0 z-10'>
        <Link href={"/about"}>
          <div className='bg-white h-12 border-2 border-black py-2 hover:scale-105 active:translate-y-1'>
            <span className='text-lg'>?</span>
          </div>
        </Link>
      </th>
      {data.map((type) => {
        return (
          <th key={type.name} scope='col' className='sticky top-0 bg-white'>
            <Image
              src={type.icon}
              alt={type.name + "-Type Icon"}
              placeholder='blur'
              width={48}
              title={type.name.toUpperCase()}
            />
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeadRow;
