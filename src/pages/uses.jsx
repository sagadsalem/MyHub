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
        <title>Uses - Sajad Salem</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend"
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend"
        intro="Things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro, M1, 16GB RAM (2020)">
              I was using an Intel-based 13 MacBook Pro prior to this and the
              difference is night and day. I've never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I'm going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              I don't care if it's missing all of the fancy IDE features
              everyone else relies on, VS Code Text is still the best text
              editor ever made.
            </Tool>
            <Tool title="iTerm">
              I'm honestly not even sure what features I get with this that
              aren't just part of the macOS Terminal but it's what I use.
            </Tool>
            <Tool title="Sequel Ace">
              Great software for working with databases. I've tried a bunch of a different ones and this is the one I keep coming back to.
            </Tool>
            <Tool title="Insomnia">
              it's a great tool for testing APIs. I use it for testing our own APIs and for testing third-party APIs we integrate with.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It's not the newest kid on the block but it's still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Arc">
              a browser that's built for work. It's like a stripped down version of Chrome that's optimized for getting things done.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
