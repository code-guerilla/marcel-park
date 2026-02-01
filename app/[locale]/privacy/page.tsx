import { useTranslations } from "next-intl"
import BlurFade from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"

const BLUR_FADE_DELAY = 0.04

export default function PrivacyPage() {
  const t = useTranslations("privacyPage")

  return (
    <main className='flex min-h-dvh flex-col space-y-10'>
      <section id='privacy'>
        <div className='mx-auto w-full max-w-3xl space-y-8'>
          <div className='flex flex-col space-y-1.5'>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className='font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none'>
                {t("title")}
              </h1>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className='prose dark:prose-invert max-w-full text-pretty font-sans text-muted-foreground text-sm'>
              {/* Section 1 */}
              <h2>{t("section1.title")}</h2>
              <h3>{t("section1.general.title")}</h3>
              <p>{t("section1.general.text")}</p>
              <h3>{t("section1.security.title")}</h3>
              <p>{t("section1.security.text")}</p>

              <hr className='my-8' />

              {/* Section 2 */}
              <h2>{t("section2.title")}</h2>
              <p>{t("section2.intro")}</p>
              <p>
                <strong>{t("section2.provider.name")}</strong>
                <br />
                {t("section2.provider.address")}
              </p>

              <h3>{t("section2.processing.title")}</h3>
              <p>{t("section2.processing.text")}</p>

              <h3>{t("section2.legalBasis.title")}</h3>
              <p>{t("section2.legalBasis.text")}</p>

              <h3>{t("section2.usaTransfer.title")}</h3>
              <p>{t("section2.usaTransfer.text")}</p>

              <h3>{t("section2.dataProcessingAgreement.title")}</h3>
              <p>{t("section2.dataProcessingAgreement.text")}</p>

              <hr className='my-8' />

              {/* Section 3 */}
              <h2>{t("section3.title")}</h2>
              <h3>{t("section3.responsible.title")}</h3>
              <p>
                {t("section3.responsible.name")}
                <br />
                {t("section3.responsible.person")}
                <br />
                {t("section3.responsible.address")}
                <br />
                {t("section3.responsible.emailLabel")}: {DATA.contact.email}
              </p>

              <h3>{t("section3.contact.title")}</h3>
              <p>{t("section3.contact.text")}</p>

              <h3>{t("section3.rights.title")}</h3>
              <p>{t("section3.rights.intro")}:</p>
              <ul>
                {Object.keys(t.raw("section3.rights.list")).map((key) => (
                  <li key={key}>
                    {t.rich(`section3.rights.list.${key}`, {
                      bold: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </li>
                ))}
              </ul>

              <h3>{t("section3.objection.title")}</h3>
              <p>{t("section3.objection.text")}</p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
