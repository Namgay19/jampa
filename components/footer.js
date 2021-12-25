const Footer = () => {
  return (
    <footer className="bg-gray-300 w-full pb-1">
      <div className="px-28 pt-10">
        <div className="flex justify-evenly mb-10 gap-10">
          <div className="flex-grow w-1/3">
            <h1 className="text-4xl tracking-wide font-extrabold leading-5">
              <span className="text-logFirst">Jam</span>
              <span className="text-logSecond">pa</span>
            </h1>
            <p className="opacity-50 mt-4">
              A non profit crowdfunding platform to allow financially challenged
              people to campaign for donations for medical needs.
            </p>
          </div>

          <div className="flex-grow">
            <h1 className="text-2xl font-semibold mb-4">Developer Contact</h1>
            <div className="flex gap-2 opacity-80 mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 39 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.583 2.48312L29.6612 0.47839C28.8004 0.26121 27.9168 0.75404 27.5664 1.63946L23.9102 10.9949C23.5903 11.8135 23.8035 12.7741 24.4358 13.3337L29.0518 17.4768C26.3096 23.8836 21.5184 29.2129 15.5541 32.2785L11.776 27.2165C11.258 26.5232 10.3897 26.2893 9.64318 26.6401L1.11193 30.6496C0.296887 31.0422 -0.152527 32.0112 0.04552 32.955L1.87365 41.6422C2.06408 42.5443 2.79533 43.1959 3.65607 43.1959C23.1637 43.1959 38.9998 25.8633 38.9998 4.43774C38.9998 3.50219 38.4133 2.69195 37.583 2.48312Z"
                  fill="black"
                />
              </svg>
              +97517617564
            </div>

            <div className="flex gap-2 opacity-80 mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 52 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.4287 0.083374H5.57144C2.49438 0.083374 0 2.64785 0 5.81139V47.8168C0 50.9803 2.49438 53.5448 5.57144 53.5448H46.4287C49.5057 53.5448 52.0001 50.9803 52.0001 47.8168V5.81139C52.0001 2.64785 49.5057 0.083374 46.4287 0.083374ZM20.6743 27.5425C10.148 19.6883 10.2553 19.6685 7.42859 17.4067V14.4034C7.42859 12.8216 8.67578 11.5394 10.2143 11.5394H41.7858C43.3243 11.5394 44.5715 12.8216 44.5715 14.4034V17.4067C41.7427 19.6703 41.8515 19.6888 31.3258 27.5426C30.107 28.4561 27.6821 30.6596 26.0001 30.6326C24.3167 30.6587 21.895 28.4576 20.6743 27.5425ZM44.5715 22.2526V39.2248C44.5715 40.8065 43.3243 42.0888 41.7858 42.0888H10.2143C8.67578 42.0888 7.42859 40.8065 7.42859 39.2248V22.2526C9.04872 23.5407 11.2971 25.2641 18.4906 30.6315C20.1344 31.8655 22.8984 34.4674 25.9997 34.4513C29.1205 34.4673 31.9237 31.8211 33.5119 30.6297C40.7034 25.2638 42.9514 23.5405 44.5715 22.2526Z"
                  fill="black"
                />
              </svg>
              namgayt8@gmail.com
            </div>
          </div>

          <div className="flex-grow">
            <h1 className="text-2xl font-semibold mb-4">
              Credits
            </h1>
            <ul className="list-disc opacity-80 ml-4">
              <li>Illustration Image by <a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5691153">mohamed Hassan</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5691153">Pixabay</a></li>
              <li>Illustration Image by <a href="https://undraw.co/illustrations">Undraw</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="opacity-50">© 2022 Namgay Tenzin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
