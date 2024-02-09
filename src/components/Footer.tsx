import React from 'react';

export default function Footer() {
  return (
    <footer className="md:px-20 px-6 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <div>
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              Karim
            </a>
            . The source code is available on{' '}
            <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              GitHub
            </a>
            .
          </p>
        </div>
        <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA" target="_blank" rel="noreferrer" className="font-medium no-underline hover:underline underline-offset-4">
          Illustration by Icons 8 from <a href="https://icons8.com/illustrations">Ouch!</a>
        </a>
      </div>
    </footer>
  );
}
