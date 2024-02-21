export const setActiveCategory = (category: string) => {
    return {
        type: 'activeCategory/setActiveCategory',
        payload: category
    }
}
