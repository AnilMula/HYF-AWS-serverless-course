function Notification({ newNotification }) {
  return newNotification == null ? (
    <div></div>
  ) : (
    <div
      style={{
        fontSize: '20px',
        fontColor: '#4a54f1',
        textAlign: 'center',
        paddingTop: '100px',
      }}
    >
      {newNotification}
    </div>
  );
}

export default Notification;
