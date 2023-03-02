import React, { Fragment } from "react";

const TableContent = ({ data }) => {
  return (
    <>
      {data.map((item, i1) => (
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
      ))}
    </>
  );
};

export default TableContent;
