const Notification = (props) => {
  const { className, iconUrl, message } = props;
  const containerClassName = `blue-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="blue-image" src={iconUrl} />
      <p className="info-para">{message}</p>
    </div>
  );
};

const element = (
  <div className="main-container">
    <h1 className="main-heading">Notifications</h1>
    <Notification
      className="blue"
      iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message="Information Message"
    />
    <Notification
      className="green-container"
      iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message="Success Message"
    />
    <Notification
      className="yellow"
      iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message="Warning Message"
    />
    <Notification
      className="blue"
      iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
