import React, { Fragment, useState, useEffect } from "react";

import { useFiles } from "../../hooks/use-files";

import Table from "react-bootstrap/Table";
import TableContent from "./TableContent";
import Container from "react-bootstrap/Container";
import SelectSection from "../../components/SelectSection";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState("");

  const { data, error, loading, fileList, handleFetchData } = useFiles();

  useEffect(() => {
    if (!loading) {
      const file = selectedFile.length ? selectedFile : null;
      handleFetchData(file);
    }
  }, [selectedFile]);

  return (
    <Container fluid>
      <SelectSection
        data={fileList}
        value={selectedFile}
        onChange={setSelectedFile}
      />
      <Table responsive={true} hover striped size="sm">
        <thead>
          <tr>
            <th>File name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <Content data={data} loading={loading} error={error} />
      </Table>
    </Container>
  );
};

const Content = ({ data, loading, error }) => {
  return (
    <>
      {loading ? (
        <tbody>
          <tr>
            <td colSpan={4}>Loading files</td>
          </tr>
        </tbody>
      ) : error ? (
        <tbody>
          <tr>
            <td colSpan={4}>There was an error while getting files</td>
          </tr>
        </tbody>
      ) : data && data.length ? (
        <TableContent data={data} />
      ) : (
        <tbody>
          <tr>
            <td colSpan={4}>Files not found</td>
          </tr>
        </tbody>
      )}
    </>
  );
};

export default Home;
