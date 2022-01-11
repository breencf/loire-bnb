export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <div>
    <input
      type="checkbox"
      id="checkbox"
      checked={isChecked}
      onChange={checkHandler}
    />
    <label htmlFor={`checkbox=${index}`}>{label}</label>
  </div>
  );
};
