import React from "react";

import Table from "./Table";

export default function TableContainer() {
  return (
    <div className="col-6 col-s-12">
      <Table
        isEditable={false}
        title="Tenants"
        tableHeaders={["Name", "Phone", "Email", ""]}
        tableBody={[
          {
            first: "Jon Lam",
            second: "XXXXXXX",
            third: "jlam@gmail.com",
            isFav: true,
          },
          {
            first: "Lily Lam",
            second: "XXXXXXX",
            third: "",
            isFav: false,
          },
          {
            first: "Anthony Lam",
            second: "XXXXXXX",
            third: "",
            isFav: false,
          },
        ]}
        addMoreBtn={true}
        withFav={true}
        toolsButton={true}
      />
      <Table
        title="Landlord"
        tableBody={[
          {
            first: "Carrie Yuen",
            second: "XXXXXXX",
            third: "carriey@gmail.com",
          },
        ]}
        isEditable={false}
        toolsButton={true}
      />
      <Table
        title="Managment Fee"
        tableHeaders={["Price", "Date of Issue", ""]}
        tableBody={[
          {
            first: "2,400.00 HKD",
            second: (
              <>
                <span>22nd </span>
                <span style={{ color: "gray" }}>of the month</span>
              </>
            ),
            third: "",
          },
        ]}
        useHtmlTags={true}
        isEditable={true}
      />
      <Table
        title="Leasing Fee"
        tableBody={[
          {
            first: "16,500.00 HKD",
            second: (
              <>
                <span>24th </span>
                <span style={{ color: "gray" }}>of the month</span>
              </>
            ),
            third: "",
          },
        ]}
        useHtmlTags={true}
        isEditable={true}
      />
    </div>
  );
}
