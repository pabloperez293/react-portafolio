import PropTypes from 'prop-types';

const SkillBadge = ({ icon: Icon, label, name }) => {
  const text = label || name;
  return (
    <span className="inline-flex items-center gap-2 bg-neutral-800 px-3 py-1 rounded-full text-sm">
      {Icon && <Icon className="text-xl text-cyan-300" />}
      <span className="text-sm">{text}</span>
    </span>
  );
};

SkillBadge.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default SkillBadge;
