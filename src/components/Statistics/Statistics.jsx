import PropTypes from 'prop-types';
import {getRandomHexColor} from 'helpers/getRandomHexColor.js';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(state => (
          <li
            className={css.item}
            
            style={{
              backgroundColor: getRandomHexColor(),
                        }}
            key={state.id}
          >
            <span className={css.label}>{state.label}</span>
            <span className={css.percentage}>{state.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
