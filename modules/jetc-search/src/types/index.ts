export type TFilterKeys = "Category" | "Glass" | "Ingredients";
export type TFilterTerm = {
    [K in TFilterKeys]?: string[]
}