import React, { MouseEvent, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
const DataTableExtensions: any = dynamic(
  () => import("react-data-table-component-extensions"),
  { ssr: false }
);

import differenceBy from "lodash/differenceBy";
// import { tableDataItems } from ""
import { Button, Card, Offcanvas, ProgressBar } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
// import google from '../../../public/assets/images/svgs/crypto-currencies/google.svg';
import dynamic from "next/dynamic";
import Link from "next/link";
interface TableDataItem {
  id: string;
  imglink?: any;
  name: number | string;
  app: any;
  img: any;
  owner: string;
  email: string;
  sharewith: string;
  linktype: string;
  modified: string;
  age: string;
  fileimg: any;
}

export const tableDataItems: TableDataItem[] = [
  {
    id: "1",
    fileimg: "../../../assets/images/svgs/crypto-currencies/file.svg",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "Sales agremments",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/1.jpg",
    owner: "Alex spencer",
    email: "i.bond@datatables.net",
    sharewith: "Internal (15)",
    linktype: "Company",
    modified: "1 minute ago",

    age: "2 days ago",
  },
  {
    id: "2",
    fileimg: "../../../assets/images/svgs/xl.png",
    imglink: "../../../assets/images/svgs/crypto-currencies/lock.svg",
    name: "customer discovery notes",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/2.jpg",
    owner: "Jane smith",
    email: "a.bond@datatables.net",
    sharewith: "Internal (15), Personal (3)",
    linktype: "Restricted",
    modified: "2 minute ago",

    age: "3 days ago",
  },
  {
    id: "3",
    fileimg: "../../../assets/images/svgs/word.png",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/3.jpg",
    owner: "Bruce williams",
    email: "s.bond@datatables.net",
    sharewith: "Internal (15)",
    linktype: "Public",
    modified: "3 minute ago",

    age: "9year ago",
  },
  {
    id: "4",
    fileimg: "../../../assets/images/svgs/pdf.png",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Out bond tracker",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/4.jpg",
    owner: "jason who",
    email: "s.bond@datatables.net",
    sharewith: "Internal (15), Personal (3)",
    linktype: "Public",
    modified: "4 minute ago",

    age: "13 days ago",
  },
  {
    id: "5",
    fileimg: "../../../assets/images/svgs/word.png",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/5.jpg",
    owner: "Sam Smiley",
    email: "a.bond@datatables.net",
    sharewith: "Internal (15)",
    linktype: "Company",
    modified: "5 minute ago",

    age: "6 hours ago",
  },
  {
    id: "6",
    fileimg: "../../../assets/images/svgs/crypto-currencies/file.svg",
    imglink: "../../../assets/images/svgs/crypto-currencies/lock.svg",
    name: "customer discovery notes",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/6.jpg",
    owner: "Alex spencer",
    email: "a.bond@datatables.net",
    sharewith: "Internal (15), Personal (3)",
    linktype: "Restricted",
    modified: "6 minute ago",

    age: "2 hours ago",
  },
  {
    id: "7",
    fileimg: "../../../assets/images/svgs/xl.png",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "Sales",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/7.jpg",
    owner: "Jane smith",
    email: "i.bond@datatables.net",
    sharewith: "Internal (15)",
    linktype: "Company",
    modified: "7 minute ago",

    age: "7 months ago",
  },
  {
    id: "8",
    fileimg: "../../../assets/images/svgs/word.png",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/8.jpg",
    owner: "Bruce williams",
    email: "i.bond@datatables.net",
    sharewith: "Internal (15), Personal (3)",
    linktype: "Public",
    modified: "8 minute ago",

    age: "8 days ago",
  },
  {
    id: "9",
    fileimg: "../../../assets/images/svgs/crypto-currencies/file.svg",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "customer discovery notes",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/5.jpg",
    owner: "Alex spencer",
    email: "s.bond@datatables.net",
    sharewith: "Internal (15)",
    linktype: "Company",
    modified: "9 minute ago",

    age: "25 days ago",
  },
  {
    id: "10",
    fileimg: "../../../assets/images/svgs/word.png",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "MSA draft",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/10.jpg",
    owner: "Jane smith",
    email: "s.bond@datatables.net",
    sharewith: "Internal (15), Personal (3)",
    linktype: "Company",
    modified: "10 minute ago",
    age: "3 years ago",
  },
  {
    id: "11",
    fileimg: "../../../assets/images/svgs/crypto-currencies/file.svg",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/11.jpg",
    owner: "Sam Smiley",
    email: "s.bond@datatables.net",
    sharewith: "Internal (15)",
    linktype: "Public",
    modified: "11 minute ago",
    age: "1 years ago",
  },
  {
    id: "12",
    fileimg: "../../../assets/images/svgs/pdf.png",
    imglink: "../../../assets/images/svgs/crypto-currencies/lock.svg",
    name: "P & L Projections",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/12.jpg",
    owner: "Alex spencer",
    email: "s.bond@datatables.net",
    sharewith: "Internal (15), Personal (3)",
    linktype: "Restricted",
    modified: "12 minute ago",
    age: "5 days ago",
  },
  {
    id: "13",
    fileimg: "../../../assets/images/svgs/word.png",
    imglink: "../../../assets/images/svgs/crypto-currencies/lock.svg",
    name: "customer discovery notes",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/3.jpg",
    owner: "Jane smith",
    email: "s.bond@datatables.net",
    sharewith: "Internal (15)",
    linktype: "Restricted",
    modified: "13 minute ago",
    age: "2 months ago",
  },
  {
    id: "14",
    fileimg: "../../../assets/images/svgs/pdf.png",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/5.jpg",
    owner: "Sam Smiley",
    email: "s.bond@datatables.net",
    sharewith: "Internal (15), Personal (3)",
    linktype: "Public",
    modified: "14 minute ago",
    age: "10 days ago",
  },
];

export const DataTables = () => {
  // const [selectedRows, setSelectedRows] = React.useState([]);
  // const [toggleCleared, setToggleCleared] = React.useState(false);
  // const [data, setData] = React.useState(tableDataItems);

  // const handleRowSelected = React.useCallback((state: any) => {
  //   setSelectedRows(state.selectedRows);
  // }, []);

  const [selectedRows, setSelectedRows] = useState<TableDataItem[]>([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<TableDataItem | null>(
    null
  );
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState(tableDataItems);

  const handleRowSelected = (state: any) => {
    setSelectedRows(state.selectedRows);
  };

  const handleRowClick = (row: TableDataItem, e: MouseEvent) => {
    setSelectedRowData(row);
    setShowOffcanvas(true);
  };

  const handleHideOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const columns: any = [
    {
      name: "NAME",
      selector: (row: TableDataItem) => (
        <div className="d-flex align-items-center gap-3 ">
          <img src={`${row.fileimg} `} alt="" className=" avatar-xs " />{" "}
          <p className="m-0">{row.name}</p>
        </div>
      ),
      sortable: true,
      grow: 1.2,
    },
    {
      name: "App",
      selector: (row: TableDataItem) => (
        <img src={`${row.app}`} alt="" className="w-5% h-5%" />
      ),
      sortable: true,
      grow: 0.05,
    },
    {
      name: "Owner",
      selector: (row: TableDataItem) => (
        <div className="d-flex align-items-center gap-3 ">
          <img
            src={`${row.img} `}
            alt=""
            className=" rounded-circle  avatar avatar-sm "
          />{" "}
          <p className="m-0">{row.owner}</p>
        </div>
      ),
      sortable: true,
      grow: 0.8,
    },
    {
      name: "Email",
      selector: (row: TableDataItem) => [row.email],
      sortable: true,
      grow: 0.8,
    },
    {
      name: "Shared With",
      selector: (row: TableDataItem) => [row.sharewith],
      sortable: true,
      grow: 0.8,
    },
    {
      name: " Link Type",
      selector: (row: TableDataItem) => (
        <div className="d-flex align-items-center gap-3 ">
          <img
            src={`${row.imglink} `}
            alt=""
            className=" rounded-circle  avatar avatar-xs "
          />{" "}
          <p className="m-0">{row.linktype}</p>
        </div>
      ),
      sortable: true,
      grow: 0.6,
    },
    {
      name: "Modified",
      selector: (row: TableDataItem) => [row.modified],
      sortable: true,
      grow: 0.5,
    },
    {
      name: "Age",
      selector: (row: TableDataItem) => [row.age],
      sortable: true,
      grow: 0.5,
    },
    {
      name: (
        <button className="btn-outline-none border border-light fs-14">
          {" "}
          +{" "}
        </button>
      ),
      selector: (row: TableDataItem) => (
        <div>
          <img
            src={"../../../assets/images/svgs/crypto-currencies/threeDots.svg"}
            className="avatar-xs cursour"
          />
        </div>
      ),
      sortable: true,
      grow: 0.1,
    },
  ];
  // const contextActions = React.useMemo(() => {
  //   const handleDelete = () => {
  //     if (
  //       window.confirm(
  //         `Are you sure you want to delete:\r ${selectedRows.map(
  //           (r: TableDataItem) => r.name
  //         )}?`
  //       )
  //     ) {
  //       setToggleCleared(!toggleCleared);
  //       setData(differenceBy(data, selectedRows, "SNO"));
  //     }
  //   };

  //   return (
  //     <Button key="delete" onClick={handleDelete}>
  //       Delete
  //     </Button>
  //   );
  // }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };
  useEffect(() => {
    const element = document.querySelector(' .evaFvq ');

    // Check if the element exists
    if (element) {
      // Add CSS to hide the element
      (element as HTMLElement).style.display = "none ";
    } else {
      console.error("Element not found.");
    }
  }, []);
  return (
    <>
      {/* <DataTableExtensions {...tableDatas}> */}
      <DataTable
        title
        columns={columns}
        data={data}
        selectableRows
        // contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        onRowClicked={handleRowClick}
        // pagination
      />
      {/* </DataTableExtensions> */}
      <Offcanvas
        placement="end"
        show={showOffcanvas}
        onHide={handleHideOffcanvas}
        className="offcanvas offcanvas-end custom-offcanvas-width"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel1"
      >
        <Offcanvas.Header
          closeButton
          className="offcanvas-header border-bottom border-block-end-dashed"
        >
          {selectedRowData && (
            <div className="d-flex align-items-center">
              <img src={selectedRowData.fileimg} className="me-2 avatar-sm" />
              <h5
                className="offcanvas-title decoration"
                id="offcanvasRightLabel1"
              >
                {selectedRowData.name}
              </h5>
            </div>
          )}
        </Offcanvas.Header>
        <Offcanvas.Body className="p-3">
          {selectedRowData && (
            <table className="table">
              <tbody>
                <tr>
                  <th className="details " scope="row">
                    App
                  </th>
                  <td>
                    <img src={selectedRowData.app} />
                  </td>
                </tr>
                <tr>
                  <th className="details ">Owner</th>
                  <td>
                    <div className="d-flex align-items-center  gap-3">
                      <img
                        src={`${selectedRowData.img} `}
                        alt=""
                        className=" rounded-circle  avatar avatar-xs "
                      />{" "}
                      <div className="d-flex align-items-center gap-4">
                        <p className="m-0 dot position-relative">
                          {selectedRowData.owner}
                        </p>
                        <p className="m-0">{selectedRowData.email}</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="details ">Identifier</th>
                  <td>
                    <div className="d-flex align-items-center gap-4 ">
                      <p className=" m-0 dot position-relative">
                        {selectedRowData.email}
                      </p>
                      <div className="d-flex gap-2 align-items-center">
                        <img
                          src="../../../assets/images/svgs/copy.png"
                          className="avatar-xs"
                        />
                        <Link className="decoration text-black" href="">
                          {" "}
                          Copy id
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="details ">Age</th>
                  <td>{selectedRowData.age}</td>
                </tr>
                <tr>
                  <th className="details ">Last modified </th>
                  <td>{selectedRowData.modified}</td>
                </tr>
                <tr>
                  <th className="details ">Share with</th>
                  <td>{selectedRowData.sharewith}</td>
                </tr>
                <tr>
                  <th className="details ">Direct link</th>
                  <td></td>
                </tr>
                <tr>
                  <th className="details ">Link type</th>
                  <td>
                    <div className="d-flex align-items-center gap-3 ">
                      <img
                        src={`${selectedRowData.imglink} `}
                        alt=""
                        className="  avatar avatar-xs "
                      />{" "}
                      <p className="m-0">{selectedRowData.linktype}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="details ">Share drive</th>
                  <td>
                    <div className="d-flex align-items-center gap-4 ">
                      <p className=" m-0 dot position-relative">
                        {selectedRowData.linktype}
                      </p>
                      <div className="d-flex gap-1 align-items-center">
                        <img src="../../../assets/images/svgs/link.png" />
                        <Link className="decoration text-black" href="">
                          {" "}
                          Copy link
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="d-flex gap-3 mt-4 ">
            <div className="w-50">
              <Card className=" custom-card shadow-lg">
                <Card.Body>
                  <div className="card-block">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-auto user-lock">
                        <span className="img-fluid rounded-circle">
                         
                          { selectedRowData && <img
                            className="img-fluid rounded-circle"
                            src={`${selectedRowData.img}`}
                            alt="avatar"
                          />}
                        </span>
                      </div>
                      <div className="col">
                        <h5>Joyce Chua</h5>
                        <span>UX Designer</span>
                      </div>
                    </div>
                    <ul className="task-list">
                      <li>
                        <i className="task-icon bg-primary"></i>
                        <h6>
                          Task Finished
                          <span className="float-end text-muted fs-11">
                            29 Oct 2020
                          </span>
                        </h6>
                        <p className="text-muted fs-12">
                          Adam Berry finished task on
                          <a href="#" className="fw-medium">
                            {" "}
                            Project Management
                          </a>
                        </p>
                      </li>
                      <li>
                        <i className="task-icon bg-secondary"></i>
                        <h6>
                          New Comment
                          <span className="float-end text-muted fs-11">
                            25 Oct 2020
                          </span>
                        </h6>
                        <p className="text-muted fs-12">
                          Victoria commented on Project{" "}
                          <a href="#" className="fw-medium">
                            {" "}
                            AngularJS Template
                          </a>
                        </p>
                      </li>
                      <li>
                        <i className="task-icon bg-secondary"></i>
                        <h6>
                          Project Completed
                          <span className="float-end text-muted fs-11">
                            22 Aug 2020
                          </span>
                        </h6>
                        <p className="text-muted fs-12">
                          Victoria commented on Project{" "}
                          <a href="#" className="fw-medium">
                            {" "}
                            AngularJS Template
                          </a>
                        </p>
                      </li>
                      <li>
                        <i className="task-icon bg-secondary"></i>
                        <h6>
                          New Request
                          <span className="float-end text-muted fs-11">
                            24 Oct 2022
                          </span>
                        </h6>
                        <p className="text-muted fs-12">
                          Victoria commented on Project{" "}
                          <a href="#" className="fw-medium">
                            {" "}
                            AngularJS Template
                          </a>
                        </p>
                      </li>
                      <li>
                        <i className="task-icon bg-danger"></i>
                        <h6>
                          Task Overdue
                          <span className="float-end text-muted fs-11">
                            14 Oct 2020
                          </span>
                        </h6>
                        <p className="text-muted mb-0 fs-12">
                          Petey Cruiser finished task{" "}
                          <a href="#" className="fw-medium">
                            {" "}
                            Integrated management
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="d-flex flex-column gap-4 w-50">
              <div className="">
                <Card className="custom-card shadow">
                  <Card.Body>
                    <p className="mb-1 tx-inverse">Number Of Sales</p>
                    <div>
                      <h4 className="dash-25 mb-2">568</h4>
                    </div>
                    <div className="expansion-value d-flex tx-inverse">
                      <strong>
                        <i className="fas fa-caret-down me-1 text-danger"></i>{" "}
                        0.5%
                      </strong>
                      <strong className="ms-auto">
                        <i className="fas fa-caret-up me-1 text-success"></i>
                        0.7%
                      </strong>
                    </div>
                    <div className="progress progress-sm progress-animate">
                      <ProgressBar
                        now={70}
                        className="xs wd-100p"
                        role="progressbar"
                      ></ProgressBar>
                    </div>
                    <div className="expansion-label d-flex text-muted">
                      <span>Target</span>
                      <span className="ms-auto">Last Month</span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="custom-card shadow">
                  <Card.Body>
                    <p className="mb-1 tx-inverse">New Revenue</p>
                    <div>
                      <h4 className="dash-25 mb-2">$12,897</h4>
                    </div>
                    <div className="expansion-value d-flex tx-inverse">
                      <strong>
                        <i className="fas fa-caret-up me-1 text-success"></i>{" "}
                        0.72%
                      </strong>
                      <strong className="ms-auto">
                        <i className="fas fa-caret-down me-1 text-danger"></i>
                        0.43%
                      </strong>
                    </div>
                    <div className="progress progress-sm progress-animate">
                      <ProgressBar
                        now={60}
                        className="xs  wd-100p"
                        variant="secondary"
                        role="progressbar"
                      ></ProgressBar>
                    </div>
                    <div className="expansion-label d-flex text-muted">
                      <span>Target</span>
                      <span className="ms-auto">Last Month</span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="custom-card shadow">
                  <Card.Body>
                    <p className="mb-1 tx-inverse">Total Cost</p>
                    <div>
                      <h4 className="dash-25 mb-2">$11,234</h4>
                    </div>
                    <div className="expansion-value d-flex tx-inverse">
                      <strong>
                        <i className="fas fa-caret-down me-1 text-danger"></i>{" "}
                        1.4%
                      </strong>
                      <strong className="ms-auto">
                        <i className="fas fa-caret-down me-1 text-danger"></i>
                        1.44%
                      </strong>
                    </div>
                    <div className="progress progress-sm progress-animate">
                      <ProgressBar
                        now={50}
                        className="xs wd-100p "
                        variant="success"
                        role="progressbar"
                      ></ProgressBar>
                    </div>
                    <div className="expansion-label d-flex text-muted">
                      <span>Target</span>
                      <span className="ms-auto">Last Month</span>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
