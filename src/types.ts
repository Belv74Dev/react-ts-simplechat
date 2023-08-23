export interface UserType {
  id: number;
  username: string;
  name: string;
  avatar: null | string;
}

export interface MessageType {
  id: number;
  dialog_id: number;
  user_id: number; 
  text: string;
  date: string;
}

export interface DialogType {
  id: number;
  user_id: number;
  last_message_id: number | null;
  unread: number;
}
