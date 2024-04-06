import { useContext } from "react";
import { NotificationContext } from '../Notification/NotificationService'

export const useNotification = () => {
    return useContext (NotificationContext)
}