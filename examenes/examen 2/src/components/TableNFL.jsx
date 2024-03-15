import React from "react";
import { useTable } from 'react-table';

const TableNFL = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const rowsData = [];
    for (let i = 0; i < data.length; i += 4) {
        rowsData.push(data.slice(i, i + 4));
    }

    return (
        <div>
            <div className="boton">
                <a href="/"><button>Back</button></a>
            </div>
            <div className="tabla-contenido">
                <table {...getTableProps()} className="tablaNFL">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableNFL;
