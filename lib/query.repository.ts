import {DomainModel, DomainQuery, QueryResult} from "./domain.model";

export interface QueryRepository<Q extends DomainQuery, QR extends QueryResult> {
    execute(query: Q): Promise<QR>
}