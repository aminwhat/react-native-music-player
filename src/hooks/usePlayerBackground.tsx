import { colors } from '@/constants/tokens'
import { useEffect, useState } from 'react'
import { getColors } from 'react-native-image-colors'

export function usePlayerBackground<T>(imageUrl: string) {
	const [imageColors, setImageColors] = useState<T | null>(null)

	useEffect(() => {
		getColors(imageUrl, {
			fallback: colors.background,
			cache: true,
			key: imageUrl,
		}).then((colors) => setImageColors(colors as T))
	}, [imageUrl])

	return { imageColors }
}
