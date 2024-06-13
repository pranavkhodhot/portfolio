import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Experience = () => {
  return (
    <section className="bg-light text-dark py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Container className="py-12 sm:py-20 lg:max-w-1000px xl:max-w-1200px mx-auto relative z-0">
        <h2 className="py-10 text-3xl font-medium sm:py-12 md:py-28 md:text-5xl text-primary" style={{ opacity: 1, transform: 'none' }}>
          Experiences
        </h2>
        <div className="grid mx-6 sm:mx-8">
          <div className="relative flex group">
            <div className="relative flex items-start d-md-none">
              <div className="absolute z-10 w-2 h-2 bg-primary rounded-circle" style={{ left: '-3px', top: '48px' }}></div>
              <div className="d-flex flex-column items-start flex-1 min-w-0 gap-2 my-10 ml-6 sm:gap-8 sm:ml-8 sm:flex-row">
                <div className="d-flex items-center flex-none gap-1 md:text-base text-lg text-primary">
                  <span>Apr 2024</span>
                  <span>-</span>
                  <span>Present</span>
                </div>
                <div className="w-full d-flex flex-column space-y-1 cursor-default md:px-4 md:py-4 lg:p-6 lg:space-y-2 transition rounded-lg" style={{ alignItems: 'flex-start' }}>
                  <h3 className="text-lg font-semibold sm:text-2xl" style={{ textAlign: 'left' }}>VioletApp</h3>
                  <div className="d-flex items-baseline justify-between" style={{ textAlign: 'left' }}>
                    <span className="text-base italic">Software Engineer</span>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p className="text-xs sm:leading-6 md:text-sm text-muted md:leading-6"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2 bg-primary position-absolute d-md-block" style={{ left: '50%', height: '100%' }}></div>
            <div className="relative hidden w-full py-8 d-md-flex">
              <div className="d-flex items-start justify-end flex-1 pt-5">
                <div className="d-flex items-center flex-none gap-1 md:text-base text-lg text-primary transition group-hover:font-semibold">
                  <span>Apr 2024</span>
                  <span>-</span>
                  <span>Present</span>
                </div>
                <div className="flex-none w-6 lg:w-8"></div>
              </div>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 transition group-hover:scale-115 bg-primary group-hover:bg-light rounded-circle position-absolute" style={{ left: 'calc(50% - 1px)', top: '56px' }}></div>
              <div className="d-flex items-start flex-1 lg:translate-y-2">
                <div className="flex-none w-3 lg:w-4"></div>
                <div className="w-full d-flex flex-column space-y-1 cursor-default md:px-4 md:py-4 lg:p-6 lg:space-y-2 transition rounded-lg" style={{ alignItems: 'flex-start' }}>
                  <h3 className="text-lg font-semibold sm:text-2xl" style={{ textAlign: 'left' }}>VioletApp</h3>
                  <div className="d-flex items-baseline justify-between" style={{ textAlign: 'left' }}>
                    <span className="text-base italic">Software Engineer</span>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p className="text-xs sm:leading-6 md:text-sm text-muted md:leading-6"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Repeat similar blocks for other experiences */}

        </div>
      </Container>
    </section>
  );
}

export default Experience;
