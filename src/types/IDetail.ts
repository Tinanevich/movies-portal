export interface IMain {
	show: IDetail
};
export interface IDetail {
	id: number,
	ended: string,
	genres: string[],
	image: {
		medium: string,
		original: string,
	}
	name: string,
	rating: {
		average: number,
	},
	summary: string,
	network?: {
		id: number,
		name: string,
		country: {
			name: string,
		}
		officialSite: string,
	}
	premiered: string
}