export class LeaderBoardModel{
    clan!: string
    honour!: number
    languages!: Array<LanguageModel>
    name!: string
    overall_rank!: number
    username!: string
}

export class LanguageModel{
    name!: String
    rank!: number
}
