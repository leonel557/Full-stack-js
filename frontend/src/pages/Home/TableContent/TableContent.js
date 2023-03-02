import React, { Fragment } from "react";

import { Td } from '../styles'

const TableContent = ({ data }) => {
  return (
    <>
      {data.map((item, i1) => (
        <Fragment key={i1}>
          {item.lines.length ? (
            <tbody>
              {item.lines.map((line, i2) => (
                <tr key={i2}>
                  <td style={Td}>{item.file}</td>
                  <td style={Td}>{line?.text ? line.text : "-"}</td>
                  <td style={Td}>{line?.number ? line.number : "-"}</td>
                  <td style={Td}>{line?.hex ? line.hex : "-"}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td style={Td}>{item.file}</td>
                <td style={Td} colSpan={3}>No content for this file</td>
              </tr>
            </tbody>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default TableContent;
