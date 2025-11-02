export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-md shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
