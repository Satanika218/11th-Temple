
export type Solution = {
  title: string;
  description: string;
};

export type Option = {
  text: string;
  next: string; // ID of the next node
};

export type Node = {
  id: string;
  text: string | string[];
  options?: Option[];
  solutions?: { title: string; description: string; }[];
  isEnd?: boolean;
};

export type ConversationTree = {
  [key: string]: Node;
};

export type Message = {
  id: string;
  text: string | string[];
  sender: 'bot' | 'user';
  options?: Option[];
  solutions?: { title: string; description: string; }[];
};
