android-dev:
	eas build --platform android --profile development --local
ios-dev:
	eas build --platform ios --profile development --local
all-dev:
	eas build --platform all --profile development --local


android-preview:
	eas build --platform android --profile preview --local
ios-preview:
	eas build --platform ios --profile preview --local
all-preview:
	eas build --platform all --profile preview --local


android-production:
	eas build --platform android --profile production --local
ios-production:
	eas build --platform ios --profile production --local
all-production:
	eas build --platform all --profile production --local


upgrade-to-53:
	NODE_OPTIONS="--max-old-space-size=4096" yarn expo install expo@^53.0.0
