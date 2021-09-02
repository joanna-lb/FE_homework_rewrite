export interface NewAgentType {
    name: string,
    os: string,
    status: string,
    type: string,
    ip: string,
    location: string,
    resources: Array<string>,
    id: number,
    iconSrc?: string,
    showPopover: boolean
}

