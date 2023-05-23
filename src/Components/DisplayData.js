import React, { useContext } from 'react'
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table, Tab } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function DisplayData() {
    const { finalData } = useContext(multiStepContext);

    return (
        <div>
            <TableContainer style={{ display: 'flex', justifyContent: 'center' }}>
                <Table border="1" style={{ width: "70%", justifyContent: 'center' }} size="small" aria-label="caption label">
                    <TableHead>
                        <TableRow style={{ backgroundColor: 'burlywood', color: 'aliceblue' }}>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Email Address</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>District</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Landmark</TableCell>
                            <TableCell>Postal Code</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {finalData.map((data) => (
                            <TableRow key={data.email}>
                                <TableCell>{data.firstname}</TableCell>
                                <TableCell>{data.lastname}</TableCell>
                                <TableCell>{data.contact}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.country}</TableCell>
                                <TableCell>{data.distrcict}</TableCell>
                                <TableCell>{data.city}</TableCell>
                                <TableCell>{data.landmark}</TableCell>
                                <TableCell>{data.postcode}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
