import React from "react"

interface Props {
  size?: number
}

const Logo = ({ size = 64 }: Props): JSX.Element => {
  return (
    <svg
      width={size}
      height={size + 2}
      viewBox="0 0 64 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.0083 0.000508212C37.3756 -0.0281548 42.3973 1.15503 47.0812 3.7001C49.9834 5.27708 52.5971 7.28014 54.9503 9.65995C57.9964 12.7408 60.4026 16.27 62.0114 20.3316C62.7957 22.3122 63.3668 24.392 63.9139 26.4609C64.3708 28.1879 62.949 29.886 61.0971 29.9934C59.1716 30.1049 57.6223 28.795 57.056 26.7302C54.5104 17.4506 48.7276 11.2979 39.9312 8.18006C36.5361 6.97673 32.9958 6.76601 29.4202 7.10558C21.2995 7.87664 15.0779 11.9548 10.42 18.7203C8.7453 21.1528 7.61969 23.8711 6.88964 26.7591C6.43574 28.5548 5.23202 29.7933 3.46098 29.9281C1.16594 30.1029 -0.340717 28.2 0.0663666 26.3447C1.32692 20.5973 3.76091 15.4827 7.6267 11.1171C11.2331 7.04464 15.4987 3.9684 20.5237 2.04307C24.2518 0.614568 28.1166 0.000508212 33.0083 0.000508212Z"
        fill="#3A3A3A"
      />
      <path
        d="M32.1622 33.1537C37.6569 33.1537 43.1513 33.1537 48.646 33.1537C49.649 33.1537 49.6295 33.1529 49.5712 34.1527C49.4 37.0925 48.5874 39.8323 47.1089 42.3447C44.561 46.6743 40.8654 49.4064 36.0988 50.623C34.3104 51.0793 32.4881 51.2631 30.6722 51.0623C26.9611 50.6516 23.6027 49.2901 20.7652 46.7306C17.2784 43.5855 15.2831 39.6343 14.8071 34.8777C14.7723 34.5296 14.7501 34.1795 14.7 33.8338C14.6184 33.2715 14.8627 33.1405 15.3777 33.1431C19.2479 33.1624 23.1182 33.1534 26.9884 33.1534C28.7129 33.1537 30.4377 33.1537 32.1622 33.1537Z"
        fill="black"
      />
      <path
        d="M35.4639 62.4798C35.4693 60.8365 36.723 59.151 38.2472 58.741C40.7526 58.0669 43.169 57.1677 45.4256 55.7969C47.1649 54.7402 48.9059 54.9923 50.0907 56.3508C51.4747 57.9374 51.2079 60.1309 49.5248 61.3442C46.4712 63.5453 43.1165 64.9889 39.5361 65.8884C37.3293 66.4428 35.4562 64.8776 35.4639 62.4798Z"
        fill="#3A3A3A"
      />
      <path
        d="M16.7208 55.1431C17.3112 55.3222 17.9673 55.3851 18.4807 55.7006C20.8222 57.1403 23.3503 58.0493 25.953 58.7929C28.4144 59.4958 29.5799 62.4351 28.269 64.5337C27.4953 65.7722 26.381 66.2237 24.9981 65.8979C21.3041 65.0273 17.856 63.5442 14.6297 61.4708C12.5788 60.1529 12.463 57.4438 14.4349 55.9921C15.1354 55.4765 15.8231 55.2507 16.7208 55.1431Z"
        fill="#3A3A3A"
      />
      <path
        d="M7.10097 52.5698C5.86287 52.6026 5.05815 52.0804 4.45611 51.1551C2.28168 47.8136 0.974519 44.0994 0.0562029 40.2223C-0.291106 38.7562 1.02056 37.0088 2.63049 36.6494C4.65079 36.1982 6.34755 37.7841 6.85099 39.3096C7.41775 41.0272 7.98626 42.7464 8.63358 44.4323C8.9406 45.2316 9.43154 45.956 9.84115 46.7132C10.4367 47.8133 10.779 48.946 10.3061 50.2001C9.75007 51.6747 8.49846 52.5673 7.10097 52.5698Z"
        fill="#3A3A3A"
      />
      <path
        d="M53.4717 48.9226C53.7332 48.2219 53.9006 47.4615 54.2729 46.8312C55.5652 44.6431 56.4608 42.2961 57.0692 39.8246C57.5718 37.7837 59.1491 36.4743 61.0332 36.5769C62.9546 36.6815 64.3516 38.5232 63.9217 40.4546C63.0918 44.1837 61.7806 47.712 59.7251 50.9186C58.8268 52.32 57.5581 52.8585 56.1418 52.4251C54.6305 51.9623 53.6126 50.5749 53.4717 48.9226Z"
        fill="#3A3A3A"
      />
    </svg>
  )
}

export default Logo
