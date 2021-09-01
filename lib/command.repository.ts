import {CommandResult, DomainCommand, DomainModel} from "./domain.model";

export interface CommandRepository<C extends DomainCommand<DomainModel>>{
    execute<R extends CommandResult>(data:C): Promise<R>
}