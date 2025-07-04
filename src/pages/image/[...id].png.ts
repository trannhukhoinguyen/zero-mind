import satori from 'satori'
import { html } from 'satori-html'
import { Resvg } from '@resvg/resvg-js'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import fs from 'fs'
import path from 'path'

const MontserratRegular = fs.readFileSync(
  path.resolve('./public/fonts/_montserrat_regular.ttf'),
)
const MontserratBold = fs.readFileSync(
  path.resolve('./public/fonts/_montserrat_bold.ttf'),
)

const dimensions = {
  width: 1200,
  height: 630,
}

const colors = {
  background: {
    from: '#2c2c2c',
    via: '#181818',
    to: '#000000',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b8b8b8',
    muted: '#7a7a7a',
  },
  accent: {
    primary: 'rgba(112, 112, 112, 0.5)',
    secondary: 'rgba(21, 21, 21, 0.8)',
    highlight: 'rgba(255, 255, 255, 0.05)',
  },
}

interface Props {
  title: string
  date: Date
  description: string
  tags: string[]
}

export async function GET(context: APIContext) {
  const { title, date, description, tags } = context.props as Props

  const formattedDate = date.toLocaleDateString('en-US', { dateStyle: 'full' })

  const tagElements = tags
    .map(
      (tag) =>
        `<div style="background: rgba(21, 21, 21, 0.5); color: #e0e0e0; font-size: 14px; font-weight: 500; padding: 6px 14px; border-radius: 18px; margin: 4px; display: flex; border: 1px solid rgba(255, 255, 255, 0.1);">#${tag}</div>`,
    )
    .join('')

  const markup = html(
    `<div
      style="display: flex; flex-direction: column; width: 100%; height: 100%; border-radius: 24px; overflow: hidden; color: white; border: 1px solid rgba(255, 255, 255, 0.12); position: relative;background: #171717;"
    >
      
      <div style="position: absolute;display: flex; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.01); opacity: 0.6;"></div>

      
      <div style="position: absolute; width: 350px; height: 350px;display: flex; background: radial-gradient(circle, rgba(250, 255, 100, 0.12) 0%, transparent 70%); top: -100px; right: -50px; border-radius: 50%;"></div>

      
      <div style="flex: 4; padding: 48px 50px; display: flex; flex-direction: column; justify-content: center; position: relative;">
        <div style="color: ${colors.text.secondary}; font-size: 16px; display: flex; font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase;">
          ${formattedDate}
        </div>

        <div
          style="font-size: 60px; display: flex; font-weight: 800; color: ${colors.text.primary}; line-height: 1.15; margin-top: 18px; letter-spacing: -0.01em; width: 95%;"
        >
          ${title}
        </div>

        <div style="width: 70px; height: 4px; display: flex; background: linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,0.2)); margin: 20px 0; border-radius: 2px;"></div>

        <div style="color: ${colors.text.secondary}; font-size: 20px;display: flex; margin-top: 16px; line-height: 1.6; width: 90%;">
          ${description}
        </div>

        <div style="display: flex; margin-top: 28px; flex-wrap: wrap;">
          ${tagElements}
        </div>
      </div>

      
      <div
        style="flex: 1; border-top: 1px solid rgba(255, 255, 255, 0.1); display: flex; padding: 32px 50px; align-items: center; justify-content: space-between; font-size: 20px; background: rgba(0,0,0,0.3); position: relative;"
      >
        <div style="display: flex; align-items: center;">
          <div style="width: 6px; height: 28px;display: flex; background: rgb(27,27,27); margin-right: 16px; border-radius: 3px;"></div>
          <span style="color: ${colors.text.secondary}; font-weight: 500; letter-spacing: 0.02em;">cojocarudavid.me</span>
        </div>

        <div style="display: flex; align-items: center; background: rgba(21,21,21, 0.8); border-radius: 18px; padding: 12px 22px; border: 1px solid rgba(255, 255, 255, 0.1);">
          // <svg
          //   viewBox="0 0 350 266"
          //   xmlns="http://www.w3.org/2000/svg"
          //   className={cn(
          //     "w-full h-auto text-neutral-900 dark:text-neutral-100 transition-colors duration-300",
          //     className
          //   )}
          //   role="img"
          //   aria-label="Logo"
          //     aria-hidden="true"
          //     name="logo"
          //     focusable="false"
          // >
          //   <path
          //     d="M0 0h216.667C290.305 0 350 59.546 350 133s-59.695 133-133.333 133L0 0zm231.629 231.641c48.131-7.203 85.038-48.623 85.038-98.641 0-55.09-44.772-99.75-100-99.75h-54.862C185.557 59.722 200 94.678 200 133c0 17.331-2.96 33.991-8.405 49.492l40.034 49.149zm-66.243-81.326c.844-5.646 1.281-11.428 1.281-17.315 0-42.333-22.66-79.386-56.541-99.75H70.032l95.354 117.065z"
          //     fill="currentColor"
          //     fillRule="evenodd"
          //     clipRule="evenodd"
          //   />
          // </svg>

          <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="584.91pt" height="347.75pt" viewBox="0 0 584.91 347.75" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <metadata>
              <rdf:RDF xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <cc:Work>
                  <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
                  <dc:date>2025-07-01</dc:date>
                  <dc:format>image/svg+xml</dc:format>
                  <dc:creator>
                    <cc:Agent>
                      <dc:title>Matplotlib v3.6.3</dc:title>
                    </cc:Agent>
                  </dc:creator>
                </cc:Work>
              </rdf:RDF>
            </metadata>
            <defs>
              <style type="text/css">
                *{stroke-linejoin: round; stroke-linecap: butt}
              </style>
            </defs>
            <g id="figure_1">
              <g id="patch_1">
                <!-- Path data here (contours) -->
              </g>
            </g>
          </svg>

          <div style="display: flex; flex-direction: column; margin-left: 18px; border-left: 1px solid rgba(255, 255, 255, 0.12); padding-left: 18px;">
            <span style="color: ${colors.text.primary}; font-weight: 600; font-size: 18px;">Tổ Sư Thiền</span>
            <span style="color: ${colors.text.muted}; font-size: 14px;">Patriarchal Zen</span>
          </div>
        </div>
      </div>
    </div>`,
  ) as unknown as React.ReactNode

  const svg = await satori(markup, {
    fonts: [
      {
        name: 'Montserrat',
        data: MontserratRegular,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'Montserrat',
        data: MontserratBold,
        weight: 700,
        style: 'normal',
      },
    ],
    height: dimensions.height,
    width: dimensions.width,
    debug: false,
  })

  const image = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: dimensions.width,
    },
    font: {
      fontFiles: [
        MontserratRegular.toString('base64'),
        MontserratBold.toString('base64'),
      ],
      loadSystemFonts: true,
      defaultFontFamily: 'Montserrat',
    },
    logLevel: 'error',
    background: 'transparent',
    imageRendering: 1,
    shapeRendering: 2,
    textRendering: 1,
    dpi: 144,
  }).render()

  const pngData = image.asPng()

  return new Response(pngData, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': 'inline; filename="social-card.png"',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Length': pngData.length.toString(),
/*      'Surrogate-Key': tags.map(tag => encodeURIComponent(tag)).join(','),
      'Query-String-Hash': encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-')),*/
      'Cache-Tag': 'social-image',
      'X-Content-Type-Options': 'nosniff',
      'Last-Modified': new Date().toUTCString(),
      Expires: new Date(Date.now() + 31536000000).toUTCString(),
      ETag: `"${pngData.length}-${Date.now()}"`,
      'Access-Control-Allow-Origin': '*',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    },
  })
}

export async function getStaticPaths() {
  const exercises = await getCollection('exercises')
  const doubts = await getCollection('doubts')
  const koans = await getCollection('koans')
  const posts = [
    ...exercises,
    ...doubts,
    ...koans,
  ]
  return posts.map((post) => ({
    params: {
      id: post.id,
    },
    props: {
      title: post.data.title,
      date: post.data.date,
      description: post.data.description,
      tags: post.data.tags,
    },
  }))
}
