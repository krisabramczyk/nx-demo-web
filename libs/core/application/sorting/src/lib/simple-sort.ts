

export const simpleSort = <T extends {id: string}>(items: T[]) => {
  return items?.sort((a, b) => a.id.localeCompare(b.id));
}
