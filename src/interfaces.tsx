// типы данных для хранилища

export interface StateSet {
    page: string;
	status: string;
	isLoaded: boolean;
	dialogDeleteContactOpened: boolean;
	editFormOpened: boolean;
	askBeforeDelete: boolean;
}

export interface StateUser {
    login: string;
    password: string;   
    name: string;
    token: string
}

export interface StateContacts {
	id:number;
	token: string;
    name: string;
    fio: string;
    telephone: string;
    email: string;
}

export interface StateAll {
    set:StateSet;
    user:StateUser;
    contacts: Array<StateContacts>;
}

// экшены

export interface ActionUser {
	type: string;
	payload: StateUser;
}

export interface ActionSet {
	type: string;
	payload: StateSet;
}

export interface ActionContacts {
	type: string;
	payload: Array<StateContacts>;
	id?: number;
}




//props для map



export interface PropsStateMain {
	page: string;
	name: string;
}
export interface PropsStateAuth {
	login: string;
	password: string;
	status: string;
	token: string;
}
export interface PropsStateContacts {
	status: string;
	token: string;
}
export interface PropsStateContactsList {
	contacts: Array<StateContacts>;
	status: string;
	token: string;
	isLoaded: boolean;
	askBeforeDelete: boolean;
}
export interface PropsStateDDContacts {
	open: boolean;
	askBeforeDelete: boolean;
}
export interface PropsStateEFContacts {
	open: boolean;
}

export interface PropsDispaich {
	doSetLogin: Function;
	doSetPassword: Function;
	doLogin: Function;
	doLogout: Function;
	onLoginFail: Function;
	onGetContactsFail: Function; 
	onGetContacts: Function; 
	doDailogDeleteContactOpen: Function; 	
	doDailogDeleteContactClose: Function; 	
	doStopAskBeforeDelete: Function; 	
	doDeleteContacts: Function; 	
	doEditFormOpen: Function; 	
	doEditFormClose: Function; 	
}
export type PropsAll = PropsStateMain & PropsStateAuth & PropsStateContacts & PropsStateContactsList & PropsStateDDContacts & PropsStateEFContacts &
PropsDispaich;