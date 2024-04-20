import { toast } from 'react-hot-toast'

export const notify = ({ type, message }) => type ? toast.success(message) : toast.error(message);
