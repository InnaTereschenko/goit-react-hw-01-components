import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
<h2 className="title">Upload stats</h2>

            <ul className="stat-list">
                {stats.map(state => (
                    <li className="item" key={state.id}>
                        
      <span className="label">{state.label}</span>
      <span className="percentage">{state.percentage}%</span>
    </li>
 
    ))}
  </ul>
</section >)
};




Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    ).isRequired,
}

export default Statistics;