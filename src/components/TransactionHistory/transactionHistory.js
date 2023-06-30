import PropTypes from 'prop-types';

const TransactionHistory = ({id, type, amount, currency}) => {

    (<table class="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
            <tr>
                <td>{type}l</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        </tbody>
    </table>)
}


TransactionHistory.propType = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionHistory;