/**
 * Shared facts the support and privacy pages depend on.
 * Both pages are linked directly from App Store / Google Play listings, so the
 * email here must stay a real, monitored inbox.
 */

export const SITE_URL = 'https://ahmedqadri.dev'

export const SUPPORT_EMAIL = 'support@aqstudios.io'

/** Bump whenever the privacy policy text changes — stores check this date. */
export const PRIVACY_EFFECTIVE_DATE = 'August 12, 2026'

export const SUPPORT_RESPONSE_WINDOW = '2 business days'

export interface AppEntry {
  name: string
  /** One line describing what it does. */
  description: string
  /** Store listing, if published. */
  storeUrl?: string
}

/**
 * Apps covered by the support and privacy pages. Both pages read from this
 * list and fall back to generic wording while it is empty, so publishing a new
 * app only requires adding an entry here.
 */
export const APPS: AppEntry[] = []
