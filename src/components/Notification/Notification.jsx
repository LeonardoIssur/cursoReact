import classes from '../Notification/Notification.module.css'

const Notification = ({ notificationData }) => {

  const colors = {
    success: 'green',
    error: 'red',
    warning: 'orange',
    info: 'blue',
  }
  const title = {
    success: 'success',
    error: 'error',
    warning: 'advertencia',
    info: 'informacion'
  }

  const notificationStyle = {
    backgroundColor: colors[notificationData.type],
  }

  return (
    <article className={classes.notificationContainer} style={notificationStyle}>
      <h3>{ title[notificationData.type] }</h3>
      { notificationData.text }
    </article>
  )
}


export default Notification