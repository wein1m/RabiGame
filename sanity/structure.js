// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("game").title("Game"),
      S.documentTypeListItem("news").title("News"),
    ]);
