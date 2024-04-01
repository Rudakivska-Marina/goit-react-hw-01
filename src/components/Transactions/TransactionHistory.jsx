import css from "./TransactionHistory.module.css"

function TransactionHistory({items}){
    return (
        <table className={css.table}>
  <thead className={css.thead}>
    <tr>
      <th className={css.thtd}>Type</th>
      <th className={css.thtd}>Amount</th>
      <th className={css.thtd}>Currency</th>
    </tr>
  </thead>
{items.map(el => {return <tbody key={el.id} className={css.tbody}>
    <tr>
      <td className={css.thtd}>{el.type}</td>
      <td className={css.thtd}>{el.amount}</td>
      <td className={css.thtd}>{el.currency}</td>
    </tr>
    
  </tbody>})}
  
</table>

    )
}

export default TransactionHistory;