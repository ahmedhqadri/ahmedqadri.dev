import type { Metadata } from 'next'
import { Mail, ShieldCheck } from 'lucide-react'
import DocShell from '../components/doc-shell'
import { Button } from '../components/ds/button'
import { Card } from '../components/ds/card'
import { APPS, SUPPORT_EMAIL, SUPPORT_RESPONSE_WINDOW } from '@/lib/site'

export const metadata: Metadata = {
  title: 'App Support — Ahmed Qadri',
  description: `Support for Ahmed Qadri's mobile apps. Report a bug, request a feature, or get help by emailing ${SUPPORT_EMAIL}.`,
  alternates: { canonical: '/support' },
  openGraph: {
    title: 'App Support — Ahmed Qadri',
    description: 'Get help with the apps: report a bug, request a feature, or ask a question.',
    type: 'website',
    url: '/support',
  },
}

export default function SupportPage() {
  return (
    <DocShell
      eyebrow="Mobile apps"
      hue="aqua"
      title="Support"
      lede="Something broken, confusing, or missing? Write in and you’ll get a reply from a real person."
      meta={`Typical reply within ${SUPPORT_RESPONSE_WINDOW}`}
      actions={
        <>
          <Button
            variant="primary"
            href={`mailto:${SUPPORT_EMAIL}`}
            iconLeft={<Mail size={16} strokeWidth={2} />}
          >
            Email support
          </Button>
          <Button
            variant="secondary"
            href="/privacy"
            iconLeft={<ShieldCheck size={16} strokeWidth={2} />}
          >
            Privacy policy
          </Button>
        </>
      }
    >
      <Card hue="aqua" padding="var(--space-6)" style={{ marginBottom: 'var(--space-8)' }}>
        <div
          className="aq-mono"
          style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-faint)', marginBottom: 10 }}
        >
          Contact
        </div>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xl)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: 'var(--aqua-400)',
            wordBreak: 'break-word',
          }}
        >
          {SUPPORT_EMAIL}
        </a>
        <p
          style={{
            margin: '14px 0 0',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            lineHeight: 1.6,
            color: 'var(--text-muted)',
          }}
        >
          Email is the only support channel, and it is monitored. Most messages get a reply within{' '}
          {SUPPORT_RESPONSE_WINDOW}.
        </p>
      </Card>

      <div className="aq-doc">
        {APPS.length > 0 && (
          <>
            <h2>Apps covered</h2>
            <ul>
              {APPS.map((app) => (
                <li key={app.name}>
                  <strong>{app.name}</strong> — {app.description}
                  {app.storeUrl && (
                    <>
                      {' '}
                      <a href={app.storeUrl} target="_blank" rel="noopener noreferrer">
                        View in store
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        <h2>What to include</h2>
        <p>
          The more of this you can give, the faster a fix lands. None of it is required — a plain
          description of what went wrong is always better than no message at all.
        </p>
        <ul>
          <li>The name of the app and its version number, from the app&rsquo;s settings screen.</li>
          <li>Your device and OS version, for example &ldquo;iPhone 15, iOS 18.4&rdquo;.</li>
          <li>What you expected to happen, and what happened instead.</li>
          <li>The steps that trigger it, if you can reproduce it.</li>
          <li>A screenshot or screen recording.</li>
        </ul>

        <h2>Frequently asked</h2>

        <h3>How do I report a bug?</h3>
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with the details above.
          Every report is read, and reproducible bugs are prioritised for the next release.
        </p>

        <h3>Can I request a feature?</h3>
        <p>
          Yes, and it genuinely helps. These are small, focused apps, so not every request will make
          it in, but the requests that come up repeatedly shape what gets built next.
        </p>

        <h3>Do the apps collect my data?</h3>
        <p>
          No. The apps do not collect, transmit, or sell personal information. Anything you create
          stays on your device. The <a href="/privacy">privacy policy</a> covers this in full.
        </p>

        <h3>How do I delete my data?</h3>
        <p>
          Delete the app. Because everything is stored locally on your device, uninstalling removes
          all of it. There is no account to close and no server-side copy to request.
        </p>

        <h3>The app crashes or won&rsquo;t open</h3>
        <p>
          Force-quit and reopen it first, then confirm both the app and your operating system are up
          to date. If it persists, reinstalling clears any corrupted local state — but note this
          also erases on-device data, since none of it is backed up to a server. Email support before
          reinstalling if that data matters to you.
        </p>

        <h3>Purchases and refunds</h3>
        <p>
          Payments are handled entirely by the App Store and Google Play, so refunds have to go
          through them. Use{' '}
          <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
            reportaproblem.apple.com
          </a>{' '}
          for Apple, or{' '}
          <a
            href="https://support.google.com/googleplay/answer/2479637"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play refunds
          </a>{' '}
          for Android.
        </p>

        <h3>I have a privacy or security concern</h3>
        <p>
          Send it to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and mark it urgent in
          the subject line. Security reports jump the queue.
        </p>
      </div>
    </DocShell>
  )
}
