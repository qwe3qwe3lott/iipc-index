import {IndexValue} from '../../../types/IndexValue';

export type Region = {
	code?: string,
	label: string
}

export type MapState = {
	years: number[]
	selectedYear: number
	regions: Region[]
	selectedRegion: Region
	indexValues: IndexValue[]
}