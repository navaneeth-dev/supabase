import Link from 'next/link'
import { useRouter } from 'next/router'
import Telemetry, { TelemetryEvent } from '~/lib/telemetry'
import { useTelemetryProps } from 'common/hooks/useTelemetryProps'
import gaEvents from '~/lib/gaEvents'
import { Button, IconBookOpen } from 'ui'
import SectionContainer from '~/components/Layouts/SectionContainer'
import HeroBackground from './HeroBackground'
import FrontendFrameworks from './FrontendFrameworks'

const Hero = () => {
  const router = useRouter()
  const telemetryProps = useTelemetryProps()

  const sendTelemetryEvent = async (event: TelemetryEvent) => {
    await Telemetry.sendEvent(event, telemetryProps, router)
  }

  return (
    <div className="relative">
      <SectionContainer className="py-12 md:py-16 lg:py-20">
        <div className="relative">
          <div className="mx-auto">
            <div className="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center">
              <div className="lg:h-[50vh] lg:min-h-[300px] lg:max-h-[450px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8">
                <div>
                  <h1
                    className="
                        text-scale-1200
                        text-3xl sm:text-5xl sm:leading-none lg:text-6xl
                        xl:text-7xl
                        "
                  >
                    <span className="block">Build in a weekend</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3ECF8E] via-[#3ECF8E] to-[#3E9BCF] block md:ml-0">
                      Scale to millions
                    </span>
                  </h1>
                  <p className="pt-2 text-scale-1200 !mb-0 mt-1.5 text-sm sm:mt-5 sm:text-base lg:text-lg">
                    Supabase is an open source Firebase alternative for building secure and
                    performant Postgres backends with minimal configuration.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link href="https://app.supabase.com" as="https://app.supabase.com" passHref>
                    <a onClick={() => sendTelemetryEvent(gaEvents['www_hp_hero_startProject'])}>
                      <Button size="small" className="text-white">
                        Start your project
                      </Button>
                    </a>
                  </Link>
                  <Link href="/docs" as="/docs" passHref>
                    <a onClick={() => sendTelemetryEvent(gaEvents['www_hp_hero_documentation'])}>
                      <Button size="small" type="default" icon={<IconBookOpen />}>
                        Documentation
                      </Button>
                    </a>
                  </Link>
                </div>
                <FrontendFrameworks className="mt-4 lg:mt-6" />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <HeroBackground />
    </div>
  )
}

export default Hero
