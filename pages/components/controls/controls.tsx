
import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
// import Seo from '../../../shared/layout-components/seo/seo';
import { Accordion, Card, Col, Row, Table, Badge, Offcanvas } from 'react-bootstrap';

const AccordianData = [
  {
  title: 'Accordion Item #1',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quasi maxime aliquam, nam voluptate obcaecati, sapiente ad consectetur, inventore ut quae? Necessitatibus optio maxime incidunt sed tempore cupiditate totam dolores?',
  table: [
    {
      name: 'first',
      created: '10 jun',
      number: '7389743',
      status: 'Failed'
    },
    {
      name: 'second',
      created: '10 jun',
      number: '7389743',
      status: 'complete'
    },
    {
      name: 'thired',
      created: '10 jun',
      number: '7389743',
      status: 'pending'
    }
  ]
},
{
  title: 'Accordion Item #2',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quasi maxime aliquam, nam voluptate obcaecati, sapiente ad consectetur, inventore ut quae? Necessitatibus optio maxime incidunt sed tempore cupiditate totam dolores?',
  table: [
    {
      name: 'first',
      created: '10 jun',
      number: '7389743',
      status: 'Failed'
    },
    {
      name: 'second',
      created: '10 jun',
      number: '7389743',
      status: 'complete'
    },
    {
      name: 'thired',
      created: '10 jun',
      number: '7389743',
      status: 'pending'
    }
  ]
},
{
  title: 'Accordion Item #3',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quasi maxime aliquam, nam voluptate obcaecati, sapiente ad consectetur, inventore ut quae? Necessitatibus optio maxime incidunt sed tempore cupiditate totam dolores?',
  table: [
    {
      name: 'first',
      created: '10 jun',
      number: '7389743',
      status: 'Failed'
    },
    {
      name: 'second',
      created: '10 jun',
      number: '7389743',
      status: 'complete'
    },
    {
      name: 'thired',
      created: '10 jun',
      number: '7389743',
      status: 'pending'
    }
  ]
}
]


const Controls = () => {
  
  //collapse1
  const [open1, setOpen1] = useState(false);


  //right

  const [showr, setShowr] = useState(false);

  const handleCloser = () => setShowr(false);
  const handleShowr = () => setShowr(true);


  return (
    <div>
      {/* <Seo title="Accordion"/> */}
      <PageHeader title="Accordion" item="Elements" active_item="Accordion"/>
      <Row className="row-sm">
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <div className="card-title">
                Basic Accordion 
              </div>
            </Card.Header>
            <Card.Body>
            <Accordion defaultActiveKey="0">
              {
                AccordianData && AccordianData.map((item, index) => (
                  <>
                  <Accordion.Item eventKey={`${index}`} key={index}>
                  <Accordion.Header className='accordian-title'>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.text}

            <Card className="custom-card w-50 mt-3 border">
                <Card.Header className="card-header justify-content-between">
                    <Card.Title>
                        Basic Tables
                    </Card.Title>
                  
                </Card.Header>
                <Card.Body>
                    <div className="table-responsive">
                        <Table className="table text-nowrap ">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Created On</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                item.table.map((data, index) => (
                                  <tr onClick={handleShowr} key={index} className="cursor-pointer">
                                    <th scope="row">{data.name}</th>
                                    <td>{data.created}</td>
                                    <td>{data.number}</td>
                                    <td><Badge bg="outline-primary" className="badge">{data.status}</Badge></td>
                                  </tr>
                                ))
                              }
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>

            <Offcanvas placement='end' show={showr} onHide={handleCloser} className="offcanvas offcanvas-end custom-offcanvas-width" tabIndex={-1} id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel1">
                                <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel1">Table Info
                                    </h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="p-3">
                                    <div>Here We Go...</div>
                                </Offcanvas.Body>
            </Offcanvas>

                  </Accordion.Body>
                </Accordion.Item>
                </>
                ))
              }
               </Accordion>
            
            </Card.Body>
           
           
          </Card>
        </Col>
        
      </Row>  
      </div>
    )
}
Controls.layout = "Contentlayout"

export default  Controls