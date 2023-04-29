

import { Link } from 'react-router-dom'
import './Footer.scss'
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">

        <Link to='/' className="footer__logo">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="3171.4285714285716"
            height="1926.0971948193921" viewBox="0 0 3171.4285714285716 1926.0971948193921">
            <rect fill="#303841" width="3171.4285714285716" height="1926.0971948193921" />
            <g transform="scale(8.571428571428571) translate(10, 10)">
              <defs id="SvgjsDefs1044"><linearGradient id="SvgjsLinearGradient1051"><stop id="SvgjsStop1052" stopColor="#8f5e25" offset="0"></stop><stop id="SvgjsStop1053" stopColor="#fbf4a1" offset="0.5"></stop><stop id="SvgjsStop1054" stopColor="#8f5e25" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient1055"><stop id="SvgjsStop1056" stopColor="#8f5e25" offset="0"></stop><stop id="SvgjsStop1057" stopColor="#fbf4a1" offset="0.5"></stop><stop id="SvgjsStop1058" stopColor="#8f5e25" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient1059"><stop id="SvgjsStop1060" stopColor="#8f5e25" offset="0"></stop><stop id="SvgjsStop1061" stopColor="#fbf4a1" offset="0.5"></stop><stop id="SvgjsStop1062" stopColor="#8f5e25" offset="1"></stop></linearGradient></defs><g id="SvgjsG1045" transform="matrix(1.387977996056423,0,0,1.387977996056423,106.15096935295014,-6.801091651204886)" fill="url(#SvgjsLinearGradient1051)"><g xmlns="http://www.w3.org/2000/svg"><path d="M59.8,17.3c0.6-2.5,0.2-5.5-1.2-7.9c-1.8-2.9-4.8-4.5-8.5-4.5c-3.7,0-6.7,1.6-8.5,4.5c-1.5,2.4-1.9,5.4-1.2,7.9   c-17,4.4-29.7,19.8-29.7,38.2C10.5,77.3,28.2,95,50,95c21.8,0,39.5-17.7,39.5-39.5C89.5,37.1,76.8,21.7,59.8,17.3z M44.7,11.4   c0.8-1.2,2.3-2.7,5.3-2.7c3,0,4.6,1.5,5.3,2.7c1,1.7,1.3,3.7,0.9,5.2c-0.8-0.1-1.2-0.3-2.2-0.3v0c0-1-1.1-2.2-2.1-2.2h-3.8   c-1,0-2.1,1.2-2.1,2.2v0c-1,0.1-1.4,0.2-2.2,0.3C43.4,15.1,43.6,13.1,44.7,11.4z M50,91.2c-19.7,0-35.7-16-35.7-35.7   c0-19,14.8-34.4,33.5-35.6c0.1,0,0.2,0.1,0.3,0.1h3.8c0.1,0,0.2-0.1,0.3-0.1c18.7,1.2,33.5,16.7,33.5,35.6   C85.7,75.2,69.7,91.2,50,91.2z"></path><path d="M50,22.6c-18.2,0-32.9,14.8-32.9,32.9c0,18.2,14.8,32.9,32.9,32.9c18.2,0,32.9-14.8,32.9-32.9C82.9,37.3,68.2,22.6,50,22.6   z M50,84.7c-16.1,0-29.2-13.1-29.2-29.2c0-16.1,13.1-29.2,29.2-29.2s29.2,13.1,29.2,29.2C79.2,71.6,66.1,84.7,50,84.7z"></path><path d="M69.9,35.7c-0.7-0.7-1.7-0.7-2.5-0.2l-21.2,16c-0.1,0.1-0.3,0.2-0.4,0.4l-16,21.2c-0.6,0.7-0.5,1.8,0.2,2.5   c0.4,0.4,0.8,0.6,1.3,0.6c0.4,0,0.8-0.1,1.1-0.4l21.2-16c0.1-0.1,0.3-0.2,0.4-0.4l16-21.2C70.7,37.5,70.6,36.4,69.9,35.7z    M51.2,56.9l-10.1,7.7l7.7-10.1l10.1-7.7L51.2,56.9z"></path><circle cx="50" cy="33.1" r="3.8"></circle><circle cx="27.4" cy="55.7" r="3.8"></circle><circle cx="50" cy="78.2" r="3.8"></circle><circle cx="72.6" cy="55.7" r="3.8"></circle></g></g><g id="SvgjsG1046" transform="matrix(1.11295339643511,0,0,1.11295339643511,-2.287941089104395,129.47162880061921)" fill="url(#SvgjsLinearGradient1055)"><path d="M18.772 30.5364 c0 0.31039 -0.14809 0.42248 -0.51488 0.42248 l-12.843 0 c0 4.5504 1.8552 8.378 6.2512 8.378 c3.5364 0 5.4576 -2.5888 6.1472 -4.4948 c0.081212 -0.21121 0.19442 -0.26762 0.31562 -0.26762 c0.22641 0 0.3148 0.16961 0.2832 0.36281 c-0.31719 1.2304 -2.2412 5.32 -7.19 5.32 c-4.894 0 -9.1656 -2.8884 -9.1656 -9.3296 c0 -5.8964 3.5808 -9.2728 8.5836 -9.2728 c4.7684 0 8.1324 3.1008 8.1324 8.8816 z M5.4224 30.3684 l10.096 -0.00035156 c-0.033203 -5.4964 -1.9792 -8.084 -4.8812 -8.084 c-2.914 0 -5.0704 2.8156 -5.2144 8.0844 z M41.269000000000005 39.3764 c0.18602 0 0.31637 0.12844 0.31637 0.31484 c0 0.17801 -0.12961 0.30762 -0.31562 0.30762 l-8.0884 0 c-0.18602 0 -0.31562 -0.12961 -0.31562 -0.31602 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l1.4136 0 c0.6444 0 1.024 -0.4788 0.6512 -0.9556 l-4.4504 -6.488 l-5.3952 6.488 c-0.4172 0.508 0.0048048 0.95564 0.6 0.95564 l1.0372 0 c0.18602 0 0.31562 0.12961 0.31562 0.31602 c0 0.17801 -0.12961 0.30762 -0.31562 0.30762 l-4.6688 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.31602 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l0.2784 0 c0.7876 0 1.3408 -0.20121 1.9672 -0.95564 l5.8056 -7.0228 l-5.3808 -7.8588 c-0.4592 -0.6524 -1.1132 -0.95596 -1.8348 -0.95596 l-0.60398 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.31562 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l7.3584 0 c0.18641 0 0.31602 0.12961 0.31602 0.31602 c0 0.17801 -0.12961 0.30762 -0.31602 0.30762 l-0.68398 0 c-0.6128 0 -1.024 0.4156 -0.6512 0.95596 l4.2092 6.1868 l5.0296 -6.1868 c0.3948 -0.498 -0.036797 -0.95564 -0.6248 -0.95564 l-1.0372 0 c-0.18602 0 -0.31562 -0.12961 -0.31562 -0.31562 c0 -0.17801 0.12961 -0.30762 0.31562 -0.30762 l4.9612 0 c0.18641 0 0.31602 0.12961 0.31602 0.31602 c0 0.17801 -0.12961 0.30762 -0.31602 0.30762 l-0.64558 0 c-0.8084 0 -1.352 0.3284 -1.868 0.956 l-5.4392 6.7232 l5.6212 8.1584 c0.4908 0.684 1.0812 0.9556 1.8976 0.9556 l0.54078 0 z M56.162000000000006 21.655 c4.0928 0 7.8176 3.2272 7.8176 9.3112 c0 6.4372 -3.7292 9.3548 -7.8176 9.3548 c-3.2484 0 -5.6524 -2.3504 -6.7616 -5.7048 l0 14.636 c0 0.5144 0.38641 0.96404 0.9644 0.96404 l1.036 0 c0.18641 0 0.31602 0.12961 0.31602 0.30762 c0 0.18641 -0.12961 0.31602 -0.31602 0.31602 l-5.12 0 l0 -27.292 c0 -0.5144 -0.38602 -0.96404 -0.96404 -0.96404 l-1.036 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.30762 c0 -0.18641 0.12961 -0.31602 0.31602 -0.31602 l5.12 0 l0 5.4236 c1.076 -3.2884 3.4552 -5.7284 6.7612 -5.7284 z M55.275000000000006 39.4016 c3.1132 0 5.3548 -2.5184 5.3548 -8.4244 c0 -5.8828 -2.2416 -8.4016 -5.3548 -8.4016 c-3.0372 0 -5.8992 3.822 -5.8992 8.4332 c0 4.5764 2.8288 8.3928 5.8992 8.3928 z M77.653 40.25801 c-4.9268 0 -8.7656 -3.326 -8.7656 -9.33 c0 -5.7888 3.7312 -9.2728 8.7656 -9.2728 c4.8524 0 8.7572 3.1532 8.7572 9.2732 c0 6.004 -3.7808 9.3296 -8.7572 9.3296 z M77.631 39.62719 c3.1116 -0.031602 5.4456 -3.0332 5.4456 -8.6824 c0 -5.7504 -2.3684 -8.6512 -5.4236 -8.6512 c-3.0388 0 -5.432 2.9008 -5.432 8.6512 c0 5.4288 2.2564 8.6508 5.41 8.6824 z M102.09 21.719 c2.6564 0 3.6773 1.8025 3.6773 3.5985 c0 1.3684 -0.6868 2.618 -2.0964 2.618 c-0.9104 0 -1.658 -0.5904 -1.658 -1.618 c0 -1.1836 1.3008 -1.6636 1.3008 -2.5312 c0 -0.7116 -0.6332 -1.208 -1.7284 -1.208 c-2.7628 0 -5.4304 3.6868 -5.4304 9.6344 l0 6.2 c0 0.5144 0.38641 0.96404 0.9644 0.96404 l2.2056 0 c0.18602 0 0.31562 0.12961 0.31562 0.31602 c0 0.17801 -0.12961 0.30762 -0.31602 0.30762 l-8.2896 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.31602 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l1.036 0 c0.578 0 0.96404 -0.4496 0.96404 -0.96404 l0 -14.865 c0 -0.5144 -0.38602 -0.96404 -0.96404 -0.96404 l-1.036 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.30762 c0 -0.18641 0.12961 -0.31602 0.31602 -0.31602 l5.12 0 l0 5.9168 c1.068 -4.4752 3.7568 -6.158 5.9352 -6.158 z M121.268 36.094 c0.18602 0 0.29914 0.13797 0.29914 0.29957 c0 0.098008 -0.0816 0.4028 -0.25961 0.76404 c-0.524 1.1696 -1.8304 3.1008 -4.8992 3.1008 c-3.7352 0 -5.6248 -2.2868 -5.6248 -5.1476 l0 -12.527 l-2 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.31562 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l0.39719 0 c2.1848 0 4.0992 -1.476 4.0992 -5.116 c0 -0.18641 0.12961 -0.31602 0.31562 -0.31602 c0.17801 0 0.30762 0.12961 0.30762 0.31602 l0 5.116 l6.3132 0 c0.18602 0 0.31562 0.12961 0.31562 0.31602 c0 0.17801 -0.12961 0.30762 -0.31562 0.30762 l-6.3132 0 l0 12.527 c0 2.5736 1.2704 4.164 3.236 4.164 c1.8416 0 3.0692 -0.916 3.7508 -2.6624 c0.1284 -0.2952 0.1616 -0.5188 0.37801 -0.5188 z M154.90600000000003 39.3764 c0.18641 0 0.31508 0.12961 0.31508 0.30762 c0 0.18641 -0.12961 0.31602 -0.31602 0.31602 l-7.12 0 c-0.18602 0 -0.31562 -0.12961 -0.31562 -0.31602 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l1.036 0 c0.578 0 0.96404 -0.4496 0.96404 -0.96404 l0 -10.392 c0 -4.0236 -1.9984 -5.192 -3.6784 -5.192 c-3.5684 0 -6.0016 3.8096 -6.0016 8.2676 l0 7.316 c0 0.5144 0.38641 0.96404 0.9644 0.96404 l1.036 0 c0.18641 0 0.31602 0.12961 0.31602 0.30762 c0 0.18641 -0.12961 0.31602 -0.31602 0.31602 l-7.12 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.31602 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l1.036 0 c0.578 0 0.96404 -0.4496 0.96404 -0.96404 l0 -14.865 c0 -0.5144 -0.38602 -0.96404 -0.96404 -0.96404 l-1.036 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.30762 c0 -0.18641 0.12961 -0.31602 0.31602 -0.31602 l5.12 0 l0 5.5 c1.0316 -3.3048 3.5408 -5.7412 7.11 -5.7412 c3.44 0 5.6896 2.0164 5.6896 5.5724 l0 11.121 c0 0.5144 0.38641 0.96404 0.9644 0.96404 l1.036 0 z M178.93200000000002 39.3764 c0.18641 0 0.31594 0.12953 0.31594 0.30754 c0 0.18641 -0.12961 0.31602 -0.31602 0.31602 l-5.12 0 l0 -5.3836 c-1.1092 3.3544 -3.5132 5.7048 -6.7616 5.7048 c-4.0884 0 -7.8176 -2.9176 -7.8176 -9.3548 c0 -6.084 3.7252 -9.3112 7.818 -9.3112 c3.306 0 5.6852 2.44 6.7612 5.7284 l0 -5.4236 l3.12 0 l0 16.452 c0 0.5144 0.38602 0.96404 0.96404 0.96404 l1.036 0 z M167.93800000000002 39.40112 c3.0704 0 5.8992 -3.8168 5.8992 -8.3932 c0 -4.6112 -2.862 -8.4332 -5.8992 -8.4332 c-3.1132 0 -5.3548 2.5188 -5.3548 8.4016 c0 5.906 2.2416 8.4248 5.3548 8.4248 z M201.13300000000004 21.96 c0.18602 0 0.31562 0.12844 0.31562 0.31484 c0 0.17801 -0.12961 0.30762 -0.31562 0.30762 l-0.70078 0 c-0.6332 0 -1.0416 0.3132 -1.2816 0.8732 l-7.1036 16.544 l-0.73121 0 l-7.6704 -16.461 c-0.29801 -0.636 -0.676 -0.956 -1.3296 -0.956 l-0.60398 0 c-0.18602 0 -0.31562 -0.12961 -0.31562 -0.31562 c0 -0.17801 0.12961 -0.30762 0.31562 -0.30762 l7.4732 0 c0.18641 0 0.31602 0.12961 0.31602 0.31602 c0 0.17801 -0.12961 0.30762 -0.31602 0.30762 l-1.5296 0 c-0.458 0 -0.7084 0.23398 -0.7084 0.5652 c0 0.095588 0.04 0.22637 0.08922 0.35875 l5.8556 12.986 l5.5456 -12.954 c0.08078 -0.16558 0.08918 -0.29719 0.08918 -0.39359 c0 -0.3948 -0.3132 -0.562 -0.7404 -0.562 l-1.444 0 c-0.18602 0 -0.31562 -0.12961 -0.31562 -0.31562 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l4.7904 0 z M205.88160000000002 15.788 c0 -1.0068 0.8288 -1.8356 1.8676 -1.8356 c0.9904 0 1.8196 0.8288 1.8196 1.8356 c0 0.9904 -0.8292 1.8192 -1.8196 1.8192 c-1.0388 0 -1.8676 -0.8288 -1.8676 -1.8192 z M211.29680000000002 39.3764 c0.18641 0 0.31558 0.12969 0.31558 0.3077 c0 0.18641 -0.12961 0.31602 -0.31602 0.31602 l-7.12 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.31602 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l1.036 0 c0.578 0 0.96404 -0.4496 0.96404 -0.96404 l0 -14.865 c0 -0.5144 -0.38602 -0.96404 -0.96404 -0.96404 l-1.036 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.30762 c0 -0.18641 0.12961 -0.31602 0.31602 -0.31602 l5.12 0 l0 16.452 c0 0.5144 0.38641 0.96404 0.9644 0.96404 l1.036 0 z M230.26900000000003 21.96 l3.1191 -0.00039062 l0 19.816 c0 6.2412 -3.6884 9.4124 -9.6772 9.4124 c-4.894 0 -7.8664 -2.9612 -7.8664 -5.9004 c0 -1.5504 0.982 -2.258 1.876 -2.258 c0.774 0 1.4912 0.5392 1.4912 1.546 c0 1.342 -1.3916 1.3104 -1.3916 2.5836 c0 1.16 1.934 3.374 5.6816 3.374 c4.662 0 6.7668 -3.5876 6.7668 -7.5488 l0 -8.3684 c-1.1088 3.3544 -3.5128 5.7048 -6.7612 5.7048 c-4.0884 0 -7.8176 -2.9176 -7.8176 -9.3548 c0 -6.084 3.7252 -9.3112 7.818 -9.3112 c3.306 0 5.6852 2.44 6.7612 5.7284 l0 -5.4236 z M224.39400000000003 39.40084 c3.0704 0 5.8992 -3.8168 5.8992 -8.3932 c0 -4.6112 -2.862 -8.4332 -5.8992 -8.4332 c-3.1132 0 -5.3544 2.5188 -5.3544 8.4016 c0 5.906 2.2412 8.4248 5.3544 8.4248 z M259.20000000000005 39.3764 c0.18641 0 0.31594 0.12953 0.31594 0.30754 c0 0.18641 -0.12961 0.31602 -0.31602 0.31602 l-5.12 0 l0 -5.3836 c-1.1092 3.3544 -3.5132 5.7048 -6.7616 5.7048 c-4.0884 0 -7.8176 -2.9176 -7.8176 -9.3548 c0 -6.084 3.7252 -9.3112 7.818 -9.3112 c3.306 0 5.6852 2.44 6.7612 5.7284 l0 -5.4236 l3.12 0 l0 16.452 c0 0.5144 0.38602 0.96404 0.96404 0.96404 l1.036 0 z M248.20600000000005 39.40112 c3.0704 0 5.8992 -3.8168 5.8992 -8.3932 c0 -4.6112 -2.862 -8.4332 -5.8992 -8.4332 c-3.1132 0 -5.3548 2.5188 -5.3548 8.4016 c0 5.906 2.2416 8.4248 5.3548 8.4248 z M275.72400000000005 36.094 c0.18602 0 0.29914 0.13797 0.29914 0.29957 c0 0.098008 -0.0816 0.4028 -0.25961 0.76404 c-0.524 1.1696 -1.8304 3.1008 -4.8992 3.1008 c-3.7352 0 -5.6248 -2.2868 -5.6248 -5.1476 l0 -12.527 l-2 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.31562 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l0.39719 0 c2.1848 0 4.0992 -1.476 4.0992 -5.116 c0 -0.18641 0.12961 -0.31602 0.31562 -0.31602 c0.17801 0 0.30762 0.12961 0.30762 0.31602 l0 5.116 l6.3132 0 c0.18602 0 0.31562 0.12961 0.31562 0.31602 c0 0.17801 -0.12961 0.30762 -0.31562 0.30762 l-6.3132 0 l0 12.527 c0 2.5736 1.2704 4.164 3.236 4.164 c1.8416 0 3.0692 -0.916 3.7508 -2.6624 c0.1284 -0.2952 0.1616 -0.5188 0.37801 -0.5188 z M288.4200000000001 40.25801 c-4.9268 0 -8.7656 -3.326 -8.7656 -9.33 c0 -5.7888 3.7312 -9.2728 8.7656 -9.2728 c4.8524 0 8.7572 3.1532 8.7572 9.2732 c0 6.004 -3.7808 9.3296 -8.7572 9.3296 z M288.3980000000001 39.62719 c3.1116 -0.031602 5.4456 -3.0332 5.4456 -8.6824 c0 -5.7504 -2.3684 -8.6512 -5.4236 -8.6512 c-3.0388 0 -5.432 2.9008 -5.432 8.6512 c0 5.4288 2.2564 8.6508 5.41 8.6824 z M312.8570000000001 21.719 c2.6564 0 3.6773 1.8025 3.6773 3.5985 c0 1.3684 -0.6868 2.618 -2.0964 2.618 c-0.9104 0 -1.658 -0.5904 -1.658 -1.618 c0 -1.1836 1.3008 -1.6636 1.3008 -2.5312 c0 -0.7116 -0.6332 -1.208 -1.7284 -1.208 c-2.7628 0 -5.4304 3.6868 -5.4304 9.6344 l0 6.2 c0 0.5144 0.38641 0.96404 0.9644 0.96404 l2.2056 0 c0.18602 0 0.31562 0.12961 0.31562 0.31602 c0 0.17801 -0.12961 0.30762 -0.31602 0.30762 l-8.2896 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.31602 c0 -0.17801 0.12961 -0.30762 0.31602 -0.30762 l1.036 0 c0.578 0 0.96404 -0.4496 0.96404 -0.96404 l0 -14.865 c0 -0.5144 -0.38602 -0.96404 -0.96404 -0.96404 l-1.036 0 c-0.18641 0 -0.31602 -0.12961 -0.31602 -0.30762 c0 -0.18641 0.12961 -0.31602 0.31602 -0.31602 l5.12 0 l0 5.9168 c1.068 -4.4752 3.7568 -6.158 5.9352 -6.158 z"></path></g><g id="SvgjsG1047" transform="matrix(0.6049541407199616,0,0,0.6049541407199616,28.41658674823237,192.49126644536761)" fill="url(#SvgjsLinearGradient1059)"><path d="M15.582500000000001 17.8 l3 -9.6 l1.9 0 l3 9.6 l0.1 0 l3.1 -11.8 l1.5 0 l0 0.6 l-3.6 13.4 l-1.9 0 l-3.1 -9.8 l-0.1 0 l-3.1 9.8 l-1.9 0 l-3.6 -13.4 l0 -0.6 l1.5 0 l3.1 11.8 l0.1 0 z M35.965 16.9 l0 -7.8 c0 -1.9 1.4 -3.3 3.5 -3.3 l3.5 0 c2.1 0 3.5 1.4 3.5 3.3 l0 7.8 c0 1.9 -1.4 3.3 -3.5 3.3 l-3.5 0 c-2.1 0 -3.5 -1.4 -3.5 -3.3 z M44.965 16.9 l0 -7.8 c0 -1.1 -0.9 -2 -2 -2 l-3.5 0 c-1.1 0 -2 0.9 -2 2 l0 7.8 c0 1.1 0.9 2 2 2 l3.5 0 c1.1 0 2 -0.9 2 -2 z M57.447500000000005 20 l-1.5 0 l0 -14 l6.2 0 c2.1 0 3.5 1.4 3.5 3.3 l0 1.9 c0 2.8 -2.7 3.2 -2.7 3.2 l3.1 5 l0 0.6 l-1.5 0 l-3.1 -5.5 l-4 0 l0 5.5 z M62.14750000000001 7.300000000000001 l-4.7 0 l0 5.9 l4.7 0 c1.1 0 2 -0.9 2 -2 l0 -1.9 c0 -1.1 -0.9 -2 -2 -2 z M74.93 6 l1.5 0 l0 12.7 l7.5 0 l0 1.3 l-9 0 l0 -14 z M92.01250000000002 20 l0 -14 l6.4 0 c2.1 0 3.5 1.4 3.5 3.3 l0 7.4 c0 1.9 -1.4 3.3 -3.5 3.3 l-6.4 0 z M93.51250000000002 7.300000000000001 l0 11.4 l4.9 0 c1.1 0 2 -0.9 2 -2 l0 -7.4 c0 -1.1 -0.9 -2 -2 -2 l-4.9 0 z M125.87750000000001 7.300000000000001 l0 12.7 l-1.5 0 l0 -12.7 l-4.4 0 l0 -1.3 l10.3 0 l0 0.9 l-0.4 0.4 l-4 0 z M139.86 20 l-1.5 0 l0 -14 l6.2 0 c2.1 0 3.5 1.4 3.5 3.3 l0 1.9 c0 2.8 -2.7 3.2 -2.7 3.2 l3.1 5 l0 0.6 l-1.5 0 l-3.1 -5.5 l-4 0 l0 5.5 z M144.56 7.300000000000001 l-4.7 0 l0 5.9 l4.7 0 c1.1 0 2 -0.9 2 -2 l0 -1.9 c0 -1.1 -0.9 -2 -2 -2 z M158.34250000000003 16.4 l-1.2 3.6 l-1.5 0 l0 -0.6 l4.9 -13.4 l1.7 0 l4.9 13.4 l0 0.6 l-1.5 0 l-1.2 -3.6 l-6.1 0 z M163.94250000000002 15.1 l-2.5 -7.3 l-0.1 0 l-2.5 7.3 l5.1 0 z M175.32500000000005 20 l0 -14 l6.4 0 c2.1 0 3.5 1.4 3.5 3.3 l0 7.4 c0 1.9 -1.4 3.3 -3.5 3.3 l-6.4 0 z M176.82500000000005 7.300000000000001 l0 11.4 l4.9 0 c1.1 0 2 -0.9 2 -2 l0 -7.4 c0 -1.1 -0.9 -2 -2 -2 l-4.9 0 z M194.70750000000004 20 l0 -14 l9.1 0 l0 0.9 l-0.4 0.4 l-7.2 0 l0 4.9 l5.7 0 l0 1.3 l-5.7 0 l0 5.2 l7.6 0 l0 1.3 l-9.1 0 z M225.87250000000006 17.8 l3 -9.6 l1.9 0 l3 9.6 l0.1 0 l3.1 -11.8 l1.5 0 l0 0.6 l-3.6 13.4 l-1.9 0 l-3.1 -9.8 l-0.1 0 l-3.1 9.8 l-1.9 0 l-3.6 -13.4 l0 -0.6 l1.5 0 l3.1 11.8 l0.1 0 z M248.25500000000005 20 l-1.5 0 l0 -14 l1.5 0 l0 14 z M262.23750000000007 7.300000000000001 l0 12.7 l-1.5 0 l0 -12.7 l-4.4 0 l0 -1.3 l10.3 0 l0 0.9 l-0.4 0.4 l-4 0 z M283.12 6 l1.5 0 l0 14 l-1.5 0 l0 -6.5 l-6.9 0 l0 6.5 l-1.5 0 l0 -14 l1.5 0 l0 6.2 l6.9 0 l0 -6.2 z M314.08500000000004 18.7 l0 1.3 l-5.8 0 c-2.1 0 -3.5 -1.4 -3.5 -3.3 l0 -7.4 c0 -1.9 1.4 -3.3 3.5 -3.3 l5.8 0 l0 0.9 l-0.4 0.4 l-5.4 0 c-1.1 0 -2 0.9 -2 2 l0 7.4 c0 1.1 0.9 2 2 2 l5.8 0 z M322.2675000000001 16.9 l0 -7.8 c0 -1.9 1.4 -3.3 3.5 -3.3 l3.5 0 c2.1 0 3.5 1.4 3.5 3.3 l0 7.8 c0 1.9 -1.4 3.3 -3.5 3.3 l-3.5 0 c-2.1 0 -3.5 -1.4 -3.5 -3.3 z M331.2675000000001 16.9 l0 -7.8 c0 -1.1 -0.9 -2 -2 -2 l-3.5 0 c-1.1 0 -2 0.9 -2 2 l0 7.8 c0 1.1 0.9 2 2 2 l3.5 0 c1.1 0 2 -0.9 2 -2 z M350.45000000000005 20 l-6.8 -11.5 l-0.1 0 l0.2 2.6 l0 8.9 l-1.5 0 l0 -14 l1.6 0 l6.8 11.5 l0.1 0 l-0.2 -2.6 l0 -8.9 l1.5 0 l0 14 l-1.6 0 z M363.43250000000006 20 l-1.5 0 l0 -14 l9.1 0 l0 0.9 l-0.4 0.4 l-7.2 0 l0 5.6 l5.6 0 l0 1.3 l-5.6 0 l0 5.8 z M380.61500000000007 20 l-1.5 0 l0 -14 l1.5 0 l0 14 z M390.49750000000006 20 l0 -14 l6.4 0 c2.1 0 3.5 1.4 3.5 3.3 l0 7.4 c0 1.9 -1.4 3.3 -3.5 3.3 l-6.4 0 z M391.99750000000006 7.300000000000001 l0 11.4 l4.9 0 c1.1 0 2 -0.9 2 -2 l0 -7.4 c0 -1.1 -0.9 -2 -2 -2 l-4.9 0 z M409.88000000000005 20 l0 -14 l9.1 0 l0 0.9 l-0.4 0.4 l-7.2 0 l0 4.9 l5.7 0 l0 1.3 l-5.7 0 l0 5.2 l7.6 0 l0 1.3 l-9.1 0 z M435.6625 20 l-6.8 -11.5 l-0.1 0 l0.2 2.6 l0 8.9 l-1.5 0 l0 -14 l1.6 0 l6.8 11.5 l0.1 0 l-0.2 -2.6 l0 -8.9 l1.5 0 l0 14 l-1.6 0 z M456.045 18.7 l0 1.3 l-5.8 0 c-2.1 0 -3.5 -1.4 -3.5 -3.3 l0 -7.4 c0 -1.9 1.4 -3.3 3.5 -3.3 l5.8 0 l0 0.9 l-0.4 0.4 l-5.4 0 c-1.1 0 -2 0.9 -2 2 l0 7.4 c0 1.1 0.9 2 2 2 l5.8 0 z M464.62750000000005 20 l0 -14 l9.1 0 l0 0.9 l-0.4 0.4 l-7.2 0 l0 4.9 l5.7 0 l0 1.3 l-5.7 0 l0 5.2 l7.6 0 l0 1.3 l-9.1 0 z"></path></g>
            </g>
          </svg>
        </Link>

        <nav className="footer__nav">
        <motion.ul className='footer__nav-menu menu__list'>
            <motion.li className="menu__item">
                <Link to='/services' className="menu__list-item">Services</Link>
            </motion.li>

            <motion.li className="menu__item">
                <Link to='/about' className="menu__list-item">About</Link>
            </motion.li>

            <motion.li className="menu__item">
                <Link to='/team' className="menu__list-item">Team</Link>
            </motion.li>

            <motion.li className="menu__item">
                <Link to='/contacts' className="menu__list-item">Contacts</Link>
            </motion.li>
        </motion.ul>
        </nav>

        <div className="footer__contacts">
          <h4 className="footer__contacts-title">Contacts:</h4>
          <p className="footer__contacts-item">tel:
            <a href="tel:+380954220414">
              +380954220414</a> </p>
          <p className="footer__contacts-item">e-mail: <a href="mailto:export.navigator.org@gmail.com">
            export.navigator.org@gmail.com
          </a>
          </p>
          <p className="footer__contacts-item">adress: district 53, office 1</p>
        </div>

        <div className="footer__socials">
          <a href="#" target='_blank' className="footer__socials-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" /><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z" /></svg>

          </a>
          <a href="#" target='_blank' className="footer__socials-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z" /><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05" /><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07" /><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z" /></svg>
          </a>
          {/* <a href="#" target='_blank' className="socials__item"></a> */}
        </div>
      </div>
    </footer>
  )
}