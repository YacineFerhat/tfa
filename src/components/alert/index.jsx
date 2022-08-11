export const Alert = ({ show, color, message }) => {
  return (
    <div>
      {show && (
        <div
          className={`p-4 mb-4 text-sm absolute mt-4 text-${color}-500 bg-${color}-100 rounded-lg`}
          role="alert"
        >
          {message}
        </div>
      )}
    </div>
  );
};
