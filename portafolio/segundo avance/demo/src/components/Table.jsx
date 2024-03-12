export default function Table(props){
    return(
        <table>
            <thead>
                <th>{props.th1}</th>
                <th>{props.th2}</th>
                <th>{props.th3}</th>
            </thead>
            <tbody>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                </tr>
                <tr>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                    <td>Cell 6</td>
                </tr>
                <tr>
                    <td>Cell 7</td>
                    <td>Cell 8</td>
                    <td>Cell 9</td>
                </tr>
            </tbody>
        </table>
    );
}
