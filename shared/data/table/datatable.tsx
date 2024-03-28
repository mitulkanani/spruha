import React from 'react'
import { Button, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import {  DataTables, } from "./data-tables";
type headingType = {
	heading:string;
	user?:string;
}

const Datatable = ({heading ,user}:headingType) => {
  return (
    <div>
        
		<Row className="row-sm mt-5">
			<Col lg={12}>
				<Card className="custom-card">
					<Card.Body>
						<div>
							<h6 className="main-content-label mb-1">
								{heading}
							</h6>
							<p className="text-muted card-sub-title">
							{user}
							</p>
						</div>

						<div className="table-responsive ">
							<DataTables />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
    </div>
  )
}

export default Datatable