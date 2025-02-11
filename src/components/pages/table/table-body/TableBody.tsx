import { Projects } from "../../../types/types";
import { TableRow } from "./TableRow";

type tableBodyProps = {
  proj: Projects;
};
export const TableBody = ({ proj }: tableBodyProps) => {
  const filteredData = proj?.filter((item) => item.sysId === "PROJECT_DEF");

  return (
    <>
      <tbody>
        {filteredData ? (
          filteredData.map((item) => (
            <TableRow key={item.identifier} index={item.$id} item={item} />
          ))
        ) : (
          <></>
        )}
      </tbody>
    </>
  );
};
