import React from "react";

export default function Table({
  isEditable,
  title,
  tableHeaders,
  tableBody,
  addMoreBtn = false,
  withFav = false,
  toolsButton = false,
  useHtmlTags = false,
}) {
  console.log(tableHeaders);
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 24px 8px 24px",
        }}
      >
        <p style={{ fontWeight: "bolder" }}>{title}</p>
        {isEditable && (
          <i className="material-icons-outlined" style={{ fontSize: "18px" }}>
            border_color
          </i>
        )}
      </div>
      <hr className="solid" />
      <div style={{ overflowX: "auto", paddingBottom: "5px" }}>
        <table id="tenants">
          {tableHeaders && (
            <thead>
              <tr>
                {tableHeaders.map((element) => (
                  <th key={element}>{element}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {tableBody &&
              tableBody.map((element) => (
                <tr
                  key={element.first}
                  className={tableBody.length > 1 ? "multiChild" : ""}
                >
                  <td>
                    <p>{element.first}</p>
                  </td>
                  <td>
                    {useHtmlTags ? (
                      element.second
                    ) : (
                      <p className="info">{element.second}</p>
                    )}
                  </td>
                  <td>
                    <p className="info">{element.third}</p>
                  </td>
                  <td>
                    {toolsButton && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {withFav && (
                          <i className="material-icons">
                            {element.isFav ? "star" : "star_border"}
                          </i>
                        )}
                        <i className="material-icons-outlined">border_color</i>
                        <i className="material-icons-outlined">delete</i>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {addMoreBtn && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            color: "#bf292f",
            textDecoration: "underline",
            padding: "15px 0px",
          }}
        >
          <p>Add more tenants</p>
        </div>
      )}
    </div>
  );
}
