import { useEffect, useState } from "react";
import { TableBody } from "./table-body/TableBody";
import { TableHeader } from "./table-head/TableHeader";
import Modal from "../../UI/modal/Modal";
import { useFetching } from "../../hooks/useFetching";
import { api } from "../../../shared/api";
import { Projects } from "../../types/types";
import { Loading } from "../../UI/loading/Loading";

export const Table = () => {
  const [projects, setProjects] = useState<Projects>([]);

  const [fetching, loading, errorText, activeErrorPanel, setActiveErrorPanel] =
    useFetching(async () => {
      const response = await api.getProjects();
      setProjects([...response]);
      return response;
    });
  useEffect(() => {
    fetching();
  }, []);

  return (
    <main className="content">
      <table>
        <TableHeader />
        {loading ? (
          <Loading/>
        ) : (
          <TableBody proj={projects} />
        )}
      </table>
      {activeErrorPanel && (
        <Modal content={errorText} setActive={setActiveErrorPanel} />
      )}
    </main>
  );
};
