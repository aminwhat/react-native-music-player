import { colors } from '@/constants/tokens'
import ColorThief from 'colorthief'
import { useEffect, useState } from 'react'

export function usePlayerBackground(imageUrl: string) {
	const [dominantColor, setDominantColor] = useState<string | null>(null)

	useEffect(() => {
		if (!imageUrl) {
			setDominantColor(colors.background)
			return
		}
		// Create an image element to extract color
		const img = new window.Image()
		img.crossOrigin = 'Anonymous'
		img.src = imageUrl
		img.onload = () => {
			try {
				const color = ColorThief.getColor(img)
				if (Array.isArray(color)) {
					// Convert [r,g,b] to hex
					const hex = '#' + color.map(x => x.toString(16).padStart(2, '0')).join('')
					setDominantColor(hex)
				} else {
					setDominantColor(colors.background)
				}
			} catch (e) {
				setDominantColor(colors.background)
			}
		}
		img.onerror = () => setDominantColor(colors.background)
	}, [imageUrl])

	return { dominantColor }
}
