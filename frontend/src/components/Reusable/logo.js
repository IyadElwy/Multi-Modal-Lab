import Image from "next/image";
import styles from "../../styles/components/Reusable/logo.module.css";

export default function Logo({
  spin, height, width, style = {},
}) {
  return (
    <Image
      style={style}
      className={spin ? styles.logoSpin : ""}
      src="/images/logo_3.svg"
      height={height}
      width={width}
      alt="Logo"
    />
  );
}
