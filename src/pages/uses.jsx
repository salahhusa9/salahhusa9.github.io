import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Salah eddine Bendyab</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Dell latitude 5410">
              I’ve been using Dell laptops for a long time and I’ve never had a
              bad experience. I like the Latitude line because they’re not
              flashy and they’re easy to repair.
            </Tool>
            <Tool title="Samsung Galaxy A52">
              I’m not a huge phone person but I like this one. It’s got a great
              camera and it’s not too expensive.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="vscode">
              I’ve tried to switch to other editors but I always come back to
              VSCode. It’s just too good.
            </Tool>
            <Tool title="XAMPP">
              I use XAMPP to run my local development environment. I’ve tried
              Docker but I always end up going back to XAMPP.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Browser Note">
              I use Browser Note to save links to things I want to read later.
              It’s a great way to keep my browser bookmarks clean and organized.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
