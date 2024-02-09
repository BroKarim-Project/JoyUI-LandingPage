import React from 'react';
import SectionContainer from '../SectionContainer';
import CodeHighlight from './CodeHighlight.tsx';
// import CodeHighlight from './CodeHighlight.tsx';

const Hero = () => {
  const codeString = `
  export default function MailPage() {
    const layout = cookies().get("react-resizable-panels:layout")
    const collapsed = cookies().get("react-resizable-panels:collapsed")

    const defaultLayout = layout ? JSON.parse(layout.value) : undefined
    const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined
    return (
      <>
        <div className="md:hidden">
          <Image src="/examples/mail-light.png" width={1280} height={727} alt="Mail" className="block dark:hidden" />
          <Image src="/examples/mail-dark.png" width={1280} height={727} alt="Mail" className="hidden dark:block" />
        </div>
        <div className="hidden flex-col md:flex">
          <Mail accounts={accounts} mails={mails} defaultLayout={defaultLayout} defaultCollapsed={defaultCollapsed} />          
        </div>
      </>
    )
  }
      `;
  return (
    <SectionContainer className="pb-5 pt-24 lg:py-24 py-16 bg-[#f8fce3]">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        <div className="z-10 space-y-12 flex flex-col justify-center lg:col-span-6">
          {/* Hero title and subtitle */}

          <h1
            className={`
                text-4xl font-extrabold text-neutral-700
                lg:text-5xl lg:leading-tight
              `}
          >
            Free, fast and modern <span className="underline decoration-yellow-500"> UI library</span>.
          </h1>

          <p className="mt-4 text-xl text-neutral-500 sm:mt-5 lg:text-xl">JoyUI is a collection of free Tailwind CSS components that can be used in your next project.</p>
        </div>

        {/* code highlight */}
        <div className="mt-16 lg:col-span-6 lg:mt-0">
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-full rounded-b-md text-sm shadow-2xl">
              
              <CodeHighlight source={codeString} />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
