import * as React from "react";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const CustomerList:any=[];

class CustomerDetails extends React.Component<{},{}>{
    constructor (props:any){
        super(props);
    }
    render() {
        return(
            <Paper style={{textAlign:"center", padding: `0.5rem 0.5rem`,marginLeft:'0.5rem'}}>
                <h4>Submitted</h4><p>Forms</p>
                <Table>
                    <TableHead >
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Date Of Birth</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Allergies</TableCell>
                            <TableCell>Medical History</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {CustomerList.map((customer:any,index:any) => {
                        return (
                            <TableRow key={index}>
                                <TableCell >{customer.firstName+" "+customer.lastName}</TableCell>
                                <TableCell >{customer.dateOfBirth}</TableCell>
                                <TableCell >{customer.contactNum}</TableCell>
                                <TableCell >{customer.allergies}</TableCell>
                                <TableCell >{customer.medicalHistory}</TableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default CustomerDetails