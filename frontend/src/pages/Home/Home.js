import React, { Fragment, useState, useEffect } from "react";

import { useFiles } from "../../hooks/use-files";

import Table from "react-bootstrap/Table";
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
        {data && data.length
          ? data.map((item, i1) => (
              <Fragment key={i1}>
                {item.lines.length ? (
                  <tbody>
                    {item.lines.map((line, i2) => (
                      <tr key={i2}>
                        <td>{item.file}</td>
                        <td>{line?.text ? line.text : "-"}</td>
                        <td>{line?.number ? line.number : "-"}</td>
                        <td>{line?.hex ? line.hex : "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td>{item.file}</td>
                      <td colSpan={3}>No content for this file</td>
                    </tr>
                  </tbody>
                )}
              </Fragment>
            ))
          : null}
      </Table>
    </Container>
  );
};

export default Home;
