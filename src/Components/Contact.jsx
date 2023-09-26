import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-64 md:py-12">
      <div className="md:p-[9.6rem] max-w-6xl">
        <div className=" flex flex-col gap-6 items-center">
          <div className="text-6xl md:text-8xl font-black text-brand-white">
            <span>Contact</span>
            <span className="text-neon-green ">.</span>
          </div>
          <div className="section-content text-center px-12">
            Shoot me an email if you want to connect! You can also find me on
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vraj-bhingradiya-286314246"
              className="text-neon-green"
            >
              {" "}
              Linkedin
            </a>{" "}
            or{" "}
            <a
              href="https://instagram.com/_definitely.not.vraj?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              target="_blank"
              className="text-neon-green"
            >
              {" "}
              Instagram
            </a>{" "}
            if that's more your speed.
          </div>
          <div className="font-normal flex gap-2 text-xl text-brand-white mb-6 hover:text-neon-green transition hover:ease-in-out">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
              </svg>
            </span>
            <a
              href="https://mail.google.com/mail/u/1/#search/haresh/FMfcgzGslbKpVFsbCglQdZLdQjRnvlKh?compose=CllgCJfqcBHmBwGKZnKvcHXVwJHDBNxVBLhNSHLwSsWrdlXfxkRNQWvxnLMgFjZWTFMGHCLQdPL"
              target="_blank"
            >
              lll.rg3.lll@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
