import React, { useState, useEffect } from "react";

import { useFiles } from "../../hooks/use-files";

import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import TableContent from "./TableContent";
import { Th, Td, TdCentered, TdError } from "./styles";
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
            <th style={Th}>File name</th>
            <th style={Th}>Text</th>
            <th style={Th}>Number</th>
            <th style={Th}>Hex</th>
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
            <td style={TdCentered} colSpan={4}>
              <Spinner variant="primary" />
            </td>
          </tr>
        </tbody>
      ) : error ? (
        <tbody>
          <tr>
            <td style={Td} colSpan={4}>
              There was an error while getting files
            </td>
          </tr>
        </tbody>
      ) : data && data.length ? (
        <TableContent data={data} />
      ) : (
        <tbody>
          <tr>
            <td style={TdError} colSpan={4}>
              File&#40;s&#41; not found
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
};

export default Home;
