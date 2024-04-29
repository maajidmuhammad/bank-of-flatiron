import Row from "./Row";

function Table({ transaction }) {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #dddddd',
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <Row transactions={transaction} />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
