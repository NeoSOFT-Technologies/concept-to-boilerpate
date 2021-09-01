

export type DomainModel = {}

export type DomainQuery = {}

export enum CommandType {
    Create, Update, Delete
}

export type DomainCommand<D extends DomainModel> = {
    id: string,
    data: D,
    type: CommandType,

}

export type CommandResult = {
    commandId: string,
    isSuccessful: boolean,
}

export type QueryResult= {
    queryId: string,
    isSuccessful: boolean,
}