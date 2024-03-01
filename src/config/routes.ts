export const routes =  {
    mainPage: () => `/main`,
    categoryPage: () => `/category`,
    filmDetailPage: (id = ':id') => `/filmDetail/${id}`,
    infoPage: () => `/info`,
    searchPage: () => `/search`
}