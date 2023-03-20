import PropTypes from 'prop-types';
import { StatSection, StatList, StatItemStyled } from './Statistics.style';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      <h2>{title}</h2>

      <StatList>
        {stats.map(el => (
          <StatItemStyled key={el.id} bgcolor={getRandomHexColor()}>
            <span>{el.label}</span>
            <span>{el.percentage}%</span>
          </StatItemStyled>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
