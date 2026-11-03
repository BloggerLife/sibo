export const SITE_GITHUB_URL = 'https://github.com/nelsonlaidev'
export const SITE_FACEBOOK_URL = 'https://www.facebook.com/share/197MU4eqLm/?mibextid=wwXIfr'
export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/sibongile821?igsh=a3AwdGxkcTcyOGN0&igsi=a3AwdGxkcTcyOGN0'
export const SITE_TWITTER_URL = 'https://x.com/nelsonlaidev'
export const SITE_TIKTOK_URL = 'https://www.tiktok.com/@iamsibongilesibanda?_r=1&_t=ZS-98z4JN6lXW9'
export const SITE_YOUTUBE_URL = 'https://youtube.com/@sibongilesibandazw?si=NAaoYnZA59XRG-KC'

export const GITHUB_USERNAME = 'nelsonlaidev'
export const TWITTER_USERNAME = 'nelsonlaidev'
export const TWITTER_USER_ID = '1152256803746377730'

export const MY_NAME = 'Sibongile'

export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const OG_IMAGE_TYPE = 'image/png'

export const AVATAR_MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
export const SUPPORTED_AVATAR_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const

export type AvatarMimeType = (typeof SUPPORTED_AVATAR_MIME_TYPES)[number]
