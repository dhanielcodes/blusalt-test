import React from "react";

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="25"
      height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6437 18.7992L1.56369 8.48666C0.0355172 7.44166 0.554996 5.26581 2.46059 4.75414L18.4879 0.441643C18.8274 0.320193 19.1912 0.280768 19.5492 0.326643C19.9072 0.372518 20.2489 0.502368 20.5462 0.705418C20.8433 0.908468 21.0874 1.17886 21.2581 1.49415C21.4287 1.80944 21.5211 2.16054 21.5275 2.51831L20.5776 17.1425C20.465 18.8783 18.1719 19.8442 16.6437 18.7992Z"
        fill="#E9327C"
      />
      <path
        d="M11.8609 21.345L2.9768 4.12088C2.77371 3.72684 2.68435 3.28485 2.71855 2.84366C2.75276 2.40247 2.9092 1.97921 3.17063 1.62057C3.43207 1.26193 3.78833 0.981827 4.20014 0.81116C4.61195 0.640493 5.0633 0.585893 5.50442 0.653385L21.9689 3.17254C22.3479 3.23055 22.7077 3.37693 23.0186 3.59963C23.3294 3.82235 23.5825 4.11504 23.7571 4.45363C23.9316 4.79222 24.0227 5.16704 24.0226 5.54729C24.0225 5.92754 23.9314 6.30234 23.7568 6.64088L16.1722 21.3458C15.9686 21.7388 15.6596 22.0684 15.2792 22.2985C14.8988 22.5287 14.4619 22.6503 14.0163 22.6503C13.5707 22.6502 13.1338 22.5283 12.7535 22.2981C12.3732 22.0678 12.0644 21.738 11.8609 21.345Z"
        fill="#1DACE3"
      />
      <path
        d="M21.4872 3.09833L13.2798 1.8425L3.20288 4.555L7.22505 12.3558L16.6438 18.7992C16.8515 18.9397 17.0801 19.0474 17.3213 19.1183L20.8988 12.1825L21.4872 3.09833Z"
        fill="#001A49"
      />
    </svg>
  );
}

export default Logo;
