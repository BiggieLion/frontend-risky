export interface User {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  rfc?: string;
  curp?: string;
  personType?: PersonType;
  phone?: string;
}

export interface PersonType {
  id?: number;
  label?: string;
}

export interface Credit {
  _id?: string;
  status?: string;
  timestamp?: Date;
  requestDate?: Date;
  endDate?: Date;
  requester?: User;
  analyst?: User;
  supervisor?: User;
  ammount: number;
  creditType: CreditType;
  documentsId: [string];
}

export interface CreditType {
  id?: number;
  label?: string;
}
