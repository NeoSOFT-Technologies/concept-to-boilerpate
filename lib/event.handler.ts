

export type Event={
    id: string
}

export type EventResult={
    eventId: string
}

export interface EventHandler  {
     handle<E extends Event,R extends EventResult>(event: E): Promise<R>
}