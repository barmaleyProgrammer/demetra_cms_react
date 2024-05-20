const Grid = ({ columns, rows }) => {
    return (
        <table className="w-full text-center whitespace-nowrap border-collapse border border-slate-300">
            <thead className="text-xs uppercase bg-gray-300">
            <tr>
                {
                    columns.map((item, key) => {
                        return (
                            <th className="px-6 py-3 text-center" key={key}>{item.title}</th>
                        );
                    })
                }
            </tr>
            </thead>
            <tbody className="text-sm">
                {
                    rows.map((row, rowKey) => {
                        return (
                            <tr key={rowKey}>
                                {
                                    columns.map((column, columnKey) => {
                                        if (Object.prototype.hasOwnProperty.call(column,'render')) {
                                            return (
                                                <td className="border-t p-4" key={columnKey}>{column.render(row, rowKey)}</td>
                                            )
                                        }
                                        else if (Object.prototype.hasOwnProperty.call(column,'type') && column.type === 'slot') {
                                            return (
                                                <td className="border-t p-4" key={columnKey}>{column.render(row)}</td>
                                            )
                                        }
                                        else {
                                            return (
                                                <td className="border-t p-4 text-wrap" key={columnKey}>{row[column.name]}</td>
                                            )
                                        }
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export default Grid;