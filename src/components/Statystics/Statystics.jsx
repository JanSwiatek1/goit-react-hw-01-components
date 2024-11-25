import PropTypes from 'prop-types';
import css from './Statystics.module.css';
import getRandomHexColor from '../../utils/getRandomColor';

const Statystics = ({ title, stats }) => {
    
  return (
    <section className={css.statystics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
              opacity: 0.9,
            }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statystics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statystics;