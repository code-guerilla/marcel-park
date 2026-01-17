import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { getBlogPosts, getPost } from "@/data/blog"
import { DATA } from "@/data/resume"
import { formatDate } from "@/lib/utils"

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(props: {
  params: Promise<{
    slug: string
  }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const post = await getPost(params.slug)

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const params = await props.params
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section id='blog'>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
        suppressHydrationWarning
        type='application/ld+json'
      />
      <h1 className='title max-w-[650px] font-medium text-2xl tracking-tighter'>
        {post.metadata.title}
      </h1>
      <div className='mt-2 mb-8 flex max-w-[650px] items-center justify-between text-sm'>
        <Suspense fallback={<p className='h-5' />}>
          <p className='text-neutral-600 text-sm dark:text-neutral-400'>
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article
        className='prose dark:prose-invert'
        dangerouslySetInnerHTML={{ __html: post.source }}
      />
    </section>
  )
}
