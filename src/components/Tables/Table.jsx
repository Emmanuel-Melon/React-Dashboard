import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

const tableStyle = theme => ({
    infoTableHeader: {
        color: "#333"
    },
    table: {
        marginBottom: "0",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "#fff",
        borderSpacing: "0",
        borderCollapse: "collapse"
    },
    tableHeadCell: {
        color: "inherit",
        fontSize: "1em",
        background: "#e08c05"
    },
    tableCell: {
        lineHeight: "1.42857143",
        padding: "12px 8px",
        verticalAlign: "middle"
    },
    tableResponsive: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    }
});



function CustomTable({ ...props }) {
    const { classes, tableHead, tableData, tableHeaderColor } = props;
    return (
        <div className={classes.tableResponsive}>
            <Table className={classes.table}>
                {tableHead !== undefined ? (
                    <TableHead className={classes.infoTableHeader}>
                        <TableRow>
                            {tableHead.map((prop, key) => {
                                return (
                                    <TableCell
                                        className={classes.tableCell + " " + classes.tableHeadCell}
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, key) => {
                        return (
                            <TableRow key={key}>
                                {prop.map((prop, key) => {
                                    return (
                                        <TableCell className={classes.tableCell} key={key}>
                                            {prop}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}



export default withStyles(tableStyle)(CustomTable);