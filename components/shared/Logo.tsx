import { cn } from "@/lib/utils";
import React from "react";
interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(" fill-zinc-800", className)}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M32.1181 31.9998C31.7941 31.9998 31.5143 31.8813 31.2786 31.6442C31.043 31.4072 30.9252 31.1257 30.9252 30.7998V2.08867C30.9252 1.76275 31.043 1.48126 31.2786 1.24423C31.5143 1.00719 31.7941 0.888672 32.1181 0.888672H41.1316C41.4556 0.888672 41.7354 1.00719 41.9711 1.24423C42.2067 1.48126 42.3245 1.76275 42.3245 2.08867V30.7998C42.3245 31.1257 42.2067 31.4072 41.9711 31.6442C41.7354 31.8813 41.4556 31.9998 41.1316 31.9998H32.1181Z"
        />
        <path
          id="Vector_2"
          d="M1.19296 31.5564C0.868945 31.5564 0.589115 31.4379 0.353469 31.2009C0.117823 30.9638 0 30.6823 0 30.3564V1.64531C0 1.31939 0.117823 1.03791 0.353469 0.800868C0.589115 0.563831 0.868945 0.445312 1.19296 0.445312H9.63203C9.95605 0.445312 10.2359 0.563831 10.4715 0.800868C10.7072 1.03791 10.825 1.31939 10.825 1.64531V10.4453L15.8177 1.42309C15.965 1.18605 16.1761 0.963831 16.4609 0.756424C16.7407 0.549016 17.1138 0.445312 17.5851 0.445312H27.3497C27.6148 0.445312 27.8406 0.544078 28.037 0.731732C28.2284 0.924325 28.3217 1.15149 28.3217 1.42309C28.3217 1.60087 28.2775 1.76383 28.1892 1.91198L20.2361 15.3342L28.9403 30.0898C29.0286 30.2083 29.0728 30.3712 29.0728 30.5786C29.0728 30.8453 28.9746 31.0774 28.7881 31.27C28.5966 31.4626 28.3708 31.5564 28.1008 31.5564H18.0269C17.4378 31.5564 17.0009 31.4181 16.726 31.1317C16.4461 30.8502 16.2743 30.6527 16.2154 30.5342L10.825 20.8453V30.3564C10.825 30.6823 10.7072 30.9638 10.4715 31.2009C10.2359 31.4379 9.95605 31.5564 9.63203 31.5564H1.19296Z"
        />
        <path
          id="Vector_3"
          d="M58.8231 32C55.9954 32 53.4916 31.5852 51.3119 30.7556C49.1322 29.9259 47.3992 28.6222 46.1179 26.8444C44.8365 25.0667 44.1345 22.7704 44.0216 19.9556C43.9921 18.7407 43.9774 17.437 43.9774 16.0444C43.9774 14.6519 43.9921 13.3185 44.0216 12.0444C44.1394 9.28889 44.8513 7.02222 46.1621 5.24444C47.4728 3.46667 49.2254 2.14815 51.4199 1.28889C53.6144 0.42963 56.0837 0 58.8231 0C60.7083 0 62.5247 0.217284 64.2823 0.641975C66.0349 1.0716 67.6157 1.74815 69.0295 2.66667C70.4434 3.58519 71.5676 4.76543 72.4071 6.19753C73.2466 7.63457 73.6786 9.36296 73.713 11.3778C73.713 11.6444 73.6148 11.8765 73.4283 12.0691C73.2368 12.2617 73.011 12.3556 72.741 12.3556H63.7275C63.2562 12.3556 62.9076 12.2617 62.6867 12.0691C62.4658 11.8765 62.2694 11.5457 62.0927 11.0667C61.7687 10.1185 61.3269 9.48148 60.7672 9.15556C60.2075 8.82963 59.5448 8.66667 58.7789 8.66667C57.8069 8.66667 57.0312 8.92839 56.4568 9.44691C55.8825 9.96543 55.5633 10.9086 55.5044 12.2667C55.4161 14.6963 55.4161 17.1852 55.5044 19.7333C55.5633 21.0963 55.8825 22.0395 56.4568 22.5531C57.0312 23.0716 57.8069 23.3333 58.7789 23.3333C59.5448 23.3333 60.2124 23.1556 60.7868 22.8C61.3612 22.4444 61.7932 21.8222 62.0927 20.9333C62.24 20.4296 62.4314 20.0889 62.6671 19.9111C62.9027 19.7333 63.2562 19.6444 63.7275 19.6444H72.741C73.0061 19.6444 73.2319 19.7432 73.4283 19.9309C73.6197 20.1235 73.713 20.3506 73.713 20.6222C73.6835 22.637 73.2515 24.3654 72.4071 25.8025C71.5676 27.2395 70.4434 28.4198 69.0295 29.3333C67.6157 30.2519 66.03 30.9284 64.2823 31.3531C62.5247 31.7827 60.7083 32 58.8231 32Z"
        />
        <path
          id="Vector_4"
          d="M99.8158 30.0898L91.1116 15.3342L99.0646 1.91198C99.153 1.76383 99.1972 1.60087 99.1972 1.42309C99.1972 1.15642 99.1039 0.929263 98.9125 0.736671C98.721 0.544078 98.4903 0.445312 98.2252 0.445312H88.4606C87.9893 0.445312 87.6162 0.549016 87.3363 0.756424C87.0565 0.963831 86.8405 1.18605 86.6932 1.42309L82.2749 9.40827L81.7005 10.4453V1.64531C81.7005 1.31939 81.5827 1.03791 81.347 0.800868C81.1114 0.563831 80.8315 0.445312 80.5075 0.445312H72.0685C71.7444 0.445312 71.4646 0.563831 71.229 0.800868C71.1995 0.835436 71.1701 0.865066 71.1406 0.899633C71.1111 0.934201 71.0866 0.968769 71.067 1.00334C71.0424 1.03791 71.0228 1.07741 71.0031 1.11198C70.9835 1.15149 70.9688 1.18605 70.954 1.22556C72.4759 2.27741 73.7229 3.61074 74.6507 5.20087C75.6571 6.92926 76.1873 8.9984 76.2217 11.349C76.2217 12.1638 75.9173 12.9046 75.3626 13.4675C74.8029 14.0256 74.0665 14.3317 73.286 14.3317H70.8755V17.67H73.286C74.0665 17.67 74.8029 17.9762 75.3577 18.5342C75.9173 19.1021 76.2217 19.8428 76.2217 20.6231C76.1873 23.0033 75.6571 25.0725 74.6507 26.8009C73.7229 28.391 72.4759 29.7243 70.954 30.7762C70.9688 30.8157 70.9835 30.8552 71.0031 30.8898C71.0424 30.9638 71.0866 31.0379 71.1406 31.1021C71.1701 31.1367 71.1995 31.1663 71.229 31.2009C71.4646 31.4379 71.7444 31.5564 72.0685 31.5564H80.5075C80.8315 31.5564 81.1114 31.4379 81.347 31.2009C81.5827 30.9638 81.7005 30.6823 81.7005 30.3564V20.8453L82.2749 21.8774L87.0909 30.5342C87.1498 30.6527 87.3216 30.8552 87.6015 31.1367C87.8813 31.4181 88.3133 31.5564 88.9024 31.5564H98.9763C99.2414 31.5564 99.4721 31.4626 99.6636 31.27C99.855 31.0774 99.9483 30.8453 99.9483 30.5786C99.9483 30.3712 99.9041 30.2083 99.8158 30.0898Z"
        />
        <path
          id="Vector_5"
          d="M113.331 32C110.061 32 107.366 31.5556 105.245 30.6667C103.125 29.7778 101.534 28.6074 100.474 27.1556C99.4131 25.7037 98.8535 24.163 98.7946 22.5333C98.7946 22.2667 98.8878 22.0395 99.0793 21.842C99.2708 21.6494 99.4966 21.5556 99.7617 21.5556H108.157C108.628 21.5556 108.986 21.6198 109.242 21.7531C109.492 21.8864 109.762 22.0741 110.061 22.3062C110.356 22.5136 110.655 22.7012 110.965 22.8593C111.274 23.0222 111.627 23.1407 112.025 23.2148C112.423 23.2889 112.855 23.3284 113.331 23.3284C114.332 23.3284 115.133 23.2148 115.737 22.9926C116.34 22.7704 116.645 22.4691 116.645 22.084C116.645 21.7284 116.473 21.4321 116.134 21.1951C115.795 20.958 115.211 20.7457 114.386 20.5531C113.562 20.3605 112.413 20.1728 110.94 20C108.613 19.6741 106.595 19.1259 104.887 18.3556C103.179 17.5852 101.858 16.5284 100.935 15.1753C100.007 13.8272 99.5457 12.1728 99.5457 10.2173C99.5457 8.20247 100.11 6.42469 101.244 4.88395C102.378 3.34321 103.954 2.14321 105.972 1.28395C107.99 0.42963 110.341 0 113.022 0C115.231 0 117.19 0.28642 118.898 0.864197C120.607 1.44198 122.05 2.19753 123.228 3.13086C124.406 4.0642 125.305 5.06667 125.923 6.13333C126.542 7.2 126.866 8.22222 126.895 9.2C126.895 9.46667 126.797 9.69876 126.611 9.89136C126.419 10.084 126.203 10.1778 125.967 10.1778H117.131C116.718 10.1778 116.385 10.1185 116.139 10C115.889 9.88148 115.629 9.7037 115.363 9.46667C115.216 9.31852 114.941 9.15062 114.544 8.95309C114.146 8.76049 113.64 8.66667 113.017 8.66667C112.28 8.66667 111.74 8.78025 111.407 9.00247C111.068 9.22469 110.896 9.53086 110.896 9.91111C110.896 10.1778 111.029 10.4296 111.294 10.6667C111.559 10.9037 112.045 11.1111 112.752 11.2889C113.459 11.4667 114.475 11.6444 115.8 11.8222C118.746 12.1778 121.107 12.7506 122.894 13.5309C124.676 14.316 125.972 15.363 126.782 16.6667C127.592 17.9704 128 19.5852 128 21.5111C128 23.6741 127.357 25.5407 126.075 27.1111C124.794 28.6815 123.046 29.8864 120.837 30.7309C118.628 31.5753 116.129 32 113.331 32Z"
        />
      </g>
    </svg>
  );
};

export default Logo;
