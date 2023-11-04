import React from "react";
function Footer() {
  const LinkbackToNormal = () => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  };
  const footerLinks = (element) => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item, index) => {
      index === element ? (item.style.opacity = 1) : (item.style.opacity = 0.2);
    });
  };

  return (
    <>
      <footer>
        <h1>
          Let's <br /> #ConnectOnCutting?
        </h1>
        <aside onMouseLeave={() => LinkbackToNormal()}>
          <a
            href="/"
            className="footerLinks"
            onMouseOver={() => footerLinks(0)
            }
            data-cursorpointermini={true}
          >
            Home
          </a>
          <a
            href="/story"
            className="footerLinks"
            onMouseOver={() => footerLinks(1)}
            data-cursorpointermini={true}

          >
            Story
          </a>
          <a
            href="/media"
            className="footerLinks"
            onMouseOver={() => footerLinks(2)}
            data-cursorpointermini={true}

          >
            Media
          </a>
          <a
            href="/franchise"
            className="footerLinks"
            onMouseOver={() => footerLinks(3)}
            data-cursorpointermini={true}

          >
            Franchise
          </a>
          <a
            href="/event"
            className="footerLinks"
            onMouseOver={() => footerLinks(4)}
            data-cursorpointermini={true}

          >
            Event
          </a>
          <a
            href="/chaiwalacares"
            className="footerLinks"
            onMouseOver={() => footerLinks(5)}
            data-cursorpointermini={true}

          >
            Chai Wala Cares
          </a>
        </aside>
        <div>
          <h5>Email</h5>
          <a href="mailto: info@mbachaiwala.com" data-cursorpointermini={true}>info@mbachaiwala.com</a>

          <a href="mailto: franchise@mbachaiwala.com" data-cursorpointermini={true}>
            franchise@mbachaiwala.com
          </a>
        </div>
        <div>
          <h5 data-cursorpointermini={true}>Phone</h5>
          <a href="tel: +91722905222" data-cursorpointermini={true}>+91722905222</a>
        </div>
        <p>© COPYRIGHT 2023 MBA CHAIWALA, MADE BY</p>
      </footer>
      <div className="footer"></div>
    </>
  );
}

export default Footer;
