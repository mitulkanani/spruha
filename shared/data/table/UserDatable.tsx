import React, { MouseEvent, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
const DataTableExtensions: any = dynamic(
  () => import("react-data-table-component-extensions"),
  { ssr: false }
);

import differenceBy from "lodash/differenceBy";
// import { tableDataItems } from ""
import { Button, Card, Col, Offcanvas, ProgressBar, Row } from "react-bootstrap";
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
  owned: string;
  total: string;
  sharing: string;
}

export const tableDataItems: TableDataItem[] = [
  {
    id: "1",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "Sales agremments",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/1.jpg",
    owner: "Alex spencer",
    email: "s.bond@datatables.net",
    sharewith: "Internal ",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "2",
    imglink: "../../../assets/images/svgs/crypto-currencies/lock.svg",
    name: "customer discovery notes",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/2.jpg",
    owner: "Jane smith",
    email: "s.bond@datatables.net",
    sharewith: "Outside ",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "3",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/3.jpg",
    owner: "Bruce williams",
    email: "a.bond@datatables.net",
    sharewith: "IPersonal",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "4",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Out bond tracker",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/4.jpg",
    owner: "jason who",
    email: "i.bond@datatables.net",
    sharewith: "Internal ",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "5",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/5.jpg",
    owner: "Sam Smiley",
    email: "s.bond@datatables.net",
    sharewith: "Personal",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "6",
    imglink: "../../../assets/images/svgs/crypto-currencies/lock.svg",
    name: "customer discovery notes",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/6.jpg",
    owner: "Alex spencer",
    email: "a.bond@datatables.net",
    sharewith: "Outside",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "7",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "Sales",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/7.jpg",
    owner: "Jane smith",
    email: "i.bond@datatables.net",
    sharewith: "Personal",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "8",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/8.jpg",
    owner: "Bruce williams",
    email: "s.bond@datatables.net",
    sharewith: "Internal ",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "9",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "customer discovery notes",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/4.jpg",
    owner: "Alex spencer",
    email: "a.bond@datatables.net",
    sharewith: "Personal",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "10",
    imglink: "../../../assets/images/svgs/bag.png",
    name: "MSA draft",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/10.jpg",
    owner: "Jane smith",
    email: "a.bond@datatables.net",
    sharewith: "Personal",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "11",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/11.jpg",
    owner: "Sam Smiley",
    email: "s.bond@datatables.net",
    sharewith: "Internal ",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "12",
    imglink: "../../../assets/images/svgs/crypto-currencies/lock.svg",
    name: "P & L Projections",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/12.jpg",
    owner: "Alex spencer",
    email: "a.bond@datatables.net",
    sharewith: "Outside",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "13",
    imglink: "../../../assets/images/svgs/crypto-currencies/lock.svg",
    name: "customer discovery notes",
    app: "../../../assets/images/svgs/crypto-currencies/gd.svg",
    img: "../../../assets/images/faces/3.jpg",
    owner: "Jane smith",
    email: "i.bond@datatables.net",
    sharewith: "Internal ",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
  {
    id: "14",
    imglink: "../../../assets/images/svgs/glob.png",
    name: "Blog post outline",
    app: "../../../assets/images/svgs/crypto-currencies/microsoft.svg",
    img: "../../../assets/images/faces/2.jpg",
    owner: "Sam Smiley",
    email: "s.bond@datatables.net",
    sharewith: " Personal",
    owned: "1,223 items",
    total: "10,258 items",
    sharing: "20,546 items",
  },
];

export const UserDatable = () => {
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
      name: "People",
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
      grow: 0.4,
    },
    {
      name: "Email",
      selector: (row: TableDataItem) => [row.email],
      sortable: true,
      grow: 0.4,
    },
    {
      name: "Apps",
      selector: (row: TableDataItem) => (
        <img src={`${row.app}`} alt="" className="w-5% h-5%" />
      ),
      sortable: true,
      grow: 0.2,
    },
    {
      name: "User type",
      selector: (row: TableDataItem) => <div>{row.sharewith}</div>,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Owned",
      selector: (row: TableDataItem) => [row.owned],
      sortable: true,
      grow: 0.3,
    },
    {
      name: " Shared",
      selector: (row: TableDataItem) => <div className="">{row.sharing}</div>,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Total",
      selector: (row: TableDataItem) => [row.total],
      sortable: true,
      grow: 0.3,
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
    const element = document.querySelector(".sc-fHejqy.evaFvq.rdt_TableHeader");

    // Check if the element exists
    if (element) {
      // Add CSS to hide the element
      (element as HTMLElement).style.display = "none";
    } else {
      console.error("Element not found.");
    }
  }, []);
  return (
    <>
      {/* <DataTableExtensions {...tableDatas}> */}
      <Row className="row-sm mt-5">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">All User</h6>
                <p className="text-muted card-sub-title">118,780 people</p>
              </div>

              <div className="table-responsive ">
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
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
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
              <img
                src={selectedRowData.img}
                className="me-2 avatar avatar-sm"
              />
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
                    {" "}
                    Email
                  </th>
                  <td>
                    <p className="m-0">{selectedRowData.email}</p>
                  </td>
                </tr>
                <tr>
                  <th className="details ">User type</th>
                  <td>
                    <div className="m-0">{selectedRowData.sharewith}</div>
                  </td>
                </tr>
                <tr>
                  <th className="details ">Apps</th>
                  <td>
                    <img src={selectedRowData.app} />
                  </td>
                </tr>
                <tr>
                  <th className="details ">Owned</th>
                  <td>{selectedRowData.owned}</td>
                </tr>
                <tr>
                  <th className="details ">Shared </th>
                  <td>{selectedRowData.sharing}</td>
                </tr>
                <tr>
                  <th className="details ">Total</th>
                  <td>{selectedRowData.total}</td>
                </tr>
              </tbody>
            </table>
          )}
          <div className="d-flex mt-4 gap-3 ">
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
