import type { Metadata } from 'next'
import { LifeBuoy } from 'lucide-react'
import DocShell from '../components/doc-shell'
import { Button } from '../components/ds/button'
import { Card } from '../components/ds/card'
import { APPS, PRIVACY_EFFECTIVE_DATE, SUPPORT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — Ahmed Qadri',
  description:
    'Privacy policy for Ahmed Qadri’s mobile apps. The apps collect no personal data — everything stays on your device.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy — Ahmed Qadri',
    description: 'The apps collect no personal data. Everything stays on your device.',
    type: 'website',
    url: '/privacy',
  },
}

const APP_NOUN = APPS.length > 0 ? 'the apps listed below' : 'the apps'

export default function PrivacyPage() {
  return (
    <DocShell
      eyebrow="Mobile apps"
      hue="indigo"
      title="Privacy Policy"
      lede="The short version: these apps do not collect your personal data. There is no account, no tracking, and no server holding anything of yours."
      meta={`Effective ${PRIVACY_EFFECTIVE_DATE}`}
      actions={
        <Button
          variant="secondary"
          href="/support"
          iconLeft={<LifeBuoy size={16} strokeWidth={2} />}
        >
          Support
        </Button>
      }
    >
      <Card hue="indigo" padding="var(--space-6)" style={{ marginBottom: 'var(--space-8)' }}>
        <div
          className="aq-mono"
          style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-faint)', marginBottom: 12 }}
        >
          At a glance
        </div>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-base)',
            lineHeight: 1.55,
            color: 'var(--text-body)',
          }}
        >
          {[
            'No personal information is collected.',
            'No analytics, advertising, or tracking SDKs.',
            'No accounts, logins, or passwords.',
            'Your content stays on your device and is deleted with the app.',
          ].map((line) => (
            <li key={line} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
              <span
                aria-hidden
                style={{
                  flexShrink: 0,
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--indigo-500)',
                  boxShadow: '0 0 10px var(--indigo-500)',
                }}
              />
              {line}
            </li>
          ))}
        </ul>
      </Card>

      <div className="aq-doc">
        <h2>Scope</h2>
        <p>
          This policy explains how {APP_NOUN} published by Ahmed Qadri handle your information. It
          applies to every mobile app released under that name on the Apple App Store and Google
          Play, and it applies from the moment you install one.
        </p>
        {APPS.length > 0 && (
          <ul>
            {APPS.map((app) => (
              <li key={app.name}>
                <strong>{app.name}</strong> — {app.description}
              </li>
            ))}
          </ul>
        )}

        <h2>Information collected</h2>
        <p>
          <strong>None.</strong> The apps do not collect, transmit, sell, rent, or share personal
          information. That includes your name, email address, phone number, contacts, photos,
          precise or approximate location, advertising identifiers, and device identifiers. There is
          no sign-up, so there is no account to be linked to you.
        </p>

        <h2>Data stored on your device</h2>
        <p>
          Some apps save content and preferences so they work the way you left them — notes,
          settings, saved items, and similar. This data is written to your device&rsquo;s local
          storage and stays there. It is never uploaded to a server, because there is no server.
        </p>
        <p>
          If your device is configured to back up app data through iCloud or Google Backup, a copy
          may be included in that backup. Those backups are controlled by Apple and Google under
          your device settings and your account with them, not by these apps.
        </p>

        <h2>Third-party services</h2>
        <p>
          The apps do not embed analytics platforms, advertising networks, crash-reporting SDKs,
          social media SDKs, or any other third-party trackers. No data about you is passed to
          another company.
        </p>

        <h2>The app stores</h2>
        <p>
          Apple and Google collect their own information when you download, purchase, or update an
          app — download counts, purchase records, and, if you have opted into sharing diagnostics
          at the operating-system level, aggregated crash and performance data. That collection is
          governed by{' '}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple&rsquo;s privacy policy
          </a>{' '}
          and{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&rsquo;s privacy policy
          </a>
          . Any such reports are anonymous and aggregated, and can be turned off in your device
          settings.
        </p>

        <h2>Permissions</h2>
        <p>
          If an app asks for a system permission — the camera or photo library, for example — it is
          only to deliver the feature you just tapped, and the result is handled on your device. You
          can decline or revoke any permission in your device settings at any time. Nothing captured
          through a permission is sent anywhere.
        </p>

        <h2>Children&rsquo;s privacy</h2>
        <p>
          The apps do not knowingly collect information from anyone, including children under 13.
          Because no personal information is collected from any user, there is nothing to disclose,
          delete, or restrict under COPPA or similar regulations.
        </p>

        <h2>Security</h2>
        <p>
          The strongest protection here is structural: data that is never transmitted cannot be
          intercepted, and data that is never stored on a server cannot be exposed in a breach.
          On-device data is protected by the security features of your operating system, including
          device encryption and your passcode or biometric lock.
        </p>

        <h2>Your rights</h2>
        <p>
          Privacy laws such as the GDPR and CCPA give you the right to access, correct, export, or
          delete the personal data a company holds about you. No personal data about you is held, so
          there is nothing to retrieve or erase on request. Deleting the app removes everything
          associated with it from your device.
        </p>
        <p>Personal information is never sold or shared for advertising purposes.</p>

        <h2>Changes to this policy</h2>
        <p>
          If an app ever starts handling data differently, this page will be updated before that
          change ships, and the effective date at the top will change with it. Continued use of an
          app after an update means you accept the revised policy.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can go to{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, or through the{' '}
          <a href="/support">support page</a>.
        </p>
      </div>
    </DocShell>
  )
}
