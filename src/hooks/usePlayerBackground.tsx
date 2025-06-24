import { colors } from '@/constants/tokens'
import { FastAverageColor } from 'fast-average-color'
import { useEffect, useState } from 'react'

export function usePlayerBackground(imageUrl: string) {
	const [averageColor, setAverageColor] = useState<string | null>(null)

	useEffect(() => {
		if (!imageUrl) {
			setAverageColor(colors.background)
			return
		}
		const fac = new FastAverageColor()
		fac.getColorAsync(imageUrl)
			.then((color) => setAverageColor(color.hex))
			.catch(() => setAverageColor(colors.background))
	}, [imageUrl])

	return { averageColor }
}
