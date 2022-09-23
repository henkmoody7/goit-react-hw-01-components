import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatItem,
  PercentageSpan,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(elem => (
          <StatItem key={elem.id}>
            <span>{elem.label}</span>
            <PercentageSpan>{elem.percentage}%</PercentageSpan>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
