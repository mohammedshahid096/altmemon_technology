import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
  ease = "power1.out",
}) {
  const ref = useRef(null);
  const animationRef = useRef(null);

  const getDecimalPlaces = (num) => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatNumber = (value) => {
    const hasDecimals = maxDecimals > 0;
    const options = {
      useGrouping: !!separator,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0,
    };

    const formattedNumber = Intl.NumberFormat("en-US", options).format(value);
    return separator
      ? formattedNumber.replace(/,/g, separator)
      : formattedNumber;
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatNumber(direction === "down" ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (!startWhen) return;

    // Clear any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const startValue = direction === "down" ? to : from;
    const endValue = direction === "down" ? from : to;

    // Set initial value
    gsap.set(ref.current, {
      textContent: formatNumber(startValue),
    });

    // Create animation
    animationRef.current = gsap.to(ref.current, {
      textContent: endValue,
      duration,
      delay,
      ease,
      onStart: () => {
        if (typeof onStart === "function") onStart();
      },
      onComplete: () => {
        if (typeof onEnd === "function") onEnd();
      },
      onUpdate: function () {
        // Format the number during the animation
        const currentValue = parseFloat(this.targets()[0].textContent);
        this.targets()[0].textContent = formatNumber(currentValue);
      },
      snap: { textContent: 1 / Math.pow(10, maxDecimals) },
    });

    // Clean up animation on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [to, from, direction, delay, duration, startWhen, onStart, onEnd, ease]);

  return <span className={className} ref={ref} />;
}
