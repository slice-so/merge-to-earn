import { useAppContext } from "@components/ui/context"

const Logo = ({ single = false, ...props }) => {
  const { color1, color2 } = useAppContext()

  const size = props.size || "w-8 md:w-10"
  const margin = props.margin || "mt-1 ml-1.5"

  return (
    <div className={`relative ${size} group`} id="spin-logo">
      <svg
        viewBox="0 0 493 487"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${props.spin ? "spin-el" : ""} relative z-10 ${
          props.interactive ? "peer" : ""
        } ${props.className ? props.className : ""}`}
      >
        <path
          d="M19.4493 253.5L198.18 20.4351C199.508 18.7037 201.564 17.7213 203.742 17.8405C218.716 18.6598 280.396 23.0921 347.587 42.9536C410.737 61.6203 456.039 92.2932 470.503 102.893C473.671 105.215 475.435 108.917 475.435 112.845V317.564C475.435 320.488 473.552 323.08 470.772 323.984L26.8424 468.344C22.4803 469.762 18.004 466.511 18.004 461.924V257.759C18.004 256.219 18.512 254.722 19.4493 253.5Z"
          fill="black"
        />
        <path
          d="M473 107.5L21 254.5M347.587 42.9536C410.737 61.6203 456.039 92.2932 470.503 102.893C473.671 105.215 475.435 108.917 475.435 112.845V317.564C475.435 320.488 473.552 323.08 470.772 323.984L26.8424 468.344C22.4803 469.762 18.004 466.511 18.004 461.924V257.759C18.004 256.219 18.512 254.722 19.4493 253.5L198.18 20.4351C199.508 18.7037 201.564 17.7213 203.742 17.8405C218.716 18.6598 280.396 23.0921 347.587 42.9536Z"
          stroke="white"
          strokeWidth="35"
        />
      </svg>
      {!single && (
        <svg
          viewBox="0 0 493 477"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            props.spin
              ? "spin-el drop-shadow-random-strong"
              : "drop-shadow-random"
          } space-y-60 absolute top-0 left-0 ${size} ${margin} transition-all duration-150 peer-hover:mt-0 peer-hover:ml-0 peer-hover:mr-0`}
        >
          <path
            d="M19.4533 253.562L198.04 20.6852C199.368 18.9538 201.423 17.9714 203.602 18.0906C218.566 18.9095 280.176 23.3379 347.29 43.1766C414.413 63.0181 461.351 96.4391 472.468 104.832C474.096 106.061 475 107.974 475 110.014V307.765C475 310.689 473.118 313.281 470.337 314.185L26.8978 458.385C22.5357 459.804 18.0594 456.552 18.0594 451.966V257.67C18.0594 256.185 18.5494 254.741 19.4533 253.562Z"
            fill="url(#paint0_linear)"
            stroke="white"
            strokeWidth="35"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="34.1785"
              y1="34.6555"
              x2="541.02"
              y2="151.721"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={color1[0]} />
              <stop offset="1" stopColor={color2[0]} />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  )
}

export default Logo
