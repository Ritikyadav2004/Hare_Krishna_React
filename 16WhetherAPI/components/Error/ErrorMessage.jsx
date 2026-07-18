import "./Error.css";

function ErrorMessage({message}) {
  return (
    <div className="error-container">
      <h2>⚠️ {message}</h2>
     
    </div>
  );
}

export default ErrorMessage;